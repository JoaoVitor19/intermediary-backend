import Teacher from "../models/Teacher.js"

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel)
}

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
};

const updateTeacherById = async (id, teacherModel) => {
    try {
        const result = await Teacher.update(teacherModel, { where: { id: id } });
        if (result[0] === 1) {
            return { message: "teacher updated with success", status: 200 };
        } else {
            return { message: `cannot find ${id} to update`, status: 404 }
        }
    }
    catch (error) {
        console.log(error);
    }

}

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({ where: { id: id } });
}

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById
}

export default factory;