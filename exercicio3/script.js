const num = [9, 8, 7, 6, 5]

const item = ["doce", "bala", "leite", "mingau"]

const list = ["pão", "canela", "sal", "cachaça"]

//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

console.log(num)

const copiaNum = num

copiaNum.push(15)
console.log("Copia", copiaNum)

//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

console.log(item)

const itemCopia = item

itemCopia.pop()
console.log(itemCopia)


//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

console.log(list)

const listCopia = list

listCopia.splice(1,1)
console.log(listCopia)
