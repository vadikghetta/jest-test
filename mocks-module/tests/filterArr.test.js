import { basketWithNoQuantity, filteredBasketWithQuantityOnly } from "../mocks/basket.mock.js";
import { filterArr } from "../first_lesson.js";

describe("filterArray", () =>
{
    const cb = jest.fn();
    const logSpy = jest.spyOn(console, "log");

    afterEach(() =>
    {
        jest.clearAllMocks();
    })
    it("не следует вызывать обратный вызов, если массив пуст", () =>
    {
        expect(cb).not.toHaveBeenCalled();
        expect(logSpy).not.toHaveBeenCalled()
    });
    it("должен вызывать предоставленную функцию столько раз, сколько равна длина массива", () =>
    {
        const arr = [1, 2, 3];
        filterArr(arr, cb)
        expect(cb).toHaveBeenCalledTimes(arr.length);
    });
    it("should filter an array using provided predicate", () =>
    {
        const hasQuantity = order => order.qty > 0;
        const result = filterArr(basketWithNoQuantity, hasQuantity);
        expect(result).toEqual(filteredBasketWithQuantityOnly);
        expect(logSpy).toHaveBeenCalledTimes(basketWithNoQuantity.length)

    });
});
//to do   для тестов которые собираешься сделать но пока не сделал
// describe('filterArray', () =>
// {
//     it("не следует вызывать обратный вызов, если массив пуст", () =>
//     {
//         const cb = jest.fn();
//         expect(cb).not.toHaveBeenCalled();
//     });
//     it.todo('should invoke provided function as many time as the length of an array');
//     it.todo('should filter an array using provided predicate');
// });