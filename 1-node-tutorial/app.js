// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>


// package.json - manifest file(stores important info about project/package)
// manual approach(create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm init -y(everything default)
// console.log('Hello World');




// const { readFile } = require('fs');

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }


// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));


// const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//             }
//             if(data) {
//                 resolve(data);
//             }
//         })
//     });
// }
// const start = async () => {
//     try {
//         const first = await readFile('./content/first.txt', 'utf8');
//         const second = await readFile('./content/second.txt', 'utf8');
//         await writeFile('./content/result-mind-grenade.txt', 
//         `THIS IS AWESOME: ${first}, ${second}`)
//         console.log(first, second);
//     } catch (error) {   
//     }
// }
// start();


// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));


// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();
// customEmitter.on('response', (...args) => {
//     console.log(`Data received ${args[0]} ${args[1]}`);
// })
// customEmitter.emit('response', 'John', 21);



// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write('<h1>home page</h1>');
//     res.end();
// });

// server.listen(5000);



