import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('quotes');
  this.route('quote', { path: '/quotes/:quote_id'});
});

export default Router;
