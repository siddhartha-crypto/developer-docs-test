

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/resources.loader.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/sfml/antara/gaming/sfml/resources.loader.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::sfml](Namespaces/namespaceantara_1_1gaming_1_1sfml.md)**  |

### Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::sfml::loader< sf::Music >](Classes/structantara_1_1gaming_1_1sfml_1_1loader_3_01sf_1_1_music_01_4.md)**  |
| struct | **[antara::gaming::sfml::loader](Classes/structantara_1_1gaming_1_1sfml_1_1loader.md)**  |















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

#include <SFML/Audio/Music.hpp>
#include <SFML/Audio/SoundBuffer.hpp>
#include <SFML/Graphics/Font.hpp>
#include <SFML/Graphics/Texture.hpp>
#include <entt/resource/cache.hpp>
#include <entt/resource/handle.hpp>
#include <entt/resource/loader.hpp>

namespace antara::gaming::sfml
{
    template <typename ResourceType>
    struct loader final : entt::loader<loader<ResourceType>, ResourceType>
    {
        template <typename... Args>
        std::shared_ptr<ResourceType>
        load(Args&&... args) const
        {
            auto resource_ptr = std::make_shared<ResourceType>();
            if (not resource_ptr->loadFromFile(std::forward<Args>(args)...))
            {
                throw std::runtime_error("Impossible to load file");
            }
            return resource_ptr;
        }
    };

    template <>
    struct loader<sf::Music> final : ::entt::loader<loader<sf::Music>, sf::Music>
    {
        template <typename... Args>
        std::shared_ptr<sf::Music>
        load(Args&&... args) const
        {
            auto resource_ptr = std::make_shared<sf::Music>();
            if (not resource_ptr->openFromFile(std::forward<Args>(args)...))
            {
                throw std::runtime_error("Impossible to load file");
            }
            return resource_ptr;
        }
    };

    using textures_cache = entt::cache<sf::Texture>;
    using musics_cache   = entt::cache<sf::Music>;
    using sounds_cache   = entt::cache<sf::SoundBuffer>;
    using fonts_cache    = entt::cache<sf::Font>;

    using textures_loader = loader<sf::Texture>;
    using musics_loader   = loader<sf::Music>;
    using sounds_loader   = loader<sf::SoundBuffer>;
    using fonts_loader    = loader<sf::Font>;

    using texture_handle = entt::handle<sf::Texture>;
    using music_handle   = entt::handle<sf::Music>;
    using sound_handle   = entt::handle<sf::SoundBuffer>;
    using font_handle    = entt::handle<sf::Font>;
} // namespace antara::gaming::sfml
```




