<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md
  Topic name: antara::gaming::sfml::audio_system
  Hash count: 0
-->
---
title: antara::gaming::sfml::audio_system
summary: This class allows the customization and play of audio.  

---

# antara::gaming::sfml::audio_system




This class allows the customization and play of audio. 

`#include <audio.system.hpp>`


Inherits from [antara::gaming::ecs::system< audio_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md#function-update)**() <br>This function destroys and cleans up the sounds which are completed playing.  |
|  | **[audio_system](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md#function-audio_system)**(entt::registry & registry)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< audio_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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

### function update

```cpp
virtual void update()
```

This function destroys and cleans up the sounds which are completed playing. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function audio_system

```cpp
audio_system(
    entt::registry & registry
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1circle.md
  Topic name: antara::gaming::sfml::circle
  Hash count: 0
-->
---
title: antara::gaming::sfml::circle


---

# antara::gaming::sfml::circle















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[circle](Classes/structantara_1_1gaming_1_1sfml_1_1circle.md#function-circle)**()  |
|  | **[circle](Classes/structantara_1_1gaming_1_1sfml_1_1circle.md#function-circle)**(sf::CircleShape drawable_)  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| sf::CircleShape | **[drawable](Classes/structantara_1_1gaming_1_1sfml_1_1circle.md#variable-drawable)**  |










## Public Functions Documentation

### function circle

```cpp
inline circle()
```




























### function circle

```cpp
inline circle(
    sf::CircleShape drawable_
)
```






























## Public Attributes Documentation

### variable drawable

```cpp
sf::CircleShape drawable;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1component__sound.md
  Topic name: antara::gaming::sfml::component_sound
  Hash count: 0
-->
---
title: antara::gaming::sfml::component_sound
summary: This struct contains the sound and attributes of it such as volume.  

---

# antara::gaming::sfml::component_sound




This struct contains the sound and attributes of it such as volume. 

`#include <component.audio.hpp>`











## Public Attributes

|                | Name           |
| -------------- | -------------- |
| sf::Sound | **[sound](Classes/structantara_1_1gaming_1_1sfml_1_1component__sound.md#variable-sound)** <br>This object is SFML's Sound instance which contains the sound data.  |












## Public Attributes Documentation

### variable sound

```cpp
sf::Sound sound;
```

This object is SFML's Sound instance which contains the sound data. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md
  Topic name: antara::gaming::sfml::graphic_system
  Hash count: 0
-->
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


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md
  Topic name: antara::gaming::sfml::input_system
  Hash count: 0
-->
---
title: antara::gaming::sfml::input_system


---

# antara::gaming::sfml::input_system








Inherits from [antara::gaming::ecs::system< input_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[on_set_mouse_position](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-on_set_mouse_position)**(const [event::set_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1set__mouse__position.md) & evt)  |
| void | **[on_fill_mouse_position](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-on_fill_mouse_position)**(const [event::get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md) & evt)  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-update)**() <br>Pure virtual functions.  |
|  | **[input_system](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-input_system)**(entt::registry & registry, sf::RenderWindow & window) <br>Constructors.  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< input_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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

### function on_set_mouse_position

```cpp
void on_set_mouse_position(
    const event::set_mouse_position & evt
)
```




























### function on_fill_mouse_position

```cpp
void on_fill_mouse_position(
    const event::get_mouse_position & evt
)
```




























### function update

```cpp
virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function input_system

```cpp
input_system(
    entt::registry & registry,
    sf::RenderWindow & window
)
```

Constructors. 

































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md
  Topic name: antara::gaming::sfml::intro_scene
  Hash count: 0
-->
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

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene_1_1animation.md
  Topic name: antara::gaming::sfml::intro_scene::animation
  Hash count: 1
-->
---
title: antara::gaming::sfml::intro_scene::animation


---

# antara::gaming::sfml::intro_scene::animation















## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[is_done](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene_1_1animation.md#function-is_done)**()  |
| void | **[update](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene_1_1animation.md#function-update)**(float dt)  |
|  | **[animation](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene_1_1animation.md#function-animation)**(float start_time, std::function< bool(float)> animation)  |
|  | **[animation](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene_1_1animation.md#function-animation)**()  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const float | **[start_time](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene_1_1animation.md#variable-start_time)**  |










## Public Functions Documentation

### function is_done

```cpp
bool is_done()
```




























### function update

```cpp
void update(
    float dt
)
```




























### function animation

```cpp
explicit animation(
    float start_time,
    std::function< bool(float)> animation
)
```




























### function animation

```cpp
animation()
```






























## Public Attributes Documentation

### variable start_time

```cpp
const float start_time;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md
  Topic name: antara::gaming::sfml::intro_scene_factory
  Hash count: 1
-->
---
title: antara::gaming::sfml::intro_scene_factory


---

# antara::gaming::sfml::intro_scene_factory















## Public Functions

|                | Name           |
| -------------- | -------------- |
| auto | **[create_name](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_name)**(entt::registry & entity_registry, float logo_final_scale, [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) logo_target_position)  |
| auto | **[create_logo](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_logo)**(entt::registry & entity_registry)  |
| entt::entity | **[create_background](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_background)**(entt::registry & entity_registry)  |
| entt::entity | **[create_foreground](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_foreground)**(entt::registry & entity_registry)  |
| entt::entity | **[create_sound](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_sound)**(entt::registry & entity_registry, const std::string & sound_name)  |












## Public Functions Documentation

### function create_name

```cpp
static auto create_name(
    entt::registry & entity_registry,
    float logo_final_scale,
    math::vec2f logo_target_position
)
```




























### function create_logo

```cpp
static auto create_logo(
    entt::registry & entity_registry
)
```




























### function create_background

```cpp
static entt::entity create_background(
    entt::registry & entity_registry
)
```



























Get window information

Entity creation

Give the fresh entity 

### function create_foreground

```cpp
static entt::entity create_foreground(
    entt::registry & entity_registry
)
```



























Get window information

Entity components

Give the fresh entity 

### function create_sound

```cpp
static entt::entity create_sound(
    entt::registry & entity_registry,
    const std::string & sound_name
)
```



























Entity creation

Give the fresh entity 







-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1loader.md
  Topic name: antara::gaming::sfml::loader
  Hash count: 1
-->
---
title: antara::gaming::sfml::loader


---

# antara::gaming::sfml::loader




 [More...](#detailed-description)




Inherits from entt::loader< loader< ResourceType >, ResourceType >







## Public Functions

|                | Name           |
| -------------- | -------------- |
| std::shared_ptr< ResourceType > | **[load](Classes/structantara_1_1gaming_1_1sfml_1_1loader.md#function-load)**(Args &&... args) const  |








## Detailed Description

```cpp
template <typename ResourceType >
struct antara::gaming::sfml::loader;
```































## Public Functions Documentation

### function load

```cpp
inline std::shared_ptr< ResourceType > load(
    Args &&... args
) const
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1loader_3_01sf_1_1_music_01_4.md
  Topic name: antara::gaming::sfml::loader< sf::Music >
  Hash count: 1
-->
---
title: antara::gaming::sfml::loader< sf::Music >


---

# antara::gaming::sfml::loader< sf::Music >








Inherits from entt::loader< loader< sf::Music >, sf::Music >







## Public Functions

|                | Name           |
| -------------- | -------------- |
| std::shared_ptr< sf::Music > | **[load](Classes/structantara_1_1gaming_1_1sfml_1_1loader_3_01sf_1_1_music_01_4.md#function-load)**(Args &&... args) const  |












## Public Functions Documentation

### function load

```cpp
inline std::shared_ptr< sf::Music > load(
    Args &&... args
) const
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md
  Topic name: antara::gaming::sfml::lua_system
  Hash count: 1
-->
---
title: antara::gaming::sfml::lua_system


---

# antara::gaming::sfml::lua_system








Inherits from [antara::gaming::ecs::system< lua_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md#function-update)**() <br>Pure virtual functions.  |
|  | **[lua_system](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md#function-lua_system)**(entt::registry & registry, std::shared_ptr< sol::state > state)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< lua_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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

### function update

```cpp
virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function lua_system

```cpp
lua_system(
    entt::registry & registry,
    std::shared_ptr< sol::state > state
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md
  Topic name: antara::gaming::sfml::play_sound_event
  Hash count: 1
-->
---
title: antara::gaming::sfml::play_sound_event


---

# antara::gaming::sfml::play_sound_event















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[play_sound_event](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#function-play_sound_event)**(const char * sound_id_, [resources_manager](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md) * resources_manager_, std::function< void()> on_finish =[]() { }, float volume =100.f)  |
|  | **[play_sound_event](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#function-play_sound_event)**()  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[volume](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-volume)**  |
| std::function< void()> | **[on_finish](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-on_finish)**  |
| [resources_manager](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md) * | **[resource_mgr](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-resource_mgr)**  |
| const char * | **[sound_id](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-sound_id)**  |










## Public Functions Documentation

### function play_sound_event

```cpp
play_sound_event(
    const char * sound_id_,
    resources_manager * resources_manager_,
    std::function< void()> on_finish =[]() { },
    float volume =100.f
)
```




























### function play_sound_event

```cpp
play_sound_event()
```






























## Public Attributes Documentation

### variable volume

```cpp
float volume {100.f};
```




























### variable on_finish

```cpp
std::function< void()> on_finish {[]() {
        }};
```




























### variable resource_mgr

```cpp
resources_manager * resource_mgr {nullptr};
```




























### variable sound_id

```cpp
const char * sound_id {nullptr};
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1rectangle.md
  Topic name: antara::gaming::sfml::rectangle
  Hash count: 1
-->
---
title: antara::gaming::sfml::rectangle


---

# antara::gaming::sfml::rectangle















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[rectangle](Classes/structantara_1_1gaming_1_1sfml_1_1rectangle.md#function-rectangle)**() =default  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| sf::RectangleShape | **[drawable](Classes/structantara_1_1gaming_1_1sfml_1_1rectangle.md#variable-drawable)**  |










## Public Functions Documentation

### function rectangle

```cpp
rectangle() =default
```






























## Public Attributes Documentation

### variable drawable

```cpp
sf::RectangleShape drawable {};
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1render__texture.md
  Topic name: antara::gaming::sfml::render_texture
  Hash count: 1
-->
---
title: antara::gaming::sfml::render_texture


---

# antara::gaming::sfml::render_texture















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[render_texture](Classes/structantara_1_1gaming_1_1sfml_1_1render__texture.md#function-render_texture)**() =default  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::unique_ptr< sf::RenderTexture > | **[drawable](Classes/structantara_1_1gaming_1_1sfml_1_1render__texture.md#variable-drawable)**  |










## Public Functions Documentation

### function render_texture

```cpp
render_texture() =default
```






























## Public Attributes Documentation

### variable drawable

```cpp
std::unique_ptr< sf::RenderTexture > drawable {std::make_unique<sf::RenderTexture>()};
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md
  Topic name: antara::gaming::sfml::resources_manager
  Hash count: 1
-->
---
title: antara::gaming::sfml::resources_manager


---

# antara::gaming::sfml::resources_manager















## Public Functions

|                | Name           |
| -------------- | -------------- |
| music_handle | **[load_music](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_music)**(const char * resource_id)  |
| sound_handle | **[load_sound](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_sound)**(const char * resource_id)  |
| font_handle | **[load_font](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_font)**(const char * resource_id)  |
| texture_handle | **[load_texture](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_texture)**(const char * resource_id, bool smooth =true)  |
| auto | **[contains](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-contains)**(TCache & cache, const char * id)  |
| auto | **[get](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-get)**(TCache & cache, const char * id)  |
| auto | **[load](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load)**(TCache & cache, const char * id, TArgs &&... args)  |












## Public Functions Documentation

### function load_music

```cpp
music_handle load_music(
    const char * resource_id
)
```




























### function load_sound

```cpp
sound_handle load_sound(
    const char * resource_id
)
```




























### function load_font

```cpp
font_handle load_font(
    const char * resource_id
)
```




























### function load_texture

```cpp
texture_handle load_texture(
    const char * resource_id,
    bool smooth =true
)
```




























### function contains

```cpp
static inline auto contains(
    TCache & cache,
    const char * id
)
```




























### function get

```cpp
static inline auto get(
    TCache & cache,
    const char * id
)
```




























### function load

```cpp
static inline auto load(
    TCache & cache,
    const char * id,
    TArgs &&... args
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1sprite.md
  Topic name: antara::gaming::sfml::sprite
  Hash count: 1
-->
---
title: antara::gaming::sfml::sprite


---

# antara::gaming::sfml::sprite















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[sprite](Classes/structantara_1_1gaming_1_1sfml_1_1sprite.md#function-sprite)**() =default  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| sf::Sprite | **[drawable](Classes/structantara_1_1gaming_1_1sfml_1_1sprite.md#variable-drawable)**  |










## Public Functions Documentation

### function sprite

```cpp
sprite() =default
```






























## Public Attributes Documentation

### variable drawable

```cpp
sf::Sprite drawable;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1text.md
  Topic name: antara::gaming::sfml::text
  Hash count: 1
-->
---
title: antara::gaming::sfml::text


---

# antara::gaming::sfml::text















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[text](Classes/structantara_1_1gaming_1_1sfml_1_1text.md#function-text)**() =default  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| sf::Text | **[drawable](Classes/structantara_1_1gaming_1_1sfml_1_1text.md#variable-drawable)**  |










## Public Functions Documentation

### function text

```cpp
text() =default
```






























## Public Attributes Documentation

### variable drawable

```cpp
sf::Text drawable;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sfml_1_1vertex__array.md
  Topic name: antara::gaming::sfml::vertex_array
  Hash count: 1
-->
---
title: antara::gaming::sfml::vertex_array


---

# antara::gaming::sfml::vertex_array















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[vertex_array](Classes/structantara_1_1gaming_1_1sfml_1_1vertex__array.md#function-vertex_array)**() =default  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| sf::VertexArray | **[drawable](Classes/structantara_1_1gaming_1_1sfml_1_1vertex__array.md#variable-drawable)**  |










## Public Functions Documentation

### function vertex_array

```cpp
vertex_array() =default
```






























## Public Attributes Documentation

### variable drawable

```cpp
sf::VertexArray drawable;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


