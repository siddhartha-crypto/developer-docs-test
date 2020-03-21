---
title: antara::gaming::graphics::canvas_2d


---

# antara::gaming::graphics::canvas_2d













## Public Types

|                | Name           |
| -------------- | -------------- |
| enum | **[scale_mode](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#enum-scale_mode)** { none, stretch, crop, fit } |


## Public Functions

|                | Name           |
| -------------- | -------------- |
| [canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md) & | **[operator=](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#function-operator=)**(const [canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md) & other) =default  |
|  | **[canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#function-canvas_2d)**(const [canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md) & other) =default  |
|  | **[canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#function-canvas_2d)**() =default  |
| bool | **[operator!=](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#function-operator!=)**(const [canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md) & rhs) const  |
| bool | **[operator==](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#function-operator==)**(const [canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md) & rhs) const  |
| void | **[reset_canvas](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#function-reset_canvas)**()  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[canvas_texture_scaling](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-canvas_texture_scaling)**  |
| [fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md) | **[background_color](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-background_color)**  |
| std::string | **[window_title](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-window_title)**  |
| [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) | **[view_port](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-view_port)**  |
| scale_mode | **[current_scaling_mode](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-current_scaling_mode)**  |
| bool | **[no_style](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-no_style)**  |
| bool | **[mouse_grabbed](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-mouse_grabbed)**  |
| bool | **[mouse_visible](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-mouse_visible)**  |
| bool | **[vsync](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-vsync)**  |
| bool | **[is_fullscreen](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-is_fullscreen)**  |
| bool | **[native_desktop_mode](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-native_desktop_mode)**  |
| bool | **[custom_canvas_height](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-custom_canvas_height)**  |
| bool | **[custom_canvas_width](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-custom_canvas_width)**  |
| [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) | **[canvas_texture](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-canvas_texture)**  |
| [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) | **[canvas](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-canvas)**  |
| [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) | **[window](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#variable-window)**  |


## Friends

|                | Name           |
| -------------- | -------------- |
| std::ostream & | **[operator<<](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md#friend-operator<<)**(std::ostream & os, const [canvas_2d](Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md) & d)  |






## Public Types Documentation

### enum scale_mode

```cpp
enum scale_mode {
    none,
    stretch,
    crop,
    fit
}
```






























## Public Functions Documentation

### function operator=

```cpp
canvas_2d & operator=(
    const canvas_2d & other
) =default
```




























### function canvas_2d

```cpp
canvas_2d(
    const canvas_2d & other
) =default
```




























### function canvas_2d

```cpp
canvas_2d() =default
```




























### function operator!=

```cpp
inline bool operator!=(
    const canvas_2d & rhs
) const
```




























### function operator==

```cpp
inline bool operator==(
    const canvas_2d & rhs
) const
```




























### function reset_canvas

```cpp
inline void reset_canvas()
```






























## Public Attributes Documentation

### variable canvas_texture_scaling

```cpp
math::vec2f canvas_texture_scaling {1.0f, 1.0f};
```




























### variable background_color

```cpp
fill_color background_color {graphics::black};
```




























### variable window_title

```cpp
std::string window_title {"Antara Gaming SDK"};
```




























### variable view_port

```cpp
rectangle view_port;
```




























### variable current_scaling_mode

```cpp
scale_mode current_scaling_mode {fit};
```




























### variable no_style

```cpp
bool no_style {false};
```




























### variable mouse_grabbed

```cpp
bool mouse_grabbed {false};
```




























### variable mouse_visible

```cpp
bool mouse_visible {true};
```




























### variable vsync

```cpp
bool vsync {false};
```




























### variable is_fullscreen

```cpp
bool is_fullscreen {false};
```




























### variable native_desktop_mode

```cpp
bool native_desktop_mode {false};
```




























### variable custom_canvas_height

```cpp
bool custom_canvas_height {true};
```




























### variable custom_canvas_width

```cpp
bool custom_canvas_width {true};
```




























### variable canvas_texture

```cpp
rectangle canvas_texture;
```




























### variable canvas

```cpp
rectangle canvas {.size = [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md){1920.f, 1080.f}, .position = math::vec2f::scalar(0.f)};
```




























### variable window

```cpp
rectangle window {.size = [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md){1920.f, 1080.f}, .position = math::vec2f::scalar(0.f)};
```






























## Friends

### friend operator<<

```cpp
friend std::ostream & operator<<(
    std::ostream & os,
    const canvas_2d & d
);
```






























-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT