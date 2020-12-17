import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const getAllRecipes = () => api.get(`/recipes/list`);
export const createRecipe = payload => api.post(`/recipes/create`, payload);
export const getRecipeById = id => api.get(`/recipes/${id}`);
export const updateRecipeById = (id, payload) => api.put(`/recipes/${id}`, payload);
export const deleteRecipeById = id => api.delete(`/recipes/${id}`);

const apis = {
    createRecipe,
    getAllRecipes,
    updateRecipeById,
    deleteRecipeById,
    getRecipeById,
};

export default apis;