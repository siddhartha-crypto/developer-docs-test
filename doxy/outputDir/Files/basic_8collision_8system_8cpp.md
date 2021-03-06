

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/collisions/antara/gaming/collisions/basic.collision.system.cpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/collisions/antara/gaming/collisions/basic.collision.system.cpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::collisions](Namespaces/namespaceantara_1_1gaming_1_1collisions.md)** <br>< std::min, std::max  |
















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

#include <algorithm> 

#include "antara/gaming/collisions/basic.collision.system.hpp"
#include "antara/gaming/math/vector.hpp" 

namespace antara::gaming::collisions
{
    bool
    basic_collision_system::query_rect(transform::ts_rect first, transform::ts_rect second) noexcept
    {
        auto [entity_x, entity_y]                        = first.pos;
        auto [entity_width, entity_height]               = first.size;
        auto [second_entity_x, second_entity_y]          = second.pos;
        auto [second_entity_width, second_entity_height] = second.size;
        return entity_x < second_entity_x + second_entity_width && entity_x + entity_width > second_entity_x &&
               entity_y < second_entity_y + second_entity_height && entity_y + entity_height > second_entity_y;
    }

    bool
    basic_collision_system::query_rect(entt::registry& registry, entt::entity entity, entt::entity second_entity) noexcept
    {
        auto properties_entity        = registry.try_get<transform::properties>(entity);
        auto properties_second_entity = registry.try_get<transform::properties>(second_entity);
        return properties_entity == nullptr || properties_second_entity == nullptr
                   ? false
                   : query_rect(properties_entity->global_bounds, properties_second_entity->global_bounds);
    }

    bool
    basic_collision_system::query_point(transform::ts_rect box, transform::position_2d pos) noexcept
    {
        auto [left, top]     = box.pos;
        auto [width, height] = box.size;
        auto [x, y]          = static_cast<math::vec2f>(pos);

        auto minX = std::min(left, left + width);
        auto maxX = std::max(left, left + width);
        auto minY = std::min(top, top + height);
        auto maxY = std::max(top, top + height);

        return (x >= minX) && (x < maxX) && (y >= minY) && (y < maxY);
    }

    bool
    basic_collision_system::query_point(entt::registry& registry, entt::entity entity, transform::position_2d pos) noexcept
    {
        auto properties_entity = registry.try_get<transform::properties>(entity);
        return properties_entity == nullptr ? false : query_point(properties_entity->global_bounds, pos);
    }
} // namespace antara::gaming::collisions

namespace antara::gaming::collisions
{
    basic_collision_system::basic_collision_system(entt::registry& entity_registry) noexcept : system(entity_registry)
    {
        this->disable();
    }

    void
    basic_collision_system::update() noexcept
    {
    }
} // namespace antara::gaming::collisions
```




