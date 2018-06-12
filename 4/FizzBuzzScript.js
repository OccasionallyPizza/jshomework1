function modulation(number1,number2){
	if (number1 % number2 == 0){
		return 1;
	}else{
		return 0;
	}
}

for (let i=1;i<101;i++){
	if(modulation(i,3)==1 && modulation(i,5)==1){
		console.log("FizzBuzz");
	}else if(modulation(i,3)==1){
		console.log("Fizz");
	}else if(modulation(i,5)==1){
		console.log("Buzz");
	}else{
		console.log(i);
	}
}
