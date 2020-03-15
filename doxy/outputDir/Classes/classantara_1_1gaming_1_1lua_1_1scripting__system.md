---
title: antara::gaming::lua::scripting_system


---

# antara::gaming::lua::scripting_system








Inherits from [antara::gaming::ecs::system< lua::scripting_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[load_scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-load_scripted_system)**(const std::string & script_name)  |
| bool | **[load_script_from_entities](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-load_script_from_entities)**()  |
| void | **[register_events_list](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-register_events_list)**(doom::meta::list< TEvents... > )  |
| void | **[register_components_list](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-register_components_list)**(doom::meta::list< TComponents... > )  |
| void | **[register_component](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-register_component)**()  |
| void | **[register_event](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-register_event)**()  |
| std::optional< sol::unsafe_function_result > | **[execute_safe_function](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-execute_safe_function)**(std::string function_name, std::string table_name, Args &&... args)  |
| void | **[register_type](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-register_type)**(const char * replace_name =nullptr)  |
| bool | **[load_scripts](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-load_scripts)**(const fs::path & directory_path)  |
| bool | **[load_script](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-load_script)**(const std::string & file_name)  |
| bool | **[load_script](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-load_script)**(const std::string & file_name, const fs::path & script_directory)  |
| std::shared_ptr< sol::state > | **[get_state_ptr](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-get_state_ptr)**()  |
| sol::state & | **[get_state](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-get_state)**()  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-update)**() <br>Public member functions.  |
|  | **[~scripting_system](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-~scripting_system)**() =default <br>Destructor.  |
|  | **[scripting_system](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-scripting_system)**(entt::registry & entity_registry, fs::path script_directory =core::assets_real_path()/"scripts"/"lua", fs::path script_system_directory =core::assets_real_path()/"scripts"/"systems"/"lua", fs::path script_scenes_directory =core::assets_real_path()/"scripts"/"scenes"/"lua", fs::path script_lib_directory =core::assets_real_path()/"scripts"/"lib"/"lua") <br>Constructor.  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< lua::scripting_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

|                | Name           |
| -------------- | -------------- |
| constexpr [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type)**()  |
| std::string | **[get_class_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_class_name)**() <br>Public static functions.  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)**() const  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)**() const <br>Public member functions.  |
|  | **[~system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-~system)**() override <br>Destructor.  |
|  | **[system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-system)**(TArgs &&... args) <br>Constructor.  |









**Public Functions inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[set_user_data](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-set_user_data)**(void * data)  |
| void * | **[get_user_data](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_user_data)**()  |
| bool | **[is_a_plugin](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_a_plugin)**() const  |
| void | **[im_a_plugin](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-im_a_plugin)**()  |
| bool | **[is_enabled](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_enabled)**() const  |
| void | **[disable](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-disable)**()  |
| void | **[enable](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-enable)**()  |
| bool | **[is_marked](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_marked)**() const  |
| void | **[unmark](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-unmark)**()  |
| void | **[mark](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-mark)**()  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_system_type_rtti)**() const =0  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_name)**() const =0  |
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-post_update)**()  |
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



**Protected Attributes inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |








## Public Functions Documentation

### function load_scripted_system

```cpp
bool load_scripted_system(
    const std::string & script_name
)
```




























### function load_script_from_entities

```cpp
bool load_script_from_entities()
```




























### function register_events_list

```cpp
void register_events_list(
    doom::meta::list< TEvents... > 
)
```




























### function register_components_list

```cpp
void register_components_list(
    doom::meta::list< TComponents... > 
)
```




























### function register_component

```cpp
void register_component()
```




























### function register_event

```cpp
void register_event()
```




























### function execute_safe_function

```cpp
std::optional< sol::unsafe_function_result > execute_safe_function(
    std::string function_name,
    std::string table_name,
    Args &&... args
)
```



























table call

global call

LCOV_EXCL_LINE 

### function register_type

```cpp
void register_type(
    const char * replace_name =nullptr
)
```




























### function load_scripts

```cpp
bool load_scripts(
    const fs::path & directory_path
)
```




























### function load_script

```cpp
bool load_script(
    const std::string & file_name
)
```




























### function load_script

```cpp
bool load_script(
    const std::string & file_name,
    const fs::path & script_directory
)
```




























### function get_state_ptr

```cpp
std::shared_ptr< sol::state > get_state_ptr()
```




























### function get_state

```cpp
sol::state & get_state()
```




























### function update

```cpp
virtual void update()
```

Public member functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function ~scripting_system

```cpp
~scripting_system() =default
```

Destructor. 



























### function scripting_system

```cpp
scripting_system(
    entt::registry & entity_registry,
    fs::path script_directory =core::assets_real_path()/"scripts"/"lua",
    fs::path script_system_directory =core::assets_real_path()/"scripts"/"systems"/"lua",
    fs::path script_scenes_directory =core::assets_real_path()/"scripts"/"scenes"/"lua",
    fs::path script_lib_directory =core::assets_real_path()/"scripts"/"lib"/"lua"
)
```

Constructor. 

































-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT