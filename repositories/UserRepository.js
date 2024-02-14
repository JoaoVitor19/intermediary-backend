import User from "../models/User.js"

const saveUser = async (userModel) => {
    return await User.create(userModel);
}

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

const updateUserById = async (id, userModel) => {
    try {
        const result = await User.update(userModel, { where: { id: id } });
        if (result[0] === 1) {
            return { message: "user updated with success", status: 200 };
        } else {
            return { message: `cannot find ${id} to update`, status: 404 }
        }
    }
    catch (error) {
        console.log(error);
    }

}

const deleteUserById = async (id) => {
    return await User.destroy({ where: { id: id } });
}

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}

export default factory;