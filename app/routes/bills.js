import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?apikey=' +key+ '&last_version_on__gte=' + params.date;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
