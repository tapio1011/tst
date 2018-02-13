var request = require('request');

module.exports.detectFaces = function(params, callback) {
  var options = {
    url: `https://gateway-a.watsonplatform.net/visual-recognition/api/v3/detect_faces_beta?api_key=${params.api_key}&version=2016-05-17`,
  }

  if(params.images_file) {
    options.method = 'POST'
    options.formData = {
      images_file: params.images_file
    }
  } else {
    options.method = 'GET'
    options.url += `&url=${params.url}`
  }
  var req = request(options, (err, res, body) => {
    if (err) {
        callback(err)
    }
    callback(null, JSON.parse(body))
  });
}
