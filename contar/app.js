function contar(str){
	var a = 0;
	var size = str.length;
	for (var i=0; i < size; i++) {
		if (str.charAt(i) === "a") {
			a++;			
		}
	}
	return a;
}
console.log(contar("HolA Make it Real")); // 3
console.log(contar("")); // 0