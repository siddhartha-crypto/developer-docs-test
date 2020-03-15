---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/component.sprite.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/component.sprite.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::graphics](Namespaces/namespaceantara_1_1gaming_1_1graphics.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::graphics::sprite](Classes/structantara_1_1gaming_1_1graphics_1_1sprite.md)**  |
| struct | **[antara::gaming::graphics::rect](Classes/structantara_1_1gaming_1_1graphics_1_1rect.md)**  |













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

#include <string> 

#include <entt/entity/entity.hpp>   
#include <entt/entity/registry.hpp> 

#include "antara/gaming/core/safe.refl.hpp"                 
#include "antara/gaming/graphics/component.color.hpp"       
#include "antara/gaming/math/vector.hpp"                    
#include "antara/gaming/transform/component.position.hpp"   
#include "antara/gaming/transform/component.properties.hpp" 

namespace antara::gaming::graphics
{
    struct rect
    {
        math::vec2f pos;
        math::vec2f size;
    };

    struct sprite
    {
        std::string appearance;        
        bool        native_size{true}; 
        rect        texture_rec{};     
    };

    inline void
    blueprint_sprite(
        entt::entity spr_entity, entt::registry& registry, const sprite& spr, transform::position_2d pos = math::vec2f::scalar(0.f),
        fill_color spr_color = graphics::white, const transform::properties& prop = {}) noexcept
    {
        registry.assign<fill_color>(spr_entity, spr_color);
        registry.assign<transform::properties>(spr_entity, prop);
        registry.assign<sprite>(spr_entity, spr);
        registry.assign<transform::position_2d>(spr_entity, pos);
    }

    inline entt::entity
    blueprint_sprite(
        entt::registry& registry, const sprite& spr, transform::position_2d pos = math::vec2f::scalar(0.f), fill_color spr_color = graphics::white,
        const transform::properties& prop = {}) noexcept
    {
        auto spr_entity = registry.create();
        blueprint_sprite(spr_entity, registry, spr, pos, spr_color, prop);
        return spr_entity;
    }
} // namespace antara::gaming::graphics

REFL_AUTO(type(antara::gaming::graphics::rect), field(pos), field(size))
REFL_AUTO(type(antara::gaming::graphics::sprite), field(appearance), field(native_size), field(texture_rec))
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
