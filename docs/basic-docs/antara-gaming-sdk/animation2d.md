

## anim_component

#### Full Title:
```
antara::gaming::animation2d::anim_component
```













### Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::chrono::duration< float, std::ratio< 1 > > | **[seconds](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#typedef-seconds)** <br>Typedefs.  |
| enum | **[status](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#enum-status)** { stopped, paused, playing }<br>Enums.  |




### Public Attributes

|                | Name           |
| -------------- | -------------- |
| [seconds](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#typedef-seconds) | **[elapsed](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-elapsed)**  |
| std::size_t | **[current_frame](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-current_frame)**  |
| bool | **[loop](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-loop)**  |
| std::size_t | **[repeat](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-repeat)**  |
| [seconds](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#typedef-seconds) | **[speed](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-speed)**  |
| [status](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#enum-status) | **[current_status](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-current_status)**  |
| std::string | **[animation_id](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__component.md#variable-animation_id)** <br>Fields.  |









### Public Types Documentation

#### typedef seconds

```cpp
typedef std::chrono::duration< float, std::ratio< 1 > > seconds;
```

Typedefs. 



























#### enum status

```cpp
enum status {
    stopped,
    paused,
    playing
}
```

Enums. 































### Public Attributes Documentation

#### variable elapsed

```cpp
seconds elapsed {0};
```




























#### variable current_frame

```cpp
std::size_t current_frame {0};
```




























#### variable loop

```cpp
bool loop {false};
```




























#### variable repeat

```cpp
std::size_t repeat {0};
```




























#### variable speed

```cpp
seconds speed {0.9f};
```




























#### variable current_status

```cpp
status current_status {stopped};
```




























#### variable animation_id

```cpp
std::string animation_id;
```

Fields. 





































<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md
  Topic name: antara::gaming::animation2d::anim_system
  Hash count: 0
-->


## anim_system

#### Full Title:
```
antara::gaming::animation2d::anim_system
```








Inherits from [antara::gaming::ecs::system< anim_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







### Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-update)**() <br>Pure virtual functions.  |
| void | **[add_animations](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-add_animations)**(const std::string & texture_appearance, std::size_t nb_columns, std::size_t nb_lines, const ranged_anim_array & ranged_animations)  |
| void | **[add_animation](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-add_animation)**(const std::string & texture_appeareance, std::size_t nb_columns, std::size_t nb_lines, const ranged_anim & ranged_animation)  |
| void | **[add_animation](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-add_animation)**(std::string animation_id, const std::string & texture_appeareance, std::size_t nb_columns, std::size_t nb_lines, std::size_t nb_anims) <br>Public member functions.  |
|  | **[anim_system](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-anim_system)**(entt::registry & registry) <br>Constructors.  |







### Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< anim_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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








### Public Functions Documentation

#### function update

```cpp
virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




#### function add_animations

```cpp
void add_animations(
    const std::string & texture_appearance,
    std::size_t nb_columns,
    std::size_t nb_lines,
    const ranged_anim_array & ranged_animations
)
```




























#### function add_animation

```cpp
void add_animation(
    const std::string & texture_appeareance,
    std::size_t nb_columns,
    std::size_t nb_lines,
    const ranged_anim & ranged_animation
)
```



























retrieve the texture size to determine the frame size. 

#### function add_animation

```cpp
void add_animation(
    std::string animation_id,
    const std::string & texture_appeareance,
    std::size_t nb_columns,
    std::size_t nb_lines,
    std::size_t nb_anims
)
```

Public member functions. 


























retrieve the texture size to determine

I have the size of the texture now

Add whole ? 

#### function anim_system

```cpp
explicit anim_system(
    entt::registry & registry
)
```

Constructors. 









































## anim_internal

#### Full Title:
```
antara::gaming::animation2d::anim_system::anim_internal
```




Private data structure. 












### Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[texture_appearance](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__system_1_1anim__internal.md#variable-texture_appearance)**  |
| frame_array | **[frames](Classes/structantara_1_1gaming_1_1animation2d_1_1anim__system_1_1anim__internal.md#variable-frames)**  |













### Public Attributes Documentation

#### variable texture_appearance

```cpp
std::string texture_appearance;
```




























#### variable frames

```cpp
frame_array frames;
```






































