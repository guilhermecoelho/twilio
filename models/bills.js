var mongoose = require('mongoose');
mongoose.set('debug', true);

var billSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    payday: {
        type: Number,
        min: 1,
        max: 31
    },
    autopay: {
        type: Boolean,
        require: true
    },
    payed: {
        type: Boolean,
        require: true
    },
},
{
//   toObject: {
//     transform: function (doc, ret) {
//       delete ret.__v;
//     }
//   },
  toJSON: {
    transform: function (doc, ret) {
      delete ret.__v;
    }
  }
});

mongoose.model('Bill', billSchema);