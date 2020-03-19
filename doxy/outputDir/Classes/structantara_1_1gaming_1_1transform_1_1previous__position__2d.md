---
title: antara::gaming::transform::previous_position_2d


---

# antara::gaming::transform::previous_position_2d








Inherits from [antara::gaming::math::basic_vector< float >](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md), Mixins< basic_vector< Unit, Size, Mixins... >, Unit >







## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md#function-previous_position_2d)**(float x, float y)  |
|  | **[previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md#function-previous_position_2d)**([math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) pos)  |
| [previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md) & | **[operator=](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md#function-operator=)**(const [previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md) & other) =default  |
|  | **[previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md#function-previous_position_2d)**(const [previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md) & other) =default  |
|  | **[previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md#function-previous_position_2d)**() =default  |
|  | **[previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md#function-previous_position_2d)**(Args &&... args)  |






## Additional inherited members




**Public Types inherited from [antara::gaming::math::basic_vector< float >](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)**

|                | Name           |
| -------------- | -------------- |
| typedef Unit | **[value_type](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#typedef-value_type)**  |


**Public Functions inherited from [antara::gaming::math::basic_vector< float >](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)**

|                | Name           |
| -------------- | -------------- |
| constexpr auto | **[scalar](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-scalar)**(Unit single_value)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[create](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-create)**(Args &&... units)  |
| constexpr bool | **[operator<=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator<=)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)< NewUnit, Size, NewMixins... > const & rhs) const  |
| constexpr bool | **[operator>](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator>)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)< NewUnit, Size, NewMixins... > const & rhs) const  |
| constexpr bool | **[operator>=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator>=)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)< NewUnit, Size, NewMixins... > const & rhs) const  |
| constexpr bool | **[operator<](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator<)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)< NewUnit, Size, NewMixins... > const & rhs) const  |
| constexpr bool | **[operator!=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator!=)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)< NewUnit, Size, NewMixins... > const & rhs) const  |
| constexpr bool | **[operator==](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator==)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)< NewUnit, Size, NewMixins... > const & rhs) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[normalized](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-normalized)**() const  |
| constexpr Unit | **[distance](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-distance)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & other)  |
| constexpr Unit | **[length](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-length)**() const  |
| constexpr Unit | **[square_length](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-square_length)**() const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator-](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator-)**() const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator/=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator/=)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator*=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator*=)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator-=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator-=)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator+=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator+=)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator/=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator/=)**(Unit b)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator*=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator*=)**(Unit b)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator-=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator-=)**(Unit b)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) & | **[operator+=](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator+=)**(Unit b)  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator/](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator/)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator*](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator*)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator-](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator-)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator+](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator+)**([basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) const & rhs) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator/](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator/)**(Unit b) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator*](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator*)**(Unit b) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator-](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator-)**(Unit b) const  |
| constexpr [basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[operator+](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator+)**(Unit b) const  |
| constexpr Vec | **[to](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-to)**() const  |
| constexpr | **[operator basic_vector< NewUnit, Size, NewMixins... >](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator basic_vector< newunit, size, newmixins... >)**() const  |
| constexpr auto | **[end](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-end)**() const  |
| constexpr auto | **[end](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-end)**()  |
| constexpr auto | **[begin](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-begin)**() const  |
| constexpr auto | **[begin](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-begin)**()  |
| constexpr int | **[size](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-size)**() const  |
| constexpr Unit const  * | **[data](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-data)**() const  |
| constexpr Unit * | **[data](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-data)**()  |
| constexpr Unit & | **[get](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-get)**()  |
| constexpr Unit | **[get](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-get)**() const  |
| constexpr Unit & | **[operator[]](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator[])**(int i)  |
| constexpr Unit | **[operator[]](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-operator[])**(int i) const  |
| constexpr | **[basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-basic_vector)**(Unit single_value)  |
| constexpr | **[basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#function-basic_vector)**(Args... args)  |




**Friends inherited from [antara::gaming::math::basic_vector< float >](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md)**

|                | Name           |
| -------------- | -------------- |
| class | **[basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#friend-basic_vector)**  |
















## Public Functions Documentation

### function previous_position_2d

```cpp
inline previous_position_2d(
    float x,
    float y
)
```




























### function previous_position_2d

```cpp
inline previous_position_2d(
    math::vec2f pos
)
```




























### function operator=

```cpp
previous_position_2d & operator=(
    const previous_position_2d & other
) =default
```




























### function previous_position_2d

```cpp
previous_position_2d(
    const previous_position_2d & other
) =default
```




























### function previous_position_2d

```cpp
previous_position_2d() =default
```




























### function previous_position_2d

```cpp
inline previous_position_2d(
    Args &&... args
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT