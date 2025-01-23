# Section 3: Types and Operators

### 3.1 Conceptual Aside: Types and JavaScript

JavaScript handles **types** differently than many other programming languages. Understanding its approach to types is key to avoiding potential pitfalls and leveraging its flexibility.

#### Big Word Alert: Dynamic Typing
In JavaScript, **dynamic typing** means:
- You don’t explicitly declare the type of data a variable will hold.
- The **JavaScript engine determines the type** of the variable while your code is running.
- A single variable can hold **different types of values** at different times during execution.

#### Dynamic Typing in Action
```javascript
var myVar = true;  // myVar is a Boolean
myVar = "Hello";   // Now, myVar is a String
myVar = 42;        // Now, myVar is a Number
```

Each time the value of `myVar` changes, JavaScript dynamically determines and adjusts its type.

#### Static Typing (Comparison)
Languages like **Java** or **C#** use **static typing**, where you must declare a variable’s type in advance.
- Example (in Java):
  ```java
  boolean isTrue = "Hello"; // Error: Type mismatch
  ```

With static typing, attempting to assign a value of a different type to the same variable results in a **compile-time error**.

#### Pros and Cons of Dynamic Typing

| **Advantages**                             | **Disadvantages**                                           |
|--------------------------------------------|-------------------------------------------------------------|
| Flexible and faster to write code.         | Prone to runtime errors if type assumptions are incorrect.  |
| No need to define types explicitly.        | Debugging can become harder due to unexpected type changes. |
| Suits rapid prototyping and small scripts. | May lead to bugs in larger, more complex codebases.         |

#### Key Takeaway
JavaScript’s **dynamically typed nature** makes it powerful and flexible but also introduces challenges. To avoid issues, it’s essential to understand how JavaScript **determines and handles types** during execution.


## 3.2 Primitive Types

In JavaScript, variables can hold different types of data, even though you don't explicitly declare the type when defining them. To understand how dynamic typing works, it's essential to first explore **primitive types**, which represent single values (as opposed to objects, which are collections of key-value pairs).

### What is a Primitive Type? (Big Word Alert)
A **primitive type** is a type of data that represents a single, indivisible value. It is not an object or collection of values.

### The Six Primitive Types in JavaScript:
1. **Undefined**
   - Represents the absence of a value.
   - This is the default value of variables that are declared but not initialized.
   - You should avoid explicitly assigning `undefined` to variables. Instead, let the engine use it as an indicator of uninitialized variables.

2. **Null**
   - Also represents the absence of a value but is used intentionally by developers.
   - Assign `null` to indicate that a variable has no value.

3. **Boolean**
   - Represents a logical value: `true` or `false`.
   - Literal values in JavaScript are written as `true` and `false` (lowercase).

4. **Number**
   - Represents numeric values, including both integers and floating-point numbers.
   - JavaScript has only one numeric type (`number`), which is internally represented as a floating-point value. This can lead to quirks in mathematical operations.

5. **String**
   - Represents a sequence of characters.
   - Strings can be defined using either single quotes (`'`) or double quotes (`"`).

6. **Symbol**
   - Introduced in **ES6 (ECMAScript 2015)**, a `Symbol` is a unique and immutable value often used as a property key for objects.
   - Since it is not widely supported in older browsers, it is excluded from the course's focus for now.

---

### Why Primitive Types Matter
Understanding these six primitive types is crucial for grasping how JavaScript's **dynamic typing** works. Since the type of a variable is determined at runtime, knowing the fundamental types helps avoid and debug potential issues.


## 3.3 Conceptual Aside: Operators

Now that we've discussed **types**, let's explore another concept critical to understanding JavaScript: **operators**. Operators play a significant role in debugging and comprehending JavaScript's dynamic typing behavior.

### What is an Operator? (Big Word Alert)
An **operator** is essentially a special type of function, but with a distinct syntax. Unlike regular functions, operators are written in a way that feels more natural and concise when performing operations. Most operators take two parameters and return a single result.

---

### Example of an Operator: `+` (Addition Operator)
Consider the following example:
```javascript
let a = 3 + 4;
console.log(a); // Outputs: 7
```

- The `+` symbol is the **addition operator**.
- The JavaScript engine interprets this as a function call, similar to this pseudocode:
  ```javascript
  function add(x, y) {
      return x + y;
  }
  ```
  Instead of calling it explicitly like `add(3, 4)`, JavaScript lets you use **infix notation**, where the operator (`+`) sits between the two parameters (`3` and `4`).

