var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=60ef3a864122937bfdad901fa29ee68d&units=imperial';

//60ef3a864122937bfdad901fa29ee68d

module.exports = {
  getTemp: function(location) {
      var encodedLocation = encodeURIComponent(location);
      var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestURL).then(function(res) {
          if (res.data.cod && res.message) {
            throw new Error(res.response.data.message);
          } else {
            return res.data.main.temp;
          }
      }, function (error) {
          throw new Error(error.response.data.message);
      });
  }
}
