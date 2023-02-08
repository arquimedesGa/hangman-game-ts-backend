const controllers = require('./controller/hangman');

const {Router} = require('express');

const router = Router();

router.post('/hangman', controllers);

module.exports = router;