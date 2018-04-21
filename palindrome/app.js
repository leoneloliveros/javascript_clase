String.prototype.esPalindrome = function () {	
	var a = this.replace(/ /g, "").split("");	
	var b = a.slice().reverse();
	return a.join() === b.join() ? true : false	
}
console.log("anita lava la tina".esPalindrome()); // truex;
console.log("a ti no bonita".esPalindrome()); // true
console.log("hola".esPalindrome()); // false
