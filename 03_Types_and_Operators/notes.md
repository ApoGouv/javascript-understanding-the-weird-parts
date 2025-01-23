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

