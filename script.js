"use strict";

const fullName = `Kyle Kohl`
const age = 30
const birthday = `May 4 1990`
let detroitGC = false
let lifeEvents = ["i was born in Flordia", "I have never attended college", "My great great Grandpa was the oldest living person in the world", "i have never graduated but i am hoping to graduate grand circus."]
if(detroitGC){
    console.log(`my name is ${fullName} and I am a student at Grand Circus in Detroit Michigan. I am currently ${age} and my birthday is on ${birthday}`)
}else{
    console.log(`my name is ${fullName} and I am a student at Grand Circus in Grand Rapids Michigan. I am currently ${age} and my birthday is on ${birthday}`)
}

for(let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i])
}

let counter = 0;

while(true){
let randomNumber = Math.floor(Math.random() * 10) + 1;
if(randomNumber !==5){
    counter++;
    console.log(`${randomNumber} !== 5`);
}else{
    counter++
    console.log(`it took ${counter} times to generate`)
    break;

    
}
}



