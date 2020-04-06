

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/sdl.opengl.image.loading.cpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/sdl.opengl.image.loading.cpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sdl](Namespaces/namespaceantara_1_1gaming_1_1sdl.md)**  |





### Defines

|                | Name           |
| -------------- | -------------- |
|  | **[STB_IMAGE_IMPLEMENTATION](Files/sdl_8opengl_8image_8loading_8cpp.md#define-stb_image_implementation)**  |








### Macro Documentation

### define STB_IMAGE_IMPLEMENTATION

```cpp
#define STB_IMAGE_IMPLEMENTATION
```































### Source code

```cpp
/******************************************************************************
 * Copyright © 2013-2019 The Komodo Platform Developers.                      *
 *                                                                            *
 * See the AUTHORS, DEVELOPER-AGREEMENT and LICENSE files at                  *
 * the top-level directory of this distribution for the individual copyright  *
 * holder information and the developer policies on copyright and licensing.  *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * Komodo Platform software, including this file may be copied, modified,     *
 * propagated or distributed except according to the terms contained in the   *
 * LICENSE file                                                               *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/

#include "sdl.opengl.image.loading.hpp"

#define STB_IMAGE_IMPLEMENTATION

#include "stb_image.h"
#include <glad/glad.h>

namespace
{
    // Simple helper function to load an image into a OpenGL texture with common settings
    bool
    LoadTextureFromFile(const char* filename, GLuint* out_texture, int* out_width, int* out_height)
    {
        // Load from file
        int            image_width  = 0;
        int            image_height = 0;
        unsigned char* image_data   = stbi_load(filename, &image_width, &image_height, NULL, 4);
        if (image_data == NULL)
            return false;

        // Create a OpenGL texture identifier
        GLuint image_texture;
        glGenTextures(1, &image_texture);
        glBindTexture(GL_TEXTURE_2D, image_texture);

        // Setup filtering parameters for display
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

        // Upload pixels into texture
        glPixelStorei(GL_UNPACK_ROW_LENGTH, 0);
        glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, image_width, image_height, 0, GL_RGBA, GL_UNSIGNED_BYTE, image_data);
        stbi_image_free(image_data);

        *out_texture = image_texture;
        *out_width   = image_width;
        *out_height  = image_height;

        return true;
    }
} // namespace

namespace antara::gaming::sdl
{
    bool
    load_image(const std::filesystem::path& path, opengl_image& image)
    {
        return LoadTextureFromFile(path.string().c_str(), &image.id, &image.width, &image.height);
    }
} // namespace antara::gaming::sdl
```




