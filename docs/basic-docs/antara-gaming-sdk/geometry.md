/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1geometry_1_1circle.md
  Topic name: antara::gaming::geometry::circle
  Hash count: 0
*/
---
title: antara::gaming::geometry::circle


---

# antara::gaming::geometry::circle















## Public Functions

|                | Name           |
| -------------- | -------------- |
| [circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md) & | **[operator=](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#function-operator=)**(const [circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md) & other) =default <br>Operators.  |
|  | **[circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#function-circle)**()  |
|  | **[circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#function-circle)**(const [circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md) & other) =default  |
|  | **[circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#function-circle)**(float radius_, bool try_to_apply_rt, std::optional< [circle_texture](Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md) > circle_texture_props_ =std::nullopt)  |
|  | **[circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#function-circle)**(float radius_) <br>Constructors.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::optional< [circle_texture](Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md) > | **[circle_texture_props](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#variable-circle_texture_props)**  |
| bool | **[try_to_apply_rt](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#variable-try_to_apply_rt)**  |
| float | **[radius](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md#variable-radius)** <br>Fields.  |










## Public Functions Documentation

### function operator=

```cpp
circle & operator=(
    const circle & other
) =default
```

Operators. 



























### function circle

```cpp
circle()
```




























### function circle

```cpp
circle(
    const circle & other
) =default
```




























### function circle

```cpp
circle(
    float radius_,
    bool try_to_apply_rt,
    std::optional< circle_texture > circle_texture_props_ =std::nullopt
)
```




























### function circle

```cpp
circle(
    float radius_
)
```

Constructors. 





























## Public Attributes Documentation

### variable circle_texture_props

```cpp
std::optional< circle_texture > circle_texture_props {std::nullopt};
```




























### variable try_to_apply_rt

```cpp
bool try_to_apply_rt {false};
```




























### variable radius

```cpp
float radius {0.f};
```

Fields. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md
  Topic name: antara::gaming::geometry::circle_texture
  Hash count: 0
*/
---
title: antara::gaming::geometry::circle_texture


---

# antara::gaming::geometry::circle_texture

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [graphics::rect](Classes/structantara_1_1gaming_1_1graphics_1_1rect.md) | **[texture_rec](Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md#variable-texture_rec)** <br>take the whole size by default  |
| bool | **[native_size](Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md#variable-native_size)** <br>Fields.  |












## Public Attributes Documentation

### variable texture_rec

```cpp
graphics::rect texture_rec {};
```

take the whole size by default 



























### variable native_size

```cpp
bool native_size {true};
```

Fields. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md
  Topic name: antara::gaming::geometry::rectangle
  Hash count: 0
*/
---
title: antara::gaming::geometry::rectangle


---

# antara::gaming::geometry::rectangle















## Public Functions

|                | Name           |
| -------------- | -------------- |
| [rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md) & | **[operator=](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md#function-operator=)**(const [rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md) & other) =default <br>Operators.  |
|  | **[rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md#function-rectangle)**([math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) size_)  |
|  | **[rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md#function-rectangle)**(const [rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md) & other) =default  |
|  | **[rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md#function-rectangle)**() =default <br>Constructors.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[size](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md#variable-size)** <br>Fields.  |










## Public Functions Documentation

### function operator=

```cpp
rectangle & operator=(
    const rectangle & other
) =default
```

Operators. 



























### function rectangle

```cpp
rectangle(
    math::vec2f size_
)
```




























### function rectangle

```cpp
rectangle(
    const rectangle & other
) =default
```




























### function rectangle

```cpp
rectangle() =default
```

Constructors. 





























## Public Attributes Documentation

### variable size

```cpp
math::vec2f size {math::vec2f::scalar(50.f)};
```

Fields. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md
  Topic name: antara::gaming::geometry::vertex
  Hash count: 0
*/
---
title: antara::gaming::geometry::vertex


---

# antara::gaming::geometry::vertex

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) | **[pixel_color](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md#variable-pixel_color)**  |
| [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) | **[texture_pos](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md#variable-texture_pos)**  |
| [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) | **[pos](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md#variable-pos)**  |












## Public Attributes Documentation

### variable pixel_color

```cpp
graphics::color pixel_color {graphics::white};
```




























### variable texture_pos

```cpp
transform::position_2d texture_pos {transform::position_2d::scalar(0.f)};
```




























### variable pos

```cpp
transform::position_2d pos {transform::position_2d::scalar(0.f)};
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md
  Topic name: antara::gaming::geometry::vertex_array
  Hash count: 0
*/
---
title: antara::gaming::geometry::vertex_array


---

# antara::gaming::geometry::vertex_array















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#function-vertex_array)**(std::vector< [vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md) > vertices_, vertex_geometry_type geometry_type_)  |
|  | **[vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#function-vertex_array)**(std::vector< [vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md) > vertices_, vertex_geometry_type geometry_type_, std::optional< std::string > texture_id_)  |
|  | **[vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#function-vertex_array)**(std::vector< [vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md) > vertices_, std::optional< std::string > texture_id_)  |
|  | **[vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#function-vertex_array)**(std::vector< [vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md) > vertices_, vertex_geometry_type geometry_type_, std::optional< entt::entity > entity)  |
|  | **[vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#function-vertex_array)**(std::vector< [vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md) > vertices_)  |
|  | **[vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#function-vertex_array)**() =default  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::optional< entt::entity > | **[entity_that_own_render_texture](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#variable-entity_that_own_render_texture)** <br>! < Usefull when want to loading from a created texture.  |
| std::optional< std::string > | **[texture_id](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#variable-texture_id)** <br>! < Usefull when want to loading from existing texture  |
| vertex_geometry_type | **[geometry_type](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#variable-geometry_type)**  |
| std::vector< [vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md) > | **[vertices](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md#variable-vertices)**  |










## Public Functions Documentation

### function vertex_array

```cpp
inline vertex_array(
    std::vector< vertex > vertices_,
    vertex_geometry_type geometry_type_
)
```




























### function vertex_array

```cpp
inline vertex_array(
    std::vector< vertex > vertices_,
    vertex_geometry_type geometry_type_,
    std::optional< std::string > texture_id_
)
```




























### function vertex_array

```cpp
inline vertex_array(
    std::vector< vertex > vertices_,
    std::optional< std::string > texture_id_
)
```




























### function vertex_array

```cpp
inline vertex_array(
    std::vector< vertex > vertices_,
    vertex_geometry_type geometry_type_,
    std::optional< entt::entity > entity
)
```




























### function vertex_array

```cpp
inline vertex_array(
    std::vector< vertex > vertices_
)
```




























### function vertex_array

```cpp
vertex_array() =default
```






























## Public Attributes Documentation

### variable entity_that_own_render_texture

```cpp
std::optional< entt::entity > entity_that_own_render_texture {std::nullopt};
```

! < Usefull when want to loading from a created texture. 



























### variable texture_id

```cpp
std::optional< std::string > texture_id {std::nullopt};
```

! < Usefull when want to loading from existing texture 



























### variable geometry_type

```cpp
vertex_geometry_type geometry_type;
```




























### variable vertices

```cpp
std::vector< vertex > vertices;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


