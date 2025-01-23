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


## 2.5 The Execution Context - Creation and Hoisting

- **Execution Context Creation**:
  - When JavaScript runs, it creates an **execution context**, a wrapper around the code to manage its execution.
  - This process occurs in two phases: the **creation phase** and the **execution phase**.
  
- **Hoisting Phenomenon**:
  - **Hoisting** refers to a surprising JavaScript behavior where variables and functions seem to be accessible before they are defined.
  - Example: If you call a function `b()` and log a variable `a` before defining them in your code, JavaScript won’t throw an error, even though `b()` is called before its definition.
  - Instead of the expected value (`Hello World`), the variable `a` logs `undefined` because the JavaScript engine sets uninitialized variables to `undefined`.

- **The Role of Hoisting**:
  - Contrary to popular belief, hoisting doesn't physically move code to the top; it prepares memory space for variables and functions during the creation phase.
  - In this phase, JavaScript allocates memory for functions and variables, making them available during the execution phase, even if they are written later in the code.
  - Functions are fully available in memory, but variables only get assigned their values during the execution phase, which is why they are initially set to `undefined`.

- **Explanation of the Creation and Execution Phases**:
  - During the **creation phase**, the JavaScript engine scans your code to identify functions and variables. It allocates memory for them, and functions are fully stored in memory with their definitions.
  - During the **execution phase**, the engine processes each line of code. For variables, it assigns their actual values, which are initially `undefined` if not explicitly assigned earlier.

- **Best Practice**:
  - It’s important not to rely on hoisting because the value of variables may not be what you expect. Variables are initially set to `undefined`, leading to potential issues if you assume they have been assigned values before the execution phase.
  - Always declare and initialize variables before using them to avoid hoisting pitfalls.

- **Key Takeaways**:
  - **Hoisting** makes functions and variables accessible before they are physically defined in the code due to the creation phase, where memory space is allocated.
  - The **execution phase** is when JavaScript actually assigns values to variables, but they are initially set to `undefined`.
  - To avoid confusion, it’s best to declare variables and functions before using them in your code.


## 2.6 Conceptual Aside: JavaScript and 'undefined'

### Key Points
- **Execution Context Creation Phase**:
  - During this phase, JavaScript sets up memory for variables declared with `var`, initializing them to the special value `undefined`.
  - This is different from a variable not being declared at all, which leads to a `ReferenceError`.

### Understanding `undefined`
- `undefined` is:
  - A **special value** in JavaScript.
  - Set by JavaScript during the creation phase for declared variables.
  - Stored in memory and not equivalent to "does not exist."

- **Not Declared**:
  - When a variable is not declared, attempting to access it results in:
    - **`ReferenceError`**: `a is not defined`.
  - No memory is allocated for undeclared variables.

- **Declared but not Assigned**:
  - If a variable is declared (`var a;`) but not assigned a value, it is initialized to `undefined`.
  - Example:
    ```javascript
    var a;
    console.log(a); // undefined
    ```

### Comparing `undefined` and `not defined`
- **`undefined`**:
  - A value set by the JavaScript engine.
  - Indicates that the variable exists but hasn’t been assigned a value.
- **`not defined`**:
  - An error when a variable is not declared, and the engine cannot find it in memory.

### Best Practices
- Avoid explicitly setting a variable to `undefined`:
  - While valid, it’s risky and confusing during debugging.
  - Let `undefined` naturally indicate that a variable hasn’t been set.
  - Example (Avoid):
    ```javascript
    var a = "Hello";
    a = undefined; // Avoid doing this
    ```

### Example Code
1. **Checking for `undefined`**:
    ```javascript
    var a;
    if (a === undefined) {
      console.log("a is undefined");
    } else {
      console.log("a is defined");
    }
    ```

2. **Not Declared**:
    ```javascript
    console.log(b); // ReferenceError: b is not defined
    ```

3. **Declared but not Assigned**:
    ```javascript
    var c;
    console.log(c); // undefined
    ```

