import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const quotes = this.get('quotes');
    return quotes.getQuotes();
  },
  quotes: Ember.inject.service('quotes')
});
