/* CLASSE MAIN */


import React from 'react' ; /* importação da biblioteca do react */
import ReactDOM from 'react-dom/client';
 /* importação componente app */
import App from './App'


/* metodo de renderizar */
ReactDOM.createRoot 
(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
       
    </React.StrictMode>
);

 /* na classe ReactDOM, tem o metodo createroot 
 que é pra criar uma rota de onde vai ser renderizado
 os componentes, e diz q vamos pegar um document por id
 cujo o nome é root

 PODE TBM SER ESCRITO

 ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
 )

 */

