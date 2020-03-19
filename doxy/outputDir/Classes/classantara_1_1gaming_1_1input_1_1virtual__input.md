---
title: antara::gaming::input::virtual_input


---

# antara::gaming::input::virtual_input













## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::unordered_set< T > | **[bunch_of](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#typedef-bunch_of)**  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[remove](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-remove)**(const std::string & name)  |
| void | **[remove](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-remove)**(const char * name)  |
| void | **[create](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-create)**(const std::string & name, bunch_of< input::key > keys, bunch_of< input::mouse_button > buttons)  |
| void | **[create](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-create)**(const char * name, bunch_of< input::key > keys, bunch_of< input::mouse_button > buttons)  |
| bool | **[is_released](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-is_released)**(const std::string & name)  |
| bool | **[is_released](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-is_released)**(const char * name)  |
| bool | **[is_tapped](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-is_tapped)**(const std::string & name)  |
| bool | **[is_tapped](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-is_tapped)**(const char * name)  |
| bool | **[is_held](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-is_held)**(const std::string & name)  |
| bool | **[is_held](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-is_held)**(const char * name)  |
| void | **[update](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-update)**()  |
| void | **[init](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-init)**(entt::registry & registry)  |
| void | **[on_mouse_button_released](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-on_mouse_button_released)**(const [event::mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md) & evt)  |
| void | **[on_mouse_button_pressed](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-on_mouse_button_pressed)**(const [event::mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md) & evt)  |
| void | **[on_key_released](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-on_key_released)**(const [event::key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md) & evt)  |
| void | **[on_key_pressed](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md#function-on_key_pressed)**(const [event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md) & evt)  |










## Public Types Documentation

### typedef bunch_of

```cpp
typedef std::unordered_set< T > bunch_of;
```






























## Public Functions Documentation

### function remove

```cpp
static void remove(
    const std::string & name
)
```




























### function remove

```cpp
static void remove(
    const char * name
)
```




























### function create

```cpp
static void create(
    const std::string & name,
    bunch_of< input::key > keys,
    bunch_of< input::mouse_button > buttons
)
```




























### function create

```cpp
static void create(
    const char * name,
    bunch_of< input::key > keys,
    bunch_of< input::mouse_button > buttons
)
```




























### function is_released

```cpp
static bool is_released(
    const std::string & name
)
```




























### function is_released

```cpp
static bool is_released(
    const char * name
)
```




























### function is_tapped

```cpp
static bool is_tapped(
    const std::string & name
)
```




























### function is_tapped

```cpp
static bool is_tapped(
    const char * name
)
```




























### function is_held

```cpp
static bool is_held(
    const std::string & name
)
```




























### function is_held

```cpp
static bool is_held(
    const char * name
)
```




























### function update

```cpp
static void update()
```




























### function init

```cpp
static void init(
    entt::registry & registry
)
```




























### function on_mouse_button_released

```cpp
static void on_mouse_button_released(
    const event::mouse_button_released & evt
)
```




























### function on_mouse_button_pressed

```cpp
static void on_mouse_button_pressed(
    const event::mouse_button_pressed & evt
)
```




























### function on_key_released

```cpp
static void on_key_released(
    const event::key_released & evt
)
```




























### function on_key_pressed

```cpp
static void on_key_pressed(
    const event::key_pressed & evt
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT