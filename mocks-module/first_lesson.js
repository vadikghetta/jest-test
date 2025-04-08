export function filterArr(arr = [], callback)
{
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) newArr.push(arr[i])
    }
    return newArr;
}