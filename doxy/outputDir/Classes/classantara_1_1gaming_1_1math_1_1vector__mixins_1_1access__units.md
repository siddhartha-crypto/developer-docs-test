---
title: antara::gaming::math::vector_mixins::access_units


---

# antara::gaming::math::vector_mixins::access_units




 [More...](#detailed-description)









## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef Unit | **[value_type](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#typedef-value_type)**  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr Unit | **[magnitude](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-magnitude)**()  |
| constexpr Unit | **[vec_to_angle](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-vec_to_angle)**(const Derived & vec)  |
| constexpr auto | **[angle_to_vec](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-angle_to_vec)**(const Unit degree)  |
| constexpr auto | **[unit_left](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_left)**()  |
| constexpr auto | **[unit_right](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_right)**()  |
| constexpr auto | **[unit_down_left](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_down_left)**()  |
| constexpr auto | **[unit_down_right](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_down_right)**()  |
| constexpr auto | **[unit_down](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_down)**()  |
| constexpr auto | **[unit_up_left](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_up_left)**()  |
| constexpr auto | **[unit_up_right](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_up_right)**()  |
| constexpr auto | **[unit_up](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md#function-unit_up)**()  |








## Detailed Description

```cpp
template <class Derived ,
class Unit >
class antara::gaming::math::vector_mixins::access_units;
```





























## Public Types Documentation

### typedef value_type

```cpp
typedef Unit value_type;
```






























## Public Functions Documentation

### function magnitude

```cpp
inline constexpr Unit magnitude()
```




























### function vec_to_angle

```cpp
static inline constexpr Unit vec_to_angle(
    const Derived & vec
)
```




























### function angle_to_vec

```cpp
static inline constexpr auto angle_to_vec(
    const Unit degree
)
```




























### function unit_left

```cpp
static inline constexpr auto unit_left()
```




























### function unit_right

```cpp
static inline constexpr auto unit_right()
```




























### function unit_down_left

```cpp
static inline constexpr auto unit_down_left()
```




























### function unit_down_right

```cpp
static inline constexpr auto unit_down_right()
```




























### function unit_down

```cpp
static inline constexpr auto unit_down()
```




























### function unit_up_left

```cpp
static inline constexpr auto unit_up_left()
```




























### function unit_up_right

```cpp
static inline constexpr auto unit_up_right()
```




























### function unit_up

```cpp
static inline constexpr auto unit_up()
```


































-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT