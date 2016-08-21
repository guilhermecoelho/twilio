require('dotenv').load();
require('./../models/db');

var mongoose = require('mongoose');
var bill = mongoose.model('Bill');

bill.create({
        name: 'Sanasa',
        payday: 16,
        payed: false,
        autopay: true
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });

bill.create({
        name: 'condominio',
        payday: 10,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });
bill.create({
        name: 'cpfl',
        payday: 25,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });

bill.create({
        name: 'comgas',
        payday: 28,
        payed: false,
        autopay: true
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });
bill.create({
        name: 'net',
        payday: 8,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });

bill.create({
        name: 'cartão caixa',
        payday: 25,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });
bill.create({
        name: 'cartão nubank',
        payday: 25,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });
bill.create({
        name: 'cartão itaú',
        payday: 25,
        payed: false,
        autopay: true
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });

bill.create({
        name: 'Cultura Inglesa',
        payday: 30,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });
bill.create({
        name: 'People',
        payday: 4,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });
bill.create({
        name: 'Unisal',
        payday: 8,
        payed: false,
        autopay: false
    }, function (err, value) {
        if (err) {
           console.log(err)
        } else {
            console.log(value);
        }
    });