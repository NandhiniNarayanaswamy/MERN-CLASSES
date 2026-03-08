import Student from "../model/StudentModel"

exports.postStudent=async (req, res) => {
    const student = new Student(req.body)
    await student.save()
    res.json(req.body)
}

exports.getAllStudents= async (req, res) => {
    const student = await Student.find()
    res.json(student)
    console.log(student);

}

exports.getStudentById= async (req, res) => {
    const student = await Student.findById(req.params.id)
    res.json(student)
}

exports.UpdateStudent=async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(student)
}

exports.DeleteStudent= async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.json({ message: "Data was Deleted" })
}
