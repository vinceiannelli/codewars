const RomanNumerals = {
	ROMAN: {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	},
	toRoman: function (number) {
		let n = number;
		let r = "";

		while (n > 0) {
			for (key in this.ROMAN) {
				if (this.ROMAN[key] <= n) {
					r = r + key;
					n = n - this.ROMAN[key];
					break;
				}
			}
		}

		return r;
	},
	fromRoman: function (rNum) {
		let r = rNum;
		let num = 0;
		while (r != "") {
			for (key in this.ROMAN) {
				let regex = new RegExp("^" + key);
				// console.log(regex);
				// console.log(regex.test(r));
				if (regex.test(r)) {
					r = r.replace(regex, "");
					num = num + this.ROMAN[key];
					break;
				}
			}
		}

		return num;
	},
};

RomanNumerals.toRoman(1);
RomanNumerals.toRoman(2988);
RomanNumerals.toRoman(224);
RomanNumerals.fromRoman("I");
RomanNumerals.fromRoman("MMCMLXXXVIII");
RomanNumerals.fromRoman("CCXXIV");
