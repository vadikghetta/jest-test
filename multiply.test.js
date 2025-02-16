import { multiple } from "./multiply";
test("multiply", () =>
{
    const res = multiple(2, 3);
    expect(res).toBe(6);
})