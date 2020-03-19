---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/event/antara/gaming/event/get.mouse.position.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/event/antara/gaming/event/get.mouse.position.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::event](Namespaces/namespaceantara_1_1gaming_1_1event.md)** <br>< doom::meta::list  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::event::get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md)**  |













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

namespace antara::gaming::event
{
    struct get_mouse_position
    {
        get_mouse_position(math::vec2i& in, bool relative_to_the_window_ = false) noexcept : pos(in), relative_to_the_window(relative_to_the_window_)
        {
        }

        get_mouse_position(const get_mouse_position&) noexcept = default;

        get_mouse_position&
        operator=(const get_mouse_position& other) noexcept
        {
            this->pos                    = other.pos;
            this->relative_to_the_window = other.relative_to_the_window;
            return *this;
        }

        math::vec2i& pos;
        bool         relative_to_the_window{false};
    };
} // namespace antara::gaming::event
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
