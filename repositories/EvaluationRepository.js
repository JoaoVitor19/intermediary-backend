import Evaluation from "../models/Evaluation.js"

const saveEvaluation = async (evaluationModel) => {
    return await Evaluation.create(evaluationModel);
}

const getAllEvaluations = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
};

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
};

const updateEvaluationById = async (id, evaluationModel) => {
    try {
        const result = await Evaluation.update(evaluationModel, { where: { id: id } });
        if (result[0] === 1) {
            return { message: "evaluation updated with success", status: 200 };
        } else {
            return { message: `cannot find ${id} to update`, status: 404 }
        }
    }
    catch (error) {
        console.log(error);
    }

}

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({ where: { id: id } });
}

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    updateEvaluationById,
    deleteEvaluationById
}

export default factory;