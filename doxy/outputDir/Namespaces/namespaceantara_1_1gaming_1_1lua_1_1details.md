---
title: antara::gaming::lua::details
summary: < std::move, std::forward  

---

# antara::gaming::lua::details




< std::move, std::forward  [More...](#detailed-description)






## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[antara::gaming::lua::details::scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef [scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)< [ecs::st_system_logic_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_logic_update) > | **[lua_logic_scripted_system](Namespaces/namespaceantara_1_1gaming_1_1lua_1_1details.md#typedef-lua_logic_scripted_system)**  |
| typedef [scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)< [ecs::st_system_pre_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_pre_update) > | **[lua_pre_scripted_system](Namespaces/namespaceantara_1_1gaming_1_1lua_1_1details.md#typedef-lua_pre_scripted_system)**  |
| typedef [scripted_system](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md)< [ecs::st_system_post_update](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#typedef-st_system_post_update) > | **[lua_post_scripted_system](Namespaces/namespaceantara_1_1gaming_1_1lua_1_1details.md#typedef-lua_post_scripted_system)**  |





## Detailed Description

< std::move, std::forward 

























C++ System Headers < std::exception < std::shared_ptrDependencies Headers < VLOG_F < doom::meta::list < sol::state SDK Headers < [ecs::system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)



## Types Documentation

### typedef lua_logic_scripted_system

```cpp
typedef scripted_system< ecs::st_system_logic_update > lua_logic_scripted_system;
```




























### typedef lua_pre_scripted_system

```cpp
typedef scripted_system< ecs::st_system_pre_update > lua_pre_scripted_system;
```




























### typedef lua_post_scripted_system

```cpp
typedef scripted_system< ecs::st_system_post_update > lua_post_scripted_system;
```

































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT