let pyramid =height=>{
	temp = 1;
	for(let i =0;i<=height;i++){
		eilute=[];
		for(let f=0;f<i;f++){
			eilute=eilute+" "+temp;
			temp++;
		}
		console.log(eilute);
	}
}
const isObject = a => {
	return a!=null && typeof a === "object";
}
const deepEqual=(a,b)=>{
	answer = true;
	while (answer){
		if(Object.keys(a).length == Object.keys(b).length){
			if(isObject(a) && isObject(b)){
				for(let i=0;i<Object.keys(a).length;i++){
					if (isObject(Object.keys(a)[i])){
						answer = deepEqual(Object.keys(a)[i],Object.keys(b)[i]);
					}else{
						let tempA = Object.entries(a)[i];
						let tempB = Object.entries(b)[i];
						if(tempA!=tempB){answer = false;}
					}
				}
			}
		}
	}
	return answer;
}
					//for(let i=0;i<Object.keys(a).length;i++){
			
//		}

var array = [1,2,3,4,5,1];
//console.log(array);
//temp =[];
//for (let i =0;i<array.length;i++){
	//temp[i]=0;	
	//for(let n = 0; n<= array.length;n++){
		//if(array[i] == array[n]){
			//temp[i]++;
		//}
	//}
//}
//for (let i=0; i<temp.length;i++){
//	console.log("reiksme "+array[i]+" pasikartojo kartu "+temp[i]);
}

//pyramid(prompt("height of pyramid"));

console.log(deepEqual({a:1;b:2;c:3},{a:1,b:2,c:3} ));
