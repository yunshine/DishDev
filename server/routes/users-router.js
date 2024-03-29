const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');
const User = require('../models/user-model');
const Recipe = require('../models/recipe-model');
const { json } = require('express');

const signToken = userID => {
    return JWT.sign({
        iss: "mernauth",
        sub: userID,
    }, "mernauthsecret", { expiresIn: "1h" });
}

userRouter.post('users/register', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err) {
            res.status(500).json({ message: { msgBody: "An error has occurred", msgError: true } });
        }
        if (user) {
            res.status(400).json({ message: { msgBody: "That username is already taken", msgError: true } });
        } else {
            const newUser = new User({ username, password });
            newUser.save(err => {
                if (err) {
                    res.status(500).json({ message: { msgBody: "An error has occurred", msgError: true } });
                } else {
                    res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
                }
            });
        }
    });
});

userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username } });
    }
});

userRouter.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { username: "" }, success: true });
});

userRouter.post('/todo', passport.authenticate('jwt', { session: false }), (req, res) => {
    const todo = new Todo(req.body);
    todo.save(err => {
        if (err) {
            res.status(500).json({ message: { msgBody: "An error has occurred", msgError: true } });
        } else {
            req.user.recipes.push(recipe);
            req.user.save(err => {
                if (err) {
                    res.status(500).json({ message: { msgBody: "An error has occurred", msgError: true } });
                } else {
                    res.status(200).json({ message: { msgBody: "Todo successfully created", msgError: false } });
                }
            });
        }
    });
});

userRouter.get('/todos', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id }).populate('recipes').exec((err, document) => {
        if (err) {
            res.status(500).json({ message: { msgBody: "An error has occurred", msgError: true } });
        } else {
            res.status(200).json({ recipes: document.recipes, authenticated: true });
        }
    });
});

// userRouter.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
//     if (req.user.role === "admin") {
//         res.status(200).json({ message: { msgBody: "You are an admin", msgError: false } });
//     } else {
//         res.status(403).json({ message: { msgBody: "You are NOT an admin", msgError: true } });
//     }
// });

// Maintains login persistence for React...
userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username } });
});

module.exports = userRouter;