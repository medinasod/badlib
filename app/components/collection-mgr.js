import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['name'],
  sortAscending: true,
  actions: {
    addCollection: function() {
      // Injecting the store using /initializers/inject-store-into-components.js
      this.get('store');
      // displayMuseums: function() {
      //   const museums = this.get('store').query('museums');
      //   return museums;
      // },
      // Associate collection with it's museum.
      //let museums = this.store.peekRecord('museums', 1);
      var newCollection = this.store.createRecord('museum-collection', {
        name: this.get('name'),
        timestamp: new Date().getTime()
        //museums: museums
      });

      // To Do: Utilize the `ember-model-validator` module:
      // https://github.com/esbanarango/ember-model-validator
      newCollection.save().then(function() {
        $("#txtInput").val('').focus();
      });
    },
    removeCollection: function(item) {
      item.destroyRecord().then(function() {
        console.log("deleted collection");
      });
    }
}

});
