import Ember from 'ember';

// app/controllers/posts.js
export default Ember.Controller.extend({
  sortProperties: ['name'],
  sortAscending: true,
  actions: {
    addMuseum: function() {
      var newMuseum = this.store.createRecord('museums', {
        name: this.get('name'),
        address: this.get('address'),
        timestamp: new Date().getTime()
      });

      // To Do: Utilize the `ember-model-validator` module:
      // https://github.com/esbanarango/ember-model-validator
      newMuseum.save();
    }
  }
});
