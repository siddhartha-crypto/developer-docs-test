---
title: antara::gaming::ecs::base_system


---

# antara::gaming::ecs::base_system









Inherited by [antara::gaming::ecs::system< TSystemDerived, TSystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::system< lambda_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::system< scripted_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)






## Public Functions

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
| virtual void | **[update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-update)**() =0 <br>Pure virtual functions.  |
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |









## Public Functions Documentation

### function set_user_data

```cpp
void set_user_data(
    void * data
)
```












**Note**: 

  * This function set a user data for this system 
  * This function is very useful to transfer (with get_user_data) data between plugins since they are base_class. 
  * This function will call on_set_user_data callback at the epilogue, by default on_set_user_data is empty and you need to override it if you need it. 
  * user should be aware here, that's manipulating void pointer is as your own risk. 

















### function get_user_data

```cpp
void * get_user_data()
```







**Return**: user data of a system 





**Note**: 

  * This function retrieve a user data previously set by set_user_data 
  * by default a user_data is a void pointer equal to nullptr. 

















### function is_a_plugin

```cpp
bool is_a_plugin() const
```







**Return**: true if the system is a plugin, false otherwise 





**Note**: This function tell you if a system is a plugin or no 
















### function im_a_plugin

```cpp
void im_a_plugin()
```












**Note**: This function defines the system as a plugin, and therefore will use more feature in runtime to work properly 
















### function is_enabled

```cpp
bool is_enabled() const
```












**Note**: This function tell you if a system is enable or no. 
















### function disable

```cpp
void disable()
```












**Note**: This function disable a system. 
















### function enable

```cpp
void enable()
```












**Note**: 

  * This function enable a system. 
  * by default a system is enabled. 

















### function is_marked

```cpp
bool is_marked() const
```







**Return**: true if the system is marked, false otherwise 





**Note**: This function tell you if a system is marked or no. 
















### function unmark

```cpp
void unmark()
```












**Note**: This function unmark the system, allows the prevention of a destruction in the next turn of the game loop by the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md). 
















### function mark

```cpp
void mark()
```












**Note**: This function marks the system, it will be destroyed in the next turn of the game loop by the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md). 
















### function get_system_type_rtti

```cpp
virtual system_type get_system_type_rtti() const =0
```

























**Reimplemented by**: [antara::gaming::ecs::system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti), [antara::gaming::ecs::system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti), [antara::gaming::ecs::system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)




### function get_name

```cpp
virtual std::string get_name() const =0
```

























**Reimplemented by**: [antara::gaming::ecs::system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name), [antara::gaming::ecs::system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name), [antara::gaming::ecs::system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)




### function post_update

```cpp
inline virtual void post_update()
```

























**Reimplemented by**: [antara::gaming::scenes::manager::post_update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-post_update), [antara::gaming::ecs::lambda_system::post_update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-post_update)




### function update

```cpp
virtual void update() =0
```

Pure virtual functions. 
























**Reimplemented by**: [antara::gaming::sdl::input_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md#function-update), [antara::gaming::glfw::input_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1input__system.md#function-update), [antara::gaming::sfml::lua_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md#function-update), [antara::gaming::ecs::virtual_input_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md#function-update), [antara::gaming::sfml::input_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-update), [antara::gaming::glfw::graphic_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1graphic__system.md#function-update), [antara::gaming::sdl::graphic_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-update), [antara::gaming::ecs::interpolation_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md#function-update), [antara::gaming::collisions::basic_collision_system::update](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-update), [antara::gaming::box2d::box2d_system::update](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md#function-update), [antara::gaming::sfml::audio_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md#function-update), [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update), [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update), [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update), [antara::gaming::resources::system::update](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-update), [antara::gaming::sfml::graphic_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-update), [antara::gaming::lua::details::scripted_system::update](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-update), [antara::gaming::scenes::manager::update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-update), [antara::gaming::ecs::lambda_system::update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-update), [antara::gaming::lua::scripting_system::update](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-update), [antara::gaming::animation2d::anim_system::update](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-update), [antara::gaming::blockchain::nspv::update](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-update)




### function ~base_system

```cpp
virtual ~base_system() =default
```

Destructor. 



























### function base_system

```cpp
base_system(
    entt::registry & entity_registry,
    bool im_a_plugin_system =false
)
```

Constructors. 






























## Protected Attributes Documentation

### variable user_data_

```cpp
void * user_data_ {nullptr};
```




























### variable dispatcher_

```cpp
entt::dispatcher & dispatcher_;
```




























### variable entity_registry_

```cpp
entt::registry & entity_registry_;
```

Protected data members. 






























-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT