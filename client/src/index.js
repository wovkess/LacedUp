import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import './css/style.css';
import WebFont from 'webfontloader';
export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

WebFont.load({
    google: {
        families: ['Ubuntu:300,400,500']
    }
});