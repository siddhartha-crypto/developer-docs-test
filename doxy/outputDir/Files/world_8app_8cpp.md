---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/world/antara/gaming/world/world.app.cpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/world/antara/gaming/world/world.app.cpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::world](Namespaces/namespaceantara_1_1gaming_1_1world.md)** <br>< std::string  |



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[emscripten_antara_loop](Files/world_8app_8cpp.md#function-emscripten_antara_loop)**(void * world) <br>< LOG_SCOPE_FUNCTION DVLOG_F  |







## Functions Documentation

### function emscripten_antara_loop

```cpp
void emscripten_antara_loop(
    void * world
)
```

< LOG_SCOPE_FUNCTION DVLOG_F 

























Dependencies HeadersSDK Headers < config::load_configuration<graphics::canvas_2d> < config::load_configuration < core::assets_real_path < event::start_game, event::quit_game 






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

#include <loguru.hpp> 

#if defined(__EMSCRIPTEN__) && defined(EMSCRIPTEN_ONLY_WEB)
#    include <emscripten.h> 
#endif


#include "antara/gaming/config/config.game.maker.hpp" 
#include "antara/gaming/config/config.loading.hpp"    
#include "antara/gaming/core/real.path.hpp"           
#include "antara/gaming/event/start.game.hpp"         
#include "antara/gaming/world/world.app.hpp"

// LCOV_EXCL_START
void
emscripten_antara_loop(void* world)
{
    static_cast<antara::gaming::world::app*>(world)->process_one_frame();
}
// LCOV_EXCL_STOP
namespace antara::gaming::world
{
    app::app(std::string config_maker_name) noexcept
    {
        LOG_SCOPE_FUNCTION(INFO);
        auto  cfg_maker     = config::load_configuration<graphics::canvas_2d>(core::assets_real_path() / "config", std::move(config_maker_name));
        auto& canvas_2d_cmp = this->entity_registry_.set<graphics::canvas_2d>(cfg_maker);
        canvas_2d_cmp.reset_canvas();
        dispatcher_.sink<event::quit_game>().connect<&app::receive_quit_game>(*this);
    }

    void
    app::receive_quit_game(const event::quit_game& evt) noexcept
    {
        LOG_SCOPE_FUNCTION(INFO);
        DVLOG_F(loguru::Verbosity_WARNING, "Received quit game event");
        this->is_running_        = false;
        this->game_return_value_ = evt.return_value_;
        // LCOV_EXCL_START
#if defined(__EMSCRIPTEN__) && defined(EMSCRIPTEN_ONLY_WEB)
        emscripten_cancel_main_loop();
#endif
        // LCOV_EXCL_STOP
    }

    int
    app::run() noexcept
    {
        LOG_SCOPE_FUNCTION(INFO);
        if (not system_manager_.nb_systems())
        {
            return this->game_return_value_;
        }
        this->dispatcher_.trigger<event::start_game>();
        this->is_running_ = true;
        this->system_manager_.start();
        // LCOV_EXCL_START
#if defined(__EMSCRIPTEN__) && defined(EMSCRIPTEN_ONLY_WEB)
        emscripten_set_main_loop_arg(emscripten_antara_loop, this, 0, 1);
#else
        // LCOV_EXCL_STOP
        while (this->is_running_)
        {
            process_one_frame();
        }
#endif
        return this->game_return_value_;
    }

    void
    app::process_one_frame()
    {
        this->system_manager_.update();
    }

    app::~app() noexcept
    {
        LOG_SCOPE_FUNCTION(INFO);
        DVLOG_F(loguru::Verbosity_INFO, "Quitting game with value: {}", game_return_value_);
    }
} // namespace antara::gaming::world
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
