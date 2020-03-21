---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/event.play.sound.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/event.play.sound.cpp







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

#include "antara/gaming/sfml/event.play.sound.hpp"

namespace antara::gaming::sfml
{
    play_sound_event::play_sound_event() noexcept :
        sound_id{nullptr}, resource_mgr{nullptr}, on_finish([]() {
        })
    {
    }

    play_sound_event::play_sound_event(const char* sound_id_, resources_manager* resources_manager_, std::function<void()> on_finish, float volume_) noexcept :
        sound_id(sound_id_), resource_mgr(resources_manager_), on_finish(std::move(on_finish)), volume(volume_)
    {
    }
} // namespace antara::gaming::sfml
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
