

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





































