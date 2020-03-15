---
title: antara::gaming


---

# antara::gaming









## Namespaces

| Name           |
| -------------- |
| **[antara::gaming::world](Namespaces/namespaceantara_1_1gaming_1_1world.md)** <br>< std::string  |
| **[antara::gaming::transform](Namespaces/namespaceantara_1_1gaming_1_1transform.md)** <br>< doom::meta::list  |
| **[antara::gaming::timer](Namespaces/namespaceantara_1_1gaming_1_1timer.md)** <br>< std::chrono::nanoseconds, std::chrono_literals  |
| **[antara::gaming::sfml](Namespaces/namespaceantara_1_1gaming_1_1sfml.md)**  |
| **[antara::gaming::sdl](Namespaces/namespaceantara_1_1gaming_1_1sdl.md)**  |
| **[antara::gaming::scenes](Namespaces/namespaceantara_1_1gaming_1_1scenes.md)** <br>SDK Headers.  |
| **[antara::gaming::resources](Namespaces/namespaceantara_1_1gaming_1_1resources.md)** <br>< [event::load_textures](Classes/structantara_1_1gaming_1_1event_1_1load__textures.md) |
| **[antara::gaming::math](Namespaces/namespaceantara_1_1gaming_1_1math.md)** <br>< std::sqrt  |
| **[antara::gaming::lua](Namespaces/namespaceantara_1_1gaming_1_1lua.md)** <br>< std::move  |
| **[antara::gaming::input](Namespaces/namespaceantara_1_1gaming_1_1input.md)** <br>< math::vec2i  |
| **[antara::gaming::graphics](Namespaces/namespaceantara_1_1gaming_1_1graphics.md)** <br>SDK Headers.  |
| **[antara::gaming::glfw](Namespaces/namespaceantara_1_1gaming_1_1glfw.md)**  |
| **[antara::gaming::geometry](Namespaces/namespaceantara_1_1gaming_1_1geometry.md)** <br>< doom::meta::list  |
| **[antara::gaming::event](Namespaces/namespaceantara_1_1gaming_1_1event.md)** <br>< doom::meta::list  |
| **[antara::gaming::ecs](Namespaces/namespaceantara_1_1gaming_1_1ecs.md)** <br>SDK Headers.  |
| **[antara::gaming::core](Namespaces/namespaceantara_1_1gaming_1_1core.md)** <br>SDK Headers.  |
| **[antara::gaming::config](Namespaces/namespaceantara_1_1gaming_1_1config.md)** <br>< assert  |
| **[antara::gaming::collisions](Namespaces/namespaceantara_1_1gaming_1_1collisions.md)** <br>< std::min, std::max  |
| **[antara::gaming::box2d](Namespaces/namespaceantara_1_1gaming_1_1box2d.md)** <br>SDK Headers.  |
| **[antara::gaming::blockchain](Namespaces/namespaceantara_1_1gaming_1_1blockchain.md)** <br>< std::exception  |
| **[antara::gaming::audio](Namespaces/namespaceantara_1_1gaming_1_1audio.md)** <br>< std::string  |
| **[antara::gaming::animation2d](Namespaces/namespaceantara_1_1gaming_1_1animation2d.md)** <br>< std::size_t  |



## Functions

|                | Name           |
| -------------- | -------------- |
| constexpr const char * | **[version](Namespaces/namespaceantara_1_1gaming.md#function-version)**() <br>Function that allows us to find the current version of the SDK.  |







## Functions Documentation

### function version

```cpp
constexpr const char * version()
```

Function that allows us to find the current version of the SDK. 






**Return**: the current version of the SDK as a `const char *`




















Example: 

```cpp
#include <iostream>
#include <antara/gaming/core/version.hpp>

void print_version() {
    std::cout << antara::gaming::version() << std::endl;
}
```



```
embed:rst
 .. note::

    The result of this function can be deduced at compile-time.
```






-------------------------------

Updated on 14 March 2020 at 22:59:50 AKDT