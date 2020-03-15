---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/core/antara/gaming/core/details/linux/real.path.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/core/antara/gaming/core/details/linux/real.path.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::core::details](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md)** <br>getpid()  |














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

#include <filesystem>
#include <string>
#include <unistd.h> 

namespace antara::gaming::core::details
{
    std::filesystem::path
    binary_real_path() noexcept
    {
        return std::filesystem::read_symlink("/proc/" + std::to_string(getpid()) + "/exe");
    }

    std::filesystem::path
    assets_real_path() noexcept
    {
        return binary_real_path().parent_path().parent_path() / "share/assets/";
    }
} // namespace antara::gaming::core::details
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
