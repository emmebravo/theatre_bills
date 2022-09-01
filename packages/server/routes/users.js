import express from 'express';
import * as auth from '../controllers/auth.js';
const router = express.Router();

// @route POST api/users/register
// @desc Register user
// @access Public
router.post('/register', auth.register);

// @route POST api/users/login
// @desc Login user
// @access Public
router.post('/login', auth.login);

export default router;
