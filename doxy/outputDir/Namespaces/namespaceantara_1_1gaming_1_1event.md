

## event

#### Full Title:
```
antara::gaming::event
```




< doom::meta::list  [More...](#detailed-description)






### Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::event::window_resized](Classes/structantara_1_1gaming_1_1event_1_1window__resized.md)**  |
| struct | **[antara::gaming::event::start_game](Classes/structantara_1_1gaming_1_1event_1_1start__game.md)**  |
| struct | **[antara::gaming::event::set_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1set__mouse__position.md)**  |
| struct | **[antara::gaming::event::quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md)** <br>Event that allows us to leave a game with a return value.  |
| struct | **[antara::gaming::event::mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md)**  |
| struct | **[antara::gaming::event::mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md)**  |
| struct | **[antara::gaming::event::mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md)**  |
| struct | **[antara::gaming::event::loading_settings](Classes/structantara_1_1gaming_1_1event_1_1loading__settings.md)**  |
| struct | **[antara::gaming::event::load_textures](Classes/structantara_1_1gaming_1_1event_1_1load__textures.md)**  |
| struct | **[antara::gaming::event::key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md)** <br>triggered when releasing a key on the keyboard.  |
| struct | **[antara::gaming::event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md)** <br>triggered when pressing a key on the keyboard.  |
| struct | **[antara::gaming::event::invoker_dispatcher](Classes/structantara_1_1gaming_1_1event_1_1invoker__dispatcher.md)**  |
| struct | **[antara::gaming::event::get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md)**  |
| struct | **[antara::gaming::event::fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md)**  |
| struct | **[antara::gaming::event::fatal_error](Classes/structantara_1_1gaming_1_1event_1_1fatal__error.md)**  |
| struct | **[antara::gaming::event::change_scene](Classes/structantara_1_1gaming_1_1event_1_1change__scene.md)**  |
| struct | **[antara::gaming::event::canvas_resized](Classes/structantara_1_1gaming_1_1event_1_1canvas__resized.md)**  |

### Types

|                | Name           |
| -------------- | -------------- |
| typedef decltype(std::declval< T & >().invoker) | **[constructor_arg_t](Namespaces/namespaceantara_1_1gaming_1_1event.md#typedef-constructor_arg_t)** <br>Typedefs.  |
| typedef doom::meta::list< [quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md), [key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md), [key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md), [start_game](Classes/structantara_1_1gaming_1_1event_1_1start__game.md), [mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md), [mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md), [mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md) > | **[events_list](Namespaces/namespaceantara_1_1gaming_1_1event.md#typedef-events_list)**  |


### Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr bool | **[has_constructor_arg_type_v](Namespaces/namespaceantara_1_1gaming_1_1event.md#variable-has_constructor_arg_type_v)** <br>Meta-functions.  |




### Detailed Description

< doom::meta::list 

























< [scenes::base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md)

< std::declval

< [event::invoker_dispatcher](Classes/structantara_1_1gaming_1_1event_1_1invoker__dispatcher.md)

< REFL_AUTO

< input::mouse

< math::vec2i

< std::move

C++ System Headers.

SDK Headers.

< std::forward

Dependencies HeadersSDK Headers < [event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md) < [event::key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md) < [event::mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md) < [event::mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md) < [event::mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md) < [event::quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md) < [event::start_game](Classes/structantara_1_1gaming_1_1event_1_1start__game.md)

C++ System HeadersDependencies Headers < entt::dispatcher

C++ System Headers < std::stringSDK Headers < math::vec2u

SDK Headers

SDK Headers < REFL_AUTO input::key

C++ System Headers < std::string std::vector

SDK Headers < REFL_AUTO

C++ System HeadersDependencies Headers < doom::meta::is_detected 



### Types Documentation

### typedef constructor_arg_t

```cpp
typedef decltype(std::declval< T & >().invoker) constructor_arg_t;
```

Typedefs. 



























### typedef events_list

```cpp
typedef doom::meta::list< quit_game, key_pressed, key_released, start_game, mouse_moved, mouse_button_pressed, mouse_button_released > events_list;
```






























### Attributes Documentation

### variable has_constructor_arg_type_v

```cpp
constexpr bool has_constructor_arg_type_v = doom::meta::is_detected_v<[constructor_arg_t](Namespaces/namespaceantara_1_1gaming_1_1event.md#typedef-constructor_arg_t), T>;
```

Meta-functions. 

































