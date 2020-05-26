import React from "https://dev.jspm.io/react";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";
import App from './components/App.jsx';

const Head = '<head><meta name="viewport" content="width=device-width, initial-scale=1"/><meta charSet="UTF-8" /><title>Mi App!</title></head>';

const BodyContent = () => <App />

const View = `<html>${Head}<body><div id="app-root">${ReactDOMServer.renderToString(<BodyContent />)}</div><script type="module" src="bundle.js"></script></body></html>`;

export default View;