---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/virtual.input.system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/virtual.input.system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::ecs::virtual_input_system](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md)**  |


## Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/virtual_8input_8system_8hpp.md#function-refl_auto)**(type([antara::gaming::ecs::virtual_input_system](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md)) )  |







## Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::ecs::virtual_input_system) 
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

#include <entt/entity/entity.hpp> 

#include "antara/gaming/core/safe.refl.hpp" 
#include "antara/gaming/ecs/system.hpp"     

namespace antara::gaming::ecs
{
    struct virtual_input_system final : ecs::logic_update_system<virtual_input_system>
    {
        virtual_input_system(entt::registry& registry) noexcept;

        void update() noexcept final;
    };
} // namespace antara::gaming::ecs

REFL_AUTO(type(antara::gaming::ecs::virtual_input_system));
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
