---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/box2d/antara/gaming/box2d/box2d.system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/box2d/antara/gaming/box2d/box2d.system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::box2d](Namespaces/namespaceantara_1_1gaming_1_1box2d.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::box2d::box2d_system](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md)**  |


## Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/box2d_8system_8hpp.md#function-refl_auto)**(type([antara::gaming::box2d::box2d_system](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md)) )  |







## Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::box2d::box2d_system) 
)
```
































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

#include <Box2D/Box2D.h>            
#include <entt/entity/registry.hpp> 

#include "antara/gaming/core/safe.refl.hpp" 
#include "antara/gaming/ecs/system.hpp"     

namespace antara::gaming::box2d
{
    class box2d_system final : public ecs::logic_update_system<box2d_system>
    {
        b2Vec2  gravity_{0.f, 9.8f};
        b2World world_{gravity_};

      public:
        box2d_system(entt::registry& registry) noexcept;

        void update() noexcept final;
    };
} // namespace antara::gaming::box2d

REFL_AUTO(type(antara::gaming::box2d::box2d_system));
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
