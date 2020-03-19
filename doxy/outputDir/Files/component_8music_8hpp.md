---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/audio/antara/gaming/audio/component.music.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/audio/antara/gaming/audio/component.music.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::audio](Namespaces/namespaceantara_1_1gaming_1_1audio.md)** <br>< std::string  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::audio::music](Classes/structantara_1_1gaming_1_1audio_1_1music.md)**  |













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

#include <functional> 
#include <string>     

#include "antara/gaming/audio/audio.status.hpp" 

namespace antara::gaming::audio
{
    struct music
    {
        std::string           music_id;
        status                music_status{status::wait_for_first_run};
        float                 pitch{1.f};
        float                 volume{100.f};
        bool                  loop{false};
        std::function<void()> on_finish{[]() {
        }};
        float                 minimum_distance{1.f};
        float                 attenuation{1.f};
        bool                  relative_to_listener{false};
    };
} // namespace antara::gaming::audio
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
