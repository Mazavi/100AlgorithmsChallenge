function addTwoDigits(n: any): number {
    return n % 10 + Math.floor(n /10);

}

console.log(addTwoDigits(29));
console.log(addTwoDigits(45));
console.log(addTwoDigits(98));
console.log(addTwoDigits(78));

