let getFibonacci=x=>{
	let a=0;
	let b=1;
	let temp=0;
	let result = "";
	for (i=0;i<x;i++){
		if(x-1>i){
			result = result +a+", ";
			temp=b;
			b=a+b;
			a=temp;
		}else{
			result=result+a;
		}
	}
	return result;
}

let countBs=string=>{return countChar(string,"B");}

let countChar=(text,letter)=>{
	let count = 0;
	for(c=0;c<text.length;c++){
		if(text[c]==letter){
			count++;
		}
	}
	return count;
}

console.log(getFibonacci(prompt("which fibonachi number do you need?")));
console.log(countBs(prompt("give a string to count Bs"),"B"));
console.log(countChar(prompt("give a string"),prompt("give symbol to count")));
