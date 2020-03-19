---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/lambda.system.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/lambda.system.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::ecs::lambda_system](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md)**  |
| struct | **[antara::gaming::ecs::ftor](Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md)**  |













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

#include <functional> 
#include <string>     
#include <utility>    

#include <entt/entity/registry.hpp> 

#include "antara/gaming/core/safe.refl.hpp"  
#include "antara/gaming/ecs/system.hpp"      
#include "antara/gaming/ecs/system.type.hpp" 


namespace antara::gaming::ecs
{
    struct ftor
    {
        std::function<void()> on_create{nullptr};
        std::function<void()> on_update{nullptr};
        std::function<void()> on_destruct{nullptr};
        std::function<void()> on_post_update{nullptr};
    };

    template <typename SystemType>
    class lambda_system final : public ecs::system<lambda_system<SystemType>, SystemType>
    {
        using TSystem = ecs::system<lambda_system<SystemType>, SystemType>;

        ftor        lambda_contents_;
        std::string lambda_name_{""};

      public:
        lambda_system(entt::registry& registry, ftor lambda_contents, std::string lambda_name = "") noexcept;

        ~lambda_system() noexcept;

        void update() noexcept final;

        void post_update() noexcept final;
    };


} // namespace antara::gaming::ecs

#include "antara/gaming/ecs/lambda.system.ipp"

namespace antara::gaming::ecs
{
    using lambda_post_system  = lambda_system<ecs::st_system_post_update>;
    using lambda_pre_system   = lambda_system<ecs::st_system_pre_update>;
    using lambda_logic_system = lambda_system<ecs::st_system_logic_update>;
} // namespace antara::gaming::ecs

REFL_AUTO(template((typename SystemType), (antara::gaming::ecs::lambda_system<SystemType>)))
```


-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT
