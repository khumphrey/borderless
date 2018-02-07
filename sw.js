self.addEventListener('install', function(event) {
	console.log('installing')
// 	event.waitUntil(self.skipWaiting());
	event.waitUntil(
		caches.open('v1').then(function(cache) {
			console.log('caching')
			return cache.addAll([
				'/',

				// linked files in index.html
				'/bootstrap/dist/css/bootstrap.min.css',
				'/font-awesome/css/font-awesome.min.css',
				'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
				'/admin-lte/dist/css/AdminLTE.min.css',
				'/admin-lte/dist/css/skins/skin-blue.min.css',
				'/admin-lte/bootstrap/js/bootstrap.min/js',
				'/admin-lte/plugins/jQueryUI/jQuery-ui.min.js',
				'/admin-lte/dist/js/adminlte.min.js',
				'/admin-lte/dist/img/avatar3.png',
				// '/admin-lte/bootstrap/js/bootstrap.min.js',

				'/font-awesome/fonts/fontawesome-webfont.woff2?v=4.5.0',
				'/ng-sortable/dist/ng-sortable.min.js',
				'/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',

				'/CustomizedChart.js',
				'/angular-chart.js/dist/angular-chart.min.js',
				'/angular-chart.js/dist/angular-chart.min.css',
				'/ng-sortable/dist/ng-sortable.min.css',
				'/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',

				'/style.css',
				'/lodash/index.js',
				'/pouchdb/dist/pouchdb.js',
				'/pouchdb-authentication/dist/pouchdb.authentication.js',
				'/angular/angular.js',
				'/angular-animate/angular-animate.js',
				'/angular-ui-router/release/angular-ui-router.js',
				'/angular-ui-bootstrap/ui-bootstrap.js',
				'/angular-ui-bootstrap/ui-bootstrap-tpls.js',
				'/socket.io-client/dist/socket.io.js',
				'/main.js',

				// template files
				'/js/add-data/add-data-submit.view.html',
				'/js/add-data/add-data.view.html',
				'/js/analysis/analysis.view.html',
				'/js/add-data/add-data-success.html',
				'/js/common/directives/navbar/navbar.html',
				'/js/common/directives/individual-forms/checkboxes-directive.html',
				'/js/common/directives/individual-forms/multiple-choice-directive.html',
				'/js/common/directives/individual-forms/number-directive.html',
				'/js/common/directives/individual-forms/section-break-directive.html',
				'/js/common/directives/individual-forms/address-directive.html',
				'/js/common/directives/individual-forms/dropdown-directive.html',
				'/js/common/directives/individual-forms/email-directive.html',
				'/js/common/directives/individual-forms/line-text-directive.html',
				'/js/common/directives/individual-forms/paragraph-text-directive.html',
				'/js/common/directives/individual-forms/phone-directive.html',

				'/js/common/directives/sidebar/sidebar-search-directive.html',

				'/js/form-builder/templates/number.template.html',
				'/js/form-builder/templates/address.template.html',
				'/js/form-builder/templates/section.template.html',
				'/js/form-builder/templates/email.template.html',
				'/js/form-builder/templates/phone.template.html', 
				'/js/form-builder/templates/form-editor-success.html',



				'/js/completed-forms/templates/completed-forms-list.view.html',
				'/js/completed-forms/templates/completed-forms.view.html',
				'/js/completed-forms/templates/completed-individual-form.view.html',
				'/js/form-builder/templates/checkboxes.template.html',
				'/js/form-builder/templates/dropdown.template.html',
				'/js/form-builder/templates/form-editor.template.html',
				'/js/form-builder/templates/line-text.template.html',
				'/js/form-builder/templates/multiple-choice.template.html',
				'/js/form-builder/templates/paragraph-text.template.html',
				'/js/form-templates/form-templates.view.html',
				'/js/login/login.html',
				'/js/sync/sync.view.html',
				'/js/sync/syncDown-success.html',
				'/js/sync/syncUp-success.html',
				'/js/sync/clearDb-success.html'

			]);
		})
	);
});

this.addEventListener('activate', function(event) {
	event.waitUntil(self.clients.claim());
})

this.addEventListener('fetch', function(event) {
	event.respondWith(

		caches.match(event.request)
		.then(function(match) {
			if (match) return match;
			else return fetch(event.request);
		})
		.catch(function(error) {
			// return Response.redirect('/index.html');
			return caches.match('/');
		})
		// ISSUES: 
		// 1. going directly to a url in the browser fails 
		// -> If the cache match fails we want to return index.html?
		// 2. pouchDB requests are being intercepted too

	);
});