angular.module('completedFormsFilters', [])
	.filter('shorten', function () {
		return function(input) {
			if (!input) return;

			if (typeof input === 'object') {
				if (!Array.isArray(input)) {
					input = Object.keys(input).reduce(function(result, item) {
						return result.concat(input[item]);
					}, []);
				} 
				input = input.join(", ");
			} else input = input.toString();

			let n = input.length > 30 ? 30 : input.length;
			return input.slice(0, n);
		};
	});