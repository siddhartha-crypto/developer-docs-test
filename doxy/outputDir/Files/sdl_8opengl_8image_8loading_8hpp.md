

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/sdl.opengl.image.loading.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/sdl.opengl.image.loading.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sdl](Namespaces/namespaceantara_1_1gaming_1_1sdl.md)**  |

### Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::sdl::opengl_image](Classes/structantara_1_1gaming_1_1sdl_1_1opengl__image.md)**  |















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

#pragma once

#include <filesystem>

namespace antara::gaming::sdl
{
    struct opengl_image
    {
        unsigned int id;
        int          width;
        int          height;
    };

    bool load_image(const std::filesystem::path& path, opengl_image& image);
} // namespace antara::gaming::sdl
```




