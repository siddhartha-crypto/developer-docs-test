<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md
  Topic name: antara::gaming::ecs::base_system
  Hash count: 0
-->
---
title: antara::gaming::ecs::base_system


---

# antara::gaming::ecs::base_system









Inherited by [antara::gaming::ecs::system< TSystemDerived, TSystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::system< lambda_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::system< scripted_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)






## Public Functions

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
| virtual void | **[update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-update)**() =0 <br>Pure virtual functions.  |
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



## Protected Attributes

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |









## Public Functions Documentation

### function set_user_data

```cpp
void set_user_data(
    void * data
)
```












**Note**: 

  * This function set a user data for this system 
  * This function is very useful to transfer (with get_user_data) data between plugins since they are base_class. 
  * This function will call on_set_user_data callback at the epilogue, by default on_set_user_data is empty and you need to override it if you need it. 
  * user should be aware here, that's manipulating void pointer is as your own risk. 

















### function get_user_data

```cpp
void * get_user_data()
```







**Return**: user data of a system 





**Note**: 

  * This function retrieve a user data previously set by set_user_data 
  * by default a user_data is a void pointer equal to nullptr. 

















### function is_a_plugin

```cpp
bool is_a_plugin() const
```







**Return**: true if the system is a plugin, false otherwise 





**Note**: This function tell you if a system is a plugin or no 
















### function im_a_plugin

```cpp
void im_a_plugin()
```












**Note**: This function defines the system as a plugin, and therefore will use more feature in runtime to work properly 
















### function is_enabled

```cpp
bool is_enabled() const
```












**Note**: This function tell you if a system is enable or no. 
















### function disable

```cpp
void disable()
```












**Note**: This function disable a system. 
















### function enable

```cpp
void enable()
```












**Note**: 

  * This function enable a system. 
  * by default a system is enabled. 

















### function is_marked

```cpp
bool is_marked() const
```







**Return**: true if the system is marked, false otherwise 





**Note**: This function tell you if a system is marked or no. 
















### function unmark

```cpp
void unmark()
```












**Note**: This function unmark the system, allows the prevention of a destruction in the next turn of the game loop by the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md). 
















### function mark

```cpp
void mark()
```












**Note**: This function marks the system, it will be destroyed in the next turn of the game loop by the [system_manager](Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md). 
















### function get_system_type_rtti

```cpp
virtual system_type get_system_type_rtti() const =0
```

























**Reimplemented by**: [antara::gaming::ecs::system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti), [antara::gaming::ecs::system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti), [antara::gaming::ecs::system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)




### function get_name

```cpp
virtual std::string get_name() const =0
```

























**Reimplemented by**: [antara::gaming::ecs::system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name), [antara::gaming::ecs::system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name), [antara::gaming::ecs::system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)




### function post_update

```cpp
inline virtual void post_update()
```

























**Reimplemented by**: [antara::gaming::scenes::manager::post_update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-post_update), [antara::gaming::ecs::lambda_system::post_update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-post_update)




### function update

```cpp
virtual void update() =0
```

Pure virtual functions. 
























**Reimplemented by**: [antara::gaming::sdl::input_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md#function-update), [antara::gaming::glfw::input_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1input__system.md#function-update), [antara::gaming::sfml::lua_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md#function-update), [antara::gaming::ecs::virtual_input_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md#function-update), [antara::gaming::sfml::input_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-update), [antara::gaming::glfw::graphic_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1graphic__system.md#function-update), [antara::gaming::sdl::graphic_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-update), [antara::gaming::ecs::interpolation_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md#function-update), [antara::gaming::collisions::basic_collision_system::update](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-update), [antara::gaming::box2d::box2d_system::update](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md#function-update), [antara::gaming::sfml::audio_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md#function-update), [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update), [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update), [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update), [antara::gaming::resources::system::update](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-update), [antara::gaming::sfml::graphic_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-update), [antara::gaming::lua::details::scripted_system::update](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-update), [antara::gaming::scenes::manager::update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-update), [antara::gaming::ecs::lambda_system::update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-update), [antara::gaming::lua::scripting_system::update](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-update), [antara::gaming::animation2d::anim_system::update](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-update), [antara::gaming::blockchain::nspv::update](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-update)




### function ~base_system

```cpp
virtual ~base_system() =default
```

Destructor. 



























### function base_system

```cpp
base_system(
    entt::registry & entity_registry,
    bool im_a_plugin_system =false
)
```

Constructors. 






























## Protected Attributes Documentation

### variable user_data_

```cpp
void * user_data_ {nullptr};
```




























### variable dispatcher_

```cpp
entt::dispatcher & dispatcher_;
```




























### variable entity_registry_

```cpp
entt::registry & entity_registry_;
```

Protected data members. 






























-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md
  Topic name: antara::gaming::ecs::ftor
  Hash count: 0
-->
---
title: antara::gaming::ecs::ftor


---

# antara::gaming::ecs::ftor

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::function< void()> | **[on_post_update](Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md#variable-on_post_update)**  |
| std::function< void()> | **[on_destruct](Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md#variable-on_destruct)**  |
| std::function< void()> | **[on_update](Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md#variable-on_update)**  |
| std::function< void()> | **[on_create](Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md#variable-on_create)** <br>Fields.  |












## Public Attributes Documentation

### variable on_post_update

```cpp
std::function< void()> on_post_update {nullptr};
```




























### variable on_destruct

```cpp
std::function< void()> on_destruct {nullptr};
```




























### variable on_update

```cpp
std::function< void()> on_update {nullptr};
```




























### variable on_create

```cpp
std::function< void()> on_create {nullptr};
```

Fields. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md
  Topic name: antara::gaming::ecs::interpolation_system
  Hash count: 0
-->
---
title: antara::gaming::ecs::interpolation_system


---

# antara::gaming::ecs::interpolation_system








Inherits from [antara::gaming::ecs::system< interpolation_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)





## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef st::type< float, struct interpolation_tag > | **[st_interpolation](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md#typedef-st_interpolation)** <br>Typedefs.  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[update](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md#function-update)**() <br>Public member functions.  |
|  | **[interpolation_system](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md#function-interpolation_system)**(entt::registry & registry) <br>Constructor.  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< interpolation_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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






## Public Types Documentation

### typedef st_interpolation

```cpp
typedef st::type< float, struct interpolation_tag > st_interpolation;
```

Typedefs. 





























## Public Functions Documentation

### function update

```cpp
virtual void update()
```

Public member functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function interpolation_system

```cpp
interpolation_system(
    entt::registry & registry
)
```

Constructor. 

































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md
  Topic name: antara::gaming::ecs::lambda_system
  Hash count: 0
-->
---
title: antara::gaming::ecs::lambda_system


---

# antara::gaming::ecs::lambda_system




 [More...](#detailed-description)




Inherits from [antara::gaming::ecs::system< lambda_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-post_update)**()  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-update)**() <br>Public member functions.  |
|  | **[~lambda_system](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-~lambda_system)**() <br>Destructor.  |
|  | **[lambda_system](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-lambda_system)**(entt::registry & registry, [ftor](Classes/structantara_1_1gaming_1_1ecs_1_1ftor.md) lambda_contents, std::string lambda_name ="") <br>Constructor.  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< lambda_system< SystemType >, SystemType >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



**Protected Attributes inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |




## Detailed Description

```cpp
template <typename SystemType >
class antara::gaming::ecs::lambda_system;
```































## Public Functions Documentation

### function post_update

```cpp
virtual void post_update()
```

























**Reimplements**: [antara::gaming::ecs::base_system::post_update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-post_update)




### function update

```cpp
virtual void update()
```

Public member functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function ~lambda_system

```cpp
~lambda_system()
```

Destructor. 



























### function lambda_system

```cpp
lambda_system(
    entt::registry & registry,
    ftor lambda_contents,
    std::string lambda_name =""
)
```

Constructor. 

































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1ecs_1_1system.md
  Topic name: antara::gaming::ecs::system
  Hash count: 0
-->
---
title: antara::gaming::ecs::system


---

# antara::gaming::ecs::system




 [More...](#detailed-description)




Inherits from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)

Inherited by [antara::gaming::animation2d::anim_system](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md), [antara::gaming::blockchain::nspv](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md), [antara::gaming::box2d::box2d_system](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md), [antara::gaming::collisions::basic_collision_system](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md), [antara::gaming::ecs::interpolation_system](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md), [antara::gaming::ecs::virtual_input_system](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md), [antara::gaming::glfw::graphic_system](Classes/classantara_1_1gaming_1_1glfw_1_1graphic__system.md), [antara::gaming::glfw::input_system](Classes/classantara_1_1gaming_1_1glfw_1_1input__system.md), [antara::gaming::lua::scripting_system](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md), [antara::gaming::resources::system< UnderlyingResourceManager >](Classes/classantara_1_1gaming_1_1resources_1_1system.md), [antara::gaming::scenes::manager](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md), [antara::gaming::sdl::graphic_system](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md), [antara::gaming::sdl::input_system](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md), [antara::gaming::sfml::audio_system](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md), [antara::gaming::sfml::graphic_system](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md), [antara::gaming::sfml::input_system](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md), [antara::gaming::sfml::lua_system](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md)






## Public Functions

|                | Name           |
| -------------- | -------------- |
| constexpr [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type)**()  |
| std::string | **[get_class_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_class_name)**() <br>Public static functions.  |
| virtual std::string | **[get_name](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_name)**() const  |
| virtual [system_type](Namespaces/namespaceantara_1_1gaming_1_1ecs.md#enum-system_type) | **[get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-get_system_type_rtti)**() const <br>Public member functions.  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)**() override =0 <br>Pure virtual functions.  |
|  | **[~system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-~system)**() override <br>Destructor.  |
|  | **[system](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-system)**(TArgs &&... args) <br>Constructor.  |






## Additional inherited members






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
| virtual void | **[post_update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-post_update)**()  |
| virtual  | **[~base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-~base_system)**() =default <br>Destructor.  |
|  | **[base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-base_system)**(entt::registry & entity_registry, bool im_a_plugin_system =false) <br>Constructors.  |



**Protected Attributes inherited from [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)**

|                | Name           |
| -------------- | -------------- |
| void * | **[user_data_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-user_data_)**  |
| entt::dispatcher & | **[dispatcher_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-dispatcher_)**  |
| entt::registry & | **[entity_registry_](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#variable-entity_registry_)** <br>Protected data members.  |




## Detailed Description

```cpp
template <typename TSystemDerived,
typename TSystemType>
class antara::gaming::ecs::system;
```































## Public Functions Documentation

### function get_system_type

```cpp
static constexpr system_type get_system_type()
```







**Return**: ​system_type of the derived system. 





**Note**: this function allows you to retrieve the type of a system at compile time. 
















### function get_class_name

```cpp
static std::string get_class_name()
```

Public static functions. 



























### function get_name

```cpp
virtual std::string get_name() const
```







**Return**: name of the derived system. 





**Note**: this function allow you to get the name of the derived system 













**Reimplements**: [antara::gaming::ecs::base_system::get_name](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_name)




### function get_system_type_rtti

```cpp
virtual system_type get_system_type_rtti() const
```

Public member functions. 






**Return**: ​system_type of the derived system 





**Note**: this function allows you to retrieve the type of a system at runtime. 













**Reimplements**: [antara::gaming::ecs::base_system::get_system_type_rtti](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-get_system_type_rtti)




### function update

```cpp
virtual void update() override =0
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::base_system::update](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md#function-update)

**Reimplemented by**: [antara::gaming::sdl::input_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1input__system.md#function-update), [antara::gaming::glfw::input_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1input__system.md#function-update), [antara::gaming::sfml::lua_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1lua__system.md#function-update), [antara::gaming::ecs::virtual_input_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md#function-update), [antara::gaming::sfml::input_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1input__system.md#function-update), [antara::gaming::glfw::graphic_system::update](Classes/classantara_1_1gaming_1_1glfw_1_1graphic__system.md#function-update), [antara::gaming::sdl::graphic_system::update](Classes/classantara_1_1gaming_1_1sdl_1_1graphic__system.md#function-update), [antara::gaming::ecs::interpolation_system::update](Classes/structantara_1_1gaming_1_1ecs_1_1interpolation__system.md#function-update), [antara::gaming::collisions::basic_collision_system::update](Classes/classantara_1_1gaming_1_1collisions_1_1basic__collision__system.md#function-update), [antara::gaming::box2d::box2d_system::update](Classes/classantara_1_1gaming_1_1box2d_1_1box2d__system.md#function-update), [antara::gaming::sfml::audio_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1audio__system.md#function-update), [antara::gaming::resources::system::update](Classes/classantara_1_1gaming_1_1resources_1_1system.md#function-update), [antara::gaming::sfml::graphic_system::update](Classes/classantara_1_1gaming_1_1sfml_1_1graphic__system.md#function-update), [antara::gaming::lua::details::scripted_system::update](Classes/classantara_1_1gaming_1_1lua_1_1details_1_1scripted__system.md#function-update), [antara::gaming::scenes::manager::update](Classes/classantara_1_1gaming_1_1scenes_1_1manager.md#function-update), [antara::gaming::ecs::lambda_system::update](Classes/classantara_1_1gaming_1_1ecs_1_1lambda__system.md#function-update), [antara::gaming::lua::scripting_system::update](Classes/classantara_1_1gaming_1_1lua_1_1scripting__system.md#function-update), [antara::gaming::animation2d::anim_system::update](Classes/classantara_1_1gaming_1_1animation2d_1_1anim__system.md#function-update), [antara::gaming::blockchain::nspv::update](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-update)




### function ~system

```cpp
~system() override
```

Destructor. 



























### function system

```cpp
explicit system(
    TArgs &&... args
)
```

Constructor. 

































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1ecs_1_1system__manager.md
  Topic name: antara::gaming::ecs::system_manager
  Hash count: 0
-->
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

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md
  Topic name: antara::gaming::ecs::virtual_input_system
  Hash count: 0
-->
---
title: antara::gaming::ecs::virtual_input_system


---

# antara::gaming::ecs::virtual_input_system








Inherits from [antara::gaming::ecs::system< virtual_input_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| virtual void | **[update](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md#function-update)**() <br>Pure virtual functions.  |
|  | **[virtual_input_system](Classes/structantara_1_1gaming_1_1ecs_1_1virtual__input__system.md#function-virtual_input_system)**(entt::registry & registry)  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< virtual_input_system >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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








## Public Functions Documentation

### function update

```cpp
virtual void update()
```

Pure virtual functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function virtual_input_system

```cpp
virtual_input_system(
    entt::registry & registry
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1component.md
  Topic name: antara::gaming::ecs::component
  Hash count: 0
-->
---
title: antara::gaming::ecs::component
summary: < doom::meta::list  

---

# antara::gaming::ecs::component




< doom::meta::list  [More...](#detailed-description)







## Types

|                | Name           |
| -------------- | -------------- |
| typedef doom::meta::flatten< list_component_list > | **[components_list](Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1component.md#typedef-components_list)**  |
| typedef doom::meta::list< math::vector_type_list, transform::components_list, geometry::components_list, graphics::components_list > | **[list_component_list](Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1component.md#typedef-list_component_list)**  |





## Detailed Description

< doom::meta::list 

























Dependencies Headers < doom::meta::flattenSDK Headers < geometry::components_list graphics::components_list < transform::components_list 



## Types Documentation

### typedef components_list

```cpp
typedef doom::meta::flatten< list_component_list > components_list;
```




























### typedef list_component_list

```cpp
typedef doom::meta::list< math::vector_type_list, transform::components_list, geometry::components_list, graphics::components_list > list_component_list;
```

































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Namespaces/namespaceantara_1_1gaming_1_1ecs_1_1event.md
  Topic name: antara::gaming::ecs::event
  Hash count: 0
-->
---
title: antara::gaming::ecs::event
summary: < std::unique_ptr  

---

# antara::gaming::ecs::event




< std::unique_ptr  [More...](#detailed-description)






## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[antara::gaming::ecs::event::add_base_system](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md)**  |






## Detailed Description

< std::unique_ptr 

























C++ System HeadersSDK Headers < [ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)








-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md
  Topic name: antara::gaming::ecs::event::add_base_system
  Hash count: 1
-->
---
title: antara::gaming::ecs::event::add_base_system


---

# antara::gaming::ecs::event::add_base_system













## Public Types

|                | Name           |
| -------------- | -------------- |
| typedef std::unique_ptr< [ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md) > | **[base_system_ptr](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#typedef-base_system_ptr)** <br>Typedefs.  |


## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[add_base_system](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#function-add_base_system)**([base_system_ptr](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#typedef-base_system_ptr) system_ptr_ =nullptr) <br>Constructor.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::unique_ptr< [ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md) > | **[system_ptr](Classes/structantara_1_1gaming_1_1ecs_1_1event_1_1add__base__system.md#variable-system_ptr)** <br>Fields.  |








## Public Types Documentation

### typedef base_system_ptr

```cpp
typedef std::unique_ptr< ecs::base_system > base_system_ptr;
```

Typedefs. 





























## Public Functions Documentation

### function add_base_system

```cpp
add_base_system(
    base_system_ptr system_ptr_ =nullptr
)
```

Constructor. 





























## Public Attributes Documentation

### variable system_ptr

```cpp
std::unique_ptr< ecs::base_system > system_ptr {nullptr};
```

Fields. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


