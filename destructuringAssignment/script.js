/*
  01

  - Adicione apenas uma linha de código dentro da função "getCatInfo" para fazer  
    com que as informações do gato estejam disponíveis fora da função;
  - Abaixo da função "getCatInfo", exiba no console a seguinte mensagem:

  "NOME_DO_GATO é um gato COR_DO_GATO de IDADE_DO_GATO anos."
*/

const getCatInfo = () => {
     const name = 'Marcos'
     let age = 3
     const color = 'Cinza'

     // return { name: name, age: age, color: color }
     return { name, age, color } // Forma abreviada:
}
console.log(`${getCatInfo().name} é um gato ${getCatInfo().color} de ${getCatInfo().age} anos.`)

// Destructuring Assignment
const { name, age, color } = getCatInfo()
console.log(`${name} é um gato ${color} de ${age} anos.`)