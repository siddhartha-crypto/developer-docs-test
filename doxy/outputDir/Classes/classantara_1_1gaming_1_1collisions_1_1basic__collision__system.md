

## basic_collision_system

#### Full Title:
```
antara::gaming::collisions::basic_collision_system
```








Inherits from [antara::gaming::ecs::system< basic_collision_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







### Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[query_point](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-query_point)**(entt::registry & registry, entt::entity entity, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) pos)  |
| bool | **[query_point](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-query_point)**([transform::ts_rect](Classes/structantara_1_1gaming_1_1transform_1_1ts__rect.md) box, [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md) pos)  |
| bool | **[query_rect](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-query_rect)**(entt::registry & registry, entt::entity entity, entt::entity second_entity)  |
| bool | **[query_rect](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-query_rect)**([transform::ts_rect](Classes/structantara_1_1gaming_1_1transform_1_1ts__rect.md) first, [transform::ts_rect](Classes/structantara_1_1gaming_1_1transform_1_1ts__rect.md) second) <br>Public static functions.  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-update)**() <br>Public member functions.  |
|  | **[~basic_collision_system](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-~basic_collision_system)**() =default <br>Destructor.  |
|  | **[basic_collision_system](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-basic_collision_system)**(entt::registry & entity_registry) <br>Constructor.  |







### Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< basic_collision_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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

#### function query_point

```cpp
static bool query_point(
    entt::registry & registry,
    entt::entity entity,
    transform::position_2d pos
)
```




























#### function query_point

```cpp
static bool query_point(
    transform::ts_rect box,
    transform::position_2d pos
)
```




























#### function query_rect

```cpp
static bool query_rect(
    entt::registry & registry,
    entt::entity entity,
    entt::entity second_entity
)
```




























#### function query_rect

```cpp
static bool query_rect(
    transform::ts_rect first,
    transform::ts_rect second
)
```

Public static functions. 



























#### function update

```cpp
virtual void update()
```

Public member functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




#### function ~basic_collision_system

```cpp
~basic_collision_system() =default
```

Destructor. 



























#### function basic_collision_system

```cpp
basic_collision_system(
    entt::registry & entity_registry
)
```

Constructor. 




































