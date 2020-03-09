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
    TextMarkdownPrinter markdownPrinter(config, inputDir, doxygen);

    // Load and parse the XML files, may take few seconds
    doxygen.load(inputDir);
    doxygen.finalize(plainPrinter, markdownPrinter);

    // Get the index, this holds hierarchical data.
    // If a class belongs to a namespace, the index will hold the namespace object,
    // but the namespace object will hold the class, not the index.
    const Node& index = doxygen.getIndex();

    // Recursive find function via refid. The refid is from the XML files.
    const auto mouseButtonPressed = index.find("mouse_8button_8pressed_8hpp");

    string mouseButtonPressedConstructor = mouseButtonPressed->getName();

    cout << "name: " << mouseButtonPressedConstructor << endl;

    string outputFilename = "../../../docs/basic-docs/antara/antara-api/gaming.md";

    ofstream fout(outputFilename);

    if (!fout) {
        cout << "Error opening file" << endl;
        exit(0);
    }

    fout << "# Gaming SDK Intro" << endl;

    fout << mouseButtonPressedConstructor << endl;

    return 0;
}
