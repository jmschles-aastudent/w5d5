Array.prototype.uniq = function () {
	var uniques = [];

	for (var i = 0; i < this.length; i++) {
		var x = this[i];
		if (uniques.indexOf(x) === -1) {
			uniques.push(x);
		}
	}
	return uniques;
}

var duh = [1, 2, 5, 2, 9];

// console.log(duh.uniq());

Array.prototype.twoSum = function() {
	var pairs = [];

	for (var i = 0; i < this.length; i++) {
		for (var j = i+1; j < this.length; j++) {
			if (this[i] + this[j] === 0) {
				pairs.push([i, j]);
			}
		}
	}
	return pairs;
}

var duh = [1, 4, 3, -1, -2, -3, 5];
// console.log(duh.twoSum());

Array.prototype.transpose = function() {
	var cols = [];

	for (var i = 0; i < this.length; i++) {
		var row = []
		for (var j = 0; j < this.length; j++) {
			row.push(this[j][i]);
		}
		cols.push(row);
	}
	return cols;
}

var duh = [[1,2,3],[4, 5, 6], [7, 8, 9]];
// console.log(duh.transpose());

Array.prototype.myEach = function (fun) {
	for (var i = 0; i < this.length; i++) {
		fun(this[i]);
	}
	return this;
}

var duh = [1, 2, 3, 4, 5];
// console.log(duh.myEach(function (num) {
// 	console.log(num * 2);
// }));

Array.prototype.myMap = function (fun) {
	var mapped = [];
	for (var i = 0; i < this.length; i++) {
		mapped.push(fun(this[i]));
	}
	return mapped;
}

var duh = [1, 2, 3, 4, 5];
// console.log(duh.myMap(function (num) {
// 	return (num * 2);
// }));

Array.prototype.inject = function (starter, fun) {
	var injected = starter;
	for (var i = 0; i < this.length; i++) {
		injected = (fun(injected, this[i]));
	}
	return injected;
}

var duh = [1, 2, 3, 4, 5];
// console.log(duh.inject(1, function (accum, num) {
// 	accum *= num;
// 	return accum;
// }));

Array.prototype.bubs = function () {
	var sorted = false;

	while (!sorted) {
		sorted = true;

		for (var i = 0; i < this.length; i++) {
			if (i === this.length - 1) {
				break;
			}
			if (this[i] > this[i + 1]) {
				temp = this[i];
				this[i] = this[i + 1];
				this[i + 1] = temp;
				sorted = false;
			}
		}
	}
return this;
}

var duh = [1, 4, 3, -1, -2, -3, 5];
// console.log(duh.bubs());

String.prototype.substrings = function () {
	var subs = [];

	for (var i = 0; i < this.length; i++) {
		for (var j = i+1; j <= this.length; j++) {
			subs.push(this.slice(i,j));
		}
	}
	return subs;
}

var duh = "stupid";
// console.log(duh.substrings());
