function line(length,char1,char2){
	let text="";
	for (u=0;u<length;u++){
		if(u%2==0){
			text=text+char1;
		}else{
			text=text+char2;
		}
	}
	text = text + "\n";	
	return text;
}

let size=prompt("size of board pls");
let string="";
for (let height =0;height<size;height++){
	if (height%2==0){
		string = string+line(size," ","#");
	}else{
		string = string+line(size,"#"," ");
	}
}
console.log(string);
