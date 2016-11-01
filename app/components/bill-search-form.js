import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    dateLookup() {
      var params = {
        date1: this.get('date1'),
      };
      this.sendAction('dateLookup', params);
    }
  }
});
