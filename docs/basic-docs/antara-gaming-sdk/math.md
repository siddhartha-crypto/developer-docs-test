---
title: antara::gaming::math::vector_mixins


---

# antara::gaming::math::vector_mixins










## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::math::vector_mixins::access_z](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__z.md)**  |
| class | **[antara::gaming::math::vector_mixins::access_xy](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md)**  |
| class | **[antara::gaming::math::vector_mixins::access_units](Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md)**  |













-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


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

Updated on 18 March 2020 at 16:53:30 AKDT


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

Updated on 18 March 2020 at 16:53:30 AKDT


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


