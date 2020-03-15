---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.rectangle.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.rectangle.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::geometry](Namespaces/namespaceantara_1_1gaming_1_1geometry.md)** <br>< doom::meta::list  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::geometry::rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md)**  |


## Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/component_8rectangle_8hpp.md#function-refl_auto)**(type([antara::gaming::geometry::rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md)) , field(size) )  |







## Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::geometry::rectangle) ,
    field(size) 
)
```
































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

#include <entt/entity/entity.hpp>   
#include <entt/entity/registry.hpp> 

#ifdef ANTARA_LUA_SCRIPTING_ENABLED
#    include <sol/sol.hpp> 
#endif

#include "antara/gaming/core/safe.refl.hpp"                 
#include "antara/gaming/graphics/component.color.hpp"       
#include "antara/gaming/math/vector.hpp"                    
#include "antara/gaming/transform/component.position.hpp"   
#include "antara/gaming/transform/component.properties.hpp" 

namespace antara::gaming::geometry
{
    struct rectangle
    {
        rectangle() noexcept = default;

        rectangle(const rectangle& other) noexcept = default;

        rectangle(math::vec2f size_) noexcept;

        rectangle& operator=(const rectangle& other) noexcept = default;

#ifdef ANTARA_LUA_SCRIPTING_ENABLED
        using constructors = sol::constructors<rectangle(), rectangle(const rectangle& other), rectangle(math::vec2f)>;
#endif

        math::vec2f size{math::vec2f::scalar(50.f)};
    };

    entt::entity blueprint_rectangle(
        entt::registry& registry, math::vec2f size, graphics::fill_color fill_color = graphics::white, transform::position_2d pos = math::vec2f::scalar(0.f),
        graphics::outline_color out_color = graphics::transparent, const transform::properties& prop = {}) noexcept;
} // namespace antara::gaming::geometry

REFL_AUTO(type(antara::gaming::geometry::rectangle), field(size));
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
