# Command-Line Todo App

A simple command-line todo list application built with Node.js. Manage your tasks conveniently using this command-line interface.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Building and Packaging](#building-and-packaging)
- [License](#license)

## Introduction

The Command-Line Todo App allows you to add, view, delete, and complete tasks using your terminal. It's a lightweight and user-friendly way to manage your tasks without leaving the command line.

## Features

- Add tasks to your todo list.
- View the list of tasks.
- Delete tasks from the list.
- Mark tasks as completed.
- Help command to guide you through available actions.
- Saves tasks to a file for persistence between sessions.

## Installation

1. Clone or download this repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Install dependencies by running:

   ```bash
   npm install
   ```

## Usage

To run the Command-Line Todo App, use the following command:

```bash
node index.js
```

## Commands

The following commands are available in the todo app:

- `add <task>`: Add a new task to the todo list.
- `view`: View all tasks in the list.
- `del <index>`: Delete the task at the specified index.
- `comp <index>`: Mark the task at the specified index as completed.
- `help`: Display a list of available commands and their usage.
- `exit`: Exit the application and save your tasks.

Remember to follow the command format and argument requirements for each command.

## Building and Packaging

To package the Command-Line Todo App as an executable using `pkg`, follow these steps:

1. Install the `pkg` package globally if you haven't already:

   ```bash
   npm i pkg -g
   ```

2. Create a build using:

   ```bash
   npm run build
   ```

3. The executable binary (e.g., `todo-app`) will be generated in the `dist` directory.

. Run the executable to use the Command-Line Todo App:

```bash
./todo-app      # On Unix-based systems (Linux, macOS)
todo-app.exe    # On Windows
```

---

Feel free to contribute to this project by reporting issues, suggesting improvements, or submitting pull requests. Enjoy using the Command-Line Todo App to manage your tasks with ease!
