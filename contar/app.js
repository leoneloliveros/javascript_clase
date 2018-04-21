function contar(str, char ){
	var a = str.match(new RegExp(char,"g"));
	return a === null ? 0 : a.length;

}

console.log(contar("Hola Make it Real", "i")); // 1
console.log(contar("Hello Worldooooooooooooo", "o")); // 3