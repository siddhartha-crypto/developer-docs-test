

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/blockchain/antara/gaming/blockchain/nspv.system.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/blockchain/antara/gaming/blockchain/nspv.system.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::blockchain](Namespaces/namespaceantara_1_1gaming_1_1blockchain.md)** <br>< std::exception  |

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::blockchain::nspv](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md)**  |
| struct | **[antara::gaming::blockchain::nspv_tx_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__tx__answer.md)**  |















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

#include <cstddef> 

#include <filesystem>    
#include <optional>      
#include <string>        
#include <unordered_map> 

#include <entt/entity/registry.hpp> 
#include <reproc++/reproc.hpp>      

#include "antara/gaming/core/real.path.hpp" 
#include "antara/gaming/ecs/system.hpp"     
#include "nspv.api.hpp"

namespace fs = std::filesystem;

namespace antara::gaming::blockchain
{
    struct nspv_tx_answer
    {
        nspv_api::spend_answer                    send_answer;
        std::optional<nspv_api::broadcast_answer> broadcast_answer{std::nullopt};
    };
    class nspv final : public ecs::logic_update_system<nspv>
    {
        struct nspv_process
        {
            nspv_process(reproc::process background_, std::size_t rpcport_) noexcept;

            ~nspv_process();

            reproc::process background;
            std::size_t     rpcport;
            std::string     endpoint;
            std::string     address{""};
        };

        using nspv_registry = std::unordered_map<std::string, nspv_process>;

        fs::path      tools_path_;
        nspv_registry registry_;
        std::size_t   pin_;
        bool          is_pin_set_for_the_session_{false};

      public:
        nspv(entt::registry& registry, fs::path tools_path = core::assets_real_path() / "tools") noexcept;

        ~nspv() noexcept final;

        static bool is_wif_wallet_exist() noexcept;

        void update() noexcept final;

        bool is_transaction_pending(const std::string& coin, const std::string& txid, std::size_t vout) noexcept;

        void set_pin_for_the_session(const std::string& pin);

        [[nodiscard]] const std::string& get_address(const std::string& coin) const;

        bool spawn_nspv_instance(const std::string& coin, bool auto_login = false, std::optional<std::size_t> rpcport_in = std::nullopt) noexcept;


        bool load_from_env(const std::string& coin, const std::string& env_variable) noexcept;

        [[nodiscard]] double get_balance(const std::string& coin) const noexcept;

        [[nodiscard]] const std::string& get_endpoint(const std::string& coin) const noexcept;

        nspv_tx_answer send(const std::string& coin, const std::string& address, double amount) noexcept;
    };
} // namespace antara::gaming::blockchain

REFL_AUTO(type(antara::gaming::blockchain::nspv))
```




