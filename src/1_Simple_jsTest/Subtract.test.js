import Subtract from "./Subtract"

test("Test case one",()=>{
    let a=20;
    let b=10;
    let result=a-b;
    expect(Subtract(a,b)).toBe(result);
})