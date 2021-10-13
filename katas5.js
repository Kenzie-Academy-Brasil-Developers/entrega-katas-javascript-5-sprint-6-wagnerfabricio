// implemente aqui as funções de teste

/* ----------------------- KATAS 1 ----------------------- */
const reverseString = (str) => {
    return str.toLowerCase().split("").reverse().join("");
}

const testReverseString1 = () => {
    let result = reverseString("vagner")
    let expected = "rengav"
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testReverseString1()

const testReverseString2 = () => {
    let result = reverseString("ga1opeira")
    let expected = "ariepo1ag"
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}

testReverseString2()


/* ----------------------- KATAS 2 ----------------------- */
const reverseSentence = (str) => {
    return str.toLowerCase().split(" ").reverse().join(" ")
}

const testReverseSentence1 = () => {
    let result = reverseSentence("Eu não gosto de tomar banho")
    let expected = "banho tomar de gosto não eu"
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testReverseSentence1()


const testReverseSentence2 = () => {
    let result = reverseSentence("Um salva para quem está corrigindo aqui!")
    let expected = "aqui! corrigindo está quem para salva um"
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testReverseSentence2();

/* ----------------------- KATAS 3 ---------------------- */
const minimumValue = (array) => {
    const arraySort = array.sort((a, b) => {
        return a - b 
    })
    return arraySort[0]; 
}

minimumValue([2,5,1,3,8,9])

const testMinimumValue1 = () => {
    let result = minimumValue([2,5,1,3,8,9])
    let expected = 1
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testMinimumValue1()

const testMinimumValue2 = () => {
    let result = minimumValue([1.59, -3, 18, -4.5])
    let expected = -4.5
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testMinimumValue2()

/* ----------------------- KATAS4 ----------------------- */
const maximumValue = (array) => {
    const arrayReverseSort = array.sort((a, b) => {
        return b - a
    })
    return arrayReverseSort[0]
}

const testMaximumValue1 = () => {
    let result = maximumValue([1.59, -3, 18, -4.5])
    let expected = 18
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testMaximumValue1()

const testMaximumValue2 = () => {
    let result = maximumValue([2,5,1,3,8,9])
    let expected = 9
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testMaximumValue2()

/* ----------------------- KATAS 5 ---------------------- */
const calculateRemainder = (a, b) => {
    return a % b
}

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(7,5)
    let expected = 2
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testCalculateRemainder1()

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(27,5)
    let expected = 2
    console.assert(result === expected, {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testCalculateRemainder2()

/* ----------------------- KATAS 6 ----------------------- */
const distinctValues = (array) => {
    const result = [];
    array.forEach(value => {
        if (!result.includes(value)) {
            result.push(value)
        }
    })
    return result
}

const testDistinctValues1 = () => {
    let result = distinctValues([1,5,3,1,2,9,5,7])
    let expected = [1,5,3,2,9,7]
    console.assert(result.toString() === expected.toString(), {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testDistinctValues1()

const testDistinctValues2 = () => {
    let result = distinctValues([1,3,7,8.2,1,5,7,8.2])
    let expected = [1,3,7,8.2,5]
    console.assert(result.toString() === expected.toString(), {
        "funcao": "reverseString",
        "esperado": expected,
        "obteve": result
    })
}
testDistinctValues2()

