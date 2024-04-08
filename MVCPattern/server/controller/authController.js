const succes_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
let users = require('../db/models/users');
const bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken')
let dotenv = require('dotenv');
dotenv.config();

