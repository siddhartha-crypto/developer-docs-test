#include <iostream>
#include <iomanip>
#include <vector>
#include <string>
#include <map>
#include <sstream>
#include <fstream>
#include <string> 
#include <algorithm> // std::count for instances of char in string
#include <iterator> 
#include <cstddef>

#include <Doxybook/Doxygen.hpp>
#include <Doxybook/Exception.hpp>
#include <Doxybook/JsonConverter.hpp>
#include <Doxybook/TextMarkdownPrinter.hpp>
#include <Doxybook/TextPlainPrinter.hpp>
#include <Doxybook/Config.hpp>
#include <Doxybook/Enums.hpp>
#include <Doxybook/Generator.hpp>
#include <Doxybook/Log.hpp>
#include <Doxybook/Node.hpp>
#include <Doxybook/Path.hpp>
#include <Doxybook/Renderer.hpp>
#include <Doxybook/Template.hpp>
#include <Doxybook/TemplateLoader.hpp>
#include <Doxybook/TemplateDefaultLoader.hpp>
#include <Doxybook/Utils.hpp>
#include <Doxybook/Xml.hpp>
#include <Doxybook/XmlTextParser.hpp>

using std::string;
using std::vector;
using std::cout;
using std::endl;
using std::ofstream;
using std::ifstream;
using std::istringstream;
using std::count;

using namespace Doxybook2;

// A custom function to recurisvely create a list of refids for the source code
nlohmann::json createIndex(const Node& parent) {

    // Create a default result{} object
    nlohmann::json result{};
    for (const auto& child : parent.getChildren()) {
    if (child->getKind() == Kind::NAMESPACE) {
        auto test = createIndex(*child);
            if (!test.empty()) {
            result[child->getName()] = test;
            }
        } else if (child->getKind() == Kind::CLASS || child->getKind() == Kind::STRUCT){
            result[child->getName()] = child->getRefid();
        }
    }
    return result;
}

// A custom function to recurisvely create a list of refids for the source code
void createMarkdownFile(std::ofstream& file, const vector<string> fileNames) {

    string test;

    for (auto name : fileNames) {

        file << string(4, ' ') << "[" << endl;
        file
            << string(6, ' ') 
            << "\"" 
            << "/basic-docs/antara-gaming-sdk/"
            << name
            << ".md"
            << "\"," << endl;
        file
            << string(6, ' ') 
            << "\"" 
            << name
            << "\"," << endl;
        file 
            << string(4, ' ') << "]," << endl; 
    }

} 

