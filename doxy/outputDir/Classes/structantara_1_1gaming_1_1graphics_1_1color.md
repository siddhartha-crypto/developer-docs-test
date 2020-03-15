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

Updated on 14 March 2020 at 22:59:50 AKDT