---
title: antara::gaming::blockchain::nspv


---

# antara::gaming::blockchain::nspv








Inherits from [antara::gaming::ecs::system< nspv >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md), [antara::gaming::ecs::base_system](Classes/classantara_1_1gaming_1_1ecs_1_1base__system.md)







## Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[is_wif_wallet_exist](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-is_wif_wallet_exist)**() <br>Public static functions.  |
| [nspv_tx_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__tx__answer.md) | **[send](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-send)**(const std::string & coin, const std::string & address, double amount) <br>this function process a spend + broadcast on the given coin and given amount  |
| const std::string & | **[get_endpoint](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-get_endpoint)**(const std::string & coin) const  |
| double | **[get_balance](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-get_balance)**(const std::string & coin) const  |
| bool | **[load_from_env](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-load_from_env)**(const std::string & coin, const std::string & env_variable)  |
| bool | **[spawn_nspv_instance](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-spawn_nspv_instance)**(const std::string & coin, bool auto_login =false, std::optional< std::size_t > rpcport_in =std::nullopt)  |
| const std::string & | **[get_address](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-get_address)**(const std::string & coin) const  |
| void | **[set_pin_for_the_session](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-set_pin_for_the_session)**(const std::string & pin)  |
| bool | **[is_transaction_pending](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-is_transaction_pending)**(const std::string & coin, const std::string & txid, std::size_t vout)  |
| virtual void | **[update](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-update)**() <br>Public member functions.  |
|  | **[~nspv](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-~nspv)**() <br>Destructor.  |
|  | **[nspv](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-nspv)**(entt::registry & registry, fs::path tools_path =core::assets_real_path()/"tools") <br>Constructors.  |






## Additional inherited members






**Public Functions inherited from [antara::gaming::ecs::system< nspv >](Classes/classantara_1_1gaming_1_1ecs_1_1system.md)**

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

### function is_wif_wallet_exist

```cpp
static bool is_wif_wallet_exist()
```

Public static functions. 



























### function send

```cpp
nspv_tx_answer send(
    const std::string & coin,
    const std::string & address,
    double amount
)
```

this function process a spend + broadcast on the given coin and given amount 


























assume we are login before call send 

### function get_endpoint

```cpp
const std::string & get_endpoint(
    const std::string & coin
) const
```




























### function get_balance

```cpp
double get_balance(
    const std::string & coin
) const
```




























### function load_from_env

```cpp
bool load_from_env(
    const std::string & coin,
    const std::string & env_variable
)
```



























we save address for later usage 

### function spawn_nspv_instance

```cpp
bool spawn_nspv_instance(
    const std::string & coin,
    bool auto_login =false,
    std::optional< std::size_t > rpcport_in =std::nullopt
)
```




























### function get_address

```cpp
const std::string & get_address(
    const std::string & coin
) const
```




























### function set_pin_for_the_session

```cpp
void set_pin_for_the_session(
    const std::string & pin
)
```




























### function is_transaction_pending

```cpp
bool is_transaction_pending(
    const std::string & coin,
    const std::string & txid,
    std::size_t vout
)
```



























TODO: add a out parameter for error

We still need to verify with txproof

Transaction is confirmed 

### function update

```cpp
virtual void update()
```

Public member functions. 
























**Reimplements**: [antara::gaming::ecs::system::update](Classes/classantara_1_1gaming_1_1ecs_1_1system.md#function-update)




### function ~nspv

```cpp
~nspv()
```

Destructor. 



























### function nspv

```cpp
nspv(
    entt::registry & registry,
    fs::path tools_path =core::assets_real_path()/"tools"
)
```

Constructors. 

























[nspv::nspv](Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md#function-nspv) implementation 








-------------------------------

Updated on 18 March 2020 at 16:54:33 AKDT