

## base_scene

#### Full Title:
```
antara::gaming::scenes::base_scene
```









Inherited by [antara::gaming::sfml::intro_scene](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md)






### Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual  | **[~base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-~base_scene)**() =default  |
| virtual std::string | **[scene_name](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-scene_name)**() =0  |
| virtual bool | **[on_mouse_button_released](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_mouse_button_released)**(const [event::mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md) & )  |
| virtual bool | **[on_mouse_button_pressed](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_mouse_button_pressed)**(const [event::mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md) & )  |
| virtual bool | **[on_mouse_moved](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_mouse_moved)**(const [event::mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md) & )  |
| virtual bool | **[on_key_released](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_key_released)**(const [event::key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md) & )  |
| virtual bool | **[on_key_pressed](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-on_key_pressed)**(const [event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md) & )  |
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-post_update)**()  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-update)**() =0  |
|  | **[base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#function-base_scene)**(entt::registry & entity_registry)  |



### Protected Attributes

|                | Name           |
| -------------- | -------------- |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md#variable-entity_registry_)**  |










### Public Functions Documentation

#### function ~base_scene

```cpp
virtual ~base_scene() =default
```




























#### function scene_name

```cpp
virtual std::string scene_name() =0
```

























**Reimplemented by**: [antara::gaming::sfml::intro_scene::scene_name](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-scene_name)




#### function on_mouse_button_released

```cpp
inline virtual bool on_mouse_button_released(
    const event::mouse_button_released & 
)
```




























#### function on_mouse_button_pressed

```cpp
inline virtual bool on_mouse_button_pressed(
    const event::mouse_button_pressed & 
)
```




























#### function on_mouse_moved

```cpp
inline virtual bool on_mouse_moved(
    const event::mouse_moved & 
)
```




























#### function on_key_released

```cpp
inline virtual bool on_key_released(
    const event::key_released & 
)
```




























#### function on_key_pressed

```cpp
inline virtual bool on_key_pressed(
    const event::key_pressed & 
)
```

























**Reimplemented by**: [antara::gaming::sfml::intro_scene::on_key_pressed](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-on_key_pressed)




#### function post_update

```cpp
inline virtual void post_update()
```




























#### function update

```cpp
virtual void update() =0
```

























**Reimplemented by**: [antara::gaming::sfml::intro_scene::update](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md#function-update)




#### function base_scene

```cpp
base_scene(
    entt::registry & entity_registry
)
```































### Protected Attributes Documentation

#### variable dispatcher_

```cpp
entt::dispatcher & dispatcher_;
```




























#### variable entity_registry_

```cpp
entt::registry & entity_registry_;
```


































