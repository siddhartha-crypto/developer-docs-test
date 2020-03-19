---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/lua/antara/gaming/lua/component.lua.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/lua/antara/gaming/lua/component.lua.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::lua](Namespaces/namespaceantara_1_1gaming_1_1lua.md)** <br>< std::move  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::lua::component_script](Classes/structantara_1_1gaming_1_1lua_1_1component__script.md)**  |













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

namespace antara::gaming::lua
{
    struct component_script
    {
        component_script(std::string script_, std::string table_name_) noexcept;

        component_script() noexcept;

        std::string script;
        std::string table_name;
    };
} // namespace antara::gaming::lua
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
