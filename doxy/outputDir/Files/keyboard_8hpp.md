---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/input/antara/gaming/input/keyboard.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/input/antara/gaming/input/keyboard.hpp







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

namespace antara::gaming::input
{
    enum key
    {
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        num_0,
        num_1,
        num_2,
        num_3,
        num_4,
        num_5,
        num_6,
        num_7,
        num_8,
        num_9,
        escape,
        left_control,
        left_shift,
        left_alt,
        left_system,
        right_control,
        right_shift,
        right_alt,
        right_system,
        menu,
        left_bracket,
        right_bracket,
        semi_colon,
        comma,
        period,
        quote,
        slash,
        back_slash,
        tilde,
        equal,
        dash,
        space,
        return_,
        back_space,
        tab,
        page_up,
        page_down,
        end,
        home,
        insert,
        delete_,
        add,
        subtract,
        multiply,
        divide,
        left,
        right,
        up,
        down,
        numpad_0,
        numpad_1,
        numpad_2,
        numpad_3,
        numpad_4,
        numpad_5,
        numpad_6,
        numpad_7,
        numpad_8,
        numpad_9,
        f1,
        f2,
        f3,
        f4,
        f5,
        f6,
        f7,
        f8,
        f9,
        f10,
        f11,
        f12,
        f13,
        f14,
        f15,
        pause
    };

    bool is_key_pressed(input::key key) noexcept;
} // namespace antara::gaming::input
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
