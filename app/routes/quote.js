import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const quotes = this.get('quotes');
    return quotes.getQuotes().findBy('id', params.quote_id);
  },
  quotes: Ember.inject.service('quotes')
});
