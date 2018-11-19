const fs = require('fs');
const path = require('path');
const dir = './ci_payloads';

exports.createPayloadFile = function (req_body){
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
  };

var today = new Date();
var date =(today.getMonth()+1)+'_'+today.getDate();
var time = today.getHours() +''+ today.getMinutes()+'_'+ today.getMilliseconds();
var dateTime = date+'_'+time;

  fs.writeFile('./ci_payloads/'+dateTime+'.JSON', req_body, function(err) {
      if (err) return console.log('An error occured while attempting to create external JSON file: \n' + err);

console.log('payload written to ~/ci_payloads');
  });
}
