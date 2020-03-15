---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/component.2d.render.texture.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/component.2d.render.texture.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::graphics](Namespaces/namespaceantara_1_1gaming_1_1graphics.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::graphics::render_texture_2d](Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md)**  |
| struct | **[antara::gaming::graphics::drawable_info](Classes/structantara_1_1gaming_1_1graphics_1_1drawable__info.md)**  |













## Source code

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

#include <map>    
#include <string> 

#include <entt/entity/entity.hpp> 
#include <entt/entity/registry.hpp>

#include "antara/gaming/graphics/component.color.hpp" 
#include "antara/gaming/math/vector.hpp"              

namespace antara::gaming::graphics
{
    enum drawable_type
    {
        d_sprite,
        d_vertex_array,
        d_circle,
        d_rectangle
    };

    struct drawable_info
    {
        entt::registry::entity_type entity;
        drawable_type               dt;
    };

    using drawable_registry = std::map<std::string, drawable_info>;

    struct render_texture_2d
    {
        std::string       id;
        math::vec2u       size;
        drawable_registry to_draw;
        graphics::color   clear_color{graphics::black};
        bool              smooth{true};
        bool              repeated{false};
    };
} // namespace antara::gaming::graphics
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
