app.directive('formElement', function($compile) {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			let generatedFormElement = '<' + _.kebabCase(scope.element.type) + ' element="element" is-editing="' + scope.isEditing + '" ng-model="element.value">' + '</' + _.kebabCase(scope.element.type) + '>';
			element.append($compile(generatedFormElement)(scope));
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			})
		}
	}
});


///////////////////

app.directive('lineText', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, el, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/line-text-directive.html'
	}
});

app.directive('paragraphText', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, el, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/paragraph-text-directive.html'
	}
});

app.directive('number', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(+newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/number-directive.html'
	}
});

app.directive('email', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, el, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/email-directive.html'
	}
});

app.directive('phone', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, el, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/phone-directive.html'
	}
});

app.directive('address', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, el, attr, ngModelCtrl) {
			scope.$watch('element.value', function(newValue, oldValue) {

				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/address-directive.html'
	}
});

app.directive('multipleChoice', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "?ngModel",
		link: function(scope, element, attr, ngModelCtrl) {

			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/multiple-choice-directive.html'
	}
});

app.directive('checkbox', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.values = [];
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
			scope.hasNoElements = function(value) {
				if(!value) return true;
				if(Object.keys(value).length === 0) return true;

				return false;

			}
		},
		templateUrl: '/js/common/directives/individual-forms/checkboxes-directive.html'
	}
});

app.directive('dropdown', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		require: "ngModel",
		link: function(scope, element, attr, ngModelCtrl) {
			scope.values = [];
			scope.$watch('element.value', function(newValue, oldValue) {
				ngModelCtrl.$setViewValue(newValue);
			});
		},
		templateUrl: '/js/common/directives/individual-forms/dropdown-directive.html'
	}
});

app.directive('sectionBreak', function() {
	return {
		scope: {
			element: '=',
			isEditing: '='
		},
		templateUrl: '/js/common/directives/individual-forms/section-break-directive.html'
	}
});