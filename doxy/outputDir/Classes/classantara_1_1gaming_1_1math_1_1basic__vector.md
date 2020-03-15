---
title: antara::gaming::math::basic_vector


---

# antara::gaming::math::basic_vector




 [More...](#detailed-description)




Inherits from Mixins< basic_vector< Unit, Size, Mixins... >, Unit >

Inherited by [antara::gaming::transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md), [antara::gaming::transform::previous_position_2d](Classes/structantara_1_1gaming_1_1transform_1_1previous__position__2d.md)




## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef Unit | **[value_type](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#typedef-value_type)**  |


## Public Functions

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




## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[basic_vector](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md#friend-basic_vector)**  |




## Detailed Description

```cpp
template <class Unit,
size_t Size,
template< class, class > class... Mixins>
class antara::gaming::math::basic_vector;
```





























## Public Types Documentation

### typedef value_type

```cpp
typedef Unit value_type;
```






























## Public Functions Documentation

### function scalar

```cpp
static inline constexpr auto scalar(
    Unit single_value
)
```




























### function create

```cpp
static inline constexpr basic_vector create(
    Args &&... units
)
```




























### function operator<=

```cpp
inline constexpr bool operator<=(
    basic_vector< NewUnit, Size, NewMixins... > const & rhs
) const
```




























### function operator>

```cpp
inline constexpr bool operator>(
    basic_vector< NewUnit, Size, NewMixins... > const & rhs
) const
```




























### function operator>=

```cpp
inline constexpr bool operator>=(
    basic_vector< NewUnit, Size, NewMixins... > const & rhs
) const
```




























### function operator<

```cpp
inline constexpr bool operator<(
    basic_vector< NewUnit, Size, NewMixins... > const & rhs
) const
```




























### function operator!=

```cpp
inline constexpr bool operator!=(
    basic_vector< NewUnit, Size, NewMixins... > const & rhs
) const
```




























### function operator==

```cpp
inline constexpr bool operator==(
    basic_vector< NewUnit, Size, NewMixins... > const & rhs
) const
```




























### function normalized

```cpp
inline constexpr basic_vector normalized() const
```




























### function distance

```cpp
inline constexpr Unit distance(
    basic_vector const & other
)
```




























### function length

```cpp
inline constexpr Unit length() const
```




























### function square_length

```cpp
inline constexpr Unit square_length() const
```




























### function operator-

```cpp
inline constexpr basic_vector operator-() const
```




























### function operator/=

```cpp
inline constexpr basic_vector & operator/=(
    basic_vector const & rhs
)
```




























### function operator*=

```cpp
inline constexpr basic_vector & operator*=(
    basic_vector const & rhs
)
```




























### function operator-=

```cpp
inline constexpr basic_vector & operator-=(
    basic_vector const & rhs
)
```




























### function operator+=

```cpp
inline constexpr basic_vector & operator+=(
    basic_vector const & rhs
)
```




























### function operator/=

```cpp
inline constexpr basic_vector & operator/=(
    Unit b
)
```




























### function operator*=

```cpp
inline constexpr basic_vector & operator*=(
    Unit b
)
```




























### function operator-=

```cpp
inline constexpr basic_vector & operator-=(
    Unit b
)
```




























### function operator+=

```cpp
inline constexpr basic_vector & operator+=(
    Unit b
)
```




























### function operator/

```cpp
inline constexpr basic_vector operator/(
    basic_vector const & rhs
) const
```




























### function operator*

```cpp
inline constexpr basic_vector operator*(
    basic_vector const & rhs
) const
```




























### function operator-

```cpp
inline constexpr basic_vector operator-(
    basic_vector const & rhs
) const
```




























### function operator+

```cpp
inline constexpr basic_vector operator+(
    basic_vector const & rhs
) const
```




























### function operator/

```cpp
inline constexpr basic_vector operator/(
    Unit b
) const
```




























### function operator*

```cpp
inline constexpr basic_vector operator*(
    Unit b
) const
```




























### function operator-

```cpp
inline constexpr basic_vector operator-(
    Unit b
) const
```




























### function operator+

```cpp
inline constexpr basic_vector operator+(
    Unit b
) const
```




























### function to

```cpp
inline constexpr Vec to() const
```




























### function operator basic_vector< NewUnit, Size, NewMixins... >

```cpp
inline constexpr operator basic_vector< NewUnit, Size, NewMixins... >() const
```




























### function end

```cpp
inline constexpr auto end() const
```




























### function end

```cpp
inline constexpr auto end()
```




























### function begin

```cpp
inline constexpr auto begin() const
```




























### function begin

```cpp
inline constexpr auto begin()
```




























### function size

```cpp
inline constexpr int size() const
```




























### function data

```cpp
inline constexpr Unit const  * data() const
```




























### function data

```cpp
inline constexpr Unit * data()
```




























### function get

```cpp
inline constexpr Unit & get()
```




























### function get

```cpp
inline constexpr Unit get() const
```




























### function operator[]

```cpp
inline constexpr Unit & operator[](
    int i
)
```




























### function operator[]

```cpp
inline constexpr Unit operator[](
    int i
) const
```




























### function basic_vector

```cpp
inline constexpr basic_vector(
    Unit single_value
)
```




























### function basic_vector

```cpp
inline constexpr basic_vector(
    Args... args
)
```
































## Friends

### friend basic_vector

```cpp
friend class basic_vector;
```






























-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT