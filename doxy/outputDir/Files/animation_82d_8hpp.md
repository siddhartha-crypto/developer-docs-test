

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/animation2d/antara/gaming/animation2d/animation.2d.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/animation2d/antara/gaming/animation2d/animation.2d.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::animation2d](Namespaces/namespaceantara_1_1gaming_1_1animation2d.md)** <br>< std::size_t  |

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::animation2d::anim_system](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md)**  |


### Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/animation_82d_8hpp.md#function-refl_auto)**(type([antara::gaming::animation2d::anim_system](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md)) )  |








### Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::animation2d::anim_system) 
)
```

































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

#include <cstddef> 

#include <string> 
#include <vector> 

#include <entt/entity/entity.hpp>   
#include <entt/entity/registry.hpp> 

#include "antara/gaming/animation2d/antara.animation2d.ranged_anim.hpp" 
#include "antara/gaming/animation2d/component.animation.2d.hpp"         
#include "antara/gaming/ecs/system.hpp"                                 
#include "antara/gaming/event/fill.image.properties.hpp"                
#include "antara/gaming/graphics/component.sprite.hpp"                  

namespace antara::gaming::animation2d
{
    class anim_system final : public ecs::logic_update_system<anim_system>
    {
        struct anim_internal;

        using frame_array        = std::vector<graphics::rect>;
        using animation_registry = std::unordered_map<std::string, anim_internal>;

        struct anim_internal
        {
            frame_array frames;
            std::string texture_appearance;
        };

        void on_anim_cmp_replace(entt::registry& registry, entt::entity entity) noexcept;
        void on_anim_cmp_create(entt::registry& registry, entt::entity entity) noexcept;

        animation_registry animations_;

      public:
        explicit anim_system(entt::registry& registry) noexcept;

        void add_animation(
            std::string animation_id, const std::string& texture_appeareance, std::size_t nb_columns, std::size_t nb_lines, std::size_t nb_anims) noexcept;

        void add_animation(const std::string& texture_appeareance, std::size_t nb_columns, std::size_t nb_lines, const ranged_anim& ranged_animation) noexcept;

        void add_animations(
            const std::string& texture_appearance, std::size_t nb_columns, std::size_t nb_lines, const ranged_anim_array& ranged_animations) noexcept;

        void update() noexcept final;
    };
} // namespace antara::gaming::animation2d

REFL_AUTO(type(antara::gaming::animation2d::anim_system));
```




