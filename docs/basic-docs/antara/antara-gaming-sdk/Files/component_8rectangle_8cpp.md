---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.rectangle.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.rectangle.cpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::geometry](Namespaces/namespaceantara_1_1gaming_1_1geometry.md)** <br>< doom::meta::list  |














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

#include "antara/gaming/geometry/component.rectangle.hpp"

namespace antara::gaming::geometry
{
    rectangle::rectangle(math::vec2f size_) noexcept : size(size_)
    {
    }

    entt::entity
    blueprint_rectangle(
        entt::registry& registry, math::vec2f size, graphics::fill_color fill_color, transform::position_2d pos, graphics::outline_color out_color,
        const transform::properties& prop) noexcept
    {
        auto rectangle_entity = registry.create();
        registry.assign<graphics::fill_color>(rectangle_entity, fill_color);
        registry.assign<graphics::outline_color>(rectangle_entity, out_color);
        registry.assign<transform::properties>(rectangle_entity, prop);
        registry.assign<geometry::rectangle>(rectangle_entity, size);
        registry.assign<transform::position_2d>(rectangle_entity, pos);
        return rectangle_entity;
    }
} // namespace antara::gaming::geometry
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT