---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/interpolation.system.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/interpolation.system.cpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |














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

#include <entt/entity/helper.hpp> 

#include "antara/gaming/ecs/interpolation.system.hpp"
#include "antara/gaming/transform/component.position.hpp" 

namespace antara::gaming::ecs
{
    void
    interpolation_system::update() noexcept
    {
        using namespace transform;
        auto func = [](position_2d& pos, previous_position_2d& previous_pos) {
            previous_pos = pos;
        };
        entity_registry_.view<entt::tag<"dynamic"_hs>, position_2d, previous_position_2d>().less(func);
    }

    interpolation_system::interpolation_system(entt::registry& registry) noexcept : system(registry)
    {
    }
} // namespace antara::gaming::ecs
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
