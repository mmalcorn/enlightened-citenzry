import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

  model: function(params) {

    var resultsBucket = [];

    var getNextPageJSON = function(newURL) {
        return Ember.$.getJSON(newURL).then(function(responseJSON) {
          resultsBucket.push(responseJSON.results);
          // console.log(resultsBucket);
        });
    };


    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills/search?apikey=' +key+ '&per_page=50&page=1&last_version_on__gte=' + params.date;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var count = responseJSON.count;
      // var resultsBucket = [];

      for(var pageNumber = 1; pageNumber * 50 < count; pageNumber++) {

        var newURL = 'http://congress.api.sunlightfoundation.com/bills/search?apikey=' +key+ '&per_page=50&page=' +pageNumber+ '&last_version_on__gte=' + params.date;

        getNextPageJSON(newURL);
      }
      return resultsBucket;
    });
  }
});


//cd70edbb9f004458ba61e71e6c90e152
