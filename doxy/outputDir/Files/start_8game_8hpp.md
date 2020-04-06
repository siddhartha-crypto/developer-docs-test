

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/event/antara/gaming/event/start.game.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/event/antara/gaming/event/start.game.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::event](Namespaces/namespaceantara_1_1gaming_1_1event.md)** <br>< doom::meta::list  |

### Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::event::start_game](Classes/structantara_1_1gaming_1_1event_1_1start__game.md)**  |


### Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/start_8game_8hpp.md#function-refl_auto)**(type([antara::gaming::event::start_game](Classes/structantara_1_1gaming_1_1event_1_1start__game.md)) )  |








### Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::event::start_game) 
)
```

































### Source code

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

#include "antara/gaming/core/safe.refl.hpp"

namespace antara::gaming::event
{
    struct start_game
    {
        start_game() noexcept = default;
    };
} // namespace antara::gaming::event

REFL_AUTO(type(antara::gaming::event::start_game));
```




