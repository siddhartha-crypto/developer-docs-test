---
title: antara::gaming::ecs
summary: SDK Headers.  

---

# antara::gaming::ecs




SDK Headers.  [More...](#detailed-description)





## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::ecs::event](Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1event.md)** <br>< std::unique_ptr  |
| **[antara::gaming::ecs::component](Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1component.md)** <br>< doom::meta::list  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::ecs::virtual_input_system](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md)**  |
| class | **[antara::gaming::ecs::system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md)** <br>This class allows the manipulation of systems, the addition, deletion, update of systems, deactivation of a system, etc.  |
| class | **[antara::gaming::ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**  |
| class | **[antara::gaming::ecs::lambda_system](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md)**  |
| struct | **[antara::gaming::ecs::interpolation_system](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md)**  |
| struct | **[antara::gaming::ecs::ftor](Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md)**  |
| class | **[antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef st::type< [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type), struct system_post_update_tag > | **[st_system_post_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_post_update)** <br>strong_type relative to system_type::post_update  |
| typedef st::type< [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type), struct system_logic_update_tag > | **[st_system_logic_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_logic_update)** <br>strong_type relative to system_type::logic_update  |
| typedef st::type< [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type), struct system_pre_update_tag > | **[st_system_pre_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_pre_update)** <br>strong_type relative to system_type::pre_update  |
| typedef [system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)< TSystemDerived, [st_system_post_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_post_update) > | **[post_update_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-post_update_system)**  |
| typedef [system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)< TSystemDerived, [st_system_pre_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_pre_update) > | **[pre_update_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-pre_update_system)**  |
| typedef [system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)< TSystemDerived, [st_system_logic_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_logic_update) > | **[logic_update_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-logic_update_system)** <br>Generate predefined template.  |
| typedef [lambda_system](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md)< [ecs::st_system_logic_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_logic_update) > | **[lambda_logic_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-lambda_logic_system)**  |
| typedef [lambda_system](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md)< [ecs::st_system_pre_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_pre_update) > | **[lambda_pre_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-lambda_pre_system)**  |
| typedef [lambda_system](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md)< [ecs::st_system_post_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_post_update) > | **[lambda_post_system](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-lambda_post_system)**  |
| enum | **[system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type)** { pre_update, logic_update, post_update, size }<br>Enumeration that represents all possible system types in sdk gaming.  |





## Detailed Description

SDK Headers. 

























< entt::registry

Dependencies Headers.

< std::size_t

Public implementation.

Private implementation.

< std::is_same

Implementation.

< std::move

< st::type

< entt::tag

std::move

< std::string

C++ System HeadersDependencies Headers < entt::registry < entt::dispatcher SDK Headers < [ecs::system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type);

C++ System HeadersSDK Headers

Dependencies HeadersSDK Headers < [transform::position_2d](Classes/structantara_1_1gaming_1_1transform_1_1position__2d.md),previous_position2d

Dependencies Headers < entt::registrySDK Headers < REFL_AUTO < [ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)

C++ System Headers < std::function < std::stringDependencies Headers < entt::registry SDK Headers < REFL_AUTO < [ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md) < ecs::st_system_logic[pre, post]_update

C++ System Headers < std::stringDependencies Headers < LOG_SCOPE_FUNCTION, DVLOG_F SDK Headers < refl::reflect < [ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md) ecs::st_system_logic[pre, post]_update

C System HeadersC++ System Headers < std::iter_swap < std::array < std::reference_wrapper < std::unique_ptr < std::queue < std::error_code < std::tuple < std::add_lvalue_reference, std::add_const_t < std::forward, std::move < std::vector Dependencies Headers < entt::registry < entt::dispatcher < LOG_SCOPE_FUNCTION < ranges::any_of < ranges::find_if < tl::expected SDK Headers < [ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md) < [event::add_base_system](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md) < [ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md) < [ecs::system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) < [event::fatal_error](Classes/structantara_1_1gaming_1_1event_1_1fatal__error.md) < [timer::time_step](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md)

< input::virtual_input::init, input::virtual_input::update

Dependencies HeadersSDK Headers < REFL_AUTO < [ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)



## Types Documentation

### typedef st_system_post_update

```cpp
typedef st::type< system_type, struct system_post_update_tag > st_system_post_update;
```

strong_type relative to system_type::post_update 



























### typedef st_system_logic_update

```cpp
typedef st::type< system_type, struct system_logic_update_tag > st_system_logic_update;
```

strong_type relative to system_type::logic_update 



























### typedef st_system_pre_update

```cpp
typedef st::type< system_type, struct system_pre_update_tag > st_system_pre_update;
```

strong_type relative to system_type::pre_update 



























### typedef post_update_system

```cpp
typedef system< TSystemDerived, st_system_post_update > post_update_system;
```












**Note**: this typedef is a shortcut, and this is the one that should be used when you want to inherit as a post update system. 

```cpp
class system_implementation : public post_update_system<system_implementation>
{

};
```
















### typedef pre_update_system

```cpp
typedef system< TSystemDerived, st_system_pre_update > pre_update_system;
```












**Note**: this typedef is a shortcut, and this is the one that should be used when you want to inherit as a pre update system. 

```cpp
class system_implementation : public pre_update_system<system_implementation>
{

};
```
















### typedef logic_update_system

```cpp
typedef system< TSystemDerived, st_system_logic_update > logic_update_system;
```

Generate predefined template. 











**Note**: this typedef is a shortcut, and this is the one that should be used when you want to inherit as a logical system. 
















### typedef lambda_logic_system

```cpp
typedef lambda_system< ecs::st_system_logic_update > lambda_logic_system;
```




























### typedef lambda_pre_system

```cpp
typedef lambda_system< ecs::st_system_pre_update > lambda_pre_system;
```




























### typedef lambda_post_system

```cpp
typedef lambda_system< ecs::st_system_post_update > lambda_post_system;
```




























### enum system_type

```cpp
enum system_type {
    pre_update,
    logic_update,
    post_update,
    size
}
```

Enumeration that represents all possible system types in sdk gaming. 
































-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT