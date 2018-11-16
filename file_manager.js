const fs = require('fs');

exports.createPayloadFile = function (req_body){

  var dir = './circle_ci_payloads';
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
  };

var today = new Date();
var date =(today.getMonth()+1)+'_'+today.getDate();
var time = today.getHours() + today.getMinutes() + today.getMilliseconds();

var dateTime = date+'_'+time;

  fs.writeFile('./circle_ci_payloads/payload_'+dateTime+'.JSON', req_body, function(err) {
      if (err) return console.log('An error occured while attempting to create external JSON file: \n' + err);

console.log('payload written to ~/circle_ci_payloads');
  });
}
