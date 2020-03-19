---
title: antara::gaming::geometry
summary: < doom::meta::list  

---

# antara::gaming::geometry




< doom::meta::list  [More...](#detailed-description)






## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::geometry::vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md)**  |
| struct | **[antara::gaming::geometry::vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md)**  |
| struct | **[antara::gaming::geometry::rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md)**  |
| struct | **[antara::gaming::geometry::circle_texture](Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md)**  |
| struct | **[antara::gaming::geometry::circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef doom::meta::list< [circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md), [vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md), [vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md), [rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md) > | **[components_list](Namespaces/namespaceantara_1_1gaming_1_1geometry.md#typedef-components_list)**  |
| enum | **[vertex_geometry_type](Namespaces/namespaceantara_1_1gaming_1_1geometry.md#enum-vertex_geometry_type)** { points, lines, line_strip, triangles, triangle_strip, triangle_fan, quads } |

## Functions

|                | Name           |
| -------------- | -------------- |
| entt::entity | **[blueprint_rectangle](Namespaces/namespaceantara_1_1gaming_1_1geometry.md#function-blueprint_rectangle)**(entt::registry & registry, [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) size, [graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md) fill_color, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) pos, [graphics::outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) out_color, const [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & prop)  |
| void | **[blueprint_circle](Namespaces/namespaceantara_1_1gaming_1_1geometry.md#function-blueprint_circle)**(entt::entity circle_entity, entt::registry & registry, float radius, [graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md) fill_color, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) pos, bool try_to_apply_rt, std::optional< [circle_texture](Classes/structantara_1_1gaming_1_1geometry_1_1circle__texture.md) > circle_texture_props, [graphics::outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) out_color, const [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & prop)  |
| entt::entity | **[blueprint_circle](Namespaces/namespaceantara_1_1gaming_1_1geometry.md#function-blueprint_circle)**(entt::registry & registry, float radius, [graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md) fill_color, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) pos, [graphics::outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) out_color, const [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & prop)  |




## Detailed Description

< doom::meta::list 

























< std::vector

< entt::registry

< std::optional

SDK Headers.

Dependencies HeadersSDK Headers < [geometry::circle](Classes/structantara_1_1gaming_1_1geometry_1_1circle.md) < [geometry::rectangle](Classes/structantara_1_1gaming_1_1geometry_1_1rectangle.md) < [geometry::vertex](Classes/structantara_1_1gaming_1_1geometry_1_1vertex.md), [geometry::vertex_array](Classes/structantara_1_1gaming_1_1geometry_1_1vertex__array.md)

C++ System HeadersDependencies Headers < entt::entity < entt::registry SDK Headers < REFL_AUTO < [graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md), [graphics::outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) < [graphics::rect](Classes/structantara_1_1gaming_1_1graphics_1_1rect.md) < math::vec2f < [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) < [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md)

Dependencies Headers < entt::entitySDK Headers < REFL_AUTO < [graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md), [graphics::outline_color](Classes/structantara_1_1gaming_1_1graphics_1_1outline__color.md) < math::vec2f < transform::position2d < [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md)

C++ System Headers < std::optional < std::string < std::moveDependencies Headers < entt::entity < REFL_AUTO < [graphics::color](Classes/structantara_1_1gaming_1_1graphics_1_1color.md) < [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md)



## Types Documentation

### typedef components_list

```cpp
typedef doom::meta::list< circle, vertex, vertex_array, rectangle > components_list;
```




























### enum vertex_geometry_type

```cpp
enum vertex_geometry_type {
    points,
    lines,
    line_strip,
    triangles,
    triangle_strip,
    triangle_fan,
    quads
}
```





























## Functions Documentation

### function blueprint_rectangle

```cpp
entt::entity blueprint_rectangle(
    entt::registry & registry,
    math::vec2f size,
    graphics::fill_color fill_color,
    transform::position_2d pos,
    graphics::outline_color out_color,
    const transform::properties & prop
)
```




























### function blueprint_circle

```cpp
void blueprint_circle(
    entt::entity circle_entity,
    entt::registry & registry,
    float radius,
    graphics::fill_color fill_color,
    transform::position_2d pos,
    bool try_to_apply_rt,
    std::optional< circle_texture > circle_texture_props,
    graphics::outline_color out_color,
    const transform::properties & prop
)
```




























### function blueprint_circle

```cpp
entt::entity blueprint_circle(
    entt::registry & registry,
    float radius,
    graphics::fill_color fill_color,
    transform::position_2d pos,
    graphics::outline_color out_color,
    const transform::properties & prop
)
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT