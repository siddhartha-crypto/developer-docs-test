---
title: antara::gaming::ecs::system_manager
summary: This class allows the manipulation of systems, the addition, deletion, update of systems, deactivation of a system, etc.  

---

# antara::gaming::ecs::system_manager




This class allows the manipulation of systems, the addition, deletion, update of systems, deactivation of a system, etc. 

`#include <system.manager.hpp>`









## Public Functions

|                | Name           |
| -------------- | -------------- |
| [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md) & | **[operator+=](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-operator+=)**(system_ptr system)  |
| bool | **[prioritize_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-prioritize_system)**()  |
| auto | **[load_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-load_systems)**(TArgs &&... args) <br>This function load a bunch os systems.  |
| void | **[create_system_rt](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-create_system_rt)**(TSystemArgs &&... args) <br>TODO: Document it.  |
| TSystem & | **[create_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-create_system)**(TSystemArgs &&... args) <br>This function allow you to create a system with the given argument.
 This function is a factory.  |
| std::size_t | **[nb_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-nb_systems)**([system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) sys_type) const <br>This function returns the system number of a certain type to register in the system manager.  |
| std::size_t | **[nb_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-nb_systems)**() const <br>This function returns the number of systems registered in the system manager.  |
| bool | **[disable_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-disable_systems)**() <br>This function disable a list of systems.  |
| bool | **[disable_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-disable_system)**() <br>This function disable a system.  |
| bool | **[enable_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-enable_systems)**() <br>This function enable a list of systems.  |
| bool | **[enable_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-enable_system)**() <br>This function enable a system.  |
| bool | **[mark_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-mark_systems)**() <br>This function marks a list of systems, marked systems will be destroyed at the next tick of the game loop.  |
| bool | **[mark_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-mark_system)**() <br>This function marks a system that will be destroyed at the next tick of the game loop.  |
| bool | **[has_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-has_systems)**() const <br>This function allow you to verify if a list of systems is already registered in the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md).  |
| bool | **[has_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-has_system)**() const <br>This function allow you to verify if a system is already registered in the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md).  |
| std::tuple< std::add_lvalue_reference_t< std::add_const_t< TSystems > >... > | **[get_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-get_systems)**() const <br>const version overload of get_systems  |
| std::tuple< std::add_lvalue_reference_t< TSystems >... > | **[get_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-get_systems)**() <br>This function allow you to get multiple system through multiple templates parameters.  |
| TSystem & | **[get_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-get_system)**()  |
| const TSystem & | **[get_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-get_system)**() const <br>This function allows you to get a system through a template parameter.  |
| std::size_t | **[update_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-update_systems)**([system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) system_type_to_update)  |
| std::size_t | **[update](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-update)**()  |
| void | **[start](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-start)**() <br>This function tells the system manager that you start your game.  |
| void | **[receive_add_base_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-receive_add_base_system)**(const [ecs::event::add_base_system](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md) & evt) <br>Public member functions.  |
|  | **[~system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-~system_manager)**() <br>Destructor.  |
|  | **[system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-system_manager)**(entt::registry & registry, bool subscribe_to_internal_events =true) <br>Constructor.  |












## Public Functions Documentation

### function operator+=

```cpp
system_manager & operator+=(
    system_ptr system
)
```




























### function prioritize_system

```cpp
bool prioritize_system()
```




























### function load_systems

```cpp
auto load_systems(
    TArgs &&... args
)
```

This function load a bunch os systems. 




**Template Parameters**: 

  * **TSystems** represents a list of systems to be loaded


**See**: [create_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-create_system)

**Return**: Tuple of systems loaded 





















```
embed:rst:leading-asterisk
*      .. note::
*         This function recursively calls the create_system function
* ```

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    auto&& [foo_system, bar_system] = system_manager.load_systems<my_system::foo, my_system::bar>();
    foo_system.update();
    bar_system.update();
    return 0;
}
```


### function create_system_rt

```cpp
void create_system_rt(
    TSystemArgs &&... args
)
```

TODO: Document it. 



























### function create_system

```cpp
TSystem & create_system(
    TSystemArgs &&... args
)
```

This function allow you to create a system with the given argument.
 This function is a factory. 




**Template Parameters**: 

  * **TSystem** represents the type of system to create 
  * **TSystemArgs** represents the arguments needed to construct the system to create



**Return**: Returns a reference to the created system 



















**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    auto& foo_system = system_manager.create_system<my_system::foo>(); // you can send argument of the foo constructor here.
    foo_system.update();
    return 0;
}
```


### function nb_systems

```cpp
std::size_t nb_systems(
    system_type sys_type
) const
```

This function returns the system number of a certain type to register in the system manager. 






**Return**: number of systems of a specific type. 



















