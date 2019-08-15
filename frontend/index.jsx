import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {openModal} from './actions/modal_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // remove after dev
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.openModal = openModal('signup');
    //

    ReactDOM.render(<Root store={store} />, root);
});