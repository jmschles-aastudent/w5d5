var range = function (start, end) {
	if (start === end) {
		return [start];
	} else {
		return [start].concat(range(start + 1, end));
	}
}

// console.log(range(2, 7));
Array.prototype.sum = function () {
	if (this.count === 0) {
		return 0;
	} else {
		return this[0] + this.slice(1, -1).sum();
	}
}

duh = [1, 2, 3, 4, 5];
console.log(duh.sum());