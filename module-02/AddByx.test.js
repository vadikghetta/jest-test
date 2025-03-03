describe.only.each([{ input: 1, val: 5 }])("addByx", ({ input, val }) =>
{
    it.todo("shold return function")
    it("shold retun 5", () =>
    {
        expect(4 + input).toBe(val)
    })
})