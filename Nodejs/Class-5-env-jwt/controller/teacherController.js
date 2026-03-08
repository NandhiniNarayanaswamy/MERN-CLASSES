const TeacherMod = require("../model/teachermodel")

exports.createData = async (req, res) => {
    try {
        const { Name, Age, classs } = req.body;
        const teacherr = new TeacherMod({ Name, Age, classs });
        await teacherr.save()
        res.status(201).json(teacherr)
    } catch (error) {
        res.status(400).json({ message: "error adding" })
    }
}
exports.getData = async (req, res) => {
    try {
        const teaches = await TeacherMod.find()
        res.json(teaches)
    }
    catch (error) {
        console.log(error);

    }
}

exports.updateData = async (req, res) => {
    const { id } = req.params;
    const updating = await TeacherMod.findByIdAndUpdate(id, req.body, { new: true })
    res.json(updating)
}

exports.deleteData = async (req, res) => {
    const { id } = req.params;
    const deleting = await TeacherMod.findByIdAndDelete(id)
    res.json({ message: "data deleted" })
}
