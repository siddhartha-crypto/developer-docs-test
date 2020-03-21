---
title: /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/config/antara/gaming/config/config.loading.hpp


---

# /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/config/antara/gaming/config/config.loading.hpp







## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::config::details](Namespaces/namespaceantara_1_1gaming_1_1config_1_1details.md)**  |
| **[antara::gaming::config](Namespaces/namespaceantara_1_1gaming_1_1config.md)** <br>< assert  |














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

#include <cassert> 

#include <filesystem>   
#include <fstream>      
#include <string>       
#include <system_error> 

#include <nlohmann/json.hpp> 

namespace antara::gaming::config
{
    namespace details
    {
        template <typename TConfig>
        TConfig
        create_configuration(const std::filesystem::path& config_path, const std::filesystem::path& full_path) noexcept
        {
            TConfig         config_to_export{};
            std::error_code ec;
            std::filesystem::create_directories(config_path, ec);
            if (ec)
            {
                return config_to_export;
            }
            std::ofstream ofs(full_path);
            assert(ofs.is_open());
            nlohmann::json config_json_data;
            config_json_data = config_to_export;
            ofs << config_json_data;
            return config_to_export;
        }

        template <typename TConfig>
        TConfig
        load_config(const std::filesystem::path& full_path) noexcept
        {
            TConfig       config_to_fill{};
            std::ifstream ifs(full_path);
            assert(ifs.is_open());
            nlohmann::json config_json_data;
            ifs >> config_json_data;
            config_to_fill = config_json_data;
            return config_to_fill;
        }
    } // namespace details

    template <typename TConfig>
    TConfig
    load_configuration(std::filesystem::path&& config_path, std::string filename) noexcept
    {
        const auto& full_path = config_path / std::move(filename);
        if (!std::filesystem::exists(config_path) || !std::filesystem::exists(full_path))
        {
            return details::create_configuration<TConfig>(config_path, full_path);
        }
        return details::load_config<TConfig>(full_path);
    }
} // namespace antara::gaming::config
```


-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT
