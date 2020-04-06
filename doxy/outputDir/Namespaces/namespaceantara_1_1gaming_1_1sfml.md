

## sfml

#### Full Title:
```
antara::gaming::sfml
```










### Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::sfml::vertex_array](Classes/structantara_1_1gaming_1_1sfml_1_1vertex__array.md)**  |
| struct | **[antara::gaming::sfml::text](Classes/structantara_1_1gaming_1_1sfml_1_1text.md)**  |
| struct | **[antara::gaming::sfml::sprite](Classes/structantara_1_1gaming_1_1sfml_1_1sprite.md)**  |
| class | **[antara::gaming::sfml::resources_manager](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md)**  |
| struct | **[antara::gaming::sfml::render_texture](Classes/structantara_1_1gaming_1_1sfml_1_1render__texture.md)**  |
| struct | **[antara::gaming::sfml::rectangle](Classes/structantara_1_1gaming_1_1sfml_1_1rectangle.md)**  |
| struct | **[antara::gaming::sfml::play_sound_event](Classes/structantara_1_1gaming_1_1sfml_1_1play__sound__event.md)**  |
| class | **[antara::gaming::sfml::lua_system](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md)**  |
| struct | **[antara::gaming::sfml::loader< sf::Music >](Classes/structantara_1_1gaming_1_1sfml_1_1loader_3_01sf_1_1_music_01_4.md)**  |
| struct | **[antara::gaming::sfml::loader](Classes/structantara_1_1gaming_1_1sfml_1_1loader.md)**  |
| struct | **[antara::gaming::sfml::intro_scene_factory](Classes/structantara_1_1gaming_1_1sfml_1_1intro__scene__factory.md)**  |
| class | **[antara::gaming::sfml::intro_scene](Classes/classantara_1_1gaming_1_1sfml_1_1intro__scene.md)**  |
| class | **[antara::gaming::sfml::input_system](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md)**  |
| class | **[antara::gaming::sfml::graphic_system](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md)**  |
| struct | **[antara::gaming::sfml::component_sound](Classes/structantara_1_1gaming_1_1sfml_1_1component__sound.md)** <br>This struct contains the sound and attributes of it such as volume.  |
| struct | **[antara::gaming::sfml::circle](Classes/structantara_1_1gaming_1_1sfml_1_1circle.md)**  |
| class | **[antara::gaming::sfml::audio_system](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md)** <br>This class allows the customization and play of audio.  |

### Types

|                | Name           |
| -------------- | -------------- |
| typedef [resources::system](Classes/classantara_1_1gaming_1_1resources_1_1system.md)< [resources_manager](Classes/classantara_1_1gaming_1_1sfml_1_1resources__manager.md) > | **[resources_system](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-resources_system)**  |
| typedef entt::handle< sf::Font > | **[font_handle](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-font_handle)**  |
| typedef entt::handle< sf::SoundBuffer > | **[sound_handle](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-sound_handle)**  |
| typedef entt::handle< sf::Music > | **[music_handle](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-music_handle)**  |
| typedef entt::handle< sf::Texture > | **[texture_handle](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-texture_handle)**  |
| typedef [loader](Classes/structantara_1_1gaming_1_1sfml_1_1loader.md)< sf::Font > | **[fonts_loader](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-fonts_loader)**  |
| typedef [loader](Classes/structantara_1_1gaming_1_1sfml_1_1loader.md)< sf::SoundBuffer > | **[sounds_loader](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-sounds_loader)**  |
| typedef [loader](Classes/structantara_1_1gaming_1_1sfml_1_1loader.md)< sf::Music > | **[musics_loader](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-musics_loader)**  |
| typedef [loader](Classes/structantara_1_1gaming_1_1sfml_1_1loader.md)< sf::Texture > | **[textures_loader](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-textures_loader)**  |
| typedef entt::cache< sf::Font > | **[fonts_cache](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-fonts_cache)**  |
| typedef entt::cache< sf::SoundBuffer > | **[sounds_cache](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-sounds_cache)**  |
| typedef entt::cache< sf::Music > | **[musics_cache](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-musics_cache)**  |
| typedef entt::cache< sf::Texture > | **[textures_cache](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-textures_cache)** <br>Public typedefs.  |
| typedef decltype(std::declval< T & >().drawable.setPosition(std::declval< sf::Vector2f & >())) | **[have_set_position](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-have_set_position)**  |
| typedef decltype(std::declval< T & >().drawable.getGlobalBounds()) | **[have_global_bounds](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-have_global_bounds)**  |
| typedef doom::meta::list< [sprite](Classes/structantara_1_1gaming_1_1sfml_1_1sprite.md), [circle](Classes/structantara_1_1gaming_1_1sfml_1_1circle.md), [text](Classes/structantara_1_1gaming_1_1sfml_1_1text.md), [rectangle](Classes/structantara_1_1gaming_1_1sfml_1_1rectangle.md) > | **[drawable_list_transformable](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-drawable_list_transformable)**  |
| typedef doom::meta::list< [sprite](Classes/structantara_1_1gaming_1_1sfml_1_1sprite.md), [circle](Classes/structantara_1_1gaming_1_1sfml_1_1circle.md), [text](Classes/structantara_1_1gaming_1_1sfml_1_1text.md), [vertex_array](Classes/structantara_1_1gaming_1_1sfml_1_1vertex__array.md), [rectangle](Classes/structantara_1_1gaming_1_1sfml_1_1rectangle.md), [render_texture](Classes/structantara_1_1gaming_1_1sfml_1_1render__texture.md) > | **[drawable_list](Namespaces/namespaceantara_1_1gaming_1_1sfml.md#typedef-drawable_list)**  |








### Types Documentation

### typedef resources_system

```cpp
typedef resources::system< resources_manager > resources_system;
```




























### typedef font_handle

```cpp
typedef entt::handle< sf::Font > font_handle;
```




























### typedef sound_handle

```cpp
typedef entt::handle< sf::SoundBuffer > sound_handle;
```




























### typedef music_handle

```cpp
typedef entt::handle< sf::Music > music_handle;
```




























### typedef texture_handle

```cpp
typedef entt::handle< sf::Texture > texture_handle;
```




























### typedef fonts_loader

```cpp
typedef loader< sf::Font > fonts_loader;
```




























### typedef sounds_loader

```cpp
typedef loader< sf::SoundBuffer > sounds_loader;
```




























### typedef musics_loader

```cpp
typedef loader< sf::Music > musics_loader;
```




























### typedef textures_loader

```cpp
typedef loader< sf::Texture > textures_loader;
```




























### typedef fonts_cache

```cpp
typedef entt::cache< sf::Font > fonts_cache;
```




























### typedef sounds_cache

```cpp
typedef entt::cache< sf::SoundBuffer > sounds_cache;
```




























### typedef musics_cache

```cpp
typedef entt::cache< sf::Music > musics_cache;
```




























### typedef textures_cache

```cpp
typedef entt::cache< sf::Texture > textures_cache;
```

Public typedefs. 



























### typedef have_set_position

```cpp
typedef decltype(std::declval< T & >().drawable.setPosition(std::declval< sf::Vector2f & >())) have_set_position;
```




























### typedef have_global_bounds

```cpp
typedef decltype(std::declval< T & >().drawable.getGlobalBounds()) have_global_bounds;
```




























### typedef drawable_list_transformable

```cpp
typedef doom::meta::list< sprite, circle, text, rectangle > drawable_list_transformable;
```




























### typedef drawable_list

```cpp
typedef doom::meta::list< sprite, circle, text, vertex_array, rectangle, render_texture > drawable_list;
```




































