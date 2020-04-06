

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/graphic.system.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sdl/antara/gaming/sdl/graphic.system.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sdl](Namespaces/namespaceantara_1_1gaming_1_1sdl.md)**  |

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::sdl::graphic_system](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md)**  |















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

#include "antara/gaming/ecs/system.hpp"
#include "antara/gaming/sdl/sdl.timer.hpp"
#include <SDL2/SDL.h>

namespace antara::gaming::sdl
{
    using st_high_dpi_factor = st::type<float, struct high_dpi_factor>;

    class graphic_system final : public ecs::post_update_system<graphic_system>
    {
      public:
        explicit graphic_system(entt::registry& registry);

        ~graphic_system() noexcept final;

        void update() noexcept final;

        void render() noexcept;

        void
        set_framerate_limit(int fps) noexcept
        {
            fps_cap_ = fps;
        };

        [[nodiscard]] SDL_Window*
        get_window() const noexcept
        {
            return window_;
        }

      private:
        SDL_Window*   window_{nullptr};
        SDL_GLContext gl_context_;
        timer         timer_;
        int           fps_cap_{60};
    };
} // namespace antara::gaming::sdl

REFL_AUTO(type(antara::gaming::sdl::graphic_system))
```




