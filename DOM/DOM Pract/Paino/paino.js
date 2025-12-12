var q = new Audio('./65.mp3');
var w = new Audio('./64.mp3');
var e = new Audio('./53.mp3');
var r = new Audio('./48.mp3');
var t = new Audio('./24.mp3');
var y = new Audio('./65.mp3');
var u = new Audio('./64.mp3');


let keyQ = document.querySelector('#key-q');
let keyW = document.querySelector('#key-w');
let keyE = document.querySelector('#key-e');
let keyR = document.querySelector('#key-r');
let keyT = document.querySelector('#key-t');
let keyY = document.querySelector('#key-y');
let keyU = document.querySelector('#key-u');

keyQ.addEventListener('click',()=>{
    q.play()
})
keyW.addEventListener('click',()=>{
    w.play()
})
keyE.addEventListener('click',(dets)=>{
    e.play()
    console.log(dets);
    
})
keyR.addEventListener('click',(dets)=>{
    r.play()
    console.log(dets);
})
keyT.addEventListener('click',(dets)=>{
    t.play()
    console.log(dets);
})
keyY.addEventListener('click',(dets)=>{
    y.play()
    console.log(dets);
})
keyU.addEventListener('click',(dets)=>{
    u.play()
    console.log(dets);
})
