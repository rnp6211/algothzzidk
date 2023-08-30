const {
    Stack,
    Queue,
    bubbleSort,
    insertionSort,
    selectionSort,
    linearSearch,
    binarySearch,
    jumpSearch
} = require(".")

console.log("Test Stack")
const stack = new Stack()

stack.push(2)
stack.pop()
stack.push(7)
stack.push(11)
stack.push(18)
stack.push(8)
stack.pop()
stack.push(36)
stack.push(21)
stack.push(20)
stack.push(14)
stack.pop()
stack.push(29)
stack.push(25)
stack.push(5)
stack.push(9)

console.log(stack.arr)
console.log(stack.peek())

console.log("Test Queue")
const queue = new Queue()

while (stack.peek() !== undefined) {
    const v = stack.pop()
    queue.enqueue(v)
}

queue.dequeue()
queue.dequeue()

console.log(queue.arr)
console.log(queue.peek())

console.log("Array")
const arr = queue.arr
console.log(arr)

console.log("Test Bubble Sort Ascending")
console.log(bubbleSort(arr, true))

console.log("Test Bubble Sort Descending")
console.log(bubbleSort(arr, false))

console.log("Test Insertion Sort Ascending")
console.log(insertionSort(arr, true))

console.log("Test Insertion Sort Descending")
console.log(insertionSort(arr, false))

console.log("Test Selection Sort Ascending")
console.log(selectionSort(arr, true))

console.log("Test Selection Sort Descending")
console.log(selectionSort(arr, false))

console.log("Sorted Array")
const sortedArr = arr.sort((a, b) => a-b)
console.log(sortedArr)

console.log("Test Linear Search, Find 29")
console.log(linearSearch(sortedArr, 29))

console.log("Test Linear Search, Find 18")
console.log(linearSearch(sortedArr, 18))

console.log("Test Binary Search, Find 29")
console.log(binarySearch(sortedArr, 29))

console.log("Test Binary Search, Find 18")
console.log(binarySearch(sortedArr, 18))

console.log("Test Jump Search, Find 29")
console.log(jumpSearch(sortedArr, 29))

console.log("Test Jump Search, Find 18")
console.log(jumpSearch(sortedArr, 18))
