function highestPalindromes (a: string, b: number): string {
    const n = a.length;
    let chars = a.split('');
    let changeNeeded = new Array(n).fill(false);
    let left = 0;
    let right = n - 1;

    while (left < right) {
        if (chars[left] !== chars[right]) {
            if (chars[left] > chars[right]) {
                chars[right] = chars[left];
            } else {
                chars[left] = chars[right];
            }
            changeNeeded[left] = changeNeeded[right] = true;
            b--;
        }
        left++;
        right--;
    }

    if (b < 0) return '-1';

    left = 0;
    right = n - 1;

    while (left <= right) {
        if (left === right && b > 0) {
            chars[left] = '9';
        }
        if (chars[left] < '9') {
            if (changeNeeded[left] && b >= 1) {
                chars[left] = chars[right] = '9';
                b--;
            } else if (!changeNeeded[left] && b >= 2) {
                chars[left] = chars[right] = '9';
                b -= 2;
            }
        }
        left++;
        right--;
    }

    return chars.join('');
}

const a1 = "3943";
const b1 = 1;
console.log(highestPalindromes(a1, b1));

const a2 = "932239";
const b2 = 2;
console.log(highestPalindromes(a2, b2));