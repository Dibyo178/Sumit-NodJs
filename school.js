const EventEmitter = require('events');  //EventEmitter 1 ta class sei jonno E diye start oice.

// const emitter = new EventEmitter();


class School extends EventEmitter{
   startPeriod(){
        console.log('School is start')
     
     
        // raise an event
     setTimeout(() => {
         this.emit('bellRing',{
             period:'first',
             txt:'ended'
         });
     }, 2000);
     }
     
}

// function startPeriod(){
//    console.log('School is start')


//    // raise an event
// setTimeout(() => {
//     emitter.emit('bellRing',{
//         period:'first',
//         txt:'ended'
//     });
// }, 2000);
// }



module.exports = School;


