---
title: antara::gaming::sfml::resources_manager


---

# antara::gaming::sfml::resources_manager















## Public Functions

|                | Name           |
| -------------- | -------------- |
| music_handle | **[load_music](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_music)**(const char * resource_id)  |
| sound_handle | **[load_sound](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_sound)**(const char * resource_id)  |
| font_handle | **[load_font](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_font)**(const char * resource_id)  |
| texture_handle | **[load_texture](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load_texture)**(const char * resource_id, bool smooth =true)  |
| auto | **[contains](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-contains)**(TCache & cache, const char * id)  |
| auto | **[get](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-get)**(TCache & cache, const char * id)  |
| auto | **[load](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md#function-load)**(TCache & cache, const char * id, TArgs &&... args)  |












## Public Functions Documentation

### function load_music

```cpp
music_handle load_music(
    const char * resource_id
)
```




























### function load_sound

```cpp
sound_handle load_sound(
    const char * resource_id
)
```




























### function load_font

```cpp
font_handle load_font(
    const char * resource_id
)
```




























### function load_texture

```cpp
texture_handle load_texture(
    const char * resource_id,
    bool smooth =true
)
```




























### function contains

```cpp
static inline auto contains(
    TCache & cache,
    const char * id
)
```




























### function get

```cpp
static inline auto get(
    TCache & cache,
    const char * id
)
```




























### function load

```cpp
static inline auto load(
    TCache & cache,
    const char * id,
    TArgs &&... args
)
```


































-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT