---
title: antara::gaming::math::vector_mixins::access_xy


---

# antara::gaming::math::vector_mixins::access_xy




 [More...](#detailed-description)









## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef Unit | **[value_type](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#typedef-value_type)**  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr auto | **[make_xy](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-make_xy)**(value_type value_x, value_type value_y)  |
| constexpr Derived & | **[set_xy](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-set_xy)**(value_type value_x, value_type value_y)  |
| constexpr Derived & | **[set_y](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-set_y)**(value_type value)  |
| constexpr Derived & | **[set_x](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-set_x)**(value_type value)  |
| constexpr auto & | **[y_ref](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-y_ref)**()  |
| constexpr auto | **[y](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-y)**() const  |
| constexpr auto & | **[x_ref](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-x_ref)**()  |
| constexpr auto | **[x](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md#function-x)**() const  |








## Detailed Description

```cpp
template <class Derived ,
class Unit >
class antara::gaming::math::vector_mixins::access_xy;
```





























## Public Types Documentation

### typedef value_type

```cpp
typedef Unit value_type;
```






























## Public Functions Documentation

### function make_xy

```cpp
inline constexpr auto make_xy(
    value_type value_x,
    value_type value_y
)
```




























### function set_xy

```cpp
inline constexpr Derived & set_xy(
    value_type value_x,
    value_type value_y
)
```




























### function set_y

```cpp
inline constexpr Derived & set_y(
    value_type value
)
```




























### function set_x

```cpp
inline constexpr Derived & set_x(
    value_type value
)
```




























### function y_ref

```cpp
inline constexpr auto & y_ref()
```




























### function y

```cpp
inline constexpr auto y() const
```




























### function x_ref

```cpp
inline constexpr auto & x_ref()
```




























### function x

```cpp
inline constexpr auto x() const
```


































-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT