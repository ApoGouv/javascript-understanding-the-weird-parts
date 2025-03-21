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


## 3.5 Operator Precedence and Associativity Table

[Javascript Operator Precedence](/pdf/Operator-Precedence-In-Javascript.pdf)


## 3.6 Conceptual Aside: Coercion

Coercion refers to converting a value from one type to another. It is a crucial concept in JavaScript because the language is dynamically typed and attempts to "guess" what the programmer intends when mixing types.

### Key Points:
- Coercion is the **conversion** of a value from one type to another (e.g., number → string or string → number).
- JavaScript handles coercion automatically in many cases, often without explicit instructions from the programmer.

---

### Examples of Coercion:
1. **Using the `+` operator:**
   - When both operands are **numbers**, `+` performs **addition**:
     ```javascript
     var a = 1 + 2; // 3
     ```
   - When both operands are **strings**, `+` performs **concatenation**:
     ```javascript
     var b = "Hello" + " " + "World"; // "Hello World"
     ```
   - When one operand is a **number** and the other is a **string**, **coercion occurs**:
     ```javascript
     var c = 1 + "2"; // "12"
     ```
     - Here, the number `1` is coerced into a string and then concatenated with `"2"`.

---

### How Coercion Works:
- The JavaScript engine makes a **best guess** about the intended operation.
- If the operands are of mixed types, JavaScript may coerce one operand to match the other.
  - Example:
    ```javascript
    var a = 1;    // Number
    var b = "2";  // String
    var result = a + b; // "12" (coercion of `a` to string)
    ```

---

### Why Coercion Matters:
- Coercion can lead to **unexpected results**, especially when variables are reassigned or used in different contexts:
  ```javascript
  var a = 1;        // Number
  var b = "2";      // String
  var result = a + b; // "12"

  // Imagine b being reassigned elsewhere:
  b = 2;            // Now a number
  var newResult = a + b; // 3
  ```
  - Without understanding coercion, debugging such scenarios can become challenging.

---

### Important Takeaways:
- **Operators are functions**: They perform operations and can invoke coercion as part of their process.
- Coercion is fundamental to JavaScript because it allows flexibility but demands caution to avoid bugs.
- Understanding how coercion works enables better debugging and coding practices.


## 3.7 Comparison Operators

- **Purpose**: Learn about comparison operators in JavaScript and understand how operator precedence, associativity, and coercion impact their behavior.

### Key Points:
1. **Basic Comparisons**:
   - `1 < 2 < 3` evaluates to `true`.
   - `3 < 2 < 1` also evaluates to `true` due to the way JavaScript processes these operations.

2. **Operator Precedence and Associativity**:
   - Comparison operators have **left-to-right associativity**.
   - Example: `3 < 2 < 1`:
     - First, `3 < 2` evaluates to `false`.
     - Then, `false < 1`: JavaScript coerces `false` into `0`.
     - Thus, `0 < 1` is `true`.

3. **Coercion**:
   - JavaScript coerces types when operators receive unexpected types.
   - Example:
     - `Number(false)` returns `0`.
     - `Number(true)` returns `1`.
   - Undefined values (`undefined`) cannot be coerced into a number and result in `NaN`.
   - Null values (`null`) are coerced to `0` in numeric contexts but behave differently in comparisons.

4. **Equality Operators**:
   - **Double Equals (`==`)**:
     - Performs type coercion before checking equality.
     - Examples:
       - `false == 0` → `true`
       - `null == 0` → `false`
       - `"" == 0` → `true`
   - **Triple Equals (`===`)**:
     - Compares both value and type without coercion.
     - Examples:
       - `3 === "3"` → `false`
       - `3 === 3` → `true`

5. **Inequality Operators**:
   - `!=` coerces types before comparing.
   - `!==` ensures both value and type are checked without coercion.

6. **Recommendation**:
   - Always use `===` and `!==` unless you explicitly need coercion.
   - Using `==` and `!=` can lead to unexpected behavior due to implicit coercion.

### Example of Potential Bugs:
- Variables with different types may appear equal due to coercion:
  ```javascript
  var a = 0; // Number
  var b = false; // Boolean

  if (a == b) {
      console.log("They are equal"); // Output: They are equal
  }

  if (a === b) {
      console.log("They are equal"); // No output, because types differ
  }
  ```

