#include <iostream>
#include <iomanip>
#include <vector>
#include <string>
#include <map>
#include <sstream>
#include <string>

#include <Doxybook/Doxygen.hpp>
#include <Doxybook/Exception.hpp>
#include <Doxybook/JsonConverter.hpp>
#include <Doxybook/TextMarkdownPrinter.hpp>
#include <Doxybook/TextPlainPrinter.hpp>

using std::string;

int main()
{
    using namespace Doxybook2;

    // Where the XML files are stored
    std::string inputDir = "../submodules/antara-gaming-sdk/build/docs/doxygen/xml/";

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
    const Node* mouseButtonPressed = index.find("mouse_8button_8pressed_8hpp");

    string mouseButtonPressedConstructor = mouseButtonPressed->getName();

    cout << mouseButtonPressedConstructor << endl;

    return 0;
}
