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
                    default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJpZyBFc3RlYmFuIiwiZGVzYyI6IkVzIGdyb3NvLCBubyBzZSBwdWVkZSBoYWNlciBuYWRhIGFsIHJlc3BlY3RvIn0.PxL0cV1xNlvaI2NxIGWozApeS-_ATQIyTMxEZpxZNgM',
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

