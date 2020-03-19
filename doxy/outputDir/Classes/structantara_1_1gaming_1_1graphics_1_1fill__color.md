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