---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/core/antara/gaming/core/api.scaling.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/core/antara/gaming/core/api.scaling.cpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::core](Namespaces/namespaceantara_1_1gaming_1_1core.md)** <br>SDK Headers.  |














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

#include "antara/gaming/core/api.scaling.hpp"

#ifdef _WIN32

#    include "antara/gaming/core/details/windows/api.scaling.hpp"

#elif __APPLE__

#    include "antara/gaming/core/details/osx/api.scaling.hpp"

#elif __linux__

#    include "antara/gaming/core/details/linux/api.scaling.hpp"

#elif EMSCRIPTEN
#    include "antara/gaming/core/details/emscripten/api.scaling.hpp"
#endif

namespace antara::gaming::core
{
    bool
    is_high_dpi_capable() noexcept
    {
        return details::is_high_dpi_capable();
    }

    std::pair<float, float>
    get_scaling_factor() noexcept
    {
        return details::get_scaling_factor();
    }
} // namespace antara::gaming::core
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT