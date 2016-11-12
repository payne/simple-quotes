import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 1, quote: 'I like eggs'},
      {id: 2, quote: 'No matter where you go, there you are!'}
    ];
  }
});
