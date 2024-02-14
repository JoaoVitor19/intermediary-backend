import Course from "../models/Course.js"

const saveCourse = async (courseModel) => {
    const save = await Course.create(courseModel)
}

const getAllCourses = async () => {
    return await Course.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getCourseById = async (id) => {
    return await Course.findByPk(id);
};

const updateCourseById = async (id, courseModel) => {
    try {
        const result = await Course.update(courseModel, { where: { id: id } });
        if (result[0] === 1) {
            return { message: "course updated with success", status: 200 };
        } else {
            return { message: `cannot find ${id} to update`, status: 404 }
        }
    }
    catch (error) {
        console.log(error);
    }

}

const deleteCourseById = async (id) => {
    return await Course.destroy({ where: { id: id } });
}

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById
}

export default factory;