import express from 'express';
import * as auth from '../controllers/auth.js';
const router = express.Router();

// @route POST /users/register
// @desc Register user
// @access Public
router.post('/register', auth.register);

// @route POST /users/login
// @desc Login user
// @access Public
router.post('/login', auth.login);

// @route POST /users/login
// @desc Logout user
// @access Private
router.post('/logout', auth.logout);

export default router;
