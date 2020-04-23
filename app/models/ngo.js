const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const addressSchema = new Schema({
  line1: {
    type: String,
    required: true,
  },
  line2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

const ngoSchema = new Schema([
  {
    logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    reg_date: {
      type: String,
      required: true,
    },
    f_funding: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      trim: true,
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