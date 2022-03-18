import React from 'react';
import { render } from "react-dom";
import { App } from "./components/component/App";
import "./styles/index.css";
import { init } from "./mint";

const createDOMElement = () => {
    const body = document.getElementsByTagName('body')[0];
    const div = Object.assign(document.createElement('div'), {
        id: "root",
    });
    body.appendChild(div);
    return div;
}

const renderAppContainer = () => {
    render(<App />, createDOMElement());
}

renderAppContainer();
init();

export { renderAppContainer };



