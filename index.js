//1 - Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.
function numeroPrimo(number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
const primos = [];

for (let i = 1; i <= 1000; i++) {
if (numeroPrimo(i)) {
primos.push(i);
}
}
   //exemplo
  //numeroPrimo(12) //false
 //numeroPrimo(5)  //true
//primos          // lista os números primos de 1 até 1000

//2 - Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.
function senhaValida(p){
    var retorno = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/; 
    var numeros = /[0-9]/;
    if(p.length < 8){
    return retorno;
    }
    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    for(var i=0; i<p.length; i++){
    if(letrasMaiusculas.test(p[i]))
    auxMaiuscula++;
    else if(letrasMinusculas.test(p[i]))
    auxMinuscula++;
    else if(numeros.test(p[i]))
    auxNumero++;
    }
    if (auxMaiuscula > 0){
    if (auxMinuscula > 0){
    if (auxNumero > 0){
    retorno = true;
    }
    }
    }
    return retorno;
}
    //exemplo
   //senhaValida("Teste1234")  //true
  //senhaValida("teste12")    //false
 //senhaValida("Teste12")    //false
//senhaValida("Testesenha") //false

//3 - Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
  for (let i = 1; i <= 10; i++) {
    const fatorial = calcularFatorial(i);
    console.log(`O fatorial de ${i} é ${fatorial}`);
  }
  //A saída do código será:
  //O fatorial de 1 é 1
  //O fatorial de 2 é 2
  //O fatorial de 3 é 6
  //O fatorial de 4 é 24
  //O fatorial de 5 é 120
  //O fatorial de 6 é 720
  //O fatorial de 7 é 5040
  //O fatorial de 8 é 40320
  //O fatorial de 9 é 362880
  //O fatorial de 10 é 3628800
  
  //exemplo
  //calcularFatorial(11) //39916800

  //4 - Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.
  function quadradoPerfeito(numero) {
    const raizQuadrada = Math.sqrt(numero);
    return raizQuadrada === Math.floor(raizQuadrada);
  }
   //exemplo
  //quadradoPerfeito(25) //true
 //quadradoPerfeito(3)  //false