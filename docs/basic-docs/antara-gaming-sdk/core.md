/*
  New File: ../../outputDir/Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md
  Topic name: antara::gaming::core::details
  Hash count: 0
*/
---
title: antara::gaming::core::details
summary: getpid()  

---

# antara::gaming::core::details




getpid()  [More...](#detailed-description)








## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[open_url_browser](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md#function-open_url_browser)**(const std::string & url)  |
| std::string | **[replace_all_copy](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md#function-replace_all_copy)**(std::string s, const std::string & from, const std::string & to)  |
| std::string & | **[replace_all_mute](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md#function-replace_all_mute)**(std::string & s, const std::string & from, const std::string & to)  |
| std::filesystem::path | **[assets_real_path](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md#function-assets_real_path)**()  |
| std::filesystem::path | **[binary_real_path](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md#function-binary_real_path)**()  |
| std::pair< float, float > | **[get_scaling_factor](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md#function-get_scaling_factor)**()  |
| bool | **[is_high_dpi_capable](Namespaces/namespaceantara_1_1gaming_1_1core_1_1details.md#function-is_high_dpi_capable)**()  |




## Detailed Description

getpid() 

























HMODULE, GetModuleHandleW, GetModuleFileNameW.

< std::system

C System HeadersC++ System Headers < std::string 




## Functions Documentation

### function open_url_browser

```cpp
inline void open_url_browser(
    const std::string & url
)
```




























### function replace_all_copy

```cpp
static std::string replace_all_copy(
    std::string s,
    const std::string & from,
    const std::string & to
)
```




























### function replace_all_mute

```cpp
static std::string & replace_all_mute(
    std::string & s,
    const std::string & from,
    const std::string & to
)
```




























### function assets_real_path

```cpp
std::filesystem::path assets_real_path()
```




























### function binary_real_path

```cpp
std::filesystem::path binary_real_path()
```




























### function get_scaling_factor

```cpp
std::pair< float, float > get_scaling_factor()
```




























### function is_high_dpi_capable

```cpp
bool is_high_dpi_capable()
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT


