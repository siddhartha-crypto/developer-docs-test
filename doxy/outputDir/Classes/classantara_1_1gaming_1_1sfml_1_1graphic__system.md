---
title: antara::gaming::sfml::graphic_system


---

# antara::gaming::sfml::graphic_system








Inherits from [antara::gaming::ecs::system< graphic_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[on_properties_replaced](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_properties_replaced)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_vertex_array_construct](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_vertex_array_construct)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_vertex_array_replace](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_vertex_array_replace)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_rt_construct](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_rt_construct)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_rt_replace](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_rt_replace)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_sprite_construct](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_sprite_construct)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_sprite_replace](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_sprite_replace)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_text_construct](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_text_construct)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_text_replace](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_text_replace)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_position_2d_construct](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_position_2d_construct)**(entt::registry & reg, entt::entity entity)  |
| void | **[on_position_2d_replace](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_position_2d_replace)**(entt::registry & reg, entt::entity entity)  |
| void | **[on_rectangle_construct](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_rectangle_construct)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_rectangle_replace](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_rectangle_replace)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_circle_construct](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_circle_construct)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_circle_replace](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_circle_replace)**(entt::registry & registry, entt::entity entity)  |
| void | **[on_window_resized_event](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_window_resized_event)**(const [event::window_resized](Classes/structantara_1_1gaming_1_1event_1_1window__resized.md) & evt)  |
| void | **[on_fill_image_properties](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_fill_image_properties)**(const [event::fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md) & evt)  |
| void | **[on_key_pressed](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-on_key_pressed)**(const [event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md) & evt) <br>Callback.  |
| sf::RenderWindow & | **[get_window](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-get_window)**() <br>Public getter.  |
| void | **[draw_all_layers](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-draw_all_layers)**()  |
| void | **[draw_all_layers](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-draw_all_layers)**(std::index_sequence< Is... > )  |
| void | **[draw](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-draw)**(doom::meta::list< DrawableType... > )  |
| void | **[draw](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-draw)**()  |
| void | **[set_properties](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-set_properties)**(entt::entity entity, [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & props, doom::meta::list< DrawableType... > )  |
| bool | **[set_properties](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-set_properties)**(entt::entity entity, [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & props)  |
| void | **[set_position](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-set_position)**(entt::entity entity, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) & pos, doom::meta::list< DrawableType... > )  |
| bool | **[set_position](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-set_position)**(entt::entity entity, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) & pos)  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-update)**() <br>Pure virtual functions.  |
| void | **[refresh_render_texture](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-refresh_render_texture)**()  |
|  | **[~graphic_system](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-~graphic_system)**()  |
|  | **[graphic_system](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-graphic_system)**(entt::registry & registry)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< graphic_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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

### function on_properties_replaced

```cpp
void on_properties_replaced(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_vertex_array_construct

```cpp
void on_vertex_array_construct(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_vertex_array_replace

```cpp
void on_vertex_array_replace(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_rt_construct

```cpp
void on_rt_construct(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_rt_replace

```cpp
void on_rt_replace(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_sprite_construct

```cpp
void on_sprite_construct(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_sprite_replace

```cpp
void on_sprite_replace(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_text_construct

```cpp
void on_text_construct(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_text_replace

```cpp
void on_text_replace(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_position_2d_construct

```cpp
void on_position_2d_construct(
    entt::registry & reg,
    entt::entity entity
)
```




























### function on_position_2d_replace

```cpp
void on_position_2d_replace(
    entt::registry & reg,
    entt::entity entity
)
```




























### function on_rectangle_construct

```cpp
void on_rectangle_construct(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_rectangle_replace

```cpp
void on_rectangle_replace(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_circle_construct

```cpp
void on_circle_construct(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_circle_replace

```cpp
void on_circle_replace(
    entt::registry & registry,
    entt::entity entity
)
```




























### function on_window_resized_event

```cpp
void on_window_resized_event(
    const event::window_resized & evt
)
```




























### function on_fill_image_properties

```cpp
void on_fill_image_properties(
    const event::fill_image_properties & evt
)
```




























### function on_key_pressed

```cpp
void on_key_pressed(
    const event::key_pressed & evt
)
```

Callback. 



























### function get_window

```cpp
sf::RenderWindow & get_window()
```

Public getter. 



























### function draw_all_layers

```cpp
void draw_all_layers()
```




























### function draw_all_layers

```cpp
void draw_all_layers(
    std::index_sequence< Is... > 
)
```




























### function draw

```cpp
void draw(
    doom::meta::list< DrawableType... > 
)
```




























### function draw

```cpp
void draw()
```




























### function set_properties

```cpp
void set_properties(
    entt::entity entity,
    transform::properties & props,
    doom::meta::list< DrawableType... > 
)
```




























### function set_properties

```cpp
bool set_properties(
    entt::entity entity,
    transform::properties & props
)
```




























### function set_position

```cpp
void set_position(
    entt::entity entity,
    transform::position_2d & pos,
    doom::meta::list< DrawableType... > 
)
```




























### function set_position

```cpp
bool set_position(
    entt::entity entity,
    transform::position_2d & pos
)
```




























### function update

```cpp
virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function refresh_render_texture

```cpp
void refresh_render_texture()
```




























### function ~graphic_system

```cpp
~graphic_system()
```




























### function graphic_system

```cpp
graphic_system(
    entt::registry & registry
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT