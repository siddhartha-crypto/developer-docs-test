---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/event.add.base.system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/event.add.base.system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs::event](Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1event.md)** <br>< std::unique_ptr  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::ecs::event::add_base_system](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md)**  |













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

#include <memory> 

#include "antara/gaming/ecs/base.system.hpp" 

namespace antara::gaming::ecs::event
{
    struct add_base_system
    {
        using base_system_ptr = std::unique_ptr<ecs::base_system>;

        add_base_system(base_system_ptr system_ptr_ = nullptr) noexcept;

        std::unique_ptr<ecs::base_system> system_ptr{nullptr};
    };
} // namespace antara::gaming::ecs::event
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
