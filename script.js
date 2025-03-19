let arr = [20, 30, 40, 50, 100]

// First element of array:
console.log(arr[1])

console.log(arr[arr.length - 1])

let newArr = arr.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
})

console.log(newArr)