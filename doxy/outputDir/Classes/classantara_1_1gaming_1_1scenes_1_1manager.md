---
title: antara::gaming::scenes::manager


---

# antara::gaming::scenes::manager








Inherits from [antara::gaming::ecs::system< manager >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| [base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md) & | **[current_scene](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-current_scene)**()  |
| void | **[clear](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-clear)**()  |
| bool | **[previous_scene](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-previous_scene)**()  |
| void | **[change_scene](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-change_scene)**(scene_ptr && scene, bool just_push_scene =false)  |
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-post_update)**()  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-update)**() <br>Public member function.  |
| void | **[receive_change_scene](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-receive_change_scene)**(const [event::change_scene](Classes/structantara_1_1gaming_1_1event_1_1change__scene.md) & evt)  |
| void | **[receive_mouse_button_released](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-receive_mouse_button_released)**(const [event::mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md) & evt)  |
| void | **[receive_mouse_button_pressed](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-receive_mouse_button_pressed)**(const [event::mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md) & evt)  |
| void | **[receive_mouse_moved](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-receive_mouse_moved)**(const [event::mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md) & evt)  |
| void | **[receive_key_released](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-receive_key_released)**(const [event::key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md) & evt)  |
| void | **[receive_key_pressed](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-receive_key_pressed)**(const [event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md) & evt) <br>Public callbacks.  |
|  | **[~manager](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-~manager)**() <br>Destructor.  |
|  | **[manager](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-manager)**(entt::registry & entity_registry) <br>Constructor.  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< manager >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



**Protected Attributes inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |








## Public Functions Documentation

### function current_scene

```cpp
base_scene & current_scene()
```




























### function clear

```cpp
void clear()
```




























### function previous_scene

```cpp
bool previous_scene()
```




























### function change_scene

```cpp
void change_scene(
    scene_ptr && scene,
    bool just_push_scene =false
)
```




























### function post_update

```cpp
virtual void post_update()
```

























**Reimplements**: [antara::gaming::ecs::base_system::post_update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-post_update)




### function update

```cpp
virtual void update()
```

Public member function. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function receive_change_scene

```cpp
void receive_change_scene(
    const event::change_scene & evt
)
```




























### function receive_mouse_button_released

```cpp
void receive_mouse_button_released(
    const event::mouse_button_released & evt
)
```




























### function receive_mouse_button_pressed

```cpp
void receive_mouse_button_pressed(
    const event::mouse_button_pressed & evt
)
```




























### function receive_mouse_moved

```cpp
void receive_mouse_moved(
    const event::mouse_moved & evt
)
```




























### function receive_key_released

```cpp
void receive_key_released(
    const event::key_released & evt
)
```




























### function receive_key_pressed

```cpp
void receive_key_pressed(
    const event::key_pressed & evt
)
```

Public callbacks. 



























### function ~manager

```cpp
~manager()
```

Destructor. 



























### function manager

```cpp
manager(
    entt::registry & entity_registry
)
```

Constructor. 

































-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT