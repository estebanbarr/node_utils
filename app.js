const { argv } = require('./config/yargs');

const atob = require('atob');

const parseJwt = (token) => {
    const payloadBase64Url = token.split('.')[1];
    const payloadBase64 = payloadBase64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(payloadBase64));
}

console.log('==================== UTIL ====================');

if (argv.t) {
    console.log('  ================== TEST ==================');
    console.log('    Bienvenido al modo de prueba de Utils');
}

console.log('');

const jwt = argv.j;

console.log('Descifrando JWT de prueba:');
console.log(`[${ jwt }]`);

jwtParsed = parseJwt(jwt);

console.log('Resultado:');
console.log(jwtParsed);

console.log('');

if (argv.t) {
    console.log('    Fin del modo de pruebas, esperabas');
    console.log('    tests automaticos verdad?? Pos no');
    console.log('  ================== TEST ==================');
}
console.log('==================== UTIL ====================');

