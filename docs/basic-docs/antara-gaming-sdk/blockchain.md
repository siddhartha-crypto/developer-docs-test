<!--
  New File: ../../outputDir/Classes/classantara_1_1gaming_1_1blockchain_1_1nspv.md
  Topic name: antara::gaming::blockchain::nspv
  Hash count: 0
-->
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

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv_1_1nspv__process.md
  Topic name: antara::gaming::blockchain::nspv::nspv_process
  Hash count: 1
-->
---
title: antara::gaming::blockchain::nspv::nspv_process
summary: Private data structure.  

---

# antara::gaming::blockchain::nspv::nspv_process




Private data structure. 










## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[~nspv_process](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv_1_1nspv__process.md#function-~nspv_process)**() <br>Destructor.  |
|  | **[nspv_process](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv_1_1nspv__process.md#function-nspv_process)**(reproc::process background_, std::size_t rpcport_) <br>Constructor.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[address](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv_1_1nspv__process.md#variable-address)**  |
| std::string | **[endpoint](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv_1_1nspv__process.md#variable-endpoint)**  |
| std::size_t | **[rpcport](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv_1_1nspv__process.md#variable-rpcport)**  |
| reproc::process | **[background](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv_1_1nspv__process.md#variable-background)** <br>Fields.  |










## Public Functions Documentation

### function ~nspv_process

```cpp
~nspv_process()
```

Destructor. 



























### function nspv_process

```cpp
nspv_process(
    reproc::process background_,
    std::size_t rpcport_
)
```

Constructor. 

























nspv::nspv_process implementation 




## Public Attributes Documentation

### variable address

```cpp
std::string address {""};
```




























### variable endpoint

```cpp
std::string endpoint;
```




























### variable rpcport

```cpp
std::size_t rpcport;
```




























### variable background

```cpp
reproc::process background;
```

Fields. 































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md
  Topic name: antara::gaming::blockchain::nspv_api
  Hash count: 1
-->
---
title: antara::gaming::blockchain::nspv_api


---

# antara::gaming::blockchain::nspv_api











## Public Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[txproof_request](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__request.md)**  |
| struct | **[txproof_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md)**  |
| struct | **[spend_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md)**  |
| struct | **[mempool_request](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__request.md)**  |
| struct | **[mempool_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md)**  |
| struct | **[login_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md)**  |
| struct | **[listunspent_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md)**  |
| struct | **[get_newaddress_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1get__newaddress__answer.md)**  |
| struct | **[broadcast_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md)**  |




## Public Functions

|                | Name           |
| -------------- | -------------- |
| RpcReturnType | **[rpc_process_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-rpc_process_answer)**(const RestClient::Response & resp)  |
| nlohmann::json | **[template_request](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-template_request)**(std::string method_name)  |
| [broadcast_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md) | **[broadcast](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-broadcast)**(const std::string & endpoint, const std::string & hex)  |
| [txproof_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md) | **[txproof](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-txproof)**(const std::string & endpoint, const [txproof_request](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__request.md) & request)  |
| [mempool_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md) | **[mempool](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-mempool)**(const std::string & endpoint, std::optional< [mempool_request](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__request.md) > request =std::nullopt)  |
| [spend_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md) | **[spend](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-spend)**(const std::string & endpoint, const std::string & address, double amount)  |
| [listunspent_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md) | **[listunspent](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-listunspent)**(const std::string & endpoint, const std::string & address)  |
| [login_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md) | **[login](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-login)**(const std::string & endpoint, const std::string & wif)  |
| [get_newaddress_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1get__newaddress__answer.md) | **[get_newaddress](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-get_newaddress)**()  |
| void | **[from_json](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-from_json)**(const nlohmann::json & j, [txproof_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md) & cfg)  |
| void | **[from_json](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-from_json)**(const nlohmann::json & j, [mempool_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md) & cfg)  |
| void | **[from_json](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-from_json)**(const nlohmann::json & j, [broadcast_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md) & cfg)  |
| void | **[from_json](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-from_json)**(const nlohmann::json & j, [spend_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md) & cfg)  |
| void | **[from_json](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-from_json)**(const nlohmann::json & j, [listunspent_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md) & cfg)  |
| void | **[from_json](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api.md#function-from_json)**(const nlohmann::json & j, [login_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md) & cfg)  |












## Public Functions Documentation

### function rpc_process_answer

```cpp
static RpcReturnType rpc_process_answer(
    const RestClient::Response & resp
)
```




























### function template_request

```cpp
static nlohmann::json template_request(
    std::string method_name
)
```




























### function broadcast

```cpp
static broadcast_answer broadcast(
    const std::string & endpoint,
    const std::string & hex
)
```




























### function txproof

```cpp
static txproof_answer txproof(
    const std::string & endpoint,
    const txproof_request & request
)
```




























### function mempool

```cpp
static mempool_answer mempool(
    const std::string & endpoint,
    std::optional< mempool_request > request =std::nullopt
)
```




























### function spend

```cpp
static spend_answer spend(
    const std::string & endpoint,
    const std::string & address,
    double amount
)
```




























### function listunspent

```cpp
static listunspent_answer listunspent(
    const std::string & endpoint,
    const std::string & address
)
```




























### function login

```cpp
static login_answer login(
    const std::string & endpoint,
    const std::string & wif
)
```




























### function get_newaddress

```cpp
static get_newaddress_answer get_newaddress()
```




























### function from_json

```cpp
static void from_json(
    const nlohmann::json & j,
    txproof_answer & cfg
)
```




























### function from_json

```cpp
static void from_json(
    const nlohmann::json & j,
    mempool_answer & cfg
)
```




























### function from_json

```cpp
static void from_json(
    const nlohmann::json & j,
    broadcast_answer & cfg
)
```




























### function from_json

```cpp
static void from_json(
    const nlohmann::json & j,
    spend_answer & cfg
)
```




























### function from_json

```cpp
static void from_json(
    const nlohmann::json & j,
    listunspent_answer & cfg
)
```




























### function from_json

```cpp
static void from_json(
    const nlohmann::json & j,
    login_answer & cfg
)
```


































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md
  Topic name: antara::gaming::blockchain::nspv_api::broadcast_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::broadcast_answer


---

# antara::gaming::blockchain::nspv_api::broadcast_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[broadcast](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md#variable-broadcast)**  |
| std::string | **[expected](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md#variable-expected)**  |
| int | **[retcode](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md#variable-retcode)**  |
| std::string | **[raw_result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md#variable-raw_result)**  |
| int | **[rpc_result_code](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md#variable-rpc_result_code)**  |
| std::string | **[result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md#variable-result)**  |












## Public Attributes Documentation

### variable broadcast

```cpp
std::string broadcast;
```




























### variable expected

```cpp
std::string expected;
```




























### variable retcode

```cpp
int retcode;
```




























### variable raw_result

```cpp
std::string raw_result;
```




























### variable rpc_result_code

```cpp
int rpc_result_code;
```




























### variable result

```cpp
std::string result;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1get__newaddress__answer.md
  Topic name: antara::gaming::blockchain::nspv_api::get_newaddress_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::get_newaddress_answer


---

# antara::gaming::blockchain::nspv_api::get_newaddress_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[wif](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1get__newaddress__answer.md#variable-wif)**  |












## Public Attributes Documentation

### variable wif

```cpp
std::string wif;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md
  Topic name: antara::gaming::blockchain::nspv_api::listunspent_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::listunspent_answer


---

# antara::gaming::blockchain::nspv_api::listunspent_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| double | **[balance](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md#variable-balance)**  |
| std::string | **[raw_result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md#variable-raw_result)**  |
| int | **[rpc_result_code](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md#variable-rpc_result_code)**  |
| std::string | **[result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1listunspent__answer.md#variable-result)**  |












## Public Attributes Documentation

### variable balance

```cpp
double balance;
```




























### variable raw_result

```cpp
std::string raw_result;
```




























### variable rpc_result_code

```cpp
int rpc_result_code;
```




























### variable result

```cpp
std::string result;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md
  Topic name: antara::gaming::blockchain::nspv_api::login_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::login_answer


---

# antara::gaming::blockchain::nspv_api::login_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[raw_result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md#variable-raw_result)**  |
| int | **[rpc_result_code](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md#variable-rpc_result_code)**  |
| std::size_t | **[wifprefix](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md#variable-wifprefix)**  |
| std::string | **[pubkey](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md#variable-pubkey)**  |
| std::string | **[address](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md#variable-address)**  |
| std::string | **[status](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md#variable-status)**  |
| std::string | **[result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1login__answer.md#variable-result)**  |












## Public Attributes Documentation

### variable raw_result

```cpp
std::string raw_result;
```




























### variable rpc_result_code

```cpp
int rpc_result_code;
```




























### variable wifprefix

```cpp
std::size_t wifprefix;
```




























### variable pubkey

```cpp
std::string pubkey;
```




























### variable address

```cpp
std::string address;
```




























### variable status

```cpp
std::string status;
```




























### variable result

```cpp
std::string result;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md
  Topic name: antara::gaming::blockchain::nspv_api::mempool_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::mempool_answer


---

# antara::gaming::blockchain::nspv_api::mempool_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::vector< std::string > | **[txids](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md#variable-txids)**  |
| std::string | **[raw_result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md#variable-raw_result)**  |
| int | **[rpc_result_code](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md#variable-rpc_result_code)**  |
| std::string | **[result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__answer.md#variable-result)**  |












## Public Attributes Documentation

### variable txids

```cpp
std::vector< std::string > txids;
```




























### variable raw_result

```cpp
std::string raw_result;
```




























### variable rpc_result_code

```cpp
int rpc_result_code;
```




























### variable result

```cpp
std::string result;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__request.md
  Topic name: antara::gaming::blockchain::nspv_api::mempool_request
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::mempool_request


---

# antara::gaming::blockchain::nspv_api::mempool_request

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::optional< std::string > | **[address](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1mempool__request.md#variable-address)**  |












## Public Attributes Documentation

### variable address

```cpp
std::optional< std::string > address;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md
  Topic name: antara::gaming::blockchain::nspv_api::spend_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::spend_answer


---

# antara::gaming::blockchain::nspv_api::spend_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::size_t | **[vout](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md#variable-vout)**  |
| std::string | **[hex](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md#variable-hex)**  |
| std::string | **[raw_result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md#variable-raw_result)**  |
| int | **[rpc_result_code](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md#variable-rpc_result_code)**  |
| std::string | **[result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md#variable-result)**  |












## Public Attributes Documentation

### variable vout

```cpp
std::size_t vout;
```




























### variable hex

```cpp
std::string hex;
```




























### variable raw_result

```cpp
std::string raw_result;
```




























### variable rpc_result_code

```cpp
int rpc_result_code;
```




























### variable result

```cpp
std::string result;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md
  Topic name: antara::gaming::blockchain::nspv_api::txproof_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::txproof_answer


---

# antara::gaming::blockchain::nspv_api::txproof_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[txid](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md#variable-txid)**  |
| std::string | **[raw_result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md#variable-raw_result)**  |
| int | **[rpc_result_code](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md#variable-rpc_result_code)**  |
| std::string | **[result](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__answer.md#variable-result)**  |












## Public Attributes Documentation

### variable txid

```cpp
std::string txid;
```




























### variable raw_result

```cpp
std::string raw_result;
```




























### variable rpc_result_code

```cpp
int rpc_result_code;
```




























### variable result

```cpp
std::string result;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__request.md
  Topic name: antara::gaming::blockchain::nspv_api::txproof_request
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_api::txproof_request


---

# antara::gaming::blockchain::nspv_api::txproof_request

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::size_t | **[vout](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__request.md#variable-vout)**  |
| std::string | **[txid](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1txproof__request.md#variable-txid)**  |












## Public Attributes Documentation

### variable vout

```cpp
std::size_t vout;
```




























### variable txid

```cpp
std::string txid;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


<!--
  New File: ../../outputDir/Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__tx__answer.md
  Topic name: antara::gaming::blockchain::nspv_tx_answer
  Hash count: 2
-->
---
title: antara::gaming::blockchain::nspv_tx_answer


---

# antara::gaming::blockchain::nspv_tx_answer

















## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::optional< [nspv_api::broadcast_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1broadcast__answer.md) > | **[broadcast_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__tx__answer.md#variable-broadcast_answer)**  |
| [nspv_api::spend_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__api_1_1spend__answer.md) | **[send_answer](Classes/structantara_1_1gaming_1_1blockchain_1_1nspv__tx__answer.md#variable-send_answer)**  |












## Public Attributes Documentation

### variable broadcast_answer

```cpp
std::optional< nspv_api::broadcast_answer > broadcast_answer {std::nullopt};
```




























### variable send_answer

```cpp
nspv_api::spend_answer send_answer;
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


