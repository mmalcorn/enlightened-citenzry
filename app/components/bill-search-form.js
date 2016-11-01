import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    dateLookup() {
      var params = {
        date: this.get('date')
      };
      this.sendAction('dateLookup', params);
    }
  }
});
