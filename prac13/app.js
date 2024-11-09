function Suma(a,b){
	return a+b;
}

function Resta(a,b){
	return a-b;
}
function Multiplicacion(a,b){
	return a*b;
}
function Division(a,b){
	if(b === 0){
		return "Error, no se puede dividir por cero";
	}
	return a/b;
}
function calculadora(operacion){
	const  num1=parseInt(document.getElementById('num1').value);
	const num2=parseInt(document.getElementById('num2').value);
	let result;

	if (isNaN(num1) || isNaN(num2)){
		result = "Error, los valores ingresados no son números";
	}else{
		if (operacion === 'Suma'){
			result=Suma(num1,num2);
	}else{
		if (operacion === 'Resta'){
			result=Resta(num1,num2);
		}else{
			if (operacion === 'Multiplicación'){
				result=Multiplicacion(num1,num2);
			}else{
				if (operacion === 'División'){
					result=Division(num1,num2);
				}else{
					result = "Error, operación no válida";
				}
			}
		}

	}
	}
	document.getElementById("result").innerHTML=`<strong>RESULTADO:</strong><br> ${operacion}: ${result}`;
}
