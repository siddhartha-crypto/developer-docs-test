

## config

#### Full Title:
```
antara::gaming::config
```




< assert  [More...](#detailed-description)





### Namespaces

| Name           |
| -------------- |
| **[antara::gaming::config::details](Namespaces/namespaceantara_1_1gaming_1_1config_1_1details.md)**  |



### Functions

|                | Name           |
| -------------- | -------------- |
| TConfig | **[load_configuration](Namespaces/namespaceantara_1_1gaming_1_1config.md#function-load_configuration)**(std::filesystem::path && config_path, std::string filename) <br>This function allows us to load a configuration through a `path` and `filename`. There are three different behaviors in this function:  |





### Detailed Description

< assert 

























C System HeadersC++ System Headers < fs::create_directories, fs::path, fs::exists < std::ifstream, std::ofstream < std::string < std::error_code Dependencies Headers < nlohmann::json 




### Functions Documentation

### function load_configuration

```cpp
TConfig load_configuration(
    std::filesystem::path && config_path,
    std::string filename
)
```

This function allows us to load a configuration through a `path` and `filename`. There are three different behaviors in this function: 




**Template Parameters**: 

  * **TConfig** the type of template you want to load 



**Return**: a loaded/created configuration.





















* if the parameter path does not exist the function will attempt to create the directories of the given `path`.
* if the configuration does not exist a default one will be **created**.
* if the `path` and the `name` of the file exists, the contents of the configuration will be **loaded**.

Example: 

```cpp
auto cfg = config::load_configuration<my_game::config>(std::filesystem::current_path() / "assets/config", "my_game.config.json");
```









