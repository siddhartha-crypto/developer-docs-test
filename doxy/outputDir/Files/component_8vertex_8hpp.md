---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.vertex.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/geometry/antara/gaming/geometry/component.vertex.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::geometry](Namespaces/namespaceantara_1_1gaming_1_1geometry.md)** <br>< doom::meta::list  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::geometry::vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md)**  |
| struct | **[antara::gaming::geometry::vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md)**  |













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
#include <string>   
#include <utility>  
#include <vector>   

#include <entt/entity/entity.hpp> 

#ifdef ANTARA_LUA_SCRIPTING_ENABLED

#    include <sol/sol.hpp> 

#endif

#include "antara/gaming/core/safe.refl.hpp"               
#include "antara/gaming/graphics/component.color.hpp"     
#include "antara/gaming/transform/component.position.hpp" 

namespace antara::gaming::geometry
{
    enum vertex_geometry_type
    {
        points,
        lines,
        line_strip,
        triangles,
        triangle_strip,
        triangle_fan,
        quads
    };

    struct vertex
    {
        transform::position_2d pos{transform::position_2d::scalar(0.f)};
        transform::position_2d texture_pos{transform::position_2d::scalar(0.f)};
        graphics::color        pixel_color{graphics::white};
    };

    struct vertex_array
    {
        vertex_array() noexcept = default;

        vertex_array(std::vector<vertex> vertices_) noexcept : vertices(std::move(vertices_))
        {
        }

        vertex_array(std::vector<vertex> vertices_, vertex_geometry_type geometry_type_, std::optional<entt::entity> entity) noexcept :
            vertices(std::move(vertices_)), geometry_type(geometry_type_), entity_that_own_render_texture(entity)
        {
        }

        vertex_array(std::vector<vertex> vertices_, std::optional<std::string> texture_id_) noexcept :
            vertices(std::move(vertices_)), texture_id(std::move(texture_id_))
        {
        }

        vertex_array(std::vector<vertex> vertices_, vertex_geometry_type geometry_type_, std::optional<std::string> texture_id_) noexcept :
            vertices(std::move(vertices_)), geometry_type(geometry_type_), texture_id(std::move(texture_id_))
        {
        }

        vertex_array(std::vector<vertex> vertices_, vertex_geometry_type geometry_type_) noexcept :
            vertices(std::move(vertices_)), geometry_type(geometry_type_)
        {
        }

        std::vector<vertex>  vertices;
        vertex_geometry_type geometry_type;

        std::optional<std::string> texture_id{std::nullopt};

        std::optional<entt::entity> entity_that_own_render_texture{std::nullopt};

#ifdef ANTARA_LUA_SCRIPTING_ENABLED
        using constructors = sol::constructors<vertex_array(), vertex_array(std::vector<vertex>), vertex_array(std::vector<vertex>, vertex_geometry_type)>;
#endif
    };
} // namespace antara::gaming::geometry

REFL_AUTO(type(antara::gaming::geometry::vertex), field(pos), field(texture_pos), field(pixel_color))
REFL_AUTO(type(antara::gaming::geometry::vertex_array), field(vertices), field(geometry_type))
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
