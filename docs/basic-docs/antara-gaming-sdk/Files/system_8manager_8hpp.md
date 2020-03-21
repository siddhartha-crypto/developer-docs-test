---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/system.manager.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/system.manager.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::ecs::system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md)** <br>This class allows the manipulation of systems, the addition, deletion, update of systems, deactivation of a system, etc.  |













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

#include <cstddef> 

#include <algorithm>    
#include <array>        
#include <functional>   
#include <memory>       
#include <queue>        
#include <system_error> 
#include <tuple>        
#include <type_traits>  
#include <utility>      
#include <vector>       

#include <entt/entity/registry.hpp>       
#include <entt/signal/dispatcher.hpp>     
#include <loguru.hpp>                     
#include <range/v3/algorithm/any_of.hpp>  
#include <range/v3/algorithm/find_if.hpp> 
#include <tl/expected.hpp>                

#include "antara/gaming/ecs/base.system.hpp"           
#include "antara/gaming/ecs/event.add.base.system.hpp" 
#include "antara/gaming/ecs/system.hpp"                
#include "antara/gaming/ecs/system.type.hpp"           
#include "antara/gaming/event/fatal.error.hpp"         
#include "antara/gaming/timer/time.step.hpp"           

namespace antara::gaming::ecs
{
    class system_manager
    {

        using clock = std::chrono::steady_clock;

        using system_ptr = std::unique_ptr<base_system>;

        using system_array = std::vector<system_ptr>;

        using system_registry = std::array<system_array, system_type::size>;

        using systems_queue = std::queue<system_ptr>;

        base_system& add_system_(system_ptr&& system, system_type sys_type) noexcept;

        void sweep_systems_() noexcept;

        template <typename TSystem>
        tl::expected<std::reference_wrapper<TSystem>, std::error_code> get_system_() noexcept;

        template <typename TSystem>
        [[nodiscard]] tl::expected<std::reference_wrapper<const TSystem>, std::error_code> get_system_() const noexcept;

        entt::registry&   entity_registry_;
        entt::dispatcher& dispatcher_;
        timer::time_step  timestep_;
        system_registry   systems_{{}};
        systems_queue     systems_to_add_;
        bool              need_to_sweep_systems_{false};
        bool              game_is_running_{false};

      public:

        explicit system_manager(entt::registry& registry, bool subscribe_to_internal_events = true) noexcept;

        ~system_manager() noexcept;


        void receive_add_base_system(const ecs::event::add_base_system& evt) noexcept;

        void start() noexcept;

        std::size_t update() noexcept;

        std::size_t update_systems(system_type system_type_to_update) noexcept;

        template <typename TSystem>
        const TSystem& get_system() const noexcept;

        template <typename TSystem>
        TSystem& get_system() noexcept;

        template <typename... TSystems>
        std::tuple<std::add_lvalue_reference_t<TSystems>...> get_systems() noexcept;

        template <typename... TSystems>
        [[nodiscard]] std::tuple<std::add_lvalue_reference_t<std::add_const_t<TSystems>>...> get_systems() const noexcept;

        template <typename TSystem>
        [[nodiscard]] bool has_system() const noexcept;

        template <typename... TSystems>
        [[nodiscard]] bool has_systems() const noexcept;

        template <typename TSystem>
        bool mark_system() noexcept;

        template <typename... TSystems>
        bool mark_systems() noexcept;

        template <typename TSystem>
        bool enable_system() noexcept;

        template <typename... TSystems>
        bool enable_systems() noexcept;

        template <typename TSystem>
        bool disable_system() noexcept;

        template <typename... TSystems>
        bool disable_systems() noexcept;

        [[nodiscard]] std::size_t nb_systems() const noexcept;

        [[nodiscard]] std::size_t nb_systems(system_type sys_type) const noexcept;

        template <typename TSystem, typename... TSystemArgs>
        TSystem& create_system(TSystemArgs&&... args) noexcept;

        template <typename TSystem, typename... TSystemArgs>
        void create_system_rt(TSystemArgs&&... args) noexcept;

        template <typename... TSystems, typename... TArgs>
        auto load_systems(TArgs&&... args) noexcept;


        template <typename SystemToSwap, typename SystemB>
        bool prioritize_system() noexcept;

        system_manager& operator+=(system_ptr system) noexcept;
    };
} // namespace antara::gaming::ecs

#include "antara/gaming/ecs/system.manager.ipp"
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
