var accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

var phoneTwilio = process.env.PHONE_TWILIO;
var phoneSend = process.env.PHONE_SEND;

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

module.exports.sendMessage = function (msg){

    //console.log(msg);
    client.messages.create({
        body: msg,
        to: phoneSend,  // Text this number
        from: phoneTwilio // From a valid Twilio number
    }, function(err, message) {
        console.log(message.sid);
    });
} 
