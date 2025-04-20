import axios from "axios";


import { getTodos } from "./getToDo";


const axiosSpy = jest.spyOn(axios, "get");
const errorSpy = jest.spyOn(console, "error");

describe("getTodos", () =>
{
    it.todo("return empty array if error ");

    it("returned 200 items from axios get", async () =>
    {
        const result = await getTodos();

        expect(axiosSpy).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos");
        expect(result).toHaveLength(200);
    })
})