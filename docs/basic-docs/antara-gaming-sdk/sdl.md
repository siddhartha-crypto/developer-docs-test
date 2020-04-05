/*
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md
  Topic name: antara::gaming::sdl::graphic_system
  Hash count: 0
*/
---
title: antara::gaming::sdl::graphic_system


---

# antara::gaming::sdl::graphic_system








Inherits from [antara::gaming::ecs::system< graphic_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| SDL_Window * | **[get_window](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-get_window)**() const  |
| void | **[set_framerate_limit](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-set_framerate_limit)**(int fps)  |
| void | **[render](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-render)**()  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-update)**() <br>Pure virtual functions.  |
|  | **[~graphic_system](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-~graphic_system)**()  |
|  | **[graphic_system](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-graphic_system)**(entt::registry & registry)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< graphic_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

|                | Name           |
| -------------- | -------------- |
| constexpr [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type)**()  |
| std::string | **[get_class_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_class_name)**() <br>Public static functions.  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)**() const  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)**() const <br>Public member functions.  |
|  | **[~system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-~system)**() override <br>Destructor.  |
|  | **[system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-system)**(TArgs &&... args) <br>Constructor.  |









**Public Functions inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[set_user_data](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-set_user_data)**(void * data)  |
| void * | **[get_user_data](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_user_data)**()  |
| bool | **[is_a_plugin](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_a_plugin)**() const  |
| void | **[im_a_plugin](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-im_a_plugin)**()  |
| bool | **[is_enabled](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_enabled)**() const  |
| void | **[disable](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-disable)**()  |
| void | **[enable](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-enable)**()  |
| bool | **[is_marked](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_marked)**() const  |
| void | **[unmark](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-unmark)**()  |
| void | **[mark](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-mark)**()  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_system_type_rtti)**() const =0  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_name)**() const =0  |
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-post_update)**()  |
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



**Protected Attributes inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |








## Public Functions Documentation

### function get_window

```cpp
inline SDL_Window * get_window() const
```




























### function set_framerate_limit

```cpp
inline void set_framerate_limit(
    int fps
)
```




























### function render

```cpp
void render()
```




























### function update

```cpp
virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function ~graphic_system

```cpp
~graphic_system()
```




























### function graphic_system

```cpp
explicit graphic_system(
    entt::registry & registry
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md
  Topic name: antara::gaming::sdl::input_system
  Hash count: 0
*/
---
title: antara::gaming::sdl::input_system


---

# antara::gaming::sdl::input_system








Inherits from [antara::gaming::ecs::system< input_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md#function-update)**() <br>Pure virtual functions.  |
|  | **[~input_system](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md#function-~input_system)**() =default  |
|  | **[input_system](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md#function-input_system)**(entt::registry & registry, SDL_Window * window)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< input_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

|                | Name           |
| -------------- | -------------- |
| constexpr [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type)**()  |
| std::string | **[get_class_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_class_name)**() <br>Public static functions.  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)**() const  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)**() const <br>Public member functions.  |
|  | **[~system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-~system)**() override <br>Destructor.  |
|  | **[system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-system)**(TArgs &&... args) <br>Constructor.  |









**Public Functions inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void | **[set_user_data](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-set_user_data)**(void * data)  |
| void * | **[get_user_data](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_user_data)**()  |
| bool | **[is_a_plugin](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_a_plugin)**() const  |
| void | **[im_a_plugin](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-im_a_plugin)**()  |
| bool | **[is_enabled](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_enabled)**() const  |
| void | **[disable](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-disable)**()  |
| void | **[enable](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-enable)**()  |
| bool | **[is_marked](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-is_marked)**() const  |
| void | **[unmark](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-unmark)**()  |
| void | **[mark](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-mark)**()  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_system_type_rtti)**() const =0  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_name)**() const =0  |
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-post_update)**()  |
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



**Protected Attributes inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |








## Public Functions Documentation

### function update

```cpp
virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function ~input_system

```cpp
~input_system() =default
```




























### function input_system

```cpp
explicit input_system(
    entt::registry & registry,
    SDL_Window * window
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1sdl_1_1opengl__image.md
  Topic name: antara::gaming::sdl::opengl_image
  Hash count: 0
*/
---
title: antara::gaming::sdl::opengl_image


---

# antara::gaming::sdl::opengl_image

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[height](Classes/structantara_1_1gaming_1_1sdl_1_1opengl__image.md#variable-height)**  |
| int | **[width](Classes/structantara_1_1gaming_1_1sdl_1_1opengl__image.md#variable-width)**  |
| unsigned int | **[id](Classes/structantara_1_1gaming_1_1sdl_1_1opengl__image.md#variable-id)**  |












## Public Attributes Documentation

### variable height

```cpp
int height;
```




























### variable width

```cpp
int width;
```




























### variable id

```cpp
unsigned int id;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


/*
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1sdl_1_1timer.md
  Topic name: antara::gaming::sdl::timer
  Hash count: 0
*/
---
title: antara::gaming::sdl::timer


---

# antara::gaming::sdl::timer















## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[isPaused](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-ispaused)**()  |
| bool | **[isStarted](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-isstarted)**()  |
| Uint32 | **[getTicks](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-getticks)**()  |
| void | **[unpause](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-unpause)**()  |
| void | **[pause](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-pause)**()  |
| void | **[stop](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-stop)**()  |
| void | **[start](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-start)**()  |
|  | **[timer](Classes/classantara_1_1gaming_1_1sdl_1_1timer.md#function-timer)**()  |












## Public Functions Documentation

### function isPaused

```cpp
inline bool isPaused()
```




























### function isStarted

```cpp
inline bool isStarted()
```




























### function getTicks

```cpp
inline Uint32 getTicks()
```




























### function unpause

```cpp
inline void unpause()
```




























### function pause

```cpp
inline void pause()
```




























### function stop

```cpp
inline void stop()
```




























### function start

```cpp
inline void start()
```




























### function timer

```cpp
inline timer()
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