**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    // added 2 systems of update type here
    auto nb_systems = system_manager.nb_systems(system_type::pre_update);
    if (nb_systems) {
        // Oh no, was expecting atleast 2 systems of pre_update type.
    }
    return 0;
}
```


### function nb_systems

```cpp
std::size_t nb_systems() const
```

This function returns the number of systems registered in the system manager. 






**Return**: number of systems 



















**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    // added 2 systems here
    auto nb_systems = system_manager.nb_systems();
    if (nb_systems) {
        // Oh no, was expecting atleast 2 systems.
    }
    return 0;
}
```


### function disable_systems

```cpp
bool disable_systems()
```

This function disable a list of systems. 




**Template Parameters**: 

  * **TSystems** Represents a list of systems that needs to be disabled



**Return**: true if the list of systems has been disabled, false otherwise 





















```
embed:rst:leading-asterisk
*      .. note::
*         This function recursively calls the disable_system function
* ```

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.disable_systems<my_game::input, my_game::render>();
    if (!result) {
        // Oh no, atleast one of the requested systems cannot be disabled.
    }
    return 0;
}
```


### function disable_system

```cpp
bool disable_system()
```

This function disable a system. 




**Template Parameters**: 

  * **TSystem** Represents the system that needs to be disabled



**Return**: true if the the system has been disabled, false otherwise 





















```
embed:rst:leading-asterisk
*      .. warning::
*         If you deactivate a system, it will not be destroyed but simply ignored during the game loop.
* ```

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.disable_system<my_game::input>();
    if (!result) {
        // Oh no the system_manager cannot disable this system.
    }
    return 0;
}
```


### function enable_systems

```cpp
bool enable_systems()
```

This function enable a list of systems. 




**Template Parameters**: 

  * **TSystems** Represents a list of systems that needs to be enabled


**See**: [enable_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-enable_system)

**Return**: true if the list of systems has been enabled, false otherwise 





















```
embed:rst:leading-asterisk
*      .. note::
*         This function recursively calls the enable_system function
* ```

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.enable_systems<my_game::input, my_game::render>();
    if (!result) {
        // Oh no, atleast one of the requested systems cannot be enabled.
    }
    return 0;
}
```


### function enable_system

```cpp
bool enable_system()
```

This function enable a system. 




**Template Parameters**: 

  * **TSystem** Represents the system that needs to be enabled.



**Return**: true if the system has been enabled, false otherwise 



















**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.enable_system<my_game::input>();
    if (!result) {
        // Oh no, this system cannot be enabled.
        // Did you enable a system that is not present in the system_manager ?
    }
    return 0;
}
```


### function mark_systems

```cpp
bool mark_systems()
```

This function marks a list of systems, marked systems will be destroyed at the next tick of the game loop. 




**Template Parameters**: 

  * **TSystems** Represents a list of systems that needs to be marked


**See**: [mark_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-mark_system)

**Return**: true if the list of systems has been marked, false otherwise 





















```
embed:rst:leading-asterisk
*      .. role:: raw-html(raw)
*          :format: html
*
*      .. note::
*         This function is marked as nodiscard_. :raw-html:`<br />`
*         This function recursively calls the mark_system function.
*      .. _nodiscard: https://en.cppreference.com/w/cpp/language/attributes/nodiscard
* ```

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.mark_systems<my_game::render, my_game::input>();
    if (!result) {
        // Oh no, atleast one of the system has not been marked.
        // Did you mark a system that is not present in the system_manager ?
    }
    return 0;
}
```


### function mark_system

```cpp
bool mark_system()
```

This function marks a system that will be destroyed at the next tick of the game loop. 




**Template Parameters**: 

  * **TSystem** Represents the system that needs to be marked



**Return**: true if the system has been marked, false otherwise



















**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.mark_system<my_game::render>();
    if (!result) {
        // Oh no the system has not been marked.
        // Did you mark a system that is not present in the system_manager ?
    }
    return 0;
}
```


### function has_systems

```cpp
bool has_systems() const
```

This function allow you to verify if a list of systems is already registered in the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md). 




**Template Parameters**: 

  * **TSystems** represents a list of system that needs to be verified


**See**: [has_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-has_system)

```
embed:rst:leading-asterisk
*      .. role:: raw-html(raw)
*          :format: html
*
*      .. note::
*         This function is marked as nodiscard_. :raw-html:`<br />`
*         This function recursively calls the has_system function.
*      .. _nodiscard: https://en.cppreference.com/w/cpp/language/attributes/nodiscard
* ```

**Return**: true if the list of systems has been loaded, false otherwise 



















**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.has_systems<my_game::render_system, my_game::input_systems>();
    if (!result) {
        // Oh no, atleast one of the systems is not present
    }
    return 0;
}
```


### function has_system

```cpp
bool has_system() const
```

This function allow you to verify if a system is already registered in the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md). 




**Template Parameters**: 

  * **TSystem** Represents the system that needs to be verified 

```
embed:rst:leading-asterisk
*      .. note::
*         This function is marked as nodiscard_.
*      .. _nodiscard: https://en.cppreference.com/w/cpp/language/attributes/nodiscard
* ```



**Return**: true if the system has been loaded, false otherwise 



















**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};

    bool result = system_manager.has_system<my_game::render_system>();
    if (!result) {
        // Oh no, i don't have a rendering system.
    }
    return 0;
}
```


