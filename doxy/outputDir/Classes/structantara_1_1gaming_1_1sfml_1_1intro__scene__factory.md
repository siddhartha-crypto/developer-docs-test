---
title: antara::gaming::sfml::intro_scene_factory


---

# antara::gaming::sfml::intro_scene_factory















## Public Functions

|                | Name           |
| -------------- | -------------- |
| auto | **[create_name](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_name)**(entt::registry & entity_registry, float logo_final_scale, [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) logo_target_position)  |
| auto | **[create_logo](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_logo)**(entt::registry & entity_registry)  |
| entt::entity | **[create_background](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_background)**(entt::registry & entity_registry)  |
| entt::entity | **[create_foreground](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_foreground)**(entt::registry & entity_registry)  |
| entt::entity | **[create_sound](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md#function-create_sound)**(entt::registry & entity_registry, const std::string & sound_name)  |












## Public Functions Documentation

### function create_name

```cpp
static auto create_name(
    entt::registry & entity_registry,
    float logo_final_scale,
    math::vec2f logo_target_position
)
```




























### function create_logo

```cpp
static auto create_logo(
    entt::registry & entity_registry
)
```




























### function create_background

```cpp
static entt::entity create_background(
    entt::registry & entity_registry
)
```



























Get window information

Entity creation

Give the fresh entity 

### function create_foreground

```cpp
static entt::entity create_foreground(
    entt::registry & entity_registry
)
```



























Get window information

Entity components

Give the fresh entity 

### function create_sound

```cpp
static entt::entity create_sound(
    entt::registry & entity_registry,
    const std::string & sound_name
)
```



























Entity creation

Give the fresh entity 







-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT