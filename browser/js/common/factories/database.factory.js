app.factory('DatabaseFactory', function($window) {
	let PouchDB = $window.PouchDB;
	let localDb = new PouchDB('thekraken-test');
	let usersDb = new PouchDB('users');
	let remoteDb = new PouchDB('https://rekad.cloudant.com/thekraken-test', {skipSetup: true});
	let output;

	return {
		getLocalDb: function() {
			return localDb;
		},
		getRemoteDb: function() {
			return remoteDb;
		},
		getUsersDb: function() {
			return usersDb;
		},
		clearLocalDb: function() {
			return localDb.destroy()
				.then(function() {
					localDb = new PouchDB('thekraken-test');
				});
		},
		replicateUp: function() {
			return PouchDB.replicate(localDb, remoteDb);
		},
		replicateDown: function() {
			return PouchDB.replicate(remoteDb, localDb);
		}
	};
});