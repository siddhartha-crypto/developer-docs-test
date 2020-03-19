---
title: antara::gaming::ecs::system


---

# antara::gaming::ecs::system




 [More...](#detailed-description)




Inherits from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)

Inherited by [antara::gaming::animation2d::anim_system](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md), [antara::gaming::blockchain::nspv](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md), [antara::gaming::box2d::box2d_system](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md), [antara::gaming::collisions::basic_collision_system](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md), [antara::gaming::ecs::interpolation_system](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md), [antara::gaming::ecs::virtual_input_system](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md), [antara::gaming::glfw::graphic_system](Classes/classantara_1_1gaming_1_1glfw_1_1graphic__system.md), [antara::gaming::glfw::input_system](Classes/classantara_1_1gaming_1_1glfw_1_1input__system.md), [antara::gaming::lua::scripting_system](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md), [antara::gaming::resources::system< UnderlyingResourceManager >](Classes/classantara_1_1gaming_1_1resources_1_1system.md), [antara::gaming::scenes::manager](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md), [antara::gaming::sdl::graphic_system](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md), [antara::gaming::sdl::input_system](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md), [antara::gaming::sfml::audio_system](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md), [antara::gaming::sfml::graphic_system](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md), [antara::gaming::sfml::input_system](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md), [antara::gaming::sfml::lua_system](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md)






## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type)**()  |
| std::string | **[get_class_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_class_name)**() <br>Public static functions.  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)**() const  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)**() const <br>Public member functions.  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)**() override =0 <br>Pure virtual functions.  |
|  | **[~system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-~system)**() override <br>Destructor.  |
|  | **[system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-system)**(TArgs &&... args) <br>Constructor.  |






## Additional inherited members






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
template <typename TSystemDerived,
typename TSystemType>
class antara::gaming::ecs::system;
```































## Public Functions Documentation

### function get_system_type

```cpp
static constexpr system_type get_system_type()
```







**Return**: ​system_type of the derived system. 





**Note**: this function allows you to retrieve the type of a system at compile time. 
















### function get_class_name

```cpp
static std::string get_class_name()
```

Public static functions. 



























### function get_name

```cpp
virtual std::string get_name() const
```







**Return**: name of the derived system. 





**Note**: this function allow you to get the name of the derived system 













**Reimplements**: [antara::gaming::ecs::base_system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_name)




### function get_system_type_rtti

```cpp
virtual system_type get_system_type_rtti() const
```

Public member functions. 






**Return**: ​system_type of the derived system 





**Note**: this function allows you to retrieve the type of a system at runtime. 













**Reimplements**: [antara::gaming::ecs::base_system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_system_type_rtti)




### function update

```cpp
virtual void update() override =0
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::base_system::update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-update)

**Reimplemented by**: [antara::gaming::sdl::input_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md#function-update), [antara::gaming::glfw::input_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1input__system.md#function-update), [antara::gaming::sfml::lua_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md#function-update), [antara::gaming::ecs::virtual_input_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md#function-update), [antara::gaming::sfml::input_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-update), [antara::gaming::glfw::graphic_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1graphic__system.md#function-update), [antara::gaming::sdl::graphic_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-update), [antara::gaming::ecs::interpolation_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md#function-update), [antara::gaming::collisions::basic_collision_system::update](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-update), [antara::gaming::box2d::box2d_system::update](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md#function-update), [antara::gaming::sfml::audio_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md#function-update), [antara::gaming::resources::system::update](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-update), [antara::gaming::sfml::graphic_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-update), [antara::gaming::lua::details::scripted_system::update](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-update), [antara::gaming::scenes::manager::update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-update), [antara::gaming::ecs::lambda_system::update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-update), [antara::gaming::lua::scripting_system::update](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-update), [antara::gaming::animation2d::anim_system::update](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-update), [antara::gaming::blockchain::nspv::update](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-update)




### function ~system

```cpp
~system() override
```

Destructor. 



























### function system

```cpp
explicit system(
    TArgs &&... args
)
```

Constructor. 

































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT