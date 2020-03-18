#include <iostream>
#include <iomanip>
#include <vector>
#include <string>
#include <map>
#include <sstream>
#include <fstream>
#include <string> 

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
using std::cout;
using std::endl;
using std::ofstream;
using std::istringstream;

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
void createMarkdownFile(std::ofstream& os, int indent, const Node& parent) {

    for (const auto& child : parent.getChildren()) {
        if (child->getKind() == Kind::NAMESPACE) {
            cout << "Processing: " << child->getName() << endl;
            createMarkdownFile(os, indent + 2, *child);
        } else if (child->getKind() == Kind::CLASS || child->getKind() == Kind::STRUCT){
                cout << "Found class: " << child->getName() << endl;
                os 
                    << string(indent*2, ' ') << "[\n" << string(indent*2 + 2, ' ') << "\"" << child->getRefid() << "\",\n" 
                    << string(indent*2 + 2, ' ') 
                    << "\"" << child->getName() 
                    << "\",\n" 
                    << string(indent*2, ' ') 
                    << "]," 
                    << endl; 
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
    string outputFilename = "../../../docs/basic-docs/antara/antara-api/gaming.md";

    ofstream fout(outputFilename);

    if (!fout) {
        cout << "Error opening file" << endl;
        exit(0);
    }

    createMarkdownFile(fout, 0, index);


    // fout << "# Gaming SDK Intro" << endl;

    // fout << "Test: " << mouseButtonPressedPrint << endl << endl;

    return 0;
}
