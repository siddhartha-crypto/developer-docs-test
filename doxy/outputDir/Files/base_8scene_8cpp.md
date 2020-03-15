---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/scenes/antara/gaming/scenes/base.scene.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/scenes/antara/gaming/scenes/base.scene.cpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::scenes](Namespaces/namespaceantara_1_1gaming_1_1scenes.md)** <br>SDK Headers.  |














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

#include "antara/gaming/scenes/base.scene.hpp"

namespace antara::gaming::scenes
{
    base_scene::base_scene(entt::registry& entity_registry) noexcept : entity_registry_(entity_registry), dispatcher_(entity_registry_.ctx<entt::dispatcher>())
    {
    }
} // namespace antara::gaming::scenes
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
