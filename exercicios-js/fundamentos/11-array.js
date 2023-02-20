const valores = [7.7, 8.9, 6.3, 9.2]; // array é um tipo de dados dinãmico. Um par de [] representa um array. 
console.log(valores);                 // é uma forma de agrupar multiplos valores de uma forma linear ( um elemento atrás do outro)
console.log(valores[0], valores[3]);  // em uma só estrutura apartir um unico identificador 
console.log(valores[4]);

valores[4] = 10; // uma forma de adicionar um elemento no array
console.log(valores);
console.log(valores.length); // a função length mostra a quatidade de elementos tem no array

valores.push({id: 3}, false, null, 'teste')  // a função push é uma forma de adicionar novos elementos no array
console.log(valores);

console.log(valores.pop()); //a função "pop" retira (saca, bota fora) o valor do ultimo elemento do array
delete valores [1]; // a função "delete" deleta um elemento de dentro do array
console.log(valores);

console.log(typeof valores);
