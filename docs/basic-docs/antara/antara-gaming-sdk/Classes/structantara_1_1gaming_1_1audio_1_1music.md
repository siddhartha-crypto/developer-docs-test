---
title: antara::gaming::audio::music


---

# antara::gaming::audio::music

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[relative_to_listener](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-relative_to_listener)**  |
| float | **[attenuation](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-attenuation)**  |
| float | **[minimum_distance](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-minimum_distance)**  |
| std::function< void()> | **[on_finish](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-on_finish)**  |
| bool | **[loop](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-loop)**  |
| float | **[volume](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-volume)**  |
| float | **[pitch](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-pitch)**  |
| status | **[music_status](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-music_status)**  |
| std::string | **[music_id](Classes/structantara_1_1gaming_1_1audio_1_1music.md#variable-music_id)**  |












## Public Attributes Documentation

### variable relative_to_listener

```cpp
bool relative_to_listener {false};
```




























### variable attenuation

```cpp
float attenuation {1.f};
```




























### variable minimum_distance

```cpp
float minimum_distance {1.f};
```




























### variable on_finish

```cpp
std::function< void()> on_finish {[]() {
        }};
```




























### variable loop

```cpp
bool loop {false};
```




























### variable volume

```cpp
float volume {100.f};
```




























### variable pitch

```cpp
float pitch {1.f};
```




























### variable music_status

```cpp
status music_status {status::wait_for_first_run};
```




























### variable music_id

```cpp
std::string music_id;
```
































-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT