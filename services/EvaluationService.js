import evaluationRepository from "../repositories/EvaluationRepository.js";

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel);
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(id);
}

const getAllEvaluations = () => {
    return evaluationRepository.getAllEvaluations();
}

const updateEvaluationById = (id, evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, evaluationModel);
}


const deleteEvaluationById = (id) => {
    return evaluationRepository.deleteEvaluationById(id);
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    updateEvaluationById,
    deleteEvaluationById
}

export default service;