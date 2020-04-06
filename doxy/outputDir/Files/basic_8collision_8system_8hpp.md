

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/collisions/antara/gaming/collisions/basic.collision.system.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/collisions/antara/gaming/collisions/basic.collision.system.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::collisions](Namespaces/namespaceantara_1_1gaming_1_1collisions.md)** <br>< std::min, std::max  |

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::collisions::basic_collision_system](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md)**  |















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

#include <entt/entity/entity.hpp>   
#include <entt/entity/registry.hpp> 

#include "antara/gaming/ecs/system.hpp"                     
#include "antara/gaming/transform/component.position.hpp"   
#include "antara/gaming/transform/component.properties.hpp" 

namespace antara::gaming::collisions
{
    class basic_collision_system final : ecs::logic_update_system<basic_collision_system>
    {
      public:
        basic_collision_system(entt::registry& entity_registry) noexcept;

        ~basic_collision_system() noexcept final = default;

        void update() noexcept final;

        static bool query_rect(transform::ts_rect first, transform::ts_rect second) noexcept;

        static bool query_rect(entt::registry& registry, entt::entity entity, entt::entity second_entity) noexcept;

        static bool query_point(transform::ts_rect box, transform::position_2d pos) noexcept;

        static bool query_point(entt::registry& registry, entt::entity entity, transform::position_2d pos) noexcept;
    };
} // namespace antara::gaming::collisions

REFL_AUTO(type(antara::gaming::collisions::basic_collision_system))
```