### function get_systems

```cpp
std::tuple< std::add_lvalue_reference_t< std::add_const_t< TSystems > >... > get_systems() const
```

const version overload of get_systems 





**See**: [get_systems](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-get_systems)






















```
embed:rst:leading-asterisk
*      .. note::
*         This function is marked as nodiscard_.
*      .. _nodiscard: https://en.cppreference.com/w/cpp/language/attributes/nodiscard
* ```

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    // ... added differents systems here
    // Called from a const context
    auto &&[system_foo, system_bar] = system_manager.get_systems<system_foo, system_bar>();

    // Called from a non const context
    auto&&[system_foo_nc, system_bar_nc] = system_manager.get_systems<system_foo, system_bar>();

    // Get it as a tuple
    auto tuple_systems = system_manager.get_systems<system_foo, system_bar>();
    return 0;
}
```


### function get_systems

```cpp
std::tuple< std::add_lvalue_reference_t< TSystems >... > get_systems()
```

This function allow you to get multiple system through multiple templates parameters. 




**Template Parameters**: 

  * **TSystems** represents a list of systems to get 


**See**: [get_system](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-get_system)

**Return**: Tuple of systems obtained. 





















```
embed:rst:leading-asterisk
*      .. role:: raw-html(raw)
*          :format: html
*      .. note::
*         This function recursively calls the get_system function
*         Based on the logic of the different kinds of antara systems, this function takes care of updating your systems in the right order.
* ```


### function get_system

```cpp
TSystem & get_system()
```


























This is an overloaded member function, provided for convenience. It differs from the above function only in what argument(s) it accepts.

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    system_manager.start();
    // ... added 2 differents systems here (render_system, and a log_system)
    auto& render_system = system_manager.get_system<game::render_system>();

    const auto& log_system = system_manager.get_system<game::log_system>();
    return 0;
}
```


### function get_system

```cpp
const TSystem & get_system() const
```

This function allows you to get a system through a template parameter. 




**Template Parameters**: 

  * **TSystem** represents the system to get. 



**Return**: A reference to the system obtained. 





















### function update_systems

```cpp
std::size_t update_systems(
    system_type system_type_to_update
)
```






**See**: [update](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md#function-update)

**Return**: number of systems which are successfully updated 





















```
embed:rst:leading-asterisk
*      .. role:: raw-html(raw)
*          :format: html
*      .. note::
*         This function is called multiple times by update(). :raw-html:`<br />`
*         It is useful if you want to program your own update function without going through the one provided by us.
* ```


### function update

```cpp
std::size_t update()
```







**Return**: number of systems which are successfully updated 





















```
embed:rst:leading-asterisk
*      .. role:: raw-html(raw)
*          :format: html
*      .. note::
*         This is the function that update your systems. :raw-html:`<br />`
*         Based on the logic of the different kinds of antara systems, this function takes care of updating your systems in the right order.
* ```



```
embed:rst:leading-asterisk
*      .. role:: raw-html(raw)
*          :format: html
*      .. warning::
*         If you have not loaded any system into the system_manager the function returns 0. :raw-html:`<br />`
*         If you decide to mark a system, it's automatically deleted at the end of the current loop tick through this function. :raw-html:`<br />`
*         If you decide to add a system through an `ecs::event::add_base_system event`, it's automatically added at the end of the current loop tick
* through this function.
* ```

**Example:**

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    system_manager.start();
    // ... added 5 differents systems here
    std::size_t nb_systems_updated = system_manager.update();
    if (nb_systems_updated != 5) {
       // Oh no, i expected 5 systems to be executed in this game loop tick
    }
    return 0;
}
```


### function start

```cpp
void start()
```

This function tells the system manager that you start your game. 



























```
embed:rst:leading-asterisk
*      .. note::
*         This function, which indicates the game is spinning, allows actions to be done at each end of the frame like delete systems or add them while
* we are going to iterate on
* ```

**Example**: 

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager system_manager{entity_registry};
    system_manager.start();
    return 0;
}
```


### function receive_add_base_system

```cpp
void receive_add_base_system(
    const ecs::event::add_base_system & evt
)
```

Public member functions. 



























### function ~system_manager

```cpp
~system_manager()
```

Destructor. 



























### function system_manager

```cpp
explicit system_manager(
    entt::registry & registry,
    bool subscribe_to_internal_events =true
)
```

Constructor. 


























Example: 

```cpp
#include <entt/entity/registry.hpp>
#include <entt/dispatcher/dispatcher.hpp>
#include <antara/gaming/ecs/system.manager.hpp>

int main()
{
    entt::registry entity_registry;
    entt::dispatcher& dispatcher{registry.set<entt::dispatcher>()};
    antara::gaming::ecs::system_manager mgr{entity_registry};
}
```








-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT