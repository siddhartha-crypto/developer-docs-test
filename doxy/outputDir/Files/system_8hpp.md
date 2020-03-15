---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**  |













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
#include <type_traits> 

#include <loguru.hpp> 

#include "antara/gaming/core/safe.refl.hpp"  
#include "antara/gaming/ecs/base.system.hpp" 
#include "antara/gaming/ecs/system.type.hpp" 

namespace antara::gaming::ecs
{
    template <typename TSystemDerived, typename TSystemType>
    class system : public base_system
    {
      public:
        template <typename... TArgs>
        explicit system(TArgs&&... args) noexcept;

        ~system() noexcept override;
        ;

        void update() noexcept override = 0;

        static std::string get_class_name() noexcept;

        static constexpr system_type get_system_type() noexcept;


        [[nodiscard]] system_type get_system_type_rtti() const noexcept final;

        [[nodiscard]] std::string get_name() const noexcept final;
    };
} // namespace antara::gaming::ecs

#include "antara/gaming/ecs/system.ipp"

namespace antara::gaming::ecs
{

    template <typename TSystemDerived>
    using logic_update_system = system<TSystemDerived, st_system_logic_update>;


    template <typename TSystemDerived>
    using pre_update_system = system<TSystemDerived, st_system_pre_update>;

    template <typename TSystemDerived>
    using post_update_system = system<TSystemDerived, st_system_post_update>;
} // namespace antara::gaming::ecs
```


-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT
