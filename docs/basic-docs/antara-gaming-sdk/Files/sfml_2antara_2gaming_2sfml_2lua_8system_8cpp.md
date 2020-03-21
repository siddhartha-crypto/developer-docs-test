---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/lua.system.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/lua.system.cpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sfml](Namespaces/namespaceantara_1_1gaming_1_1sfml.md)**  |














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

#include "antara/gaming/sfml/lua.system.hpp"
#include "antara/gaming/sfml/component.drawable.hpp"

namespace antara::gaming::sfml
{
    void
    lua_system::update() noexcept
    {
    }

    lua_system::lua_system(entt::registry& registry, std::shared_ptr<sol::state> state) noexcept : system(registry), state_(state)
    {
        this->disable();
        auto text_functor = [this](const char* text, const char* font_id, unsigned int size = 30) {
            auto entity = this->entity_registry_.create();
            auto handle = this->resource_mgr_.load_font(font_id);
            this->entity_registry_.assign<sfml::text>(entity, sf::Text(text, handle.get(), size));
            return entity;
        };

        auto overload_set                               = sol::overload(text_functor, [&text_functor](const char* text, const char* font_id) {
            return text_functor(text, font_id);
        });
        (*this->state_)["antara"]["create_text_entity"] = overload_set;
    }
} // namespace antara::gaming::sfml
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