---

### Types of Notation for Operators
- **Infix Notation:**
  The operator is placed between its parameters (e.g., `3 + 4`). This is the format JavaScript uses, as it’s more human-readable.

- **Prefix Notation:**
  The operator is placed before its parameters (e.g., `+ 3 4`).

- **Postfix Notation:**
  The operator is placed after its parameters (e.g., `3 4 +`).
  This is used in older calculators and some programming languages.

---

### Other Examples of Operators
1. **Subtraction (`-`)**
   ```javascript
   let b = 5 - 4;
   console.log(b); // Outputs: 1
   ```

2. **Comparison (`>` or `<`)**
   ```javascript
   console.log(4 > 3); // Outputs: true
   console.log(3 < 2); // Outputs: false
   ```
   - Here, `>` and `<` are **comparison operators**. They take two numbers and return a Boolean (`true` or `false`).

3. **Logical (`&&`, `||`)**
   - These evaluate logical conditions and return a Boolean.

4. **Equality (`==`, `===`)**
   - These operators check if two values are equal. The distinction between `==` and `===` will be discussed later.

---

### Operators as Functions
- Every operator in JavaScript is a **function**.
- The syntax for operators (e.g., `+`, `-`, `>`) is shorthand for invoking these special functions.
- Inside these functions, pre-written code handles the operation. For example, the `+` operator performs addition, while the `>` operator compares values.

---

### Why Operators Matter in a Dynamically Typed Language
In JavaScript, where variable types are determined at runtime, operators must handle different types dynamically. This can lead to unexpected results if you’re unaware of how operators behave with mixed types. For now, remember that **operators are just special functions** provided by the JavaScript engine.


## 3.4 Operator Precedence and Associativity

**Big Word Alert: Operator Precedence**
- **Operator Precedence** refers to the order in which operators (functions) are executed when there are multiple operators on the same line of code.
- The **operator with the higher precedence** is executed first.

**Big Word Alert: Associativity**
- **Associativity** determines the order of execution when operators have the **same precedence**.
- Associativity can be:
  - **Left-to-right associativity**: Operators are executed from left to right.
  - **Right-to-left associativity**: Operators are executed from right to left.

---

### Key Examples:

1. **Precedence in Action**
   ```javascript
   var a = 3 + 4 * 5;
   console.log(a); // Output: 23
   ```
   - **Why?**
     - `*` (multiplication) has higher precedence than `+` (addition).
     - The multiplication `4 * 5` is executed first (result: `20`), followed by addition (`3 + 20` → `23`).

2. **Using Parentheses to Alter Precedence**
   ```javascript
   var a = (3 + 4) * 5;
   console.log(a); // Output: 35
   ```
   - **Why?**
     - Parentheses `( )` have the highest precedence.
     - The expression inside `(3 + 4)` is executed first (result: `7`), followed by multiplication (`7 * 5` → `35`).

---

### Associativity in Action:

1. **Assignment Operators (`=`)**
   ```javascript
   var a = 2, b = 3, c = 4;
   a = b = c;
   console.log(a, b, c); // Output: 4, 4, 4
   ```
   - **Why?**
     - `=` has **right-to-left associativity**.
     - `b = c` is executed first (`b` becomes `4`), then `a = b` (`a` becomes `4`).

2. **Operators with Same Precedence**
   ```javascript
   var result = 10 / 2 * 3;
   console.log(result); // Output: 15
   ```
   - **Why?**
     - `/` and `*` have the **same precedence**.
     - With **left-to-right associativity**, `10 / 2` is executed first (result: `5`), then `5 * 3` (result: `15`).

---

### Practical Importance:
1. **Grouping with Parentheses**:
   Parentheses allow us to override precedence and control the execution order explicitly.

2. **Debugging Tip**:
   When unexpected results arise, check the **[operator precedence table][operator-precedence-table]** and **[associativity rules][associativity-rules]**.

[operator-precedence-table]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
[associativity-rules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#precedence_and_associativity


---

### Recap:
- **Precedence** determines which operator is executed first based on priority.
- **Associativity** resolves ties when operators have the same precedence:
  - **Left-to-right** or **right-to-left**.

Understanding these rules helps you avoid bugs and write clearer, more predictable JavaScript code.

