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