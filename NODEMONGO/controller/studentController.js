import Student from '../models/studentModel.js';
export const createStudent = async (req, res) => {
    const newdata = new Student(req.body);
    const savedData = await newdata.save();
    res.status(201).json(savedData);
}
