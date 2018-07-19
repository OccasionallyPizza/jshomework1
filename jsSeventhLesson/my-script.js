//console.log('hey');
//function filter(array,test){
//	let results=[];
//	for (let element of array){
//		if (test(element)){
//			results.push(element);
//		}
//	}
//	return results;
//}

//console.log(filter(SCRIPTS,(e)=>e.living));
//console.log(SCRIPTS.filter(e=>e.living));

function map(array,transform){
	let results=[];
	for(let element of array){
		results.push(transform(element));
	}
	return results;
}

//console.log(map(SCRIPTS,e=>e.year));
//console.log(SCRIPTS.map(e=>e.name));

function reduce(array, combine, initialValue){
	let accumulator = initialValue;
	for (let element of array){
		accumulator = combine(accumulator,element); 
	}
	return accumulator;
};
//console.log(reduce(SCRIPTS,(acc,el)=>acc+"\n"+el.name,""));
let arrays = [[1,2,3],[4,5],[6]];
console.log(arrays.reduce((acc,currentValue)=>{
	return acc.concat(currentValue);
}));
console.log(arrays.concat());