### Key Takeaway
- `undefined` is a **special value and keyword** in JavaScript:
  - Assigned to declared variables that haven't been set.
  - It is not the same as a variable being "not defined."
- Let the JavaScript engine manage `undefined` to simplify debugging and avoid confusion.


## 2.7 The Execution Context - Code Execution

In JavaScript, the execution context operates in two main phases: 

1. **Creation Phase**  
   - Variables and functions are set up in memory.
   - Variables are initialized to `undefined`.

2. **Execution Phase**  
   - The JavaScript engine runs your code line by line.
   - Code is interpreted, converted, compiled, and executed so the computer can understand it.

---

### Example Explanation
Consider the following example:
```javascript
function b() {
  console.log('Called the function');
}

console.log(a); // Line 7
var a = 'Hello World!';
console.log(a); // Line 11
```

### Execution Breakdown:

1. Creation Phase:

   - The function `b` is placed in memory.
   - The variable `a` is also set up in memory but initialized to `undefined`.

2. Execution Phase:

   - The code is executed line by line:
     - Line 5: The function `b` is called, and the console outputs: `Called b!`.
     - Line 7: `console.log(a)` logs `undefined` because `a` has been initialized to `undefined` but hasn't yet been assigned a value.
     - Line 9: The variable `a` is assigned the value `'Hello World!'`.
     - Line 11: `console.log(a)` logs `'Hello World!'`.

### Key Takeaways:
- The creation phase sets up the initial memory state.
- The execution phase runs the code sequentially, allowing updates to the memory state.
- Understanding these two phases explains JavaScript behavior like hoisting and the `undefined` value.


## 2.8 Conceptual Aside: Single Threaded, Synchronous Execution

In this section, we explore two important concepts about JavaScript's execution model:

---

### Single Threaded
- **Definition**: JavaScript executes one command at a time.  
  - A program contains multiple commands, but only one is processed at any given moment.
- **Context**: 
  - While JavaScript behaves this way, browsers themselves may handle other operations concurrently (e.g., rendering or networking).
  - From the perspective of the programmer, JavaScript execution is single threaded.

---

### Synchronous Execution
- **Definition**: Code is executed one line at a time, in order, without skipping or performing multiple operations simultaneously.  
  - Each command must complete before the next one begins.

---

### Key Takeaways:
- JavaScript operates in a **single-threaded, synchronous execution model**, meaning it processes one task at a time, in the order it appears in the code.
- **Asynchronous Concepts** (e.g., AJAX, where the "A" stands for asynchronous) will be discussed later. For now, remember that JavaScript itself is synchronous in behavior.  


## 2.9 Function Invocation and the Execution Stack

In this subsection, we delve into how JavaScript handles function invocation and the concept of the **execution stack**, a key idea for understanding advanced JavaScript concepts.

### What is Function Invocation?
- **Big Word Alert: Invocation**  
  It simply means running or calling a function.  
  In JavaScript, functions are invoked by appending parentheses to their name:  
  ```javascript
  myFunction();
  ```

### Execution Context and Function Invocation
1. **Global Execution Context**  
   When JavaScript starts, the global execution context is created. During its creation phase:  
   - The global object (`window` in browsers) and the `this` keyword are set up.  
   - Functions are stored in memory for later use.  

   Example:
   ```javascript
   function b() {}
   function a() { b(); }
   a();
   ```
   - `b` and `a` are stored in memory during the creation phase but are not executed until invoked.

2. **Creating a New Execution Context**  
   - When a function is invoked, a **new execution context** is created.  
   - This context is added to the **execution stack**, which manages the order of function execution.  
   - The stack operates on the **Last In, First Out (LIFO)** principle:
     - The most recently invoked function (at the top of the stack) is executed first.
     - Once it finishes, it is removed (**popped off**) the stack.

