app.factory('FormTemplatesFactory', function($window) {
  var PouchDB = $window.PouchDB;
  var db = PouchDB('thekraken-test');
  var remoteDb = 'http://127.0.0.1:5984/thekraken-test';

  return {

    fetchAll: function() {
      // fetch all documents that are type formTemplate
      return db.query(function(doc) {
        if (doc.type === 'formTemplate') emit(doc);
      })
      .then(function(results) {
        return results.rows.map(function(row) {
          return row.key;
        });
      });
    },
    
    fetchOne: function(formTemplateId) {
      return db.get(formTemplateId);
    },

    updateForm: function(form) {
      return db.put(form)
          .then(function (updateResponse) {
            form._rev = updateResponse.rev;
            return form;
          });
    },

    createForm: function() {
        var form = {
            title: "Example Title",
            description: "Example description",
            type: "formTemplate",
            formElements: []
        }
        return db.post(form);
        // add error handling
    },

    syncUp: function() {
      return PouchDB.replicate(db, remoteDb);
    },

    syncDown: function() {
    	return PouchDB.replicate(remoteDb, db);
    },

    clearDb: function() {
      return db.destroy()
      .then(function() {
        db = PouchDB('thekraken-test');
      });
    }
  }
})