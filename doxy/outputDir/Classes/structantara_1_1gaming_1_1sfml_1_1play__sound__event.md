---
title: antara::gaming::sfml::play_sound_event


---

# antara::gaming::sfml::play_sound_event















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[play_sound_event](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#function-play_sound_event)**(const char * sound_id_, [resources_manager](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md) * resources_manager_, std::function< void()> on_finish =[]() { }, float volume =100.f)  |
|  | **[play_sound_event](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#function-play_sound_event)**()  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[volume](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-volume)**  |
| std::function< void()> | **[on_finish](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-on_finish)**  |
| [resources_manager](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md) * | **[resource_mgr](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-resource_mgr)**  |
| const char * | **[sound_id](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md#variable-sound_id)**  |










## Public Functions Documentation

### function play_sound_event

```cpp
play_sound_event(
    const char * sound_id_,
    resources_manager * resources_manager_,
    std::function< void()> on_finish =[]() { },
    float volume =100.f
)
```




























### function play_sound_event

```cpp
play_sound_event()
```






























## Public Attributes Documentation

### variable volume

```cpp
float volume {100.f};
```




























### variable on_finish

```cpp
std::function< void()> on_finish {[]() {
        }};
```




























### variable resource_mgr

```cpp
resources_manager * resource_mgr {nullptr};
```




























### variable sound_id

```cpp
const char * sound_id {nullptr};
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT