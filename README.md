# Balanced Brackets

**Description**
This function checks whether a string containing various types of brackets (parentheses (), square brackets [], and curly braces {}) is balanced. A string is considered balanced if every opening bracket has a corresponding closing bracket of the same type, and the brackets are properly nested

**Function**
```
function isBalanced(s: string): string
```

**Parameters**
s: A string containing the brackets to be checked

**Returns**
Returns "YES" if the string is balanced
Returns "NO" if the string is not balanced

**Example Usage**
```
const a3 = "{ [ ( ) ] }";
console.log(isBalanced(a3)); //output: "YES"

const b3 = "{ [ ( ] ) }";
console.log(isBalanced(b3)); //output: "NO"

const c3 = "{ ( ( [ ] ) [ ] ) [ ] }";
console.log(isBalanced(c3)); //output: "YES"
```

**Complexity Analysis**
  **- Time Complexity**
        The time complexity of the _isBalanced_ function is O(n), where n is the length of the string. This is because we iterate over each character in the string once, performing   constant-time operations (push and pop) for each character

  **- Space Complexity**
        The space complexity of the _isBalanced_ function is O(n) in the worst case. This occurs when all characters in the string are opening brackets, which will all be stored in the stack. The additional space used by the map for matching brackets is constant, O(1)
