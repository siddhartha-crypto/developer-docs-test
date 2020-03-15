---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/lua.system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/lua.system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sfml](Namespaces/namespaceantara_1_1gaming_1_1sfml.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::sfml::lua_system](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md)**  |


## Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/sfml_2antara_2gaming_2sfml_2lua_8system_8hpp.md#function-refl_auto)**(type([antara::gaming::sfml::lua_system](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md)) )  |







## Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::sfml::lua_system) 
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

#include "antara/gaming/core/safe.refl.hpp"
#include "antara/gaming/ecs/system.hpp"
#include "antara/gaming/sfml/resources.manager.hpp"
#include <memory>
#include <sol/state.hpp>

namespace antara::gaming::sfml
{
    class lua_system final : public ecs::post_update_system<lua_system>
    {
      public:
        lua_system(entt::registry& registry, std::shared_ptr<sol::state> state) noexcept;
        void update() noexcept final;

      private:
        std::shared_ptr<sol::state>             state_;
        antara::gaming::sfml::resources_manager resource_mgr_;
    };
} // namespace antara::gaming::sfml

REFL_AUTO(type(antara::gaming::sfml::lua_system));
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
