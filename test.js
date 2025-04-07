const service = require('./src/db/service')
const controller = require('./src/controllers/student')


const studentService = new service()
const studentController = new controller(studentService)

async function testGetallStudents () {
    try {
        const students = await studentController.getStudentsWithStatus()
        console.log(students)
    }catch(error) {
        console.error(error.message)
    }
} 

testGetallStudents()