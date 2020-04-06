

## rectangle

#### Full Title:
```
antara::gaming::graphics::rectangle
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
| bool | **[operator!=](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#function-operator!=)**(const [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) & rhs) const  |
| bool | **[operator==](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#function-operator==)**(const [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) & rhs) const  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[position](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#variable-position)** <br>width/height  |
| [math::vec2f](Classes/classantara_1_1gaming_1_1math_1_1basic__vector.md) | **[size](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#variable-size)**  |


### Friends

|                | Name           |
| -------------- | -------------- |
| std::ostream & | **[operator<<](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md#friend-operator<<)**(std::ostream & os, const [rectangle](Classes/structantara_1_1gaming_1_1graphics_1_1rectangle.md) & rectangle) <br>pos of the rectangle  |









### Public Functions Documentation

#### function operator!=

```cpp
inline bool operator!=(
    const rectangle & rhs
) const
```




























#### function operator==

```cpp
inline bool operator==(
    const rectangle & rhs
) const
```






























### Public Attributes Documentation

#### variable position

```cpp
math::vec2f position;
```

width/height 



























#### variable size

```cpp
math::vec2f size;
```






























### Friends

#### friend operator<<

```cpp
friend std::ostream & operator<<(
    std::ostream & os,
    const rectangle & rectangle
);
```

pos of the rectangle 
































