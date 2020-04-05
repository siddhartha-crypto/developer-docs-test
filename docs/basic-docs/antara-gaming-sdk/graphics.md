/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1canvas__2d.md
  Topic name: antara::gaming::graphics::canvas_2d
  Hash count: 0
*/
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

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1color.md
  Topic name: antara::gaming::graphics::color
  Hash count: 0
*/
---
title: antara::gaming::graphics::color


---

# antara::gaming::graphics::color









Inherited by [antara::gaming::graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md), [antara::gaming::graphics::outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md)






## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr bool | **[operator!=](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator!=)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & rhs) const  |
| constexpr bool | **[operator==](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator==)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & rhs) const  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & other) =default  |
| constexpr [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & | **[operator=](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator=)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & other) =default  |
| void | **[set_unique_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_unique_color)**(std::uint8_t value, std::uint8_t alpha)  |
| void | **[set_unique_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_unique_color)**(std::uint8_t value)  |
| void | **[set_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_color)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & to)  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**(std::uint8_t r_, std::uint8_t g_, std::uint8_t b_, std::uint8_t a_ =255)  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**()  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::uint8_t | **[a](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-a)**  |
| std::uint8_t | **[b](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-b)**  |
| std::uint8_t | **[g](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-g)**  |
| std::uint8_t | **[r](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-r)**  |


## Friends

