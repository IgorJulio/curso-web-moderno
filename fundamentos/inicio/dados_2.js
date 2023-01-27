let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(preco * 0.6); // Primeiro exemplo
console.log(preco * (1 - desconto)); // Segundo exemplo
console.log(precoComDesconto); // Terceiro exemplo

let nome = "Caderno"; // String (texto) - sequência de símbolos
let categoria = "Papelaria";

console.log("Produto: " + nome // Sempre que tem texto no meio usasse o silnal de + para concatenar
+ ", Categoria: " + categoria 
+ ", Preço: " + preco          
+ ", Desconto: " + desconto
);

console.log(1 + 1); // Exemplo de soma
console.log("1" + 1); // Exemplo de concatecação 