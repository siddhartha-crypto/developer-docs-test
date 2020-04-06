

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/transform/antara/gaming/transform/component.properties.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/transform/antara/gaming/transform/component.properties.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::transform](Namespaces/namespaceantara_1_1gaming_1_1transform.md)** <br>< doom::meta::list  |

### Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md)**  |
| struct | **[antara::gaming::transform::ts_rect](Classes/structantara_1_1gaming_1_1transform_1_1ts__rect.md)**  |















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
#include "antara/gaming/math/vector.hpp"    

namespace antara::gaming::transform
{
    struct ts_rect
    {
        math::vec2f pos;
        math::vec2f size;
    };

    struct properties
    {
        math::vec2f scale{math::vec2f::scalar(1.f)};
        float       rotation{0.f};
        ts_rect     local_bounds{};  
        ts_rect     global_bounds{}; 

        properties() noexcept = default;

        properties(const properties& other) noexcept = default;

        properties& operator=(const properties& other) noexcept = default;
    };
} // namespace antara::gaming::transform

REFL_AUTO(type(antara::gaming::transform::ts_rect), field(pos), field(size))

REFL_AUTO(type(antara::gaming::transform::properties), field(scale), field(rotation), field(local_bounds), field(global_bounds))
```




