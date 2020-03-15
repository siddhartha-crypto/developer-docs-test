---
title: antara::gaming::animation2d
summary: < std::size_t  

---

# antara::gaming::animation2d




< std::size_t  [More...](#detailed-description)






## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::animation2d::anim_system](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md)**  |
| struct | **[antara::gaming::animation2d::anim_component](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef std::vector< ranged_anim > | **[ranged_anim_array](Namespaces/namespaceantara_1_1gaming_1_1animation2d.md#typedef-ranged_anim_array)**  |
| typedef std::tuple< int, int, std::string > | **[ranged_anim](Namespaces/namespaceantara_1_1gaming_1_1animation2d.md#typedef-ranged_anim)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| entt::entity | **[blueprint_animation](Namespaces/namespaceantara_1_1gaming_1_1animation2d.md#function-blueprint_animation)**(entt::registry & registry, const [anim_component](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md) & anim, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) pos, [graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md) spr_color, const [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & prop) <br>Factory for creation of animation.  |
| ranged_anim | **[make_ranged_anim](Namespaces/namespaceantara_1_1gaming_1_1animation2d.md#function-make_ranged_anim)**(int begin_indice, int end_indice, std::string name)  |




## Detailed Description

< std::size_t 

























C System HeadersC++ System Headers < std::string std::vector Dependencies Headers < entt::entity < entt::registry SDK Headers < animation2d::ranged_anim < [animation2d::anim_component](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md) < [ecs::logic_update_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-logic_update_system) < [event::fill_image_properties](Classes/structantara_1_1gaming_1_1event_1_1fill__image__properties.md) < [graphics::sprite](Classes/structantara_1_1gaming_1_1graphics_1_1sprite.md)

C system HeadersC++ System Headers < std::string < std::tuple < std::vector SDK Headers < math::vec2f

C System HeadersC++ System Headers < std::chrono::duration std::string Dependencies Headers < entt::entity < entt::registry SDK Headers < [graphics::fill_color](Classes/structantara_1_1gaming_1_1graphics_1_1fill__color.md) < transform::position < [transform::properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md)



## Types Documentation

### typedef ranged_anim_array

```cpp
typedef std::vector< ranged_anim > ranged_anim_array;
```




























### typedef ranged_anim

```cpp
typedef std::tuple< int, int, std::string > ranged_anim;
```





























## Functions Documentation

### function blueprint_animation

```cpp
entt::entity blueprint_animation(
    entt::registry & registry,
    const anim_component & anim,
    transform::position_2d pos,
    graphics::fill_color spr_color,
    const transform::properties & prop
)
```

Factory for creation of animation. 



























### function make_ranged_anim

```cpp
inline ranged_anim make_ranged_anim(
    int begin_indice,
    int end_indice,
    std::string name
)
```
































-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT