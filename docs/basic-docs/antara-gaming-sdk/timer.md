

## time_step

#### Full Title:
```
antara::gaming::timer::time_step
```















### Public Functions

|                | Name           |
| -------------- | -------------- |
| float | **[get_interpolation](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-get_interpolation)**() const  |
| bool | **[is_update_required](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-is_update_required)**() const <br>Public member functions.  |
| void | **[reset_lag](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-reset_lag)**()  |
| float | **[get_fixed_delta_time](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-get_fixed_delta_time)**()  |
| void | **[change_tps](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-change_tps)**(std::chrono::nanoseconds new_tps_rate)  |
| void | **[perform_update](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-perform_update)**()  |
| void | **[start_frame](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-start_frame)**()  |
| void | **[start](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#function-start)**() <br>Public static functions.  |


### Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::string | **[fps_str_](Classes/classantara_1_1gaming_1_1timer_1_1time__step.md#variable-fps_str_)** <br>Public Fields.  |











### Public Functions Documentation

#### function get_interpolation

```cpp
float get_interpolation() const
```




























#### function is_update_required

```cpp
bool is_update_required() const
```

Public member functions. 



























#### function reset_lag

```cpp
static void reset_lag()
```




























#### function get_fixed_delta_time

```cpp
static float get_fixed_delta_time()
```




























#### function change_tps

```cpp
static void change_tps(
    std::chrono::nanoseconds new_tps_rate
)
```




























#### function perform_update

```cpp
static void perform_update()
```




























#### function start_frame

```cpp
static void start_frame()
```




























#### function start

```cpp
static void start()
```

Public static functions. 





























### Public Attributes Documentation

#### variable fps_str_

```cpp
static std::string fps_str_ = "";
```

Public Fields. 





































