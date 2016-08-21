require('dotenv').load();
require('./models/db');

var twilio = require('./config/twilioConfig');

var mongoose = require('mongoose');
var bill = mongoose.model('Bill');

var day = new Date().getDate();
var msgFinal = "";

bill.find({payday: {$in: [day,day+1]}}).sort({payday:'asc'}).exec( function (err, value){
    if(value.length > 0){
        var retorno = JSON.parse(JSON.stringify(value));

        msgFinal += "Contas a vencer:\n";
        retorno.forEach(function(element) {
        var autoPay = element.autopay ? "pagamento automático" : "";
            msgFinal += element.name+" - vencimento: "+element.payday+" "+autoPay+"\n";
        }, this);

        twilio.sendMessage(msgFinal);
    }

    mongoose.disconnect(); 
});