function charWeight (char: string): number {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function getWeight(b: string): Set<number> {
    const weights = new Set<number>();

    let i = 0;
    while (i < b.length){
        let currentChar = b[i];
        let currentWeight = charWeight(currentChar);
        let c = i;

        while (c < b.length && b[c] === currentChar){
            weights.add(currentWeight * (c - i + 1));
            c++;
        }

        i = c;
    }
    return weights;
}

function weightedString (b: string, query: number[]): string[]{
    const weights = getWeight(b);
    return query.map(queries => weights.has(queries) ? "Yes" : "No");
}

//Test Case
const b = "abbcccd";
const query = [1, 3, 9, 8];
console.log(weightedString(b, query));