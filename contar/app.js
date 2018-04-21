function contar(str){
	// var a = 0;
	// var size = str.length;
	// for (var i=0; i < size; i++) {
	// 	if (str.charAt(i) === "a") {
	// 		a++;			
	// 	}
	// }
	var a = str.match(/a/g);
	if (a === null) {
		return 0;
	} else {
		return a.length;
	}
}
console.log(contar("Hola Make it Real")); // 3
console.log(contar("")); // 0