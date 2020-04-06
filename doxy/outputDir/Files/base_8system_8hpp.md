

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/base.system.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/base.system.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**  |















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

#include <string> 

#include <entt/entity/registry.hpp>   
#include <entt/signal/dispatcher.hpp> 

#include "antara/gaming/ecs/system.type.hpp" 

namespace antara::gaming::ecs
{
    class base_system
    {
      public:
        base_system(entt::registry& entity_registry, bool im_a_plugin_system = false) noexcept;

        virtual ~base_system() noexcept = default;

        virtual void update() noexcept = 0;

        virtual void post_update() noexcept {};

        [[nodiscard]] virtual std::string get_name() const noexcept = 0;

        [[nodiscard]] virtual system_type get_system_type_rtti() const noexcept = 0;


        void mark() noexcept;

        void unmark() noexcept;

        [[nodiscard]] bool is_marked() const noexcept;

        void enable() noexcept;

        void disable() noexcept;

        [[nodiscard]] bool is_enabled() const noexcept;

        void im_a_plugin() noexcept;

        [[nodiscard]] bool is_a_plugin() const noexcept;

        void* get_user_data() noexcept;

        void set_user_data(void* data) noexcept;

      protected:
        entt::registry&   entity_registry_;
        entt::dispatcher& dispatcher_;
        void*             user_data_{nullptr};

      private:
        bool is_plugin_{false};
        bool marked_{false};
        bool enabled_{true};
    };
} // namespace antara::gaming::ecs
```




