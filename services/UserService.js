import userRepository from "../repositories/UserRepository.js";

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel);
}

const getUserById = (id) => {
    return userRepository.getUserById(id);
}

const getAllUsers = () => {
    return userRepository.getAllUsers();
}

const updateUserById = (id, userModel) => {
    return userRepository.updateUserById(id, userModel);
}


const deleteUserById = (id) => {
    return userRepository.deleteUserById(id);
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById
}

export default service;