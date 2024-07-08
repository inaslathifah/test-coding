function isBalanced(a: string): string {
    const stack: string[] = [];
    const matchingBrackets: { [b: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of a) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return "NO";
            }
        }
    }

    return stack.length === 0 ? "YES" : "NO";
}

const a3 = "{ [ ( ) ] }";
console.log(isBalanced(a3)); 

const b3 = "{ [ ( ] ) }";
console.log(isBalanced(b3)); 

const c3 = "{ ( ( [ ] ) [ ] ) [ ] }";
console.log(isBalanced(c3)); 
