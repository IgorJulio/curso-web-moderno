function calculadora (primeiroNumero, operacao, segundoNumero) {

   if(operacao == "+"){
    return primeiroNumero + segundoNumero
   }
   if(operacao == "-"){
    return primeiroNumero - segundoNumero
   }
   if(operacao == "*"){
    return primeiroNumero * segundoNumero
   }
   if(operacao == "/"){
    return primeiroNumero / segundoNumero
   }
      
  }




















  //a função calculadora já foi criaca agora basta eu chamar a função e passar os valores (paramentros)
  let resultado = calculadora (10, "/" , 5)
  console.log("O resultado da operação é: ", resultado)





// let a = 2;
// let b = 2;
// let c = a + b;
// let d = a - b;
// let e = a * b;
// let f = a / b;
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// let d = 2;
// let e = 2;
// let f = 2 / 2;
// console.log(f);

// let g = 2;
// let h = 2;
// let i = 2 * 2;
// console.log(i);

// let j = 2;
// let k = 2;
// let l = 2 - 2;
// console.log(l);