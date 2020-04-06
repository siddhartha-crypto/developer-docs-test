

## canvas_resized

#### Full Title:
```
antara::gaming::event::canvas_resized
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[canvas_resized](Classes/structantara_1_1gaming_1_1event_1_1canvas__resized.md#function-canvas_resized)**() =default  |













### Public Functions Documentation

#### function canvas_resized

```cpp
canvas_resized() =default
```








































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1change__scene.md
  Topic name: antara::gaming::event::change_scene
  Hash count: 0
-->


## change_scene

#### Full Title:
```
antara::gaming::event::change_scene
```

















### Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[just_push_scene](Classes/structantara_1_1gaming_1_1event_1_1change__scene.md#variable-just_push_scene)**  |
| std::unique_ptr< [scenes::base_scene](Classes/classantara_1_1gaming_1_1scenes_1_1base__scene.md) > | **[scene_ptr](Classes/structantara_1_1gaming_1_1event_1_1change__scene.md#variable-scene_ptr)**  |













### Public Attributes Documentation

#### variable just_push_scene

```cpp
bool just_push_scene {false};
```




























#### variable scene_ptr

```cpp
std::unique_ptr< scenes::base_scene > scene_ptr;
```






































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1fatal__error.md
  Topic name: antara::gaming::event::fatal_error
  Hash count: 0
-->


## fatal_error

#### Full Title:
```
antara::gaming::event::fatal_error
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[fatal_error](Classes/structantara_1_1gaming_1_1event_1_1fatal__error.md#function-fatal_error)**(std::error_code ec) <br>Constructor.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::error_code | **[ec_](Classes/structantara_1_1gaming_1_1event_1_1fatal__error.md#variable-ec_)** <br>Fields.  |











### Public Functions Documentation

#### function fatal_error

```cpp
fatal_error(
    std::error_code ec
)
```

Constructor. 





























### Public Attributes Documentation

#### variable ec_

```cpp
std::error_code ec_;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md
  Topic name: antara::gaming::event::fill_image_properties
  Hash count: 0
-->


## fill_image_properties

#### Full Title:
```
antara::gaming::event::fill_image_properties
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
| [fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md) & | **[operator=](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md#function-operator=)**(const [fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md) & other) <br>Operators.  |
|  | **[fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md#function-fill_image_properties)**(const [fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md) & ) =default  |
|  | **[fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md#function-fill_image_properties)**(std::string appeareance_, [math::vec2u](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & size) <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| [math::vec2u](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[image_size](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md#variable-image_size)** <br>To fill.  |
| std::string | **[appearance](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md#variable-appearance)** <br>Fields.  |











### Public Functions Documentation

#### function operator=

```cpp
inline fill_image_properties & operator=(
    const fill_image_properties & other
)
```

Operators. 



























#### function fill_image_properties

```cpp
fill_image_properties(
    const fill_image_properties & 
) =default
```




























#### function fill_image_properties

```cpp
inline fill_image_properties(
    std::string appeareance_,
    math::vec2u & size
)
```

Constructors. 





























### Public Attributes Documentation

#### variable image_size

```cpp
math::vec2u & image_size;
```

To fill. 



























#### variable appearance

```cpp
std::string appearance;
```

Fields. 

























Texture id 












<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md
  Topic name: antara::gaming::event::get_mouse_position
  Hash count: 0
-->


## get_mouse_position

#### Full Title:
```
antara::gaming::event::get_mouse_position
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
| [get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md) & | **[operator=](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md#function-operator=)**(const [get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md) & other) <br>Operators.  |
|  | **[get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md#function-get_mouse_position)**(const [get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md) & ) =default  |
|  | **[get_mouse_position](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md#function-get_mouse_position)**([math::vec2i](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & in, bool relative_to_the_window_ =false) <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[relative_to_the_window](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md#variable-relative_to_the_window)**  |
| [math::vec2i](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[pos](Classes/structantara_1_1gaming_1_1event_1_1get__mouse__position.md#variable-pos)** <br>Fields.  |











### Public Functions Documentation

#### function operator=

```cpp
inline get_mouse_position & operator=(
    const get_mouse_position & other
)
```

Operators. 



























#### function get_mouse_position

```cpp
get_mouse_position(
    const get_mouse_position & 
) =default
```




























#### function get_mouse_position

```cpp
inline get_mouse_position(
    math::vec2i & in,
    bool relative_to_the_window_ =false
)
```

Constructors. 





























### Public Attributes Documentation

#### variable relative_to_the_window

```cpp
bool relative_to_the_window {false};
```




























#### variable pos

```cpp
math::vec2i & pos;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1invoker__dispatcher.md
  Topic name: antara::gaming::event::invoker_dispatcher
  Hash count: 0
-->


## invoker_dispatcher

#### Full Title:
```
antara::gaming::event::invoker_dispatcher
```




 [More...](#detailed-description)











### Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[operator()](Classes/structantara_1_1gaming_1_1event_1_1invoker__dispatcher.md#function-operator())**(entt::dispatcher & self, Arguments &&... args)  |
| constexpr | **[invoker_dispatcher](Classes/structantara_1_1gaming_1_1event_1_1invoker__dispatcher.md#function-invoker_dispatcher)**() =default  |









### Detailed Description

```cpp
template <typename Event,
typename... Arguments>
struct antara::gaming::event::invoker_dispatcher;
```































### Public Functions Documentation

#### function operator()

```cpp
inline void operator()(
    entt::dispatcher & self,
    Arguments &&... args
)
```




























#### function invoker_dispatcher

```cpp
constexpr invoker_dispatcher() =default
```








































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md
  Topic name: antara::gaming::event::key_pressed
  Hash count: 0
-->


## key_pressed

#### Full Title:
```
antara::gaming::event::key_pressed
```




triggered when pressing a key on the keyboard.  [More...](#detailed-description)


`#include <key.pressed.hpp>`









### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#function-key_pressed)**()  |
|  | **[key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#function-key_pressed)**(input::key key_, bool alt_, bool control_, bool shift_, bool system_) <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[system](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-system)** <br>is system pressed at the same time.  |
| bool | **[shift](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-shift)** <br>is shift pressed at the same time.  |
| bool | **[control](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-control)** <br>is ctrl pressed at the same time.  |
| bool | **[alt](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-alt)** <br>is alt pressed at the same time.  |
| antara::gaming::input::key | **[key](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-key)** <br>Fields.  |







### Detailed Description

```cpp
struct antara::gaming::event::key_pressed;
```

triggered when pressing a key on the keyboard. 



























```
embed:rst:leading-asterisk
*      .. note::
*         This class is automatically reflected for scripting systems such as lua, python.
* ```





### Public Functions Documentation

#### function key_pressed

```cpp
key_pressed()
```


























default constructor (for scripting systems convenience) 


#### function key_pressed

```cpp
key_pressed(
    input::key key_,
    bool alt_,
    bool control_,
    bool shift_,
    bool system_
)
```

Constructors. 

























constructor with args 

```
embed:rst:leading-asterisk
*      .. note::
*         Principal Constructor.
* ```

Example: 

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/event/key.pressed.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    dispatcher.trigger<key_pressed>(input::key::a, false, false, false, false);
}
```




### Public Attributes Documentation

#### variable system

```cpp
bool system {false};
```

is system pressed at the same time. 



























#### variable shift

```cpp
bool shift {false};
```

is shift pressed at the same time. 



























#### variable control

```cpp
bool control {false};
```

is ctrl pressed at the same time. 



























#### variable alt

```cpp
bool alt {false};
```

is alt pressed at the same time. 



























#### variable key

```cpp
antara::gaming::input::key key;
```

Fields. 

























key pressed 












<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1key__released.md
  Topic name: antara::gaming::event::key_released
  Hash count: 0
-->


## key_released

#### Full Title:
```
antara::gaming::event::key_released
```




triggered when releasing a key on the keyboard.  [More...](#detailed-description)


`#include <key.released.hpp>`









### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#function-key_released)**()  |
|  | **[key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#function-key_released)**(input::key key_, bool alt_, bool control_, bool shift_, bool system_) <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[system](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-system)** <br>is system released at the same time.  |
| bool | **[shift](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-shift)** <br>is shift released at the same time.  |
| bool | **[control](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-control)** <br>is ctrl released at the same time.  |
| bool | **[alt](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-alt)** <br>is alt released at the same time.  |
| input::key | **[key](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-key)** <br>Fields.  |







### Detailed Description

```cpp
struct antara::gaming::event::key_released;
```

triggered when releasing a key on the keyboard. 



























```
embed:rst:leading-asterisk
*      .. note::
*         This class is automatically reflected for scripting systems such as lua, python.
* ```





### Public Functions Documentation

#### function key_released

```cpp
key_released()
```


























default constructor (for scripting systems convenience) 


#### function key_released

```cpp
key_released(
    input::key key_,
    bool alt_,
    bool control_,
    bool shift_,
    bool system_
)
```

Constructors. 

























constructor with args 

```
embed:rst:leading-asterisk
*      .. note::
*         Principal Constructor.
* ```

Example: 

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/event/key_released.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    dispatcher.trigger<key_released>(input::key::a, false, false, false, false);
}
```




### Public Attributes Documentation

#### variable system

```cpp
bool system {false};
```

is system released at the same time. 



























#### variable shift

```cpp
bool shift {false};
```

is shift released at the same time. 



























#### variable control

```cpp
bool control {false};
```

is ctrl released at the same time. 



























#### variable alt

```cpp
bool alt {false};
```

is alt released at the same time. 



























#### variable key

```cpp
input::key key;
```

Fields. 

























key released 












<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1load__textures.md
  Topic name: antara::gaming::event::load_textures
  Hash count: 0
-->


## load_textures

#### Full Title:
```
antara::gaming::event::load_textures
```

















### Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::vector< [loading_settings](Classes/structantara_1_1gaming_1_1event_1_1loading__settings.md) > | **[textures_settings](Classes/structantara_1_1gaming_1_1event_1_1load__textures.md#variable-textures_settings)** <br>Fields.  |













### Public Attributes Documentation

#### variable textures_settings

```cpp
std::vector< loading_settings > textures_settings;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1loading__settings.md
  Topic name: antara::gaming::event::loading_settings
  Hash count: 0
-->


## loading_settings

#### Full Title:
```
antara::gaming::event::loading_settings
```

















### Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[smooth](Classes/structantara_1_1gaming_1_1event_1_1loading__settings.md#variable-smooth)**  |
| std::string | **[texture_id](Classes/structantara_1_1gaming_1_1event_1_1loading__settings.md#variable-texture_id)** <br>Fields.  |













### Public Attributes Documentation

#### variable smooth

```cpp
bool smooth {true};
```




























#### variable texture_id

```cpp
std::string texture_id;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md
  Topic name: antara::gaming::event::mouse_button_pressed
  Hash count: 0
-->


## mouse_button_pressed

#### Full Title:
```
antara::gaming::event::mouse_button_pressed
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md#function-mouse_button_pressed)**(input::mouse_button button_, float x_, float y_, float window_x_, float window_y_)  |
|  | **[mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md#function-mouse_button_pressed)**() =default <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[window_y](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md#variable-window_y)**  |
| float | **[window_x](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md#variable-window_x)**  |
| float | **[y](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md#variable-y)**  |
| float | **[x](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md#variable-x)**  |
| input::mouse_button | **[button](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md#variable-button)** <br>Fields.  |











### Public Functions Documentation

#### function mouse_button_pressed

```cpp
mouse_button_pressed(
    input::mouse_button button_,
    float x_,
    float y_,
    float window_x_,
    float window_y_
)
```




























#### function mouse_button_pressed

```cpp
mouse_button_pressed() =default
```

Constructors. 





























### Public Attributes Documentation

#### variable window_y

```cpp
float window_y;
```




























#### variable window_x

```cpp
float window_x;
```




























#### variable y

```cpp
float y;
```




























#### variable x

```cpp
float x;
```




























#### variable button

```cpp
input::mouse_button button;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md
  Topic name: antara::gaming::event::mouse_button_released
  Hash count: 0
-->


## mouse_button_released

#### Full Title:
```
antara::gaming::event::mouse_button_released
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md#function-mouse_button_released)**(input::mouse_button button_, float x_, float y_, float window_x_, float window_y_)  |
|  | **[mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md#function-mouse_button_released)**() =default <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[window_y](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md#variable-window_y)**  |
| float | **[window_x](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md#variable-window_x)**  |
| float | **[y](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md#variable-y)**  |
| float | **[x](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md#variable-x)**  |
| input::mouse_button | **[button](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md#variable-button)** <br>Fields.  |











### Public Functions Documentation

#### function mouse_button_released

```cpp
mouse_button_released(
    input::mouse_button button_,
    float x_,
    float y_,
    float window_x_,
    float window_y_
)
```




























#### function mouse_button_released

```cpp
mouse_button_released() =default
```

Constructors. 





























### Public Attributes Documentation

#### variable window_y

```cpp
float window_y;
```




























#### variable window_x

```cpp
float window_x;
```




























#### variable y

```cpp
float y;
```




























#### variable x

```cpp
float x;
```




























#### variable button

```cpp
input::mouse_button button;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md
  Topic name: antara::gaming::event::mouse_moved
  Hash count: 0
-->


## mouse_moved

#### Full Title:
```
antara::gaming::event::mouse_moved
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md#function-mouse_moved)**(float x_, float y_, float window_x_, float window_y_)  |
|  | **[mouse_moved](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md#function-mouse_moved)**() =default <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[window_y](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md#variable-window_y)**  |
| float | **[window_x](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md#variable-window_x)**  |
| float | **[y](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md#variable-y)**  |
| float | **[x](Classes/structantara_1_1gaming_1_1event_1_1mouse__moved.md#variable-x)** <br>Fields.  |











### Public Functions Documentation

#### function mouse_moved

```cpp
mouse_moved(
    float x_,
    float y_,
    float window_x_,
    float window_y_
)
```




























#### function mouse_moved

```cpp
mouse_moved() =default
```

Constructors. 





























### Public Attributes Documentation

#### variable window_y

```cpp
float window_y;
```




























#### variable window_x

```cpp
float window_x;
```




























#### variable y

```cpp
float y;
```




























#### variable x

```cpp
float x;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1quit__game.md
  Topic name: antara::gaming::event::quit_game
  Hash count: 0
-->


## quit_game

#### Full Title:
```
antara::gaming::event::quit_game
```




Event that allows us to leave a game with a return value.  [More...](#detailed-description)


`#include <quit.game.hpp>`









### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#function-quit_game)**()  |
|  | **[quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#function-quit_game)**(int return_value) <br>Constructors.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[return_value_](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#variable-return_value_)** <br>Fields.  |
| constexpr const [event::invoker_dispatcher](Classes/structantara_1_1gaming_1_1event_1_1invoker__dispatcher.md)< [quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md), int > | **[invoker](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#variable-invoker)** <br>Static fields.  |







### Detailed Description

```cpp
struct antara::gaming::event::quit_game;
```

Event that allows us to leave a game with a return value. 



























```
embed:rst:leading-asterisk
*      .. note::
*         This class is automatically reflected for scripting systems such as lua, python.
* ```





### Public Functions Documentation

#### function quit_game

```cpp
quit_game()
```


























default constructor (for scripting systems convenience) 


#### function quit_game

```cpp
quit_game(
    int return_value
)
```

Constructors. 

























constructor with args 

```
embed:rst:leading-asterisk
*      .. note::
*         Principal Constructor.
* ```

Example: 

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/event/quit_game.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    dispatcher.trigger<quit_game>(0);
}
```




### Public Attributes Documentation

#### variable return_value_

```cpp
int return_value_;
```

Fields. 

























the return value of the program when leaving the game 


#### variable invoker

```cpp
static constexpr const event::invoker_dispatcher< quit_game, int > invoker {};
```

Static fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1set__mouse__position.md
  Topic name: antara::gaming::event::set_mouse_position
  Hash count: 0
-->


## set_mouse_position

#### Full Title:
```
antara::gaming::event::set_mouse_position
```

















### Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[relative_to_the_window](Classes/structantara_1_1gaming_1_1event_1_1set__mouse__position.md#variable-relative_to_the_window)**  |
| [math::vec2i](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[to](Classes/structantara_1_1gaming_1_1event_1_1set__mouse__position.md#variable-to)** <br>Fields.  |













### Public Attributes Documentation

#### variable relative_to_the_window

```cpp
bool relative_to_the_window {false};
```




























#### variable to

```cpp
math::vec2i to;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1start__game.md
  Topic name: antara::gaming::event::start_game
  Hash count: 0
-->


## start_game

#### Full Title:
```
antara::gaming::event::start_game
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[start_game](Classes/structantara_1_1gaming_1_1event_1_1start__game.md#function-start_game)**() =default  |













### Public Functions Documentation

#### function start_game

```cpp
start_game() =default
```








































<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1event_1_1window__resized.md
  Topic name: antara::gaming::event::window_resized
  Hash count: 0
-->


## window_resized

#### Full Title:
```
antara::gaming::event::window_resized
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[window_resized](Classes/structantara_1_1gaming_1_1event_1_1window__resized.md#function-window_resized)**() =default <br>Constructors.  |













### Public Functions Documentation

#### function window_resized

```cpp
window_resized() =default
```

Constructors. 







































