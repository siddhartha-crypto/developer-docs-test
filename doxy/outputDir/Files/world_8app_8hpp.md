---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/world/antara/gaming/world/world.app.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/world/antara/gaming/world/world.app.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::world](Namespaces/namespaceantara_1_1gaming_1_1world.md)** <br>< std::string  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::world::app](Classes/classantara_1_1gaming_1_1world_1_1app.md)**  |













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

#include <entt/entity/registry.hpp>   
#include <entt/signal/dispatcher.hpp> 

#include "antara/gaming/ecs/system.manager.hpp" 
#include "antara/gaming/event/quit.game.hpp"    

namespace antara::gaming::world
{
    class app
    {
        bool is_running_{false};
        int  game_return_value_{0};

      public:
        app(std::string config_maker_name = "game.config.maker.json") noexcept;

        ~app() noexcept;

        void receive_quit_game(const event::quit_game& evt) noexcept;

        int run() noexcept;

        void process_one_frame();

      protected:
        entt::registry      entity_registry_;
        entt::dispatcher&   dispatcher_{this->entity_registry_.set<entt::dispatcher>()};
        ecs::system_manager system_manager_{entity_registry_};
    };
} // namespace antara::gaming::world
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
