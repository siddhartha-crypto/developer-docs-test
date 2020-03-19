---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.circle.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.circle.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::geometry](Namespaces/namespaceantara_1_1gaming_1_1geometry.md)** <br>< doom::meta::list  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::geometry::circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md)**  |
| struct | **[antara::gaming::geometry::circle_texture](Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md)**  |


## Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/component_8circle_8hpp.md#function-refl_auto)**(type([antara::gaming::geometry::circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md)) , field(radius) )  |







## Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::geometry::circle) ,
    field(radius) 
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

#include <optional> 

#include <entt/entity/entity.hpp>   
#include <entt/entity/registry.hpp> 

#ifdef ANTARA_LUA_SCRIPTING_ENABLED
#    include <sol/sol.hpp> 
#endif

#include "antara/gaming/core/safe.refl.hpp"                 
#include "antara/gaming/graphics/component.color.hpp"       
#include "antara/gaming/graphics/component.sprite.hpp"      
#include "antara/gaming/math/vector.hpp"                    
#include "antara/gaming/transform/component.position.hpp"   
#include "antara/gaming/transform/component.properties.hpp" 

namespace antara::gaming::geometry
{
    struct circle_texture
    {
        bool           native_size{true}; 
        graphics::rect texture_rec{};     
    };

    struct circle
    {
        circle(float radius_) noexcept;

        circle(float radius_, bool try_to_apply_rt, std::optional<circle_texture> circle_texture_props_ = std::nullopt) noexcept;

        circle(const circle& other) noexcept = default;

        circle() noexcept;

        circle& operator=(const circle& other) noexcept = default;

#ifdef ANTARA_LUA_SCRIPTING_ENABLED
        using constructors = sol::constructors<circle(), circle(const circle& other), circle(float radius)>;
#endif

        float                         radius{0.f};
        bool                          try_to_apply_rt{false};
        std::optional<circle_texture> circle_texture_props{std::nullopt};
    };

    entt::entity blueprint_circle(
        entt::registry& registry, float radius, graphics::fill_color fill_color = graphics::white, transform::position_2d pos = math::vec2f::scalar(0.f),
        graphics::outline_color out_color = graphics::transparent, const transform::properties& prop = {}) noexcept;

    void blueprint_circle(
        entt::entity, entt::registry& registry, float radius, graphics::fill_color fill_color = graphics::white,
        transform::position_2d pos = math::vec2f::scalar(0.f), bool try_to_apply_rt = false, std::optional<circle_texture> circle_texture_props = std::nullopt,
        graphics::outline_color out_color = graphics::transparent, const transform::properties& prop = {}) noexcept;
} // namespace antara::gaming::geometry

REFL_AUTO(type(antara::gaming::geometry::circle), field(radius));
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
