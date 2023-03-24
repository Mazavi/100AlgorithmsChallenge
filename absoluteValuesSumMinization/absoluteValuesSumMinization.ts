export function absoluteValuesSumMinimization(a: number[]): number {
    const median = a[Math.ceil((a.length / 2) - 1)];
    return median;
}

 console.log(absoluteValuesSumMinimization([2, 4, 7]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));