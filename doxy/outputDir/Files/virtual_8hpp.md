---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/input/antara/gaming/input/virtual.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/input/antara/gaming/input/virtual.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::input](Namespaces/namespaceantara_1_1gaming_1_1input.md)** <br>< math::vec2i  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::input::virtual_input](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md)**  |













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

#include <string>        
#include <unordered_map> 
#include <unordered_set> 
#include <vector>        

#include <entt/entity/registry.hpp> 

#include "antara/gaming/event/key.pressed.hpp"           
#include "antara/gaming/event/key.released.hpp"          
#include "antara/gaming/event/mouse.button.pressed.hpp"  
#include "antara/gaming/event/mouse.button.released.hpp" 
#include "antara/gaming/input/keyboard.hpp"              
#include "antara/gaming/input/mouse.hpp"                 

namespace antara::gaming::input
{
    class virtual_input
    {
      public:
        template <typename T>
        using bunch_of = std::unordered_set<T>;

        static void on_key_pressed(const event::key_pressed& evt) noexcept;

        static void on_key_released(const event::key_released& evt) noexcept;

        static void on_mouse_button_pressed(const event::mouse_button_pressed& evt) noexcept;

        static void on_mouse_button_released(const event::mouse_button_released& evt) noexcept;

        static void init(entt::registry& registry) noexcept;

        static void update() noexcept;

        static bool is_held(const char* name) noexcept;

        static bool is_held(const std::string& name) noexcept;

        static bool is_tapped(const char* name) noexcept;

        static bool is_tapped(const std::string& name) noexcept;

        static bool is_released(const char* name) noexcept;

        static bool is_released(const std::string& name) noexcept;

        static void create(const char* name, bunch_of<input::key> keys, bunch_of<input::mouse_button> buttons) noexcept;

        static void create(const std::string& name, bunch_of<input::key> keys, bunch_of<input::mouse_button> buttons) noexcept;

        static void remove(const char* name) noexcept;

        static void remove(const std::string& name) noexcept;

      private:
        struct input_internal_collections
        {
            bunch_of<input::key>          keys;
            bunch_of<input::mouse_button> buttons;
            std::vector<bool>             held{false};
            bool                          held_last_tick{false};
            bool                          tapped{false};
            bool                          released{false};
        };

        using input_state_collection = std::unordered_map<const char*, input_internal_collections>;
        static input_state_collection cached_states_;
    };
} // namespace antara::gaming::input
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT