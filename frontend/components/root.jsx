import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Modal from './modal/modal_container';

const Root = ({ store }) => (
    <Provider store={store} >
        <Router >
            <Modal />
            <App />
        </Router>
    </Provider>
)

export default Root;