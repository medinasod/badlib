import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.filter('users', {}, function(users) {
      return users.get('isSubscribed');
    });
  },
});
