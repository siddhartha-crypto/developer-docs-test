---
title: antara::gaming::event::key_released
summary: triggered when releasing a key on the keyboard.  

---

# antara::gaming::event::key_released




triggered when releasing a key on the keyboard.  [More...](#detailed-description)


`#include <key.released.hpp>`









## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#function-key_released)**()  |
|  | **[key_released](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#function-key_released)**(input::key key_, bool alt_, bool control_, bool shift_, bool system_) <br>Constructors.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[system](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-system)** <br>is system released at the same time.  |
| bool | **[shift](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-shift)** <br>is shift released at the same time.  |
| bool | **[control](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-control)** <br>is ctrl released at the same time.  |
| bool | **[alt](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-alt)** <br>is alt released at the same time.  |
| input::key | **[key](Classes/structantara_1_1gaming_1_1event_1_1key__released.md#variable-key)** <br>Fields.  |






## Detailed Description

```cpp
struct antara::gaming::event::key_released;
```

triggered when releasing a key on the keyboard. 



























```
embed:rst:leading-asterisk
*      .. note::
*         This class is automatically reflected for scripting systems such as lua, python.
* ```





## Public Functions Documentation

### function key_released

```cpp
key_released()
```


























default constructor (for scripting systems convenience) 


### function key_released

```cpp
key_released(
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
#include <antara/gaming/event/key_released.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    dispatcher.trigger<key_released>(input::key::a, false, false, false, false);
}
```




## Public Attributes Documentation

### variable system

```cpp
bool system {false};
```

is system released at the same time. 



























### variable shift

```cpp
bool shift {false};
```

is shift released at the same time. 



























### variable control

```cpp
bool control {false};
```

is ctrl released at the same time. 



























### variable alt

```cpp
bool alt {false};
```

is alt released at the same time. 



























### variable key

```cpp
input::key key;
```

Fields. 

























key released 






-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT