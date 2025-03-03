const express = require('express');
const { registerUser, authUser, allUsers } = require("../controllers/userController");
const { protect } = require('../middleware/authMiddleware');



const router = express.Router();

router.route('/').post(registerUser).get(allUsers, protect);

router.post('/login', authUser);

// router.route('/').get(allUsers);

module.exports = router;
