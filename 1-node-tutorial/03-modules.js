// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require('./04-names');
const sayHi = require('./05-utils');
require('./07-mind-grenade');
sayHi('susan');
sayHi(john);
sayHi(peter);