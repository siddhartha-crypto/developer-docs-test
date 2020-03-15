---
title: antara::gaming::event::key_pressed
summary: triggered when pressing a key on the keyboard.  

---

# antara::gaming::event::key_pressed




triggered when pressing a key on the keyboard.  [More...](#detailed-description)


`#include <key.pressed.hpp>`









## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#function-key_pressed)**()  |
|  | **[key_pressed](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#function-key_pressed)**(input::key key_, bool alt_, bool control_, bool shift_, bool system_) <br>Constructors.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[system](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-system)** <br>is system pressed at the same time.  |
| bool | **[shift](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-shift)** <br>is shift pressed at the same time.  |
| bool | **[control](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-control)** <br>is ctrl pressed at the same time.  |
| bool | **[alt](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-alt)** <br>is alt pressed at the same time.  |
| antara::gaming::input::key | **[key](Classes/structantara_1_1gaming_1_1event_1_1key__pressed.md#variable-key)** <br>Fields.  |






## Detailed Description

```cpp
struct antara::gaming::event::key_pressed;
```

triggered when pressing a key on the keyboard. 



























```
embed:rst:leading-asterisk
*      .. note::
*         This class is automatically reflected for scripting systems such as lua, python.
* ```





## Public Functions Documentation

### function key_pressed

```cpp
key_pressed()
```


























default constructor (for scripting systems convenience) 


### function key_pressed

```cpp
key_pressed(
    input::key key_,
    bool alt_,
    bool control_,
    bool shift_,
    bool system_
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
#include <antara/gaming/event/key.pressed.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    dispatcher.trigger<key_pressed>(input::key::a, false, false, false, false);
}
```




## Public Attributes Documentation

### variable system

```cpp
bool system {false};
```

is system pressed at the same time. 



























### variable shift

```cpp
bool shift {false};
```

is shift pressed at the same time. 



























### variable control

```cpp
bool control {false};
```

is ctrl pressed at the same time. 



























### variable alt

```cpp
bool alt {false};
```

is alt pressed at the same time. 



























### variable key

```cpp
antara::gaming::input::key key;
```

Fields. 

























key pressed 






-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT