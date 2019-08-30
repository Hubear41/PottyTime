import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Modal from './modal/modal_container';

const Root = ({ store }) => (
    <Provider store={store} >
        <BrowserRouter >
            <Modal />
            <App />
        </BrowserRouter>
    </Provider>
)

export default Root;