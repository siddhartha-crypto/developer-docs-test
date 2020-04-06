

## component_script

#### Full Title:
```
antara::gaming::lua::component_script
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[component_script](Classes/structantara_1_1gaming_1_1lua_1_1component__script.md#function-component_script)**()  |
|  | **[component_script](Classes/structantara_1_1gaming_1_1lua_1_1component__script.md#function-component_script)**(std::string script_, std::string table_name_)  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[table_name](Classes/structantara_1_1gaming_1_1lua_1_1component__script.md#variable-table_name)**  |
| std::string | **[script](Classes/structantara_1_1gaming_1_1lua_1_1component__script.md#variable-script)**  |











### Public Functions Documentation

#### function component_script

```cpp
component_script()
```




























#### function component_script

```cpp
component_script(
    std::string script_,
    std::string table_name_
)
```






























### Public Attributes Documentation

#### variable table_name

```cpp
std::string table_name;
```




























#### variable script

```cpp
std::string script;
```








































## scripting_system

#### Full Title:
```
antara::gaming::lua::scripting_system
```








Inherits from [antara::gaming::ecs::system< lua::scripting_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







### Public Functions

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







### Additional inherited members






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








### Public Functions Documentation

#### function load_scripted_system

```cpp
bool load_scripted_system(
    const std::string & script_name
)
```




























#### function load_script_from_entities

```cpp
bool load_script_from_entities()
```




























#### function register_events_list

```cpp
void register_events_list(
    doom::meta::list< TEvents... > 
)
```




























#### function register_components_list

```cpp
void register_components_list(
    doom::meta::list< TComponents... > 
)
```




























#### function register_component

```cpp
void register_component()
```




























#### function register_event

```cpp
void register_event()
```




























#### function execute_safe_function

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

#### function register_type

```cpp
void register_type(
    const char * replace_name =nullptr
)
```




























#### function load_scripts

```cpp
bool load_scripts(
    const fs::path & directory_path
)
```




























#### function load_script

```cpp
bool load_script(
    const std::string & file_name
)
```




























#### function load_script

```cpp
bool load_script(
    const std::string & file_name,
    const fs::path & script_directory
)
```




























#### function get_state_ptr

```cpp
std::shared_ptr< sol::state > get_state_ptr()
```




























#### function get_state

```cpp
sol::state & get_state()
```




























#### function update

```cpp
virtual void update()
```

Public member functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




#### function ~scripting_system

```cpp
~scripting_system() =default
```

Destructor. 



























#### function scripting_system

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









































## details

#### Full Title:
```
antara::gaming::lua::details
```




< std::move, std::forward  [More...](#detailed-description)






### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::lua::details::scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)**  |

### Types

|                | Name           |
| -------------- | -------------- |
| typedef [scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)< [ecs::st_system_logic_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_logic_update) > | **[lua_logic_scripted_system](Namespaces/namespaceantara_1_1gaming_1_1lua_1_1details.md#typedef-lua_logic_scripted_system)**  |
| typedef [scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)< [ecs::st_system_pre_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_pre_update) > | **[lua_pre_scripted_system](Namespaces/namespaceantara_1_1gaming_1_1lua_1_1details.md#typedef-lua_pre_scripted_system)**  |
| typedef [scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)< [ecs::st_system_post_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_post_update) > | **[lua_post_scripted_system](Namespaces/namespaceantara_1_1gaming_1_1lua_1_1details.md#typedef-lua_post_scripted_system)**  |






### Detailed Description

< std::move, std::forward 

























C++ System Headers < std::exception < std::shared_ptrDependencies Headers < VLOG_F < doom::meta::list < sol::state SDK Headers < [ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)



### Types Documentation

### typedef lua_logic_scripted_system

```cpp
typedef scripted_system< ecs::st_system_logic_update > lua_logic_scripted_system;
```




























### typedef lua_pre_scripted_system

```cpp
typedef scripted_system< ecs::st_system_pre_update > lua_pre_scripted_system;
```




























### typedef lua_post_scripted_system

```cpp
typedef scripted_system< ecs::st_system_post_update > lua_post_scripted_system;
```









































## scripted_system

#### Full Title:
```
antara::gaming::lua::details::scripted_system
```




 [More...](#detailed-description)




Inherits from [antara::gaming::ecs::system< scripted_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)





### Public Types

|                | Name           |
| -------------- | -------------- |
| typedef [ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)< [scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)< SystemType >, SystemType > | **[TSystem](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#typedef-tsystem)**  |


### Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[receive](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-receive)**(const TEvent & evt) <br>Callbacks.  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-update)**() <br>Pure virtual functions.  |
|  | **[~scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-~scripted_system)**()  |
|  | **[scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-scripted_system)**(entt::registry & entity_registry, std::string table_name, std::shared_ptr< sol::state > state)  |







### Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< scripted_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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




### Detailed Description

```cpp
template <typename SystemType >
class antara::gaming::lua::details::scripted_system;
```





























### Public Types Documentation

#### typedef TSystem

```cpp
typedef ecs::system< scripted_system< SystemType >, SystemType > TSystem;
```






























### Public Functions Documentation

#### function receive

```cpp
inline void receive(
    const TEvent & evt
)
```

Callbacks. 



























#### function update

```cpp
inline virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




#### function ~scripted_system

```cpp
inline ~scripted_system()
```




























#### function scripted_system

```cpp
inline scripted_system(
    entt::registry & entity_registry,
    std::string table_name,
    std::shared_ptr< sol::state > state
)
```








































