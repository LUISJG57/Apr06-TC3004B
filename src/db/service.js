class FakeService{
    constructor(){
        this.students = new Map();

        const dummyStudents = [
            { matricula: '123456', nombre: 'Juan Perez', calificacion_final: 70, deuda: 0 },
            { matricula: '654321', nombre: 'Maria Lopez', calificacion_final: 50, deuda: 0 },
            { matricula: '789012', nombre: 'Pedro Garcia', calificacion_final: 80, deuda: 1 },
            { matricula: '345678', nombre: 'Ana Martinez', calificacion_final: 40, deuda: 2 },
            { matricula: '901234', nombre: 'Luis Hernandez', calificacion_final: 60, deuda: 0 }
          ];

        dummyStudents.forEach((student) => {
            this.students.set(student.matricula, student);
        })
    }

    async getStudents() {
        return Array.from(this.students.values());
    }

}

module.exports = FakeService;