"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../controllers/users");

var router = (0, _express.Router)();
/**
* swagger
* /users:
* get:
* summary: holla
*/

router.get('/users', _users.getUsers);
router.get('/users/count', _users.getUserCount);
router.get('/users/:id', _users.getUser);
router.post('/users', _users.saveUser);
router["delete"]('/users/:id', _users.deleteUser);
router.put('/users/:id', _users.updateUser);
var _default = router;
exports["default"] = _default;