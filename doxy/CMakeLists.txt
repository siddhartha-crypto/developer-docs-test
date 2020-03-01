# TODO Run cmake and build on Antara Gaming SDK submodule to render documentation
# cd ../submodules/antara-gaming-sdk/
# git submodule update
# mkdir build
# cd build
# -cmake -DCMAKE_BUILD_TYPE=Debug -DCMAKE_CXX_COMPILER="$(which clang)" DANTARA_BUILD_DOCS=ON ..
# make

# TODO: Execute pure doxygen (non-sphinx) build of Antara Gaming SDK docs
# TODO: Create Doxyfile (probably outside submodules) to process SDK docs in doxybook2 friendly format
# doxygen Doxfile-SDK

# TODO: Execute Doxybook rendition of SDK docs
# TODO: Make templates to govern styled doxybook2 output of SDK docs
#       (Or, alternatively, use doxybook2 as a library to write all files)
#       (Final files need to be organized so that they can be parsed and implanted into existing documentation)
# doxybook2 --config ./config.json --input ../submodules/antara-gaming-sdk/build/docs/build/xml/ --output ./build-book --templates ./templates

# TODO: Create script to take finalized markdown files and push them into ../docs/basic-docs/antara/antara-api directory
# TODO: Make sure the ../docs/.vuepress/sidebar.js file has all files organized to accept input

# TODO: Write tests to ensure that the process has not damaged any files
# TODO: Create any tools that can view and verify the updated content as compared to the old content
# TODO: Create flowchart showing how developers may now use the existing templates to push new content to the website live
