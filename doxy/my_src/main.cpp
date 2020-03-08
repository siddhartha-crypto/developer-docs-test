#include <iostream>
#include <iomanip>
#include <vector>
#include <string>
#include <map>

#include "../include/nlohmann/json.hpp"
#include "../include/Doxybook/ExceptionUtils.hpp"
#include "../submodules/doxybook2/include/Doxybook/Doxygen.hpp"
#include "../submodules/doxybook2/include/Doxybook/Exception.hpp"
#include "../submodules/doxybook2/include/Doxybook/JsonConverter.hpp"
#include "../submodules/doxybook2/include/Doxybook/TextMarkdownPrinter.hpp"
#include "../submodules/doxybook2/include/Doxybook/TextPlainPrinter.hpp"

int main() {
    using namespace Doxybook;

    // Where the XML files are stored
    std::string inputDir = "../submodules/antara-gaming-sdk/build/docs/doxygen/xml/";

    //// Config file, override any properties you want
    //Config config;
    //config.copyImages = false;

    //// The class that will take care of parsing XML files
    //Doxygen doxygen(config);

    //// There two are used to convert the XML text into markdown (or plain) text.
    //// For example: <para><strong>Hello</strong></para> is converted into **Hello**
    //TextPlainPrinter plainPrinter(config, doxygen);
    //TextMarkdownPrinter markdownPrinter(config, inputDir, doxygen);

    //// This is optional and can be used to convert the data in Node
    //// into nlohmann/json
    //JsonConverter jsonConverter(config, doxygen, plainPrinter, markdownPrinter);

    //// Load and parse the XML files, may take few seconds
    //doxygen.load(inputDir);
    //doxygen.finalize(plainPrinter, markdownPrinter);

    //// Get the index, this holds hierarchical data.
    //// If a class belongs to a namespace, the index will hold the namespace object,
    //// but the namespace object will hold the class, not the index.
    //const Node& index = doxygen.getIndex();

    //// Recursive find function via refid. The refid is from the XML files.
    //const Node* audioBuffer = index.find("class_engine_1_1_audio_1_1_audio_buffer");
    //const Node* audioBufferConstructor = index.find("classEngine_1_1Audio_1_1AudioBuffer_1ab3f8002fc80d9bff50cfb6095e10a721");
    //audioBufferConstructor->getName(); // Returns "AudioBuffer"

    //// Get detailed data of this specific class
    //// std::tuple<Node::Data, Node::ChildrenData>
    //auto [data, childrenDataMap] = audioBuffer->loadData(config, plainPrinter, markdownPrinter, doxygen.getCache());

    //// The "data" is type of Node::Data which contains
    //// detailed data for this specific class.
    //// The "childrenDataMap" is the same thing, but stored as an unordered map
    //// where a key is a pointer to the child (the class' function for example) data.
    //auto constructorData& = childrenDataMap.at(audioBufferConstructor);
}