7. **Reference for Comparison Rules**:
   - Mozilla Developer Network (MDN): *[Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)*.
   - Provides detailed rules for how values are compared.

8. **Advanced Option**:
   - **`Object.is`**:
     - Provides even stricter equality checks than `===`.
     - Example: Differentiates between `+0` and `-0`.
     - Example: `Object.is(+0, -0)` → `false`.

### Summary:
- Understanding coercion, precedence, and associativity is crucial for writing predictable JavaScript code.
- **Best Practice**: Use `===` and `!==` as default for comparisons to avoid unexpected coercion.


## 3.8 Equality Comparisons Table

[Javascript – Equality Comparison and Sameness](/pdf/Equalty-Comparison-And-Sameness.pdf)


## 3.9 Existence and Booleans

### Key Points:

1. **Dynamic Typing and Coercion**:
   - JavaScript's ability to coerce types can be used to check for variable existence.

2. **Converting to Boolean**:
   - Using the `Boolean()` built-in function:
     - `Boolean(undefined)` → `false`.
     - `Boolean(null)` → `false`.
     - `Boolean("")` → `false`.
     - `Boolean(0)` → `false`.

3. **Coercion and `if` Statements**:
   - Variables inside `if` statements are coerced to Booleans:
     ```javascript
     var a;
     if (a) {
         console.log("Something is there.");
     }
     // Output: (no output since `a` is `undefined`)
     ```
   - Values considered "falsy":
     - `undefined`, `null`, `""` (empty string), `0`.
   - If a variable has a value other than these, the condition will pass.

4. **Potential Issue with `0`**:
   - `0` is a valid value but is coerced to `false` in an `if` statement.
   - Solution: Use strict equality (`===`) to explicitly check for `0`:
     ```javascript
     if (a || a === 0) {
         console.log("Something is there.");
     }
     ```

5. **Operator Precedence and Associativity**:
   - `a || a === 0` is evaluated as:
     - First, `a === 0` is checked (due to higher precedence).
     - Then, the result of the equality check is combined with `a` in the `||` expression.

6. **Logical `OR` (`||`) Behavior**:
   - `||` returns `true` if **either** operand is `true`.
   - Example:
     ```javascript
     var a = 0;
     if (a || a === 0) {
         console.log("Something is there."); // Output: Something is there.
     }
     ```

7. **Practical Use Cases**:
   - Check if a variable has a meaningful value (`not undefined, null, or empty string`).
   - This pattern is widely used in JavaScript frameworks and libraries for robust code.

8. **Debugging Tip**:
   - If an `if` statement seems to behave incorrectly, check if the variable being evaluated is `0`.

### Summary:
- Coercion allows for concise existence checks, but it’s essential to understand the caveats (e.g., `0` being falsy).
- **Best Practice**: Use strict equality checks when `0` is a valid value to avoid unexpected behavior.
- **Advantage**: Understanding how coercion works enhances debugging and allows for more effective use of advanced JavaScript concepts.


## Section 3.10: Default Values

### Setting Default Values in Functions
- When a parameter is not passed to a function, JavaScript sets its value to `undefined`.
  ```javascript
  function greet(name) {
      console.log('Hello ' + name);
  }
  greet(); // Output: Hello undefined
  ```

- The issue: If `undefined` is concatenated with a string, JavaScript coerces it to the string `"undefined"`, leading to undesired output.

---

### Traditional Method for Default Values
To handle missing parameters, a common pattern in JavaScript uses the logical **OR (`||`)** operator:
```javascript
function greet(name) {
    name = name || 'Your name here';
    console.log('Hello ' + name);
}
greet('Tony'); // Output: Hello Tony
greet();       // Output: Hello Your name here
```

---

### How the OR (`||`) Operator Works
- The OR operator returns the **first truthy value** it encounters:
  - A **truthy value** coerces to `true` in a Boolean context.
  - A **falsy value** coerces to `false`.

**Falsy Values in JavaScript**:
- `undefined`
- `null`
- `false`
- `0`
- `''` (empty string)
- `NaN`

**Truthy Values**: All other values.

Examples:
```javascript
console.log(undefined || 'Hello'); // 'Hello'
console.log('Hi' || 'Hello');      // 'Hi'
console.log(0 || 1);               // 1
console.log('' || 'Fallback');     // 'Fallback'
```

---

### Operator Precedence
- The **OR (`||`)** operator has **higher precedence** than the **assignment operator (`=`)**.
- Therefore, `name = name || 'Default'` works as expected:
  - First, `name || 'Default'` is evaluated.
  - Then, the result is assigned to `name`.

---

### Caveat: Zero (`0`) as a Falsy Value
- Passing `0` as a parameter causes the OR operator to treat it as falsy and assign the default value.
  ```javascript
  greet(0); // Output: Hello Your name here
  ```
- If `0` is a valid value, consider refining the logic, such as checking explicitly for `undefined`.

---

### Modern Alternative (ES6+)
- In ES6 and later, you can set default values directly in the function declaration:
  ```javascript
  function greet(name = 'Your name here') {
      console.log('Hello ' + name);
  }
  greet('Tony'); // Output: Hello Tony
  greet();       // Output: Hello Your name here
  greet(0);      // Output: Hello 0
  ```

---

### Why Use This Pattern?
- Reduces boilerplate compared to traditional `if` statements for default values.
- Makes code concise and readable.

---

### Summary
- JavaScript provides multiple ways to handle default parameter values.
- The OR (`||`) operator is a powerful pattern for setting defaults but requires care with `0` and other falsy values.
- Modern JavaScript offers a more intuitive and safer syntax with ES6 default parameters.


## 3.11 Framework Aside: Default Values

### Frameworks and Libraries
- **Frameworks and Libraries**: Collections of reusable JavaScript code designed to perform specific tasks.
  - Frameworks: Often impose structure on how you build your application (e.g., AngularJS).
  - Libraries: Provide reusable tools without enforcing specific structure (e.g., jQuery).

For simplicity, we'll treat frameworks and libraries as the same in this context.

---

### The Problem: Global Namespace Collisions
- JavaScript files loaded via `<script>` tags are not isolated from one another.
  - They are treated as part of a single global execution context.
  - Variables declared in one file can overwrite those in another if they share the same name.

Example:
```javascript
// lib1.js
var libraryName = 'Lib 1';

// lib2.js
var libraryName = 'Lib 2';

// app.js
console.log(libraryName); // Output: Lib 2
```

---

### Understanding What Happened
1. **Script Order**:
   - `lib1.js` is loaded first and declares `libraryName` as `'Lib 1'`.
   - `lib2.js` overwrites `libraryName` with `'Lib 2'`.
   - `console.log(libraryName)` logs the final value from `lib2.js`.

2. **Global Variables and the Window Object**:
   - In browsers, global variables are properties of the `window` object.
   - Declaring `var libraryName` in either script creates `window.libraryName`, leading to overwriting.

---

### Solution: Checking for Existing Values
To avoid overwriting existing global variables, libraries often check if a variable is already defined before assigning it:
```javascript
// lib2.js
window.libraryName = window.libraryName || 'Lib 2';
```

Explanation:
- `window.libraryName || 'Lib 2'` ensures:
  - If `window.libraryName` is already defined (truthy), its value is preserved.
  - Otherwise, it assigns `'Lib 2'` as the default value.

---

### Example with Default Value Check
```javascript
// lib1.js
window.libraryName = 'Lib 1';

// lib2.js
window.libraryName = window.libraryName || 'Lib 2';

// app.js
console.log(window.libraryName); // Output: Lib 1
```

Steps:
1. `lib1.js` sets `window.libraryName` to `'Lib 1'`.
2. `lib2.js` checks if `window.libraryName` exists before assigning `'Lib 2'`.
3. `window.libraryName` retains its value from `lib1.js`.

---

### Why This Matters
- Many frameworks and libraries include similar checks to prevent global namespace collisions.
- This pattern makes it easier to debug issues caused by variable conflicts and ensures compatibility between multiple libraries.

---

### Key Takeaways
- JavaScript `<script>` tags share the same global execution context, potentially leading to variable overwriting.
- Using `||` to check for existing values is a simple, effective way to avoid global namespace collisions.
- Popular frameworks and libraries often implement this pattern to ensure their code integrates seamlessly with others.

