import { len, toLower, toUpper } from "./strings";


describe("strings", () =>
{
    describe("len", () =>
    {
        it("should return lenght of string", () =>
        {
            const expected = 5;
            const result = len("Hello");

            expect(result).toBe(expected);
        })
    })
    describe("toLower", () =>
    {
        it("shold be all small string", () =>
        {
            const expected = "hello";

            const result = toLower("Hello");

            expect(result).toBe(expected)
        })
    })
    describe("toUpper", () =>
    {
        it("shold be all upper string", () =>
        {
            const expected = "HELLO";

            const result = toUpper("Hello");

            expect(result).toBe(expected)
        })
    })
})