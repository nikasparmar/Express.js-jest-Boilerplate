import express from 'express';
var router = express.Router();

/* GET users listing. */
/**
 * This function comment is parsed by doctrine
 * @route GET /api
 * @group foo - Operations about user
 * @param {string} email.query.required - username or email - eg: user@domain
 * @param {string} password.query.required - user's password.
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

export default router;
