import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Nav from './components/NavBar/Navbar';
import './index.css'; 
import './app.css'
import Home from './components/Home';


ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
/* 
ReactDOM.render(
    <Nav />
   ,document.getElementById('titlebar')
);

ReactDOM.render(
    <Home />
    , document.getElementById('pager')
);
*/