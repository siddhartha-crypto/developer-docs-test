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