

## /home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/lua/antara/gaming/lua/lua.system.hpp

#### Full Title:
```
/home/siddhartha/Documents/01-Studio/01-Commercial-Public/01-Commercial-Clients/01-Komodo/2020-03-14-developer-docs-test/doxy/submodules/antara-gaming-sdk/modules/lua/antara/gaming/lua/lua.system.hpp
```







### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::lua](Namespaces/namespaceantara_1_1gaming_1_1lua.md)** <br>< std::move  |

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::lua::scripting_system](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md)**  |


### Functions

|                | Name           |
| -------------- | -------------- |
|  | **[REFL_AUTO](Files/lua_2antara_2gaming_2lua_2lua_8system_8hpp.md#function-refl_auto)**(type([antara::gaming::lua::scripting_system](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md)) ) <br>Private Template Implementation.  |








### Functions Documentation

### function REFL_AUTO

```cpp
REFL_AUTO(
    type(antara::gaming::lua::scripting_system) 
)
```

Private Template Implementation. 

























Public Template Implementation 







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

#include <exception>  
#include <filesystem> 
#include <functional> 
#include <memory>     
#include <string>     
#include <utility>    

#include <entt/entity/registry.hpp> 
#include <loguru.hpp>               
#include <meta/sequence/list.hpp>   
#include <sol/state.hpp>            

#include "antara/gaming/core/real.path.hpp"    
#include "antara/gaming/core/safe.refl.hpp"    
#include "antara/gaming/ecs/system.hpp"        
#include "antara/gaming/event/type.traits.hpp" 

namespace fs = std::filesystem;

namespace antara::gaming::lua
{
    class scripting_system final : public ecs::logic_update_system<lua::scripting_system>
    {
        template <typename T>
        using member_type_constructors_detector = typename T::constructors;

        template <typename TypeToRegister, typename... Members>
        void register_type_impl(refl::type_list<Members...>, const char* replace_name = nullptr) noexcept;

        void register_entity_registry();

        std::shared_ptr<sol::state> lua_state_{std::make_shared<sol::state>()};
        fs::path                    directory_path_;
        fs::path                    systems_directory_path_;
        fs::path                    scenes_directory_path_;
        fs::path                    script_lib_directory_;

      public:
        scripting_system(
            entt::registry& entity_registry, fs::path script_directory = core::assets_real_path() / "scripts" / "lua",
            fs::path script_system_directory = core::assets_real_path() / "scripts" / "systems" / "lua",
            fs::path script_scenes_directory = core::assets_real_path() / "scripts" / "scenes" / "lua",
            fs::path script_lib_directory    = core::assets_real_path() / "scripts" / "lib" / "lua") noexcept;

        ~scripting_system() noexcept final = default;

        void update() noexcept final;

        sol::state& get_state() noexcept;

        std::shared_ptr<sol::state> get_state_ptr() noexcept;

        bool load_script(const std::string& file_name, const fs::path& script_directory) noexcept;

        bool load_script(const std::string& file_name) noexcept;

        bool load_scripts(const fs::path& directory_path) noexcept;

        template <typename TypeToRegister>
        void register_type(const char* replace_name = nullptr) noexcept;


        template <typename... Args>
        std::optional<sol::unsafe_function_result> execute_safe_function(std::string function_name, std::string table_name, Args&&... args);

        template <typename TEvent>
        void register_event() noexcept;

        template <typename TComponent>
        void register_component() noexcept;

        template <typename... TComponents>
        void register_components_list(doom::meta::list<TComponents...>) noexcept;

        template <typename... TEvents>
        void register_events_list(doom::meta::list<TEvents...>) noexcept;

        bool load_script_from_entities() noexcept;

        bool load_scripted_system(const std::string& script_name) noexcept;
    };
} // namespace antara::gaming::lua

#include "antara/gaming/lua/lua.system.priv.ipp"

#include "antara/gaming/lua/lua.system.ipp"

REFL_AUTO(type(antara::gaming::lua::scripting_system));
```




