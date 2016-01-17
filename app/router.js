import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home-route', { path: '/' });
  this.route('users', { path: '/users' });
  this.route('museums');
  this.route('collections');
  this.route('home');
  this.route('subscribers');
});

export default Router;
