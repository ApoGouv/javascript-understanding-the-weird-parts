# Section 2: Execution Contexts and Lexical Environments

## 2.1 Conceptual Aside: Syntax Parsers, Execution Contexts, and Lexical Environments (continued)

### Big Word Alerts

In this section, we are introduced to three important concepts that will be referenced throughout the course. These are:

#### 1. **Syntax Parser**:
A **Syntax Parser** is a program that reads your code and checks if its syntax is valid. It helps in converting the JavaScript code you write into something that the computer can understand. This process involves parsing the code character by character, ensuring the syntax is correct, and then using interpreters or compilers to convert it into machine instructions.

It reads the code and breaks it down into tokens (smaller meaningful pieces) and checks if they follow the grammar rules of the language. If there’s a syntax error, the parser will typically stop the execution, flag the issue, and throw an error.

The role of the syntax parser is critical in translating human-readable code into computer-readable instructions, and understanding this will help us know how JavaScript engines process code.

#### 2. **Lexical Environment**:
A **Lexical Environment** refers to where a particular piece of code, like a variable or function, is physically located within the written code. The term "lexical" relates to words or grammar, and in programming, it indicates that where you place something in the code affects how it behaves in memory. In some languages, where code is placed within the structure matters because it defines its scope and accessibility.

In JavaScript, the lexical environment plays a key role in determining the scope and behavior of variables and functions. The compiler considers this positioning when processing the code.

#### 3. **Execution Context**:
An **Execution Context** is a wrapper that helps manage the running code. It’s the environment in which the code is executed, and it contains not only the running code but also additional information, such as the lexical environment, scope, and variables available to the code. Execution contexts are dynamic and crucial for understanding how JavaScript executes code.

Execution contexts help manage and control the environment in which your JavaScript code runs. It tells us which part of the code is currently executing and gives context to the variables, functions, and other resources available to that execution.

---

These three concepts—**Syntax Parsers**, **Lexical Environments**, and **Execution Contexts**—are foundational to understanding how JavaScript works under the hood. We’ll continue to see these terms and apply them as we move forward in the course.

---
