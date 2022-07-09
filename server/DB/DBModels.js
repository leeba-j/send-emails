const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    height: { type: Int, required: true },

});

const UserModel = model('UserModel', UserSchema);
;
module.exports = { UserModel }