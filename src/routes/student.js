const express = require('express');

const router = express.Router();

const StudentService = require('../db/service');
const StudentHttpHandler = require('../handlers/student');
const StudentController = require('../controllers/student');

const studentService = new StudentService();
const studentController = new StudentController(studentService);
const studentHandler = new StudentHttpHandler(studentController);

router.get('/getStudentsWithStatus', studentHandler.getStudentsWithStatus.bind(studentHandler));

module.exports = router;