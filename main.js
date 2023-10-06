function write(text){
    process.stdout.write(text);
}
// for(let i = 0; i<255; i++){
//     write(`\x1B[48;2;${i};${i};${i}m `);
// }

let date = new Date();
write(date.toLocaleTimeString());
setInterval(()=>{
    write('\x1B[8D');
    let date = new Date();
    write(date.toLocaleTimeString());   
}, 1000);