void createNamespaceFiles(ofstream& file, int hashCount, const Node& parent, vector<string>& fileNames) {
    int numChildren = (int)parent.getChildren().size();
    bool childHasValidType = false;

    if (numChildren > 0) {
        for (const auto& child : parent.getChildren()) {
            if (child->getKind() == Kind::NAMESPACE || child->getKind() == Kind::STRUCT || child->getKind() == Kind::CLASS) {
                childHasValidType = true;
            }
        }
    }

    string parentName = parent.getName();

    if (!childHasValidType) {
        return;
    } else if (parentName == "antara::gaming" || childHasValidType && parentName.find("antara::gaming") == std::string::npos) {
        for (auto child : parent.getChildren()) {
            createNamespaceFiles(file, hashCount, *child, fileNames);
        }
        return;
    }


    if (parentName.find('@') != std::string::npos) {
        return;
    }

    // TODO?: Add instructions to add parent content to output stream?  
    string parentKind = Doxybook2::toStr(parent.getKind()); 
    string filename = "";

    for (const auto& child : parent.getChildren()) {

        // Determine if we are on the main antara::gaming::CLASS level
        // or if we are on a lower level
        // If on main level, create new file stream and begin saving all values to it
        // If lower, do not create new file stream, but begin saving all values to existing filestream 
        if (count(parentName.begin(), parentName.end(), ':') == 4) {

            // Create the filename for the output stream and save it to the fileNames vector
            size_t lastInstance = parentName.find_last_of(':');

            string tempFilename = "";
            tempFilename = parentName.substr((int)(++lastInstance), (int)parentName.size());
            string prefix = "../../../docs/basic-docs/antara-gaming-sdk/";
            tempFilename = prefix + tempFilename + ".md";

            if (tempFilename != filename) {

                filename = tempFilename;
                // Create the new output stream
                ofstream newFout(filename);

                if (!newFout) {
                    cout << "Error creating output file" << endl;
                    exit(0);
                }

                // Set the main "file" stream to the new output stream
                file = std::move(newFout); 

                string someName = "";
                lastInstance = filename.find_last_of('/');
                size_t mdLocation = filename.find(".md");
                someName = filename.substr(lastInstance + 1, mdLocation - 1);
                someName = someName.substr(0, someName.size() - 4);
                fileNames.push_back(someName);
            }

        }

        // Save content from relevant file to the current output stream 
        string childName = child->getName();
        if (childName.find('@') != std::string::npos || childName == "@") continue;

        string childKindStr;
        switch (child->getKind()) {
            case Kind::NAMESPACE:
                childKindStr = "Namespaces/";
                break;
            case Kind::CLASS:
                childKindStr = "Classes/";
                break;
            case Kind::STRUCT:
                childKindStr = "Classes/";
                break;
            default:
                // If this is not the type of node we are searching for
                // End this cycle of the for() loop so as not to print
                // to the output stream content that is not relevant
                // TODO: ?
                continue;
        }

        // Read in content from existing file
        // TODO: Need an input directory declared somewhere in a config file...
        string fileLocation = "../../outputDir/";
        string fileUrl = child->getRefid();
        fileLocation = fileLocation + childKindStr + fileUrl + ".md";
        ifstream fin(fileLocation); 

        if (!fin) {
            cout << "Error reading input file: " << fileLocation << endl;
            exit(0);
        }

        // Note the name of the file from which everything is drawn
        file << "<!--" << endl;
        file << "  New File: " << fileLocation << endl;
        file << "  Topic name: " << child->getName() << endl;
        file << "  Hash count: " << hashCount << endl;
        file << "-->" << endl;

        // TODO: Add hashes to name
        // TODO: Create initial layout for everything, if the templates can't handle it already
        string inputLine;
        while (true) {
            getline(fin, inputLine);

            file << inputLine << endl;

            if (fin.eof()) {
                break;
            }
        }

        file << "\n" << endl;

        auto test = createIndex(*child);

        if (!test.empty() && (child->getKind() == Kind::NAMESPACE || child->getKind() == Kind::CLASS || child->getKind() == Kind::STRUCT || child->getKind() == Kind::INDEX)) { 
            createNamespaceFiles(file, ++hashCount, *child, fileNames);
        } 
    }
}

int main()
{
    using namespace Doxybook2;

    // Where the XML files are stored
    std::string inputDir = "../../submodules/antara-gaming-sdk/build/docs/doxygen/xml";

    Config config;
    config.baseUrl = "/";
    config.copyImages = false;

    Doxygen doxygen(config);

    TextPlainPrinter plainPrinter(config, doxygen);
    TextMarkdownPrinter markdownPrinter(config, inputDir, doxygen);


    // Load and parse the XML files, may take few seconds
    doxygen.load(inputDir);
    doxygen.finalize(plainPrinter, markdownPrinter);

    // Get the index, this holds hierarchical data.
    // If a class belongs to a namespace, the index will hold the namespace object,
    // but the namespace object will hold the class, not the index.
    const Node& index = doxygen.getIndex();

    // nlohmann::json classRefids = createIndex(index);

    // cout << classRefids.dump() << endl;

    // // Recursive find function via refid. The refid is from the XML files.
    // const auto mouseButtonPressed = index.find("structantara_1_1gaming_1_1event_1_1mouse__button__pressed_1a4496912647bb2a56ed1f2b92b17a240d");

    // string mouseButtonPressedPrint = mouseButtonPressed.print();
    string outputFilename = "../../../docs/.vuepress/gaming-sdk-sidebar.js";

    ofstream fout(outputFilename);

    if (!fout) {
        cout << "Error opening file" << endl;
        exit(0);
    }

    // Create Namespace Files
    vector<string> fileNames;
    createNamespaceFiles(fout, 0, index, fileNames);

    fout.close();

    ofstream fout2(outputFilename);

    if (!fout2) {
        cout << "Error opening file" << endl;
        exit(0);
    }

    // Create Sidebar Navigation File
    fout2 << "var gamingSidebar = {" << endl;
    fout2 << "  title: \"Antara Gaming SDK\"," << endl;
    fout2 << "  collapsible: true," << endl;
    fout2 << "  children: [" << endl; 

    createMarkdownFile(fout2, fileNames);

    fout2 << " ]" << endl;
    fout2 << "};" << endl;
    fout2 << "module.exports = gamingSidebar;";


    return 0;
}
