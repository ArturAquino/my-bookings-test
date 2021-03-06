import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//     <BrowserRouter>
//         <Switch>
//             <Route path={`${process.env.PUBLIC_URL}/`} exact={true} component={App} />
//         </Switch>
//     </BrowserRouter>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
