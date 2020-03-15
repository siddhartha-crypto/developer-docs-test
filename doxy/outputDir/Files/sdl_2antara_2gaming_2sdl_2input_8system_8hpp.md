---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/input.system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/input.system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sdl](Namespaces/namespaceantara_1_1gaming_1_1sdl.md)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::sdl::input_system](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md)**  |













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

#include "antara/gaming/ecs/system.hpp"
#include <SDL2/SDL.h>

namespace antara::gaming::sdl
{
    class input_system final : public ecs::pre_update_system<input_system>
    {
      public:
        explicit input_system(entt::registry& registry, SDL_Window* window);
        ~input_system() noexcept final = default;
        void update() noexcept final;

      private:
        SDL_Window* window_;
    };
} // namespace antara::gaming::sdl

REFL_AUTO(type(antara::gaming::sdl::input_system))
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
