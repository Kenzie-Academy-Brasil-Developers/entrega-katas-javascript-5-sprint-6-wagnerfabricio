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

