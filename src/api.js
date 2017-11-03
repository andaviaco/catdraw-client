import axios from 'axios';


const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export function submitFigure(figure) {
  console.log('FIGUE', figure);
  return api.post('/figure/', figure);
}

export default api;
