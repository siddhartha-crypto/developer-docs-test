---
title: antara::gaming::transform::properties


---

# antara::gaming::transform::properties















## Public Functions

|                | Name           |
| -------------- | -------------- |
| [properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & | **[operator=](Classes/structantara_1_1gaming_1_1transform_1_1properties.md#function-operator=)**(const [properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & other) =default  |
|  | **[properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md#function-properties)**(const [properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md) & other) =default  |
|  | **[properties](Classes/structantara_1_1gaming_1_1transform_1_1properties.md#function-properties)**() =default <br>Will be modified internally but not from the user.  |


## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [ts_rect](Classes/structantara_1_1gaming_1_1transform_1_1ts__rect.md) | **[global_bounds](Classes/structantara_1_1gaming_1_1transform_1_1properties.md#variable-global_bounds)** <br>Will be modified internally but not from the user.  |
| [ts_rect](Classes/structantara_1_1gaming_1_1transform_1_1ts__rect.md) | **[local_bounds](Classes/structantara_1_1gaming_1_1transform_1_1properties.md#variable-local_bounds)**  |
| float | **[rotation](Classes/structantara_1_1gaming_1_1transform_1_1properties.md#variable-rotation)**  |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[scale](Classes/structantara_1_1gaming_1_1transform_1_1properties.md#variable-scale)**  |










## Public Functions Documentation

### function operator=

```cpp
properties & operator=(
    const properties & other
) =default
```




























### function properties

```cpp
properties(
    const properties & other
) =default
```




























### function properties

```cpp
properties() =default
```

Will be modified internally but not from the user. 





























## Public Attributes Documentation

### variable global_bounds

```cpp
ts_rect global_bounds {};
```

Will be modified internally but not from the user. 



























### variable local_bounds

```cpp
ts_rect local_bounds {};
```




























### variable rotation

```cpp
float rotation {0.f};
```




























### variable scale

```cpp
math::vec2f scale {math::vec2f::scalar(1.f)};
```
































-------------------------------

Updated on 18 March 2020 at 16:53:30 AKDT