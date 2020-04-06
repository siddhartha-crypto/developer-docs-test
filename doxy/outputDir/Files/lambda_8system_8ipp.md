

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/lambda.system.ipp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/ecs/antara/gaming/ecs/lambda.system.ipp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |
















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

namespace antara::gaming::ecs
{
    template <typename SystemType>
    lambda_system<SystemType>::lambda_system(entt::registry& registry, ftor lambda_contents, std::string lambda_name) noexcept :
        TSystem::system(registry), lambda_contents_(std::move(lambda_contents)), lambda_name_(std::move(lambda_name))
    {
        if (lambda_contents_.on_create != nullptr)
        {
            lambda_contents_.on_create();
        }
    }

    template <typename SystemType>
    lambda_system<SystemType>::~lambda_system() noexcept
    {
        if (lambda_contents_.on_destruct != nullptr)
        {
            lambda_contents_.on_destruct();
        }
    }

    template <typename SystemType>
    void
    lambda_system<SystemType>::update() noexcept
    {
        if (lambda_contents_.on_update != nullptr)
        {
            lambda_contents_.on_update();
        }
    }

    template <typename SystemType>
    void
    lambda_system<SystemType>::post_update() noexcept
    {
        if (lambda_contents_.on_post_update != nullptr)
        {
            lambda_contents_.on_post_update();
        }
    }
} // namespace antara::gaming::ecs
```