### How the Execution Stack Works
- **Example Workflow**:
  ```javascript
  function b() {}
  function a() { b(); }
  a();
  ```
  - **Step 1**: The global execution context is created.
  - **Step 2**: The engine encounters `a()` and creates an execution context for `a`, adding it to the stack.
  - **Step 3**: Inside `a`, `b()` is invoked. An execution context for `b` is created and added to the stack.
  - **Step 4**: Once `b` finishes executing, its context is removed from the stack.
  - **Step 5**: The engine returns to `a`, finishes its execution, and removes `a`'s context.
  - **Step 6**: Finally, the global execution context resumes.

### Important Characteristics
1. **JavaScript is Synchronous**  
   - Code is executed one line at a time, based on the current execution context (the one at the top of the stack).

2. **New Context for Each Invocation**  
   - Every function invocation creates a new execution context, even for recursive calls.

3. **Lexical Order Doesn’t Affect Execution**  
   - The position of a function in the code (its lexical order) doesn’t dictate execution timing; the invocation order does.

### Visualizing the Stack
Imagine the execution stack as a physical stack of plates:  
- **At the Start**: The global context is the only plate.
- **Invoke Function `a`**: Add `a`'s context on top.  
- **Invoke Function `b`**: Add `b`'s context on top.  
- **`b` Finishes**: Remove its plate, revealing `a`.  
- **`a` Finishes**: Remove its plate, leaving the global context.

### Key Points to Remember
- Each function invocation adds a new execution context to the stack.  
- When the function finishes, its context is removed, and the engine resumes the previous context.  
- JavaScript's synchronous, single-threaded nature ensures that only one execution context runs at any given time.  

This understanding is foundational for advanced topics like asynchronous JavaScript, closures, and scope.


## 2.10 Functions, Context, and Variable Environments

This subsection explores **functions**, their **context**, and the concept of **variable environments**, which are fundamental to understanding how JavaScript handles variables and memory.

### What is a Variable Environment?
- **Big Word Alert: Variable Environment**  
  It's simply a way of describing:
  - Where variables live in memory.
  - How they relate to each other.  

### Example Code
```javascript
function b() {
  var myVar;
}
function a() {
  var myVar = 2;
  b();
}
var myVar = 1;
a();
```

### Step-by-Step Execution
1. **Global Execution Context**  
   - `myVar` is added to the global variable environment.
   - Its value is set to `1` when `myVar = 1` is executed.

2. **Function `a` is Invoked**  
   - A new execution context is created for `a`.
   - A separate `myVar` is added to `a`'s variable environment and set to `2` when `myVar = 2` is executed.

3. **Function `b` is Invoked Inside `a`**  
   - Another execution context is created for `b`.
   - A new `myVar` is added to `b`'s variable environment.  
   - Its initial value is `undefined` because it is declared but not assigned a value.

### Scope and Execution Context
- **Scope**: Determines where a variable can be accessed.  
  - Each `myVar` is in its own execution context, making them distinct and independent.  
  - Function calls do not affect variables in other contexts.

### Console Output Walkthrough
```javascript
var myVar = 1;
console.log(myVar); // 1

function a() {
  var myVar = 2;
  console.log(myVar); // 2

  function b() {
    var myVar;
    console.log(myVar); // undefined
  }

  b();
}

a();
console.log(myVar); // 1
```

- **Output Explanation**:
  - `1`: Global `myVar` in the global execution context.
  - `2`: `myVar` inside `a`'s execution context.
  - `undefined`: `myVar` inside `b`'s execution context (declared but uninitialized).
  - `1`: Back to the global execution context after `a` and `b` finish.

### Key Takeaways
1. **Execution Context and Variable Environments**  
   - Every execution context has its own variable environment.  
   - Variables in different contexts do not interfere with one another.

2. **Execution Context Lifecycle**  
   - Created when a function is invoked.  
   - Popped off the execution stack when the function finishes.  

3. **Global Execution Context**  
   - Always remains active.  
   - Its variables persist even after function execution contexts are popped off.

### Encouragement to Experiment
- Run the example code in your browser's developer tools.  
- Observe the behavior of variables in different contexts.  
- Understanding this will set the foundation for more advanced concepts.
