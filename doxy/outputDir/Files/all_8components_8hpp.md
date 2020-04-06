

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/all.components.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/all.components.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs::component](Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1component.md)** <br>< doom::meta::list  |
















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

#include <meta/sequence/flatten.hpp> 
#include <meta/sequence/list.hpp>    

#include "antara/gaming/geometry/all.geometry.components.hpp"   
#include "antara/gaming/graphics/all.graphics.components.hpp"   
#include "antara/gaming/transform/all.transform.components.hpp" 

namespace antara::gaming::ecs::component
{
    using list_component_list = doom::meta::list<math::vector_type_list, transform::components_list, geometry::components_list, graphics::components_list>;
    using components_list     = doom::meta::flatten<list_component_list>;
} // namespace antara::gaming::ecs::component
```




