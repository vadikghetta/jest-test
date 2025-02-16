

import { multiple, divide, sum } from "./math"
describe("math", () =>
{
    describe("multiply", () =>
    {
        it("should multiply positive number", () =>
        {
            //AAA - arrange,act,assert
            const expectedResult = 6;
            const actualResult = multiple(2, 3);
            expect(actualResult).toBe(expectedResult);

            expect({ a: 1 }).toEqual({ a: 1 })
            expect([1, 2, 3]).toHaveLength(3)
            expect([1, 2, 3]).not.toContain(10)
            expect(undefined).toBeUndefined()
            expect(null).toBeNull()
            expect(actualResult).toBeDefined()
            expect(actualResult).toBeTruthy()
        })
        it("should multiply negative number", () =>
        {
            const res = multiple(-2, 3);
            expect(res).toBe(-6);
        })
    })

    describe("divide", () =>
    {
        it("should  less on two ", () =>
        {
            expect(divide(10, 2)).toBe(5)
        })
    })
    describe("sum", () =>
    {
        it("should  be more on two ", () =>
        {
            expect(sum(2, 2)).toBe(4)
        })
    })
})


