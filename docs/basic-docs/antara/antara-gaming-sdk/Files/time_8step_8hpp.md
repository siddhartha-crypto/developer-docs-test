---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/timer/antara/gaming/timer/time.step.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/timer/antara/gaming/timer/time.step.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::timer](Namespaces/namespaceantara_1_1gaming_1_1timer.md)** <br>< std::chrono::nanoseconds, std::chrono_literals  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::timer::time_step](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md)**  |













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

#include <chrono> 
#include <string> 

#include "antara/gaming/timer/fps.hpp"

namespace antara::gaming::timer
{
    class time_step
    {
        using clock = std::chrono::steady_clock;

        static std::chrono::nanoseconds tps_dt;
        static float                    fixed_delta_time;
        static std::chrono::nanoseconds lag_;
        static clock::time_point        start_;
        static constexpr float          fps_average_every_seconds_{1.0f};
        static float                    fps_time_sum_;
        static int                      fps_capture_count_;

      public:
        static void start() noexcept;

        static void start_frame() noexcept;

        static void perform_update() noexcept;

        static void change_tps(std::chrono::nanoseconds new_tps_rate);

        static float get_fixed_delta_time() noexcept;

        static void reset_lag() noexcept;

        [[nodiscard]] bool is_update_required() const noexcept;

        [[nodiscard]] float get_interpolation() const noexcept;

        static std::string fps_str_;
    };
} // namespace antara::gaming::timer
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
