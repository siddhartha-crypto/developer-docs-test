

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/core/antara/gaming/core/open.url.browser.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/core/antara/gaming/core/open.url.browser.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::core](Namespaces/namespaceantara_1_1gaming_1_1core.md)** <br>SDK Headers.  |
















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

#ifdef _WIN32

#    include "antara/gaming/core/details/windows/open.url.browser.hpp"

#elif __APPLE__ || __linux__

#    include "antara/gaming/core/details/posix/open.url.browser.hpp"

#endif

namespace antara::gaming::core
{
    inline void
    open_url_browser(const std::string& url) noexcept
    {
        details::open_url_browser(url);
    }
} // namespace antara::gaming::core
```




