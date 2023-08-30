function bubbleSort(array, asc) {
    const arr = [ ...array ]
    let sorted = false

    // Fase
    while (!sorted) {
        sorted = true

        // Pertukaran
        for (let i = 0; i < arr.length - 1; i++) {
            const cur = arr[i]
            const next = arr[i+1]
            const inOrder =  asc ? cur < next : cur > next

            if (!inOrder) {
                arr[i] = next
                arr[i+1] = cur

                sorted = false
            }
        }
    }

    return arr
}

function insertionSort(array, asc) {
    const arr = [ ...array ]

    // Iterasi array
    for (let i = 1; i < arr.length; i++) {
        const vi = arr[i]

        // Penyisipan
        for (let j = 0; j < i; j++) {
            const vj = arr[j]
            const inOrder = asc ? vj < vi : vj > vi

            if (!inOrder) {
                arr.splice(i, 1)
                arr.splice(j, 0, vi)
                break
            }
        }
    }

    return arr
}

function selectionSort(array, asc) {
    const arr = [ ...array ]
    let lindex = 0

    // Pertukaran
    while (lindex < arr.length) {
        let index = lindex

        // Seleksi
        for (let i = lindex; i < arr.length; i++) {
            const vi = arr[i]
            const vindex = arr[index]
            const inOrder = asc ? vindex < vi : vindex > vi

            if (!inOrder) {
                index = i
            }
        }

        const vindex = arr[index]
        const vlindex = arr[lindex]

        arr[index] = vlindex
        arr[lindex] = vindex

        lindex++
    }

    return arr
}

function linearSearch(arr, x) {
    // Cari satu-satu
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i]
        if (v === x) {
            return i
        }
    }

    return -1
}

function binarySearch(arr, x) {
    let l = 0
    let r = arr.length

    // Belah tengah
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2)
        const v = arr[m]

        if (v === x) {
            return m
        } else if (v < x) {
            l = m+1
        } else {
            r = m-1
        }
    }

    return -1
}

function jumpSearch(arr, x) {
    const jump = Math.floor(Math.sqrt(arr.length))
    let index = 0

    // Lompatan
    for (let i = 0; i < arr.length; i += jump) {
        const v = arr[i]

        if (v === x) {
            return i
        } else if (v < x) {
            index = i
        } else {
            break
        }
    }

    // Cari satu-satu
    for (let j = index; j < Math.min(arr.length, index+jump); j++) {
        const v = arr[j]
        if (v === x) {
            return j
        }
    }

    return -1
}

module.exports = {
    bubbleSort,
    insertionSort,
    selectionSort,
    linearSearch,
    binarySearch,
    jumpSearch
}
