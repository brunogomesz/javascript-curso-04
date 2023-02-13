const livros = [
    {
      titulo: "JavaScript",
      preco: 25
    },
    {
      titulo: "PHP",
      preco: 15
    }, 
    {
      titulo: "Java",
      preco: 30
    }, 
    {
      titulo: "Elixir",
      preco: 50
    }, 
    {
      titulo: "Go",
      preco: 45
    }, 
    {
      titulo: "Python",
      preco: 20
    }
];
  
let menor = 0;

for (let atual = 0; atual < livros.length; atual++) {
    menor = atual;
    for (let j = atual + 1; j < livros.length; j++) {
        if (livros[j].preco < livros[menor].preco) {
            menor = j;
        }
    }

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;


} 

// for (let atual = 0; atual < livros.length; atual++) {
//     let menor = menorValor(livros, atual)

//     let livroAtual = livros[atual];
//     let livroMenorPreco = livros[menor];
//     livros[atual] = livroMenorPreco;
//     livros[menor] = livroAtual;
// } 
  

console.log(livros);


// const numeros = [5, 12, 2, 0, 12, 1, 3, 8, 5];

// let menor = 0;
// let numAutal = 0;

// for (let i = 0; i < numeros.length; i++) {
//     menor = i;
//     for (let j = i + 1; j < numeros.length; j++) {
//         if (numeros[j] < numeros[menor]) {
//             menor = j;
//         }    
//     }
//     numAutal = numeros[i];
//     numeros[i] = numeros[menor];
//     numeros[menor] = numAutal;
    
// }

// console.log(numeros);





