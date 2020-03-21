---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/input/antara/gaming/input/mouse.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/input/antara/gaming/input/mouse.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::input](Namespaces/namespaceantara_1_1gaming_1_1input.md)** <br>< math::vec2i  |














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

#include "antara/gaming/math/vector.hpp" 

namespace antara::gaming::input
{
    enum class mouse_button
    {
        left,
        right,
        middle,
        x_button_1,
        x_button_2,
        x_button_count
    };

    enum class mouse_wheel
    {
        vertical_wheel,
        horizontal_wheel
    };

    bool        is_mouse_button_pressed(mouse_button button) noexcept;
    math::vec2i get_mouse_position(bool relative_to_the_window = false) noexcept;
} // namespace antara::gaming::input
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
