---
title: antara::gaming::math::vector_mixins::access_z


---

# antara::gaming::math::vector_mixins::access_z




 [More...](#detailed-description)









## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef Unit | **[value_type](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__z.md#typedef-value_type)**  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr void | **[set_xyz](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__z.md#function-set_xyz)**(value_type value_x, value_type value_y, value_type value_z)  |
| constexpr void | **[set_z](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__z.md#function-set_z)**(value_type value_z)  |
| constexpr auto & | **[z_ref](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__z.md#function-z_ref)**()  |
| constexpr auto | **[z](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__z.md#function-z)**() const  |








## Detailed Description

```cpp
template <class Derived ,
class Unit >
class antara::gaming::math::vector_mixins::access_z;
```





























## Public Types Documentation

### typedef value_type

```cpp
typedef Unit value_type;
```






























## Public Functions Documentation

### function set_xyz

```cpp
inline constexpr void set_xyz(
    value_type value_x,
    value_type value_y,
    value_type value_z
)
```




























### function set_z

```cpp
inline constexpr void set_z(
    value_type value_z
)
```




























### function z_ref

```cpp
inline constexpr auto & z_ref()
```




























### function z

```cpp
inline constexpr auto z() const
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT