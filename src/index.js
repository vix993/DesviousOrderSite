import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';

const Page404 = () => (<div>Page404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register/content" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route path="/" component={Home} exact />
      <Route component={Page404} /> {/* <Route component={() => (<div>Page 404</div>)} /> testing*/}
    </Switch>
   </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
