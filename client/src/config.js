export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

export const API = {
  login: `${BASE_URL}/auth/signup`,
  signUp: `${BASE_URL}/auth/signin`,
  getTodos: `${BASE_URL}todos`,
  getTodoById: `${BASE_URL}todos/:id`,
  createTodo: `${BASE_URL}todos`,
  updateTodo: `${BASE_URL}todos`,
  deleteTodo: `${BASE_URL}todos`,
};