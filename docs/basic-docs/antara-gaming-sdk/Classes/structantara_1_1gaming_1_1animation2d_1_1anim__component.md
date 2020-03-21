---
title: antara::gaming::animation2d::anim_component


---

# antara::gaming::animation2d::anim_component













## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::chrono::duration< float, std::ratio< 1 > > | **[seconds](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#typedef-seconds)** <br>Typedefs.  |
| enum | **[status](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#enum-status)** { stopped, paused, playing }<br>Enums.  |




## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [seconds](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#typedef-seconds) | **[elapsed](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-elapsed)**  |
| std::size_t | **[current_frame](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-current_frame)**  |
| bool | **[loop](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-loop)**  |
| std::size_t | **[repeat](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-repeat)**  |
| [seconds](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#typedef-seconds) | **[speed](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-speed)**  |
| [status](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#enum-status) | **[current_status](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-current_status)**  |
| std::string | **[animation_id](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-animation_id)** <br>Fields.  |








## Public Types Documentation

### typedef seconds

```cpp
typedef std::chrono::duration< float, std::ratio< 1 > > seconds;
```

Typedefs. 



























### enum status

```cpp
enum status {
    stopped,
    paused,
    playing
}
```

Enums. 































## Public Attributes Documentation

### variable elapsed

```cpp
seconds elapsed {0};
```




























### variable current_frame

```cpp
std::size_t current_frame {0};
```




























### variable loop

```cpp
bool loop {false};
```




























### variable repeat

```cpp
std::size_t repeat {0};
```




























### variable speed

```cpp
seconds speed {0.9f};
```




























### variable current_status

```cpp
status current_status {stopped};
```




























### variable animation_id

```cpp
std::string animation_id;
```

Fields. 































-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT