//sayHello();
//nction sayHello(){
//lert("hello");
//}

//sayGoodbye();
//const sayGoodbye = function(){
//	alert("goodbye");
//}

function min1(a,b){
	if(a>b){
		return b;
	}else if(a<b){
		return a;
	}else{
		return "numbers are the same :/";
	}
}

//console.log(min1(1,-10));

const min2=function(c,d){
	if(c>d){
		return d;
	}else if(c<d){
		return c;
	}else{
		return "numbers are the same :/";
	}
}

//console.log(min2(1,-10));

let min3 = (e,f) =>{
	if(e>f){
		return f;
	}else if(e<f){
		return e;
	}else{
		return "numbers are the same :/";
	}
}

//console.log(min3(1,-1));

function chicken(){
	return egg();
}

function egg(){
	return chicken();
}

//console.log(chicken() + " came first.");

const isPrime = number =>{
	let count= 0;
	for (let i=1;i<=number;i++){
		if(number%i===0) {
			count++;
		}
	}
	if(count ==2){return true;}
	else{return false;};
}
//	for(let i =2;i<number;i++){
//		if(num%i===0)return false;
//	}
//	return number !=1;
//}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(10));
