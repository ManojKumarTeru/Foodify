import {Sum} from "../Utils/Sum"

test("Testing sum",()=>{
    const result=Sum(3,4);
    
    expect(result).toBe(7);
})