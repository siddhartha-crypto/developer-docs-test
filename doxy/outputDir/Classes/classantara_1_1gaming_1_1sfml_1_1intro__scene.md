---
title: antara::gaming::sfml::intro_scene


---

# antara::gaming::sfml::intro_scene








Inherits from [antara::gaming::scenes::base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md)





## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::function< void()> | **[on_finish_functor](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#typedef-on_finish_functor)**  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[~intro_scene](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-~intro_scene)**()  |
| virtual std::string | **[scene_name](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-scene_name)**()  |
| virtual bool | **[on_key_pressed](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-on_key_pressed)**(const [event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md) & evt)  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-update)**()  |
|  | **[intro_scene](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-intro_scene)**(entt::registry & entity_registry, on_finish_functor on_finish_functor)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::scenes::base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md)**

|                | Name           |
| -------------- | -------------- |
| virtual  | **[~base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-~base_scene)**() =default  |
| virtual bool | **[on_mouse_button_released](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_mouse_button_released)**(const [event::mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md) & )  |
| virtual bool | **[on_mouse_button_pressed](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_mouse_button_pressed)**(const [event::mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md) & )  |
| virtual bool | **[on_mouse_moved](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_mouse_moved)**(const [event::mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md) & )  |
| virtual bool | **[on_key_released](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_key_released)**(const [event::key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md) & )  |
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-post_update)**()  |
|  | **[base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-base_scene)**(entt::registry & entity_registry)  |



**Protected Attributes inherited from [antara::gaming::scenes::base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md)**

|                | Name           |
| -------------- | -------------- |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#variable-entity_registry_)**  |






## Public Types Documentation

### typedef on_finish_functor

```cpp
typedef std::function< void()> on_finish_functor;
```






























## Public Functions Documentation

### function ~intro_scene

```cpp
~intro_scene()
```




























### function scene_name

```cpp
virtual std::string scene_name()
```

























**Reimplements**: [antara::gaming::scenes::base_scene::scene_name](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-scene_name)




### function on_key_pressed

```cpp
virtual bool on_key_pressed(
    const event::key_pressed & evt
)
```

























**Reimplements**: [antara::gaming::scenes::base_scene::on_key_pressed](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_key_pressed)




### function update

```cpp
virtual void update()
```

























**Reimplements**: [antara::gaming::scenes::base_scene::update](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-update)




### function intro_scene

```cpp
intro_scene(
    entt::registry & entity_registry,
    on_finish_functor on_finish_functor
)
```


































-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT