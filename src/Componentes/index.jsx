import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // isso mudou
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// Se quiser que seu aplicativo funcione off-line e carregue mais rápido, 
// mude unregister() para register() abaixo. Há algumas armadilhas em se
// fazer isso. Saiba mais sobre service workers aqui: http://bit.ly/CRA-PWA

serviceWorker.unregister();