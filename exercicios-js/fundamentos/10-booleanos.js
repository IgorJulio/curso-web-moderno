let isaAtivo = false;
console.log(isaAtivo);

isaAtivo = true;
console.log(isaAtivo);

isaAtivo = 1;
console.log(!!isaAtivo); //

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!'');
console.log(!!"Texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isaAtivo = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!(isaAtivo = false));

console.log("Pra finalizar...");
console.log(!!('' || null || 0 || ''));

let nome = "";
console.log(nome || "Desconhecido");

//próxima aula #46




