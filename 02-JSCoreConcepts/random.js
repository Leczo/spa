const randomInt = (max, min) => {
    return Math.floor(Math.random() * (max - min+1) + min)
}

const fillArray = (size) => {
    arr = [];
    for (i = 0; i < size; i++) {
        arr.push(randomInt(5, 20))
    }
    return arr
}

array = fillArray(10)
console.log(array)