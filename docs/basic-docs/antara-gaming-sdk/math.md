<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md
  Topic name: antara::gaming::math::basic_vector
  Hash count: 0
-->
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

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Namespaces/namespaceantara_1_1gaming_1_1math_1_1vector__mixins.md
  Topic name: antara::gaming::math::vector_mixins
  Hash count: 0
-->
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


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__units.md
  Topic name: antara::gaming::math::vector_mixins::access_units
  Hash count: 1
-->
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


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__xy.md
  Topic name: antara::gaming::math::vector_mixins::access_xy
  Hash count: 1
-->
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


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1math_1_1vector__mixins_1_1access__z.md
  Topic name: antara::gaming::math::vector_mixins::access_z
  Hash count: 1
-->
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


