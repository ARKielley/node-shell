const request = require('request');

module.exports = function(url) {
  request.get(url).on('response', function (response) {
  process.stdout.write(response.body);
  process.stdout.write('prompt > ');
});
}
