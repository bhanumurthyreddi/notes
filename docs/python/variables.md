---
icon: lucide/hash
---

# Variables

In Part 1, we installed Python, created our first program, and learned the basic syntax rules that make Python code work. Now we are ready to store and use information in our programs using variables and different data types.

## What is a Variable ?

A variable in Python is a `name that stores a value`. You can think of it like a labelled box where you keep data so you can use it later.

**Example :**

```python
name = "BhanuMurthy"
age = 20
height = 5.6
```

## Variable Naming Rules

Python is strict about how variable names can look:

- Must start with a letter or an underscore (`_`) — never a number.
- Can only contain letters, numbers, and underscores.
- Cannot be a Python keyword (`class`, `for`, `if`, etc.).
- Are case-sensitive — `age`, `Age`, and `AGE` are three different variables.

```python
age = 25        # valid
_age = 25       # valid
age2 = 25       # valid
2age = 25       # invalid — cannot start with a number
my-age = 25     # invalid — hyphens aren't allowed
```

## Naming conventions

Python programmers follow a few simple naming rules to make code easier to read:

- Use lowercase letters and underscores for variable names: `user_name`, `total_price`.
- Avoid spaces and special characters.
- Use descriptive names so the code is easy to understand.
- Constants are usually written in uppercase: `PI = 3.14`.

```python
user_name = "Bhanu"
total_score = 95
MAX_VALUE = 100
```

## Assigning multiple variables

You can assign more than one variable on a single line. This is useful when you want to set many values at once.

```python
x, y, z = 10, 20, 30
name, age = "Bhanu", 20
```

You can also assign the same value to several variables together:

```python
a = b = c = 5
```

## Data types in Python

Python uses different data types to store different kinds of information.

- `int` — whole numbers: `10`, `-3`, `0`
- `float` — decimal numbers: `5.6`, `3.14`
- `str` — text strings: `'hello'`, `"Python"`
- `bool` — boolean values: `True`, `False`
- `list` — ordered collection: `[1, 2, 3]`
- `tuple` — ordered, unchangeable collection: `(1, 2, 3)`
- `dict` — key-value pairs: `{"name": "Bhanu", "age": 20}`
- `set` — unique values: `{1, 2, 3}`

```python
name = "Bhanu"
age = 20
height = 5.6
is_student = True
colors = ["red", "green", "blue"]
point = (10, 20)
profile = {"name": "Bhanu", "city": "Hyderabad"}
unique_numbers = {1, 2, 3}
```

## Checking a variable's type

Use the built-in `type()` function to see what kind of data a variable holds.

```python
print(type(name))          # <class 'str'>
print(type(age))           # <class 'int'>
print(type(height))        # <class 'float'>
print(type(is_student))    # <class 'bool'>
```

## Numbers in Python

Python supports integers and floating-point numbers.

- `int` is for whole numbers.
- `float` is for numbers with a decimal point.

```python
score = 100
price = 9.99
```

## Basic arithmetic

You can use Python like a calculator.

```python
a = 10
b = 3
print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.3333333333333335
print(a // b)  # 3   (integer division)
print(a % b)   # 1   (remainder)
print(a ** b)  # 1000 (power)
```

## Type casting

Sometimes you need to convert one data type into another.

```python
age_str = "20"
age_int = int(age_str)
price_str = "9.99"
price_float = float(price_str)
number = 5
text = str(number)
```

Type casting is especially useful when you need to combine values of different types or when you read input as text and want to use it as a number.

```python
age = int("20")
print(age + 5)  # 25
```
