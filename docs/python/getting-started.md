---
icon: lucide/rocket
---

# Getting Started

## What is Python?

Python is a general-purpose programming language created by Guido van Rossum and first released in 1991. It is one of the best languages for beginners because it is:

- **Easy to read.** The syntax is simple and close to natural English.
- **Very versatile.** You can build websites, automate tasks, analyse data, build machine learning models, and write small scripts.
- **Well supported.** Thousands of libraries are available so you can use existing tools instead of building everything from scratch.

Python runs on Windows, macOS, and Linux, and it is free and open source.

## 1. Install Python

Most systems can run Python after a short install.

1. Visit [python.org/downloads](https://python.org/downloads) and download the latest stable version.
2. On Windows, make sure to check **"Add Python to PATH"** during installation.
3. Open a terminal (Command Prompt, PowerShell, or macOS/Linux terminal) and run:

```bash
python --version
```

If the output shows something like `Python 3.13.0`, the installation worked.

> Tip: On some macOS/Linux systems, use `python3 --version` instead of `python --version`.

## 2. Write your first Python program

You can run Python code two ways:

- In the interactive shell
- From a file

### Option A: Interactive shell

Open a terminal and type:

```bash
python
```

Then type:

```python
print("Hello, World!")
```

You should see:

```text
Hello, World!
```

### Option B: Create a file

Create a file named `main.py` and add this code:

```python
print("Hello, World!")
```

Run it with:

```bash
python main.py
```

## 3. Install `uv`

`uv` is a lightweight Python project tool that helps you create projects, manage virtual environments, and run scripts.

Install it with:

```bash
pip install uv
```

If your system uses `python3`, run:

```bash
python3 -m pip install uv
```

## 4. Create a new project with `uv`

Run:

```bash
uv init my_project
cd my_project
```

This creates a new folder called `my_project` with a basic Python project structure.

## 5. Create a virtual environment

Use `uv` to make a virtual environment:

```bash
uv venv
```

### Activate the virtual environment

- On Windows:

```powershell
.venv\Scripts\activate
```

- On macOS/Linux:

```bash
source .venv/bin/activate
```

When the environment is active, your prompt will usually show `.venv`.

## 6. Add a Python file

Create `main.py` with this content:

```python
# This is a simple Python program.
# It prints a message to the screen.
print("Hello, World!")
```

## 7. Run the project

Run the file using `uv`:

```bash
uv run main.py
```

You should see:

```text
Hello, World!
```

## 8. Next steps

Once this works, try editing `main.py` to print your own name or to store values in variables. For example:

```python
name = "BhanuMurthy Naidu Reddi"
print("Hello,", name)
```

This page now includes a complete setup flow, beginner-friendly explanations, and cross-platform activation instructions.
