function Cat(name, owner) {
	this.name = name;
	this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
		return this.owner + " loves " + this.name;
}

Cat.prototype.cuteStatement = function () {
		return "Everyone loves " + this.name;
}

Cat.prototype.meow = function () {
	return "meow";
}

var ewoka = new Cat("Ewoka", "Sarah");
var gatsby = new Cat("Gatsby", "Jamie");

ewoka.meow = function () {
	return "hiss";
};

console.log(ewoka.cuteStatement());
console.log(gatsby.cuteStatement());

console.log(ewoka.meow());
console.log(gatsby.meow());
