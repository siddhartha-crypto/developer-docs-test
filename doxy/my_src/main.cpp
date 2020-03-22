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
void createMarkdownFile(std::ofstream& os, int indent, const Node& parent, int depth, vector<string> fileNames) {

    ++depth;

    if (depth > 3) return;

    string parentKind = Doxybook2::toStr(parent.getKind());

    string parentName = parent.getName();

    if (parentName.find('@') != std::string::npos) {
        return;
    }

    int numChildren = (int)parent.getChildren().size();
    bool childHasValidType = false;

    if (numChildren > 0) {
        for (const auto& child : parent.getChildren()) {
            if (child->getKind() == Kind::NAMESPACE || child->getKind() == Kind::STRUCT || child->getKind() == Kind::CLASS) {
                childHasValidType = true;
            }
        }
    }

    if (childHasValidType && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT)) {
        os << string(indent*2, ' ') << "[" << endl;
    }

    for (const auto& child : parent.getChildren()) {
        string childName = child->getName();
        if (childName.find('@') != std::string::npos) return;

        string curr = "";
        if (child->getKind() == Kind::NAMESPACE) {
            curr += "Namespace: ";
        } else if (child->getKind() == Kind::CLASS) {
            curr += "Class:     "; 
        } else if (child->getKind() == Kind::STRUCT) {
            curr += "Struct:    "; 
        }

        if (child->getKind() == Kind::NAMESPACE || child->getKind() == Kind::CLASS || child->getKind() == Kind::STRUCT){
            string childKindStr;
            switch (child-> getKind()) {
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
                    "This error should not occur. Please contact the developer.";
                    exit(0);
            }

            os << string(indent*2 + 2, ' ') << "// " << curr << endl;
            os 
                << string(indent*2 + 2, ' ') << "[" << endl;
            os
                << string(indent*2 + 4, ' ') 
                << "\"" << "/basic-docs/antara-gaming-sdk/"
                << childKindStr
                << child->getRefid() 
                << "\"," << endl;
            os
                << string(indent*2 + 4, ' ') 
                << "\"" << child->getName() 
                << "\"," << endl;
            os 
                << string(indent*2 + 2, ' ') << "]," << endl; 
        } 

        auto test = createIndex(*child);

        // Something is happening in here. This is coming up false, but later
        if (!test.empty() && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT || parent.getKind() == Kind::INDEX)) { 
            
            if (parentName == "") {
                parentName = "Blank Name";
            }

            if (depth > 2) {
                os << string(indent*2 + 2, ' ') << "]" << endl;
                return;
            }
            os << string(indent*2 + 2, ' ') << "{" << endl;
                os << string(indent*2 + 4, ' ') << "Title: \"" << parentName << "\"," << endl;
                os << string(indent*2 + 4, ' ') << "collapsible: true," << endl;
                os << string(indent*2 + 4, ' ') << "children:" << endl; 
        }

        if (!test.empty() && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT || parent.getKind() == Kind::INDEX)) { 
            createMarkdownFile(os, indent + 4, *child, depth, fileNames);
        } else if (!test.empty()) {
            os << string(indent*2 + 4, ' ') << "// Parent Kind is: " << parentKind << endl;
        }

        if (!test.empty() && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT || parent.getKind() == Kind::INDEX)) { 
            
            os << string(indent*2 + 2, ' ') << "}," << endl;
        }
    }

    if (childHasValidType && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT)) {
        os << string(indent*2, ' ') << "]," << endl;
    }

} 

