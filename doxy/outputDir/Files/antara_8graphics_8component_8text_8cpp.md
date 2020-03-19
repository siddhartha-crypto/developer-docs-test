---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/antara.graphics.component.text.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/antara.graphics.component.text.cpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::graphics::tests](Namespaces/namespaceantara_1_1gaming_1_1graphics_1_1tests.md)**  |














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

#include "antara/gaming/graphics/component.text.hpp"
#include <doctest/doctest.h>

namespace antara::gaming::graphics::tests
{
    TEST_CASE("blueprint text")
    {
        entt::registry entity_registry;
        text           txt{""};
        auto           entity = graphics::blueprint_text(entity_registry, txt);
        CHECK(entity_registry.valid(entity));
    }
} // namespace antara::gaming::graphics::tests
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT