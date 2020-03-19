---
title: antara::gaming::input
summary: < math::vec2i  

---

# antara::gaming::input




< math::vec2i  [More...](#detailed-description)






## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::input::virtual_input](Classes/classantara_1_1gaming_1_1input_1_1virtual__input.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum | **[mouse_wheel](Namespaces/namespaceantara_1_1gaming_1_1input.md#enum-mouse_wheel)** { vertical_wheel, horizontal_wheel } |
| enum | **[mouse_button](Namespaces/namespaceantara_1_1gaming_1_1input.md#enum-mouse_button)** { left, right, middle, x_button_1, x_button_2, x_button_count } |
| enum | **[key](Namespaces/namespaceantara_1_1gaming_1_1input.md#enum-key)** { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, num_0, num_1, num_2, num_3, num_4, num_5, num_6, num_7, num_8, num_9, escape, left_control, left_shift, left_alt, left_system, right_control, right_shift, right_alt, right_system, menu, left_bracket, right_bracket, semi_colon, comma, period, quote, slash, back_slash, tilde, equal, dash, space, return_, back_space, tab, page_up, page_down, end, home, insert, delete_, add, subtract, multiply, divide, left, right, up, down, numpad_0, numpad_1, numpad_2, numpad_3, numpad_4, numpad_5, numpad_6, numpad_7, numpad_8, numpad_9, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, pause } |

## Functions

|                | Name           |
| -------------- | -------------- |
| [math::vec2i](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[get_mouse_position](Namespaces/namespaceantara_1_1gaming_1_1input.md#function-get_mouse_position)**(bool relative_to_the_window =false)  |
| bool | **[is_mouse_button_pressed](Namespaces/namespaceantara_1_1gaming_1_1input.md#function-is_mouse_button_pressed)**(mouse_button button)  |
| bool | **[is_key_pressed](Namespaces/namespaceantara_1_1gaming_1_1input.md#function-is_key_pressed)**(input::key key)  |




## Detailed Description

< math::vec2i 

























< std::vector

< ranges::view::zip

SDK Headers

Dependencies Headers < entt::dispatcher < ranges::any_of < ranges::view::intsSDK Headers

C++ System Headers < std::string < std::unordered_map std::unordered_setDependencies Headers < entt::registry SDK Headers < [event::key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md) < [event::key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md) < [event::mouse_button_pressed](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__pressed.md) < [event::mouse_button_released](Classes/structantara_1_1gaming_1_1event_1_1mouse__button__released.md) < input::key < input::mouse_button 



## Types Documentation

### enum mouse_wheel

```cpp
enum mouse_wheel {
    vertical_wheel,
    horizontal_wheel
}
```




























### enum mouse_button

```cpp
enum mouse_button {
    left,
    right,
    middle,
    x_button_1,
    x_button_2,
    x_button_count
}
```




























### enum key

```cpp
enum key {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    num_0,
    num_1,
    num_2,
    num_3,
    num_4,
    num_5,
    num_6,
    num_7,
    num_8,
    num_9,
    escape,
    left_control,
    left_shift,
    left_alt,
    left_system,
    right_control,
    right_shift,
    right_alt,
    right_system,
    menu,
    left_bracket,
    right_bracket,
    semi_colon,
    comma,
    period,
    quote,
    slash,
    back_slash,
    tilde,
    equal,
    dash,
    space,
    return_,
    back_space,
    tab,
    page_up,
    page_down,
    end,
    home,
    insert,
    delete_,
    add,
    subtract,
    multiply,
    divide,
    left,
    right,
    up,
    down,
    numpad_0,
    numpad_1,
    numpad_2,
    numpad_3,
    numpad_4,
    numpad_5,
    numpad_6,
    numpad_7,
    numpad_8,
    numpad_9,
    f1,
    f2,
    f3,
    f4,
    f5,
    f6,
    f7,
    f8,
    f9,
    f10,
    f11,
    f12,
    f13,
    f14,
    f15,
    pause
}
```





























## Functions Documentation

### function get_mouse_position

```cpp
math::vec2i get_mouse_position(
    bool relative_to_the_window =false
)
```




























### function is_mouse_button_pressed

```cpp
bool is_mouse_button_pressed(
    mouse_button button
)
```




























### function is_key_pressed

```cpp
bool is_key_pressed(
    input::key key
)
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT