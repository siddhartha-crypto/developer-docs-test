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

using std::string;
using std::cout;
using std::endl;
using std::ofstream;
using std::istringstream;

int main()
{
    using namespace Doxybook2;

    // Where the XML files are stored
    std::string inputDir = "../../submodules/antara-gaming-sdk/build/docs/doxygen/xml/";

    Config config;
    config.baseUrl = "/";
    config.copyImages = false;

    Doxygen doxygen(config);

    TextPlainPrinter plainPrinter(config, doxygen);
    string myMarkdown = TextMarkdownPrinter markdownPrinter(config, inputDir, doxygen);

    // Load and parse the XML files, may take few seconds
    doxygen.load(inputDir);
    doxygen.finalize(plainPrinter, markdownPrinter);

    // Get the index, this holds hierarchical data.
    // If a class belongs to a namespace, the index will hold the namespace object,
    // but the namespace object will hold the class, not the index.
    const Node& index = doxygen.getIndex();

    // Recursive find function via refid. The refid is from the XML files.
    const auto mouseButtonPressed = index.find("structantara_1_1gaming_1_1event_1_1mouse__button__pressed_1a4496912647bb2a56ed1f2b92b17a240d");

    string mouseButtonPressedTitle = mouseButtonPressed->getTitle();
    string mouseButtonPressedSummary = mouseButtonPressed->getSummary();
    string mouseButtonPressedBrief = mouseButtonPressed->getBrief();
    //string mouseButtonPressedType = mouseButtonPressed->getType();
    //string mouseButtonPressedBaseClasses = mouseButtonPressed->getBaseClasses();
    //string mouseButtonPressedDerivedClasses = mouseButtonPressed->getDerivedClasses();

    string outputFilename = "../../../docs/basic-docs/antara/antara-api/gaming.md";

    ofstream fout(outputFilename);

    if (!fout) {
        cout << "Error opening file" << endl;
        exit(0);
    }

    fout << "# Gaming SDK Intro" << endl;

    fout << "Title: " << mouseButtonPressedTitle << endl << endl;
    fout << "Summary: " << mouseButtonPressedSummary << endl << endl;
    fout << "Brief: " << mouseButtonPressedBrief << endl << endl;
    //fout << "Type: " << mouseButtonPressedType << endl;
    //fout << "Base Classes: " << mouseButtonPressedBaseClasses << endl; 
    //fout << "Derived Classes: " << mouseButtonPressedDerivedClasses << endl;

    return 0;
}
