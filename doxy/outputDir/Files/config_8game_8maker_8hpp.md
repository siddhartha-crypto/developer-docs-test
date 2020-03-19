---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/config/antara/gaming/config/config.game.maker.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/config/antara/gaming/config/config.game.maker.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::graphics](Namespaces/namespaceantara_1_1gaming_1_1graphics.md)** <br>SDK Headers.  |














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

#if defined(_WIN32) || defined(WIN32)
#    define and &&
#    define or ||
#    define not !
#endif
#include <nlohmann/json.hpp> 

#include "antara/gaming/graphics/component.canvas.hpp" 

namespace antara::gaming::graphics
{
    void from_json(const nlohmann::json& json_data, canvas_2d& game_maker_cfg);
    void to_json(nlohmann::json& json_data, const canvas_2d& game_maker_cfg);
} // namespace antara::gaming::graphics
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
