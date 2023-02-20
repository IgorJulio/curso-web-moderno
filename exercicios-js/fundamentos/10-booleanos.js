let isaAtivo = false;
console.log(isaAtivo);

isaAtivo = true;
console.log(isaAtivo);

isaAtivo = 1; // O valor "1" se comporta como verdadeiro se for feito uma negação !! duas vezes 
console.log(!!isaAtivo); // A esclamação "!" significa um negação

/*Mostrando umas citiações que não é true ou false,
 mas no contexto que é requerido true ou false ele vai se comportar como "true"
 */ 
console.log("Os verdadeiros..."); 
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
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
console.log(nome || "Igor");

//próxima aula #46




