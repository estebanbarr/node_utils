const atob = require('atob');

const parseJwt = (token) => {
    const payloadBase64Url = token.split('.')[1];
    const payloadBase64 = payloadBase64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(payloadBase64));
}

// Esta funcion sirve para la consola del navegador..
function parseJwtN (token) {
    var payloadBase64Url = token.split('.')[1];
    var payloadBase64 = payloadBase64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(payloadBase64));
}

module.exports = { parseJwt }

