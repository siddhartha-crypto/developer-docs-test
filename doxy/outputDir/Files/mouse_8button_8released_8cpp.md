

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/event/antara/gaming/event/mouse.button.released.cpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/event/antara/gaming/event/mouse.button.released.cpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::event](Namespaces/namespaceantara_1_1gaming_1_1event.md)** <br>< doom::meta::list  |
















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

#include "antara/gaming/event/mouse.button.released.hpp"

namespace antara::gaming::event
{
    mouse_button_released::mouse_button_released(input::mouse_button button_, float x_, float y_, float window_x_, float window_y_) noexcept :
        button(button_), x(x_), y(y_), window_x(window_x_), window_y(window_y_)
    {
    }
} // namespace antara::gaming::event
```




