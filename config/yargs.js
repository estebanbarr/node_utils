const argv = require('yargs')
                .option('t', {
                    alias: 'test',
                    describe: 'Modo de prueba',
                    demandOption: false,
                    default: false,
                    type: 'boolean'
                })
                .option('j', {
                    alias: 'jwt',
                    describe: 'JWT Token a parsear',
                    demandOption: false,
                    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                    type: 'string'
                })
                .check((argv, options) => {
                    // if (isNaN(argv.b)) {
                    //     throw 'La base tiene que ser un número...';
                    // }
                    return true;
                })
                .argv;

module.exports = {
    argv
};

