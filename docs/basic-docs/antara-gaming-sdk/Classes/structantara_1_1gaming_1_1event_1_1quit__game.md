---
title: antara::gaming::event::quit_game
summary: Event that allows us to leave a game with a return value.  

---

# antara::gaming::event::quit_game




Event that allows us to leave a game with a return value.  [More...](#detailed-description)


`#include <quit.game.hpp>`









## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#function-quit_game)**()  |
|  | **[quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#function-quit_game)**(int return_value) <br>Constructors.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[return_value_](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#variable-return_value_)** <br>Fields.  |
| constexpr const [event::invoker_dispatcher](Classes/structantara_1_1gaming_1_1event_1_1invoker__dispatcher.md)< [quit_game](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md), int > | **[invoker](Classes/structantara_1_1gaming_1_1event_1_1quit__game.md#variable-invoker)** <br>Static fields.  |






## Detailed Description

```cpp
struct antara::gaming::event::quit_game;
```

Event that allows us to leave a game with a return value. 



























```
embed:rst:leading-asterisk
*      .. note::
*         This class is automatically reflected for scripting systems such as lua, python.
* ```





## Public Functions Documentation

### function quit_game

```cpp
quit_game()
```


























default constructor (for scripting systems convenience) 


### function quit_game

```cpp
quit_game(
    int return_value
)
```

Constructors. 

























constructor with args 

```
embed:rst:leading-asterisk
*      .. note::
*         Principal Constructor.
* ```

Example: 

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/event/quit_game.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    dispatcher.trigger<quit_game>(0);
}
```




## Public Attributes Documentation

### variable return_value_

```cpp
int return_value_;
```

Fields. 

























the return value of the program when leaving the game 


### variable invoker

```cpp
static constexpr const event::invoker_dispatcher< quit_game, int > invoker {};
```

Static fields. 































-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT