const state = {
    1: {
        id: 1,
        title: 'Titulo 1'
    },
    2: {
        id: 2,
        title: 'Titulo 2'
    },
    length: 3,
    [Symbol.isConcatSpreadable]: true
}

console.log(
    [].concat(state)
)