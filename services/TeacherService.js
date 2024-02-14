import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(teacherModel);
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id);
}

const getAllTeachers = () => {
    return teacherRepository.getAllTeachers();
}

const updateTeacherById = (id, teacherModel) => {
    return teacherRepository.updateTeacherById(id, teacherModel);
}


const deleteTeacherById = (id) => {
    return teacherRepository.deleteTeacherById(id);
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    updateTeacherById,
    deleteTeacherById
}

export default service;