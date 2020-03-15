---
title: antara::gaming::resources::system


---

# antara::gaming::resources::system




 [More...](#detailed-description)




Inherits from [antara::gaming::ecs::system< system< UnderlyingResourceManager > >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)





## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef [ecs::logic_update_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-logic_update_system)< [system](Classes/classantara_1_1gaming_1_1resources_1_1system.md)< UnderlyingResourceManager > > | **[TSystem](Classes/classantara_1_1gaming_1_1resources_1_1system.md#typedef-tsystem)**  |
| typedef const char * | **[resources_identifier](Classes/classantara_1_1gaming_1_1resources_1_1system.md#typedef-resources_identifier)**  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
| auto | **[load_music](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-load_music)**(resources_identifier id)  |
| auto | **[load_sound](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-load_sound)**(resources_identifier id)  |
| auto | **[load_font](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-load_font)**(resources_identifier id)  |
| auto | **[load_texture](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-load_texture)**(Args &&... args)  |
|  | **[~system](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-~system)**() =default  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-update)**() <br>Pure virtual functions.  |
|  | **[system](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-system)**(entt::registry & registry)  |
| void | **[on_load_textures](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-on_load_textures)**(const [event::load_textures](Classes/structantara_1_1gaming_1_1event_1_1load__textures.md) & evt)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< system< UnderlyingResourceManager > >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

|                | Name           |
| -------------- | -------------- |
| constexpr [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type)**()  |
| std::string | **[get_class_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_class_name)**() <br>Public static functions.  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)**() const  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)**() const <br>Public member functions.  |









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




## Detailed Description

```cpp
template <typename UnderlyingResourceManager >
class antara::gaming::resources::system;
```





























## Public Types Documentation

### typedef TSystem

```cpp
typedef ecs::logic_update_system< system< UnderlyingResourceManager > > TSystem;
```




























### typedef resources_identifier

```cpp
typedef const char * resources_identifier;
```






























## Public Functions Documentation

### function load_music

```cpp
inline auto load_music(
    resources_identifier id
)
```




























### function load_sound

```cpp
inline auto load_sound(
    resources_identifier id
)
```




























### function load_font

```cpp
inline auto load_font(
    resources_identifier id
)
```




























### function load_texture

```cpp
inline auto load_texture(
    Args &&... args
)
```




























### function ~system

```cpp
~system() =default
```




























### function update

```cpp
inline virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function system

```cpp
inline system(
    entt::registry & registry
)
```




























### function on_load_textures

```cpp
inline void on_load_textures(
    const event::load_textures & evt
)
```


































-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT