

## add_base_system

#### Full Title:
```
antara::gaming::ecs::event::add_base_system
```













### Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::unique_ptr< [ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md) > | **[base_system_ptr](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#typedef-base_system_ptr)** <br>Typedefs.  |


### Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[add_base_system](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#function-add_base_system)**([base_system_ptr](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#typedef-base_system_ptr) system_ptr_ =nullptr) <br>Constructor.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::unique_ptr< [ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md) > | **[system_ptr](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#variable-system_ptr)** <br>Fields.  |









### Public Types Documentation

#### typedef base_system_ptr

```cpp
typedef std::unique_ptr< ecs::base_system > base_system_ptr;
```

Typedefs. 





























### Public Functions Documentation

#### function add_base_system

```cpp
add_base_system(
    base_system_ptr system_ptr_ =nullptr
)
```

Constructor. 





























### Public Attributes Documentation

#### variable system_ptr

```cpp
std::unique_ptr< ecs::base_system > system_ptr {nullptr};
```

Fields. 


































