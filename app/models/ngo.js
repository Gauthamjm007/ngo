const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const addressSchema = new Schema({
  line1: {
    type: String,
    required: true,
    trim: true,
    max: 30,
  },
  line2: {
    type: String,
    required: true,
    trim: true,
    max: 30,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    max: 30,
  },
  district: {
    type: String,
    required: true,
    trim: true,
    max: 30,
  },
  state: {
    type: String,
    required: true,
    trim: true,
    max: 30,
  },
  pincode: {
    type: String,
    required: true,
    trim: true,
    max: 6,
    min: 6,
  },
});

const ngoSchema = new Schema([
  {
    logo: {
      type: String,
      required: true,
      max: 255,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 30,
    },
    reg_date: {
      type: String,
      required: true,
      max: 12,
    },
    f_funding: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      trim: true,
      min: 5,
      max: 25,
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: function () {
          return "please provide valid email id";
        },
      },
    },
    address: addressSchema,
    claimed: {
      type: Boolean,
      default: false,
    },
  },
]);

const Ngo = mongoose.model("Ngo", ngoSchema);
module.exports = Ngo;

// {
//     "logo":"logo",
//     "name":"ngo1",
//     "reg_date":"12-2-2020",
//     "f_funding":false,
//     "email":"ngo1@gmail.com",
//     "address":{
//         "line1":"line1",
//       "line2":"line2",
//       "city":"city1",
//       "district":"district1",
//       "state":"state1",
//       "pincode":"000000"
//     },
//     "claimed":false
//   }
