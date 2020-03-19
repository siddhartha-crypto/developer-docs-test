---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/animation2d/antara/gaming/animation2d/component.animation.2d.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/animation2d/antara/gaming/animation2d/component.animation.2d.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::animation2d](Namespaces/namespaceantara_1_1gaming_1_1animation2d.md)** <br>< std::size_t  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::animation2d::anim_component](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md)**  |













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

#include <cstddef> 

#include <chrono> 
#include <string> 

#include <entt/entity/entity.hpp>   
#include <entt/entity/registry.hpp> 

#include <antara/gaming/graphics/component.color.hpp>       
#include <antara/gaming/transform/component.position.hpp>   
#include <antara/gaming/transform/component.properties.hpp> 

namespace antara::gaming::animation2d
{
    struct anim_component
    {
        using seconds = std::chrono::duration<float, std::ratio<1>>;

        enum status
        {
            stopped,
            paused,
            playing
        };

        std::string animation_id;
        status      current_status{stopped};
        seconds     speed{0.9f};
        std::size_t repeat{0};
        bool        loop{false};
        std::size_t current_frame{0};
        seconds     elapsed{0};
    };

    entt::entity blueprint_animation(
        entt::registry& registry, const anim_component& anim, transform::position_2d pos = math::vec2f::scalar(0.f),
        graphics::fill_color spr_color = graphics::white, const transform::properties& prop = {}) noexcept;
} // namespace antara::gaming::animation2d
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