|                | Name           |
| -------------- | -------------- |
| std::ostream & | **[operator<<](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#friend-operator<<)**(std::ostream & os, const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & color)  |








## Public Functions Documentation

### function operator!=

```cpp
inline constexpr bool operator!=(
    const color & rhs
) const
```




























### function operator==

```cpp
inline constexpr bool operator==(
    const color & rhs
) const
```




























### function color

```cpp
constexpr color(
    const color & other
) =default
```




























### function operator=

```cpp
constexpr color & operator=(
    const color & other
) =default
```




























### function set_unique_color

```cpp
inline void set_unique_color(
    std::uint8_t value,
    std::uint8_t alpha
)
```




























### function set_unique_color

```cpp
inline void set_unique_color(
    std::uint8_t value
)
```




























### function set_color

```cpp
inline void set_color(
    const color & to
)
```




























### function color

```cpp
inline constexpr color(
    std::uint8_t r_,
    std::uint8_t g_,
    std::uint8_t b_,
    std::uint8_t a_ =255
)
```




























### function color

```cpp
inline constexpr color()
```






























## Public Attributes Documentation

### variable a

```cpp
std::uint8_t a {255};
```




























### variable b

```cpp
std::uint8_t b {0};
```




























### variable g

```cpp
std::uint8_t g {0};
```




























### variable r

```cpp
std::uint8_t r {0};
```






























## Friends

### friend operator<<

```cpp
friend std::ostream & operator<<(
    std::ostream & os,
    const color & color
);
```






























-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1drawable__info.md
  Topic name: antara::gaming::graphics::drawable_info
  Hash count: 0
*/
---
title: antara::gaming::graphics::drawable_info


---

# antara::gaming::graphics::drawable_info

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| drawable_type | **[dt](Classes/structantara_1_1gaming_1_1graphics_1_1drawable__info.md#variable-dt)**  |
| entt::registry::entity_type | **[entity](Classes/structantara_1_1gaming_1_1graphics_1_1drawable__info.md#variable-entity)**  |












## Public Attributes Documentation

### variable dt

```cpp
drawable_type dt;
```




























### variable entity

```cpp
entt::registry::entity_type entity;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md
  Topic name: antara::gaming::graphics::fill_color
  Hash count: 0
*/
---
title: antara::gaming::graphics::fill_color


---

# antara::gaming::graphics::fill_color








Inherits from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md#function-fill_color)**(TArgs &&... args)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)**

|                | Name           |
| -------------- | -------------- |
| constexpr bool | **[operator!=](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator!=)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & rhs) const  |
| constexpr bool | **[operator==](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator==)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & rhs) const  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & other) =default  |
| constexpr [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & | **[operator=](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator=)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & other) =default  |
| void | **[set_unique_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_unique_color)**(std::uint8_t value, std::uint8_t alpha)  |
| void | **[set_unique_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_unique_color)**(std::uint8_t value)  |
| void | **[set_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_color)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & to)  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**(std::uint8_t r_, std::uint8_t g_, std::uint8_t b_, std::uint8_t a_ =255)  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**()  |


**Public Attributes inherited from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)**

|                | Name           |
| -------------- | -------------- |
| std::uint8_t | **[a](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-a)**  |
| std::uint8_t | **[b](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-b)**  |
| std::uint8_t | **[g](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-g)**  |
| std::uint8_t | **[r](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-r)**  |


**Friends inherited from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)**

|                | Name           |
| -------------- | -------------- |
| std::ostream & | **[operator<<](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#friend-operator<<)**(std::ostream & os, const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & color)  |







## Public Functions Documentation

### function fill_color

```cpp
inline constexpr fill_color(
    TArgs &&... args
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1layer.md
  Topic name: antara::gaming::graphics::layer
  Hash count: 0
*/
---
title: antara::gaming::graphics::layer


---

# antara::gaming::graphics::layer




 [More...](#detailed-description)



















## Detailed Description

```cpp
template <std::size_t N>
struct antara::gaming::graphics::layer;
```





































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md
  Topic name: antara::gaming::graphics::outline_color
  Hash count: 0
*/
---
title: antara::gaming::graphics::outline_color


---

# antara::gaming::graphics::outline_color








Inherits from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr | **[outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md#function-outline_color)**(const [outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) & other) =default  |
| constexpr [outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) & | **[operator=](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md#function-operator=)**(const [outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) & other) =default  |
| constexpr | **[outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md#function-outline_color)**(float thickness, TArgs &&... args)  |
| constexpr | **[outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md#function-outline_color)**(const [graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & other)  |
| constexpr | **[outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md#function-outline_color)**() =default  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[thickness](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md#variable-thickness)**  |




## Additional inherited members






**Public Functions inherited from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)**

|                | Name           |
| -------------- | -------------- |
| constexpr bool | **[operator!=](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator!=)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & rhs) const  |
| constexpr bool | **[operator==](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-operator==)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & rhs) const  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & other) =default  |
| void | **[set_unique_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_unique_color)**(std::uint8_t value, std::uint8_t alpha)  |
| void | **[set_unique_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_unique_color)**(std::uint8_t value)  |
| void | **[set_color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-set_color)**(const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & to)  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**(std::uint8_t r_, std::uint8_t g_, std::uint8_t b_, std::uint8_t a_ =255)  |
| constexpr | **[color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#function-color)**()  |


**Public Attributes inherited from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)**

|                | Name           |
| -------------- | -------------- |
| std::uint8_t | **[a](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-a)**  |
| std::uint8_t | **[b](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-b)**  |
| std::uint8_t | **[g](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-g)**  |
| std::uint8_t | **[r](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#variable-r)**  |


**Friends inherited from [antara::gaming::graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md)**

|                | Name           |
| -------------- | -------------- |
| std::ostream & | **[operator<<](Classes/structantara_1_1gaming_1_1graphics_1_1color.md#friend-operator<<)**(std::ostream & os, const [color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) & color)  |







## Public Functions Documentation

### function outline_color

```cpp
constexpr outline_color(
    const outline_color & other
) =default
```




























### function operator=

```cpp
constexpr outline_color & operator=(
    const outline_color & other
) =default
```




























### function outline_color

```cpp
inline constexpr outline_color(
    float thickness,
    TArgs &&... args
)
```




























### function outline_color

```cpp
inline constexpr outline_color(
    const graphics::color & other
)
```




























### function outline_color

```cpp
constexpr outline_color() =default
```






























## Public Attributes Documentation

### variable thickness

```cpp
float thickness {0.f};
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1rect.md
  Topic name: antara::gaming::graphics::rect
  Hash count: 0
*/
---
title: antara::gaming::graphics::rect


---

# antara::gaming::graphics::rect

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[size](Classes/structantara_1_1gaming_1_1graphics_1_1rect.md#variable-size)**  |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[pos](Classes/structantara_1_1gaming_1_1graphics_1_1rect.md#variable-pos)**  |












## Public Attributes Documentation

### variable size

```cpp
math::vec2f size;
```




























### variable pos

```cpp
math::vec2f pos;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md
  Topic name: antara::gaming::graphics::rectangle
  Hash count: 0
*/
---
title: antara::gaming::graphics::rectangle


---

# antara::gaming::graphics::rectangle















## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[operator!=](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#function-operator!=)**(const [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) & rhs) const  |
| bool | **[operator==](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#function-operator==)**(const [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) & rhs) const  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[position](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#variable-position)** <br>width/height  |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[size](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#variable-size)**  |


## Friends

|                | Name           |
| -------------- | -------------- |
| std::ostream & | **[operator<<](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#friend-operator<<)**(std::ostream & os, const [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) & rectangle) <br>pos of the rectangle  |








## Public Functions Documentation

### function operator!=

```cpp
inline bool operator!=(
    const rectangle & rhs
) const
```




























### function operator==

```cpp
inline bool operator==(
    const rectangle & rhs
) const
```






























## Public Attributes Documentation

### variable position

```cpp
math::vec2f position;
```

width/height 



























### variable size

```cpp
math::vec2f size;
```






























## Friends

### friend operator<<

```cpp
friend std::ostream & operator<<(
    std::ostream & os,
    const rectangle & rectangle
);
```

pos of the rectangle 





























-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md
  Topic name: antara::gaming::graphics::render_texture_2d
  Hash count: 0
*/
---
title: antara::gaming::graphics::render_texture_2d


---

# antara::gaming::graphics::render_texture_2d

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[repeated](Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md#variable-repeated)**  |
| bool | **[smooth](Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md#variable-smooth)**  |
| [graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) | **[clear_color](Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md#variable-clear_color)**  |
| drawable_registry | **[to_draw](Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md#variable-to_draw)**  |
| [math::vec2u](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[size](Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md#variable-size)**  |
| std::string | **[id](Classes/structantara_1_1gaming_1_1graphics_1_1render__texture__2d.md#variable-id)**  |












## Public Attributes Documentation

### variable repeated

```cpp
bool repeated {false};
```




























### variable smooth

```cpp
bool smooth {true};
```




























### variable clear_color

```cpp
graphics::color clear_color {graphics::black};
```




























### variable to_draw

```cpp
drawable_registry to_draw;
```




























### variable size

```cpp
math::vec2u size;
```




























### variable id

```cpp
std::string id;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1sprite.md
  Topic name: antara::gaming::graphics::sprite
  Hash count: 0
*/
---
title: antara::gaming::graphics::sprite


---

# antara::gaming::graphics::sprite

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [rect](Classes/structantara_1_1gaming_1_1graphics_1_1rect.md) | **[texture_rec](Classes/structantara_1_1gaming_1_1graphics_1_1sprite.md#variable-texture_rec)** <br>take the whole size by default  |
| bool | **[native_size](Classes/structantara_1_1gaming_1_1graphics_1_1sprite.md#variable-native_size)** <br>texture id  |
| std::string | **[appearance](Classes/structantara_1_1gaming_1_1graphics_1_1sprite.md#variable-appearance)**  |












## Public Attributes Documentation

### variable texture_rec

```cpp
rect texture_rec {};
```

take the whole size by default 



























### variable native_size

```cpp
bool native_size {true};
```

texture id 



























### variable appearance

```cpp
std::string appearance;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1graphics_1_1text.md
  Topic name: antara::gaming::graphics::text
  Hash count: 0
*/
---
title: antara::gaming::graphics::text


---

# antara::gaming::graphics::text

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const char * | **[appearance](Classes/structantara_1_1gaming_1_1graphics_1_1text.md#variable-appearance)** <br>spacing between letters  |
| float | **[spacing_letters](Classes/structantara_1_1gaming_1_1graphics_1_1text.md#variable-spacing_letters)** <br>spacing between lines  |
| float | **[spacing_lines](Classes/structantara_1_1gaming_1_1graphics_1_1text.md#variable-spacing_lines)** <br>style of the text  |
| text_style | **[style](Classes/structantara_1_1gaming_1_1graphics_1_1text.md#variable-style)** <br>size of each characters  |
| std::size_t | **[character_size](Classes/structantara_1_1gaming_1_1graphics_1_1text.md#variable-character_size)** <br>text contents  |
| std::string | **[contents](Classes/structantara_1_1gaming_1_1graphics_1_1text.md#variable-contents)**  |












## Public Attributes Documentation

### variable appearance

```cpp
const char * appearance {"sansation.ttf"};
```

spacing between letters 



























### variable spacing_letters

```cpp
float spacing_letters {1.0f};
```

spacing between lines 



























### variable spacing_lines

```cpp
float spacing_lines {1.0f};
```

style of the text 



























### variable style

```cpp
text_style style {regular};
```

size of each characters 



























### variable character_size

```cpp
std::size_t character_size {30ull};
```

text contents 



























### variable contents

```cpp
std::string contents;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Namespaces/namespaceantara_1_1gaming_1_1graphics_1_1tests.md
  Topic name: antara::gaming::graphics::tests
  Hash count: 0
*/
---
title: antara::gaming::graphics::tests


---

# antara::gaming::graphics::tests












## Functions

|                | Name           |
| -------------- | -------------- |
|  | **[TEST_CASE](Namespaces/namespaceantara_1_1gaming_1_1graphics_1_1tests.md#function-test_case)**("blueprint [text](Classes/structantara_1_1gaming_1_1graphics_1_1text.md)" )  |







## Functions Documentation

### function TEST_CASE

```cpp
TEST_CASE(
    "blueprint text" 
)
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


