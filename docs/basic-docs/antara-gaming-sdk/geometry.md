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


