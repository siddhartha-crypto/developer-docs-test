# Install script for directory: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/doxybook2/libs/tinyxml2

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/usr/local")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "Debug")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

# Is this installation the result of a crosscompile?
if(NOT DEFINED CMAKE_CROSSCOMPILING)
  set(CMAKE_CROSSCOMPILING "FALSE")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xtinyxml2_librariesx" OR NOT CMAKE_INSTALL_COMPONENT)
  foreach(file
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so.7.1.0"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so.7"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      file(RPATH_CHECK
           FILE "${file}"
           RPATH "")
    endif()
  endforeach()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES
    "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/submodules/doxybook2/libs/tinyxml2/libtinyxml2d.so.7.1.0"
    "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/submodules/doxybook2/libs/tinyxml2/libtinyxml2d.so.7"
    )
  foreach(file
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so.7.1.0"
      "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so.7"
      )
    if(EXISTS "${file}" AND
       NOT IS_SYMLINK "${file}")
      if(CMAKE_INSTALL_DO_STRIP)
        execute_process(COMMAND "/usr/bin/strip" "${file}")
      endif()
    endif()
  endforeach()
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xtinyxml2_librariesx" OR NOT CMAKE_INSTALL_COMPONENT)
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so")
    file(RPATH_CHECK
         FILE "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so"
         RPATH "")
  endif()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib" TYPE SHARED_LIBRARY FILES "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/submodules/doxybook2/libs/tinyxml2/libtinyxml2d.so")
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so" AND
     NOT IS_SYMLINK "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so")
    if(CMAKE_INSTALL_DO_STRIP)
      execute_process(COMMAND "/usr/bin/strip" "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/libtinyxml2d.so")
    endif()
  endif()
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xtinyxml2_headersx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE FILE FILES "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/doxybook2/libs/tinyxml2/tinyxml2.h")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xtinyxml2_configx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/submodules/doxybook2/libs/tinyxml2/tinyxml2.pc")
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xtinyxml2_configx" OR NOT CMAKE_INSTALL_COMPONENT)
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/cmake/komodo-doxybook2" TYPE FILE FILES
    "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/komodo-doxybook2Config.cmake"
    "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/komodo-doxybook2ConfigVersion.cmake"
    )
endif()

if("x${CMAKE_INSTALL_COMPONENT}x" STREQUAL "xtinyxml2_configx" OR NOT CMAKE_INSTALL_COMPONENT)
  if(EXISTS "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/komodo-doxybook2/komodo-doxybook2Targets.cmake")
    file(DIFFERENT EXPORT_FILE_CHANGED FILES
         "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/komodo-doxybook2/komodo-doxybook2Targets.cmake"
         "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/submodules/doxybook2/libs/tinyxml2/CMakeFiles/Export/lib/cmake/komodo-doxybook2/komodo-doxybook2Targets.cmake")
    if(EXPORT_FILE_CHANGED)
      file(GLOB OLD_CONFIG_FILES "$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/komodo-doxybook2/komodo-doxybook2Targets-*.cmake")
      if(OLD_CONFIG_FILES)
        message(STATUS "Old export file \"$ENV{DESTDIR}${CMAKE_INSTALL_PREFIX}/lib/cmake/komodo-doxybook2/komodo-doxybook2Targets.cmake\" will be replaced.  Removing files [${OLD_CONFIG_FILES}].")
        file(REMOVE ${OLD_CONFIG_FILES})
      endif()
    endif()
  endif()
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/cmake/komodo-doxybook2" TYPE FILE FILES "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/submodules/doxybook2/libs/tinyxml2/CMakeFiles/Export/lib/cmake/komodo-doxybook2/komodo-doxybook2Targets.cmake")
  if("${CMAKE_INSTALL_CONFIG_NAME}" MATCHES "^([Dd][Ee][Bb][Uu][Gg])$")
    file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/cmake/komodo-doxybook2" TYPE FILE FILES "/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/build/submodules/doxybook2/libs/tinyxml2/CMakeFiles/Export/lib/cmake/komodo-doxybook2/komodo-doxybook2Targets-debug.cmake")
  endif()
endif()

