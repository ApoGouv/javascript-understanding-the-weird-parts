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


## 2.2 Conceptual Aside: Name/Value Pairs and Objects

### Name/Value Pairs:
- A **Name/Value pair** is a relationship where a **name** (key) is associated with a **value**.
- A key point is that in any particular **execution context**, a name can only have one value. However, that value can itself be a collection of **Name/Value pairs**.

#### Example:
```javascript
const address = "100 Main Street"; // Name: 'address', Value: '100 Main Street'
```

### Objects in JavaScript:

- In JavaScript, an **object** is a collection of **Name/Value pairs**.
- The value associated with a name can be:
  - A simple data type (e.g., string, number).
  - Another object containing additional **Name/Value pairs** (this creates a **nested object**).

#### Example of an Object:
```javascript
const address = {
  street: "100 Main Street",
  number: 301,
  apartment: {
    floor: 3,
    number: 301
  }
};
```

In this example:

- `address` is the object containing several Name/Value pairs.
- The value for `apartment` is another object, with its own Name/Value pairs (`floor: 3, number: 301`).

### Key points:

- **Objects in JavaScript** are essentially collections of **Name/Value pairs**.
- **Nesting**: The value of a Name/Value pair can be another object, allowing the creation of complex, nested structures.
- Keep in mind: **JavaScript objects are simple** – just Name/Value pairs, and their value can be another object.


## 2.3 Downloading Source Code for This Course

- From this point forward, most lectures will contain downloadable source code.
- The code provides:
  - A place to start.
  - Completed code.


## 2.4 The Global Environment and The Global Object

- **Execution Context**:
  - **Execution context** is a wrapper that the JavaScript engine creates when your code runs. It helps manage the environment in which your code executes.
  - There are multiple execution contexts during a JavaScript program's execution, but the **base execution context** is called the **global execution context**.
  
- **Global Object**:
  - The **global execution context** creates two key things automatically:
    1. **Global Object**: In the browser environment, this is the `window` object. It provides access to various global properties and methods.
    2. **`this`**: A special variable automatically created by the JavaScript engine. In the global context, `this` refers to the global object (i.e., `window` in browsers).
  - These are set up by the JavaScript engine, even if no code is explicitly written to define them.
  
- **Global Scope**:
  - When code or variables are **not inside a function**, they are considered to be in the **global scope**. This means they are accessible throughout the entire program.
  - Variables and functions defined in the global scope are attached to the **global object**. For example, if you declare a variable `a`, it becomes accessible as `window.a` in browsers.
  - This means that any code running in the global context can access these global variables and functions, and these variables/functions become part of the global object.

- **Behavior in the Browser**:
  - In a browser (e.g., Google Chrome), the global object is the `window` object. This allows you to access global variables and functions using the `window` object or directly (e.g., `window.a` or just `a`).
  - The special variable `this` at the global level refers to the same `window` object, so `this === window` in the global context.
  - If you open a new browser tab, it will have its own separate execution context and a separate global object, though each tab has its own `window` object.
  
- **Outer Environment**:
  - The concept of the **outer environment** comes into play when you are inside a function. At the global level, there is no "outer" environment, so it’s referred to as `null`.
  - This concept will be important later when discussing functions, as they create their own execution contexts with links to their outer environments (the scope from which they were called).
  
- **Key Takeaways**:
  - **Global Execution Context**: When you run JavaScript code, the global execution context is created automatically. This context provides a **global object** (like `window` in browsers) and the special variable `this`.
  - **Global Object and `this`**: In browsers, the global object is `window`, and at the global scope, `this` refers to the same `window` object. This is true even without writing code.
  - **Global Variables/Functions**: Variables and functions declared in the global scope are added to the global object, meaning you can access them as properties of the global object (`window.a`).
  - **Lexical Environment**: Variables and functions are placed in the global execution context unless they are within a function. The global environment has no outer context, which is why it’s referred to as `null`.
