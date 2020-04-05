/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1audio_1_1music.md
  Topic name: antara::gaming::audio::music
  Hash count: 0
*/
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

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md
  Topic name: antara::gaming::audio::sound_effect
  Hash count: 0
*/
---
title: antara::gaming::audio::sound_effect


---

# antara::gaming::audio::sound_effect

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[recycling](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-recycling)** <br>Indicate if the sound will be reused (do not destroy the entity)  |
| bool | **[relative_to_listener](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-relative_to_listener)** <br>Indicate if the sound is relative to the listener.  |
| float | **[attenuation](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-attenuation)** <br>The attenuation factor of the sound.  |
| float | **[minimum_distance](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-minimum_distance)** <br>The minimum distance of the sound.  |
| std::function< void()> | **[on_finish](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-on_finish)** <br>Callback that will be executed once the sound is finished.  |
| bool | **[loop](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-loop)** <br>Indicates whether the sound is played in a loop.  |
| float | **[volume](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-volume)** <br>The sound volume.  |
| float | **[pitch](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-pitch)** <br>The sound pitch;.  |
| status | **[sound_status](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-sound_status)** <br>The sound status.  |
| std::string | **[sound_id](Classes/structantara_1_1gaming_1_1audio_1_1sound__effect.md#variable-sound_id)** <br>The id of the sound.  |












## Public Attributes Documentation

### variable recycling

```cpp
bool recycling {false};
```

Indicate if the sound will be reused (do not destroy the entity) 



























### variable relative_to_listener

```cpp
bool relative_to_listener {false};
```

Indicate if the sound is relative to the listener. 



























### variable attenuation

```cpp
float attenuation {1.f};
```

The attenuation factor of the sound. 



























### variable minimum_distance

```cpp
float minimum_distance {1.f};
```

The minimum distance of the sound. 



























### variable on_finish

```cpp
std::function< void()> on_finish {[]() {
        }};
```

Callback that will be executed once the sound is finished. 



























### variable loop

```cpp
bool loop {false};
```

Indicates whether the sound is played in a loop. 



























### variable volume

```cpp
float volume {100.f};
```

The sound volume. 



























### variable pitch

```cpp
float pitch {1.f};
```

The sound pitch;. 



























### variable sound_status

```cpp
status sound_status {status::wait_for_first_run};
```

The sound status. 



























### variable sound_id

```cpp
std::string sound_id;
```

The id of the sound. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


