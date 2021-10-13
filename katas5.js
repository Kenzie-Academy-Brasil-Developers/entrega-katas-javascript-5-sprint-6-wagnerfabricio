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
