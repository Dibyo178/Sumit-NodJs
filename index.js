// const people= require('./people');

// console.log(people.people)
// console.log(people.a)
// people.test()

// console.log(global)

// const path = require('path');

// const myPath='C:/web development/projects/Revision projects/Node js/index.js';

// // console.log(path.basename(myPath));

// // console.log(path.dirname(myPath));
// // console.log(path.extname(myPath));   extname= means extension name..

// console.log(path.parse(myPath));

// const os= require('os');
// console.log(os.cpus())

const fs = require("fs");

// Syncronus way..

// fs.writeFileSync('myText.txt','Hello programers');
// fs.appendFileSync('myText.txt',"How are you!");

// Asyncronus way

//  fs.writeFile('myText.txt','DEBARATI I LOVE U',(err, data)=>{

//     //  console.log(data);
//  });
//  fs.appendFile('myText.txt'," .I LOVE U SO MUCH !",(err, data)=>{
//     //  console.log(data);
//  });
//  console.log('kmon acho')

// const data=fs.readFileSync('myText.txt');

// console.log(data.toString());

// Asyncronus way

// fs.readFile('myText.txt',(err,data)=>{
//     console.log(data.toString());
// })
// console.log('I Love You Debarati. I Love so much :) :)')

const EventEmitter = require("events"); //EventEmitter 1 ta class sei jonno E diye start oice.

// const emitter = new EventEmitter();

const School = require("./school");

// eventListener addd
// emitter.on('bellRing',({period,txt})=>{
//     console.log(`we need run because ${period} ${txt}!`)
// })

//    new object create for School class..
const school = new School();

school.on("bellRing", ({ period, txt }) => {
  console.log(`we need run because ${period} ${txt}!`);
});

school.startPeriod();

// // raise an event
// setTimeout(() => {
//     emitter.emit('bellRing',{
//         period:'first',
//         txt:'ended'
//     });
// }, 2000);
