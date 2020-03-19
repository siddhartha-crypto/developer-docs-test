---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/all.geometry.components.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/all.geometry.components.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::geometry](Namespaces/namespaceantara_1_1gaming_1_1geometry.md)** <br>< doom::meta::list  |














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

#include <meta/sequence/list.hpp> 

#include "antara/gaming/geometry/component.circle.hpp"    
#include "antara/gaming/geometry/component.rectangle.hpp" 
#include "antara/gaming/geometry/component.vertex.hpp"    

namespace antara::gaming::geometry
{
    using components_list = doom::meta::list<circle, vertex, vertex_array, rectangle>;
}
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
