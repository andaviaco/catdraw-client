import axios from 'axios';
import openSocket from 'socket.io-client';

import { formatFigure } from './util';


const socket = openSocket(process.env.REACT_APP_SOCKETIO_URL);

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export function submitFigure(figure) {
  return api.post('/figure/', figure);
}

export function subscribeToFigureQueue(handler) {
  socket.on('queueChange', (data) => (
    handler(data.map(figure => formatFigure(figure)))
  ));
}

export default api;
