---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/lua/antara/gaming/lua/details/lua.scripted.system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/lua/antara/gaming/lua/details/lua.scripted.system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::lua::details](Namespaces/namespaceantara_1_1gaming_1_1lua_1_1details.md)** <br>< std::move, std::forward  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::lua::details::scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)**  |













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

#include <exception> 
#include <memory>    
#include <utility>   

#include <loguru.hpp>             
#include <meta/sequence/list.hpp> 
#include <sol/state.hpp>          

#include "antara/gaming/ecs/system.hpp" 
#include "antara/gaming/event/all.events.hpp"

namespace antara::gaming::lua::details
{
    template <typename SystemType>
    class scripted_system final : public ecs::system<scripted_system<SystemType>, SystemType>
    {
      public:
        using TSystem = ecs::system<scripted_system<SystemType>, SystemType>;

        scripted_system(entt::registry& entity_registry, std::string table_name, std::shared_ptr<sol::state> state) noexcept :
            TSystem::system(entity_registry), table_name_(std::move(table_name)), state_(state)
        {
            safe_function_("on_construct");
            register_common_events(event::events_list{});
        }

        ~scripted_system() noexcept final
        {
            safe_function_("on_destruct");
            remove_common_events(event::events_list{});
        }

        void
        update() noexcept final
        {
            safe_function_("update");
        }

        template <typename TEvent>
        void
        receive(const TEvent& evt)
        {
            using namespace std::string_literals;
            constexpr auto info       = refl::reflect<TEvent>();
            std::string    final_name = info.name.str();
            if (std::size_t found = info.name.str().find_last_of(":"); found != std::string::npos)
            {
                final_name = info.name.str().substr(found + 1);
            }
            safe_function_("on_"s + final_name, evt);
        }


      private:
        template <typename... Args>
        void
        safe_function_(const std::string& function, Args&&... args) noexcept
        {
            if (not this->is_enabled())
                return;
            try
            {
                sol::optional<sol::function> f = (*this->state_)[table_name_][function];
                if (f && f.value() != sol::lua_nil)
                {
                    f.value()(std::forward<Args>(args)...);
                }
            }
            catch (const std::exception& error)
            {
                VLOG_F(loguru::Verbosity_ERROR, "safe function error: {}", error.what());
            }
        }

        template <typename TEvent>
        void
        register_common_event() noexcept
        {
            this->dispatcher_.template sink<TEvent>().template connect<&scripted_system::receive<TEvent>>(*this);
        }

        template <typename... TEvents>
        void register_common_events(doom::meta::list<TEvents...>) noexcept
        {
            (register_common_event<TEvents>(), ...);
        }

        template <typename TEvent>
        void
        remove_common_event() noexcept
        {
            this->dispatcher_.template sink<TEvent>().disconnect(*this);
        }

        template <typename... TEvents>
        void remove_common_events(doom::meta::list<TEvents...>) noexcept
        {
            (remove_common_event<TEvents>(), ...);
        }


        std::string                 table_name_;
        std::shared_ptr<sol::state> state_;
    };


    using lua_post_scripted_system  = scripted_system<ecs::st_system_post_update>;
    using lua_pre_scripted_system   = scripted_system<ecs::st_system_pre_update>;
    using lua_logic_scripted_system = scripted_system<ecs::st_system_logic_update>;
} // namespace antara::gaming::lua::details

REFL_AUTO(template((typename SystemType), (antara::gaming::lua::details::scripted_system<SystemType>)))
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
