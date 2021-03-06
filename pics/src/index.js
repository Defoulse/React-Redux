import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

// Auto reload
if (module.hot) {
    module.hot.accept();
}