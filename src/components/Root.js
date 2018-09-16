import React from 'react';
import App from './App';
import store from '../Store/index';
import {Provider} from 'react-redux';

function Root() {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );

}

export default Root;