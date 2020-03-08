# Declare version number
cmake_minimum_required(VERSION 3.10)

# Name -- whatever the library is going to be called
project(komodo-doxybook2)

# Set build type
if(NOT CMAKE_BUILD_TYPE) 
  set(CMAKE_BUILD_TYPE "Release") 
endif()
set(CMAKE_BUILD_TYPE "Release" CACHE STRING "Select build type") 
set_property(CACHE CMAKE_BUILD_TYPE PROPERTY STRINGS "Debug" "Release" "RelWithDebInfo" "MinSizeRel")

# # Declare CMake options
# option(USE_CLANG_TIDY "Use clang-tidy" OFF)
# 
# # Clang tidy 
# if(USE_CLANG_TIDY) 
#   find_program(CLANG_TIDY_EXE NAMES "clang-tidy" DOC "Path to clang-tidy executable") 
#   if(NOT CLANG_TIDY_EXE) 
#     message(FATAL_ERROR "clang-tidy not found.") 
#   else() 
#     message(STATUS "clang-tidy found: ${CLANG_TIDY_EXE}") 
#   endif() 
# endif()

# Begin previous CMake file here 

# Libraries
add_subdirectory(${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/tinyxml2 EXCLUDE_FROM_ALL)
add_subdirectory(${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/fmt EXCLUDE_FROM_ALL)
target_include_directories(fmt INTERFACE ${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/fmt/include)
add_library(argagg INTERFACE)
target_include_directories(argagg INTERFACE ${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/argagg/include)
add_library(termcolor INTERFACE)
target_include_directories(termcolor INTERFACE ${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/termcolor/include)
add_library(json INTERFACE)
target_include_directories(json INTERFACE ${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/json/include)
add_library(inja INTERFACE)
target_include_directories(inja INTERFACE ${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/inja/include)
add_library(Catch2 INTERFACE)
target_include_directories(Catch2 INTERFACE ${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/Catch2/single_include)
if (MSVC)
  add_library(dirent INTERFACE)
  target_include_directories(dirent INTERFACE ${CMAKE_SOURCE_DIR}/../submodules/doxybook2/libs/dirent/include)
endif()

add_subdirectory(${CMAKE_SOURCE_DIR}/../submodules/doxybook2/src/Doxybook)
add_subdirectory(${CMAKE_SOURCE_DIR}/../submodules/doxybook2/src/DoxybookCli)
if(DOXYBOOK_TESTS)
  enable_testing()
  add_subdirectory(${CMAKE_SOURCE_DIR}/../submodules/doxybook2/tests/DoxybookTests)
endif()

# Compile main.cpp into LabExample
add_executable(komodo-doxybook2
    main.cpp)

# Link LabStaticLibrary (generated above) to LabExample executable
target_link_libraries(komodo-doxybook2 libdoxybook2.a)

