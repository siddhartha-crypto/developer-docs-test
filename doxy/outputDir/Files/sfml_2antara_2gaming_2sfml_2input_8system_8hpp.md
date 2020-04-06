

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/input.system.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/input.system.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sfml](Namespaces/namespaceantara_1_1gaming_1_1sfml.md)**  |

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::sfml::input_system](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md)**  |


### Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/sfml_2antara_2gaming_2sfml_2input_8system_8hpp.md#function-refl_auto)**(type([antara::gaming::sfml::input_system](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md)) )  |








### Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::sfml::input_system) 
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

#include "antara/gaming/core/safe.refl.hpp"
#include "antara/gaming/ecs/system.hpp"
#include "antara/gaming/event/get.mouse.position.hpp"
#include "antara/gaming/event/set.mouse.position.hpp"
#include <SFML/Graphics/RenderWindow.hpp>

namespace antara::gaming::sfml
{
    class input_system final : public ecs::pre_update_system<input_system>
    {
      public:
        input_system(entt::registry& registry, sf::RenderWindow& window) noexcept;

        void update() noexcept final;

        void on_fill_mouse_position(const event::get_mouse_position& evt) noexcept;
        void on_set_mouse_position(const event::set_mouse_position& evt) noexcept;

      private:
        [[nodiscard]] auto translate_window_coord(int x, int y) const;

        sf::RenderWindow& window_;
    };
} // namespace antara::gaming::sfml

REFL_AUTO(type(antara::gaming::sfml::input_system));
```




