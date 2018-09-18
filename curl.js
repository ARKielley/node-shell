const request = require('request');

// module.exports = function(url) {
//   request.get(url).on('response', function (response) {
//   process.stdout.write(response.body);
//   process.stdout.write('prompt > ');
// });
// }

module.exports = function(url) {
  request(url, function (error, response, body) {
  if (error) throw error; // Print the error if one occurred
  process.stdout.write('statusCode: ' + (response && response.statusCode)); // Print the response status code if a response was received
  process.stdout.write('\nbody: ' + body); // Print the HTML for the Google homepage.
  process.stdout.write('\nprompt > ');
});
}