void createNamespaceFiles(ofstream& file, int hashCount, const Node& parent, vector<string> fileNames) {
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

    string parentKind = Doxybook2::toStr(parent.getKind()); 

    for (const auto& child : parent.getChildren()) {

        // Determine if we are on the main antara::gaming::CLASS level
        // or if we are on a lower level
        // If on main level, create new file stream and begin saving all values to it
        // If lower, do not create new file stream, but begin saving all values to existing filestream 
        if (count(parentName.begin(), parentName.end(), ':') == 4) {
            size_t lastInstance = parentName.find_last_of(':');
            string filename = parentName.substr((int)(++lastInstance), (int)parentName.size());
            string prefix = "../../docs/basic-docs/antara-gaming-sdk/";
            filename = prefix + filename + ".md";
            string test;
        }

        // string childName = child->getName();
        // if (childName.find('@') != std::string::npos) return;

        // string curr = "";
        // if (child->getKind() == Kind::NAMESPACE) {
            // curr += "Namespace: ";
        // } else if (child->getKind() == Kind::CLASS) {
            // curr += "Class:     "; 
        // } else if (child->getKind() == Kind::STRUCT) {
            // curr += "Struct:    "; 
        // }

        // if (child->getKind() == Kind::NAMESPACE || child->getKind() == Kind::CLASS || child->getKind() == Kind::STRUCT){
            // string childKindStr;
            // switch (child-> getKind()) {
                // case Kind::NAMESPACE:
                    // childKindStr = "Namespaces/";
                    // break;
                // case Kind::CLASS:
                    // childKindStr = "Classes/";
                    // break;
                // case Kind::STRUCT:
                    // childKindStr = "Classes/";
                    // break;
                // default:
                    // "This error should not occur. Please contact the developer.";
                    // exit(0);
            // }

            // os << string(indent*2 + 2, ' ') << "// " << curr << endl;
            // os 
                // << string(indent*2 + 2, ' ') << "[" << endl;
            // os
                // << string(indent*2 + 4, ' ') 
                // << "\"" << "/basic-docs/antara-gaming-sdk/"
                // << childKindStr
                // << child->getRefid() 
                // << "\"," << endl;
            // os
                // << string(indent*2 + 4, ' ') 
                // << "\"" << child->getName() 
                // << "\"," << endl;
            // os 
                // << string(indent*2 + 2, ' ') << "]," << endl; 
        // } 

        // auto test = createIndex(*child);

        // // Something is happening in here. This is coming up false, but later
        // if (!test.empty() && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT || parent.getKind() == Kind::INDEX)) { 
            
            // if (parentName == "") {
                // parentName = "Blank Name";
            // }

            // if (depth > 2) {
                // os << string(indent*2 + 2, ' ') << "]" << endl;
                // return;
            // }
            // os << string(indent*2 + 2, ' ') << "{" << endl;
                // os << string(indent*2 + 4, ' ') << "Title: \"" << parentName << "\"," << endl;
                // os << string(indent*2 + 4, ' ') << "collapsible: true," << endl;
                // os << string(indent*2 + 4, ' ') << "children:" << endl; 
        // }

        // if (!test.empty() && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT || parent.getKind() == Kind::INDEX)) { 
            // createMarkdownFile(os, indent + 4, *child, depth);
        // } else if (!test.empty()) {
            // os << string(indent*2 + 4, ' ') << "// Parent Kind is: " << parentKind << endl;
        // }

        // if (!test.empty() && (parent.getKind() == Kind::NAMESPACE || parent.getKind() == Kind::CLASS || parent.getKind() == Kind::STRUCT || parent.getKind() == Kind::INDEX)) { 
            
            // os << string(indent*2 + 2, ' ') << "}," << endl;
        // }
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

    // Create Sidebar Navigation File
    fout << "var gamingSidebar = {" << endl;
    fout << "  title: \"Antara Gaming SDK\"," << endl;
    fout << "  collapsible: true," << endl;
    fout << "  children: [" << endl; 
    createMarkdownFile(fout, 0, index, -3, fileNames);
    fout << " ]" << endl;
    fout << "};" << endl;
    fout << "module.exports = gamingSidebar;";


    // fout << "# Gaming SDK Intro" << endl;

    // fout << "Test: " << mouseButtonPressedPrint << endl << endl;

    return 0;
}
