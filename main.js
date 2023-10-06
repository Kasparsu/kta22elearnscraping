import axios from "axios";
import * as cheerio from 'cheerio';
import fs from 'fs';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
} 
    await delay(1000);

let url = 'https://tahvel.edu.ee/hois_back/timetableevents/timetableByGroup/14';
let res = await axios.get(url, {
    params: {
        from: '2023-10-06T00:00:00Z',
        studentGroups: 7225,
        thru: '2023-10-06T00:00:00Z'
    }
});
let current = new Date();

res.data.timetableEvents.forEach((event) => {

let eventStart = new Date();
eventStart.setHours(event.timeStart.substring(0,2),event.timeStart.substring(3,5),0); 
let eventEnd = new Date();
eventEnd.setHours(event.timeEnd.substring(0,2),event.timeEnd.substring(3,5),0); 
    if( eventStart < current && eventEnd > current ){
        console.log(`Sa pead olema klassis ${event.rooms[0].roomCode} kus sul on tund ${event.nameEt} õpetaja ${event.teachers[0].name}!`);
    }
});

