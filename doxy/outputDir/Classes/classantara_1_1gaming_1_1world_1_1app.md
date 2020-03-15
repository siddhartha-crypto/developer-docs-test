---
title: antara::gaming::world::app


---

# antara::gaming::world::app















## Public Functions

|                | Name           |
| -------------- | -------------- |
| void | **[process_one_frame](Classes/classantara_1_1gaming_1_1world_1_1app.md#function-process_one_frame)**()  |
| int | **[run](Classes/classantara_1_1gaming_1_1world_1_1app.md#function-run)**() <br>Public member functions.  |
| void | **[receive_quit_game](Classes/classantara_1_1gaming_1_1world_1_1app.md#function-receive_quit_game)**(const [event::quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md) & evt) <br>Public callbacks.  |
|  | **[~app](Classes/classantara_1_1gaming_1_1world_1_1app.md#function-~app)**() <br>Destructor.  |
|  | **[app](Classes/classantara_1_1gaming_1_1world_1_1app.md#function-app)**(std::string config_maker_name ="game.config.maker.json") <br>Constructors.  |



## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| [ecs::system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md) | **[system_manager_](Classes/classantara_1_1gaming_1_1world_1_1app.md#variable-system_manager_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1world_1_1app.md#variable-dispatcher_)**  |
| entt::registry | **[entity_registry_](Classes/classantara_1_1gaming_1_1world_1_1app.md#variable-entity_registry_)** <br>Protected Fields.  |









## Public Functions Documentation

### function process_one_frame

```cpp
void process_one_frame()
```




























### function run

```cpp
int run()
```

Public member functions. 



























### function receive_quit_game

```cpp
void receive_quit_game(
    const event::quit_game & evt
)
```

Public callbacks. 



























### function ~app

```cpp
~app()
```

Destructor. 



























### function app

```cpp
app(
    std::string config_maker_name ="game.config.maker.json"
)
```

Constructors. 

























Constructor. 





## Protected Attributes Documentation

### variable system_manager_

```cpp
ecs::system_manager system_manager_ {[entity_registry_](Classes/classantara_1_1gaming_1_1world_1_1app.md#variable-entity_registry_)};
```




























### variable dispatcher_

```cpp
entt::dispatcher & dispatcher_ {this->entity_registry_.set<entt::dispatcher>()};
```




























### variable entity_registry_

```cpp
entt::registry entity_registry_;
```

Protected Fields. 






























-------------------------------

Updated on 14 March 2020 at 22:59:51 AKDT