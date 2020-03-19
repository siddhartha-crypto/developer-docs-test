---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/component.layer.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/graphics/antara/gaming/graphics/component.layer.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::graphics](Namespaces/namespaceantara_1_1gaming_1_1graphics.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::graphics::layer](Classes/structantara_1_1gaming_1_1graphics_1_1layer.md)**  |













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

#include <cstddef> 

#include "antara/gaming/core/safe.refl.hpp" 

namespace antara::gaming::graphics
{
    inline constexpr std::size_t max_layer = 12ull;

    template <std::size_t N>
    struct layer
    {
    };

    using layer_0  = layer<0>;
    using layer_1  = layer<1>;
    using layer_2  = layer<2>;
    using layer_3  = layer<3>;
    using layer_4  = layer<4>;
    using layer_5  = layer<5>;
    using layer_6  = layer<6>;
    using layer_7  = layer<7>;
    using layer_8  = layer<8>;
    using layer_9  = layer<9>;
    using layer_10 = layer<10>;
    using layer_11 = layer<11>;
} // namespace antara::gaming::graphics

REFL_AUTO(type(antara::gaming::graphics::layer_0))
REFL_AUTO(type(antara::gaming::graphics::layer_1))
REFL_AUTO(type(antara::gaming::graphics::layer_2))
REFL_AUTO(type(antara::gaming::graphics::layer_3))
REFL_AUTO(type(antara::gaming::graphics::layer_4))
REFL_AUTO(type(antara::gaming::graphics::layer_5))
REFL_AUTO(type(antara::gaming::graphics::layer_6))
REFL_AUTO(type(antara::gaming::graphics::layer_7))
REFL_AUTO(type(antara::gaming::graphics::layer_8))
REFL_AUTO(type(antara::gaming::graphics::layer_9))
REFL_AUTO(type(antara::gaming::graphics::layer_10))
REFL_AUTO(type(antara::gaming::graphics::layer_11))
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
