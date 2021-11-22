//alert("Boa tarde!");

//pedir um nome
//var nome = prompt('digite seu nome');
//alet("olá, " + nome);

//var ano_nasc = parseInt(prompt("Digite o ano de nascimento."));
//var idade = 2021 - ano_nasc;
//alert("olá," + nome +" você tem " + idade +" anos");


//exemplo 2
//1- função sem parametro e sem retorno
//2- função sem parametro e com retorno
//3- função com parametro e sem retorno
//4- função com parametro e com retorno


//exemplo tipo 1

//function teste(){
	//console.log("AÉ");
//}

//for (var i = 1; i <= 5; i++) {
	//teste();
//}


//exemplo tipo 2

//function soma(){
	//var total = 10 + 15;
	//return total;
//}

//var recebi = soma();
//console.log ("retornou da função", + recebi)


//exemplo tipo 3
//var num1 = 10;
//var num2 = 20;

//function soma(a,b) {
	//var total_soma = a+b;
	//console.log(total_soma);
//}

//soma(num1, num2);


//exemplo tipo 4

//var num1 = 10;
//var num2 = 20;

//function soma(a,b) {
	//var total_soma = a+b;
	//console.log(total_soma);
//}

//var retorno = soma(num1,num2);
//console.log(retorno);



//exemplo 4 operaçês básicas

var num1 = 10;
var num2 = 20;

function soma(a,b) {
	var total = a+b;
	return total;
}

function subtracao(a,b) {
	var total = a-b;
	return total;
}

function multiplicacao(a,b) {
	var total = a*b;
	return total;
}

function divisao(a,b) {
	var total =a/b;
	return total;
}

function raiz(a) {
	var total =  Math.sqrt(a);
	return total;
}
console.log("A soma é:" + soma(num1,num2));
console.log("A subtracao é:" + subtracao(num1,num2));
console.log("A multiplicacao é:" + multiplicacao(num1,num2));
console.log("A divisao é:" + divisao(num1,num2));
console.log("A raiz quadrada de " + num1 + " é " + raiz(num1));

