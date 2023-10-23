import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

const rootReact = ReactDOM.createRoot(document.getElementById('root')); //llamada al dom()

rootReact.render(

    <App />

);

//Aqui se renderiza o representación gráfica la app y todos los componentes
