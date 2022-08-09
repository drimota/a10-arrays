const array = [90, -4, 28, 45, -92]
const array1 = ["queijo", "chocolate", "morango", "quesadilla"]
const array2 = [85, "oxente", false]

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

 console.log(array.length)
 console.log(array1.length)
 console.log(array2.length)

 //- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

 console.log(array[0])
 console.log(array1[1])
 console.log(array2[2])

 //- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(array.includes(90))
console.log(array2.includes("oxe"))
