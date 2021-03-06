const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    password: {
        type: String,
        required: true
    },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err) {
            return next(err);
        }
        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        } else {
            if (!isMatch) {
                return cb(null, isMatch);
            }
            return cb(null, this);
        }
    });
}

module.exports = mongoose.model('User', UserSchema);


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema(
//     {
//         username: String,
//         password: String,
//         // how to set a default value in the schema...
//         // created:  {type: Date, default: Date.now},
//     });

// module.exports = mongoose.model('User', userSchema);