export function add(param1: number, param2: number): number {
    return param1 + param2;
}
//reducer keeps track of the old state
export function add2(...param1: number[]): number {
    const reducer = (x: any, y: any) => x + y;
    return param1.reduce(reducer, 0);

}
// console.log(add(1, 2));
// console.log(add(3, 2));
console.log(add2(1,2));
console.log(add2(1,2,3,4,5));
console.log(add2(2,3));
console.log(add2(1,1,2,3,5,8,13,21,34));
console.log(add(10,30))