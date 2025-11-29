// For box elem
// let btn = document.querySelector('button');
// let box = document.querySelector('#box');

// btn.addEventListener('click', ()=>{

//     let x = Math.floor(Math.random()*100)
//     let y = Math.floor(Math.random()*100)
//     let c1 = Math.floor(Math.random()*256)
//     let c2 = Math.floor(Math.random()*256)
//     let c3 = Math.floor(Math.random()*256)
//     let div = document.createElement('div');;

//     div.style.height = '60px';
//     div.style.width = '60px';
//     div.style.position = 'absolute';
//     div.style.top = y+'%';
//     div.style.left = x+'%';
//     div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

//     box.appendChild(div);
// })

// For text elem
// let btn = document.querySelector('button');
// let box = document.querySelector('#box');

// btn.addEventListener('click',()=>{
//     let arr = ["Hey Vijay","Thala Bhaii","Rabada","Euuuuu","ChanaDaal","DOMMMM bhaiiii"];
//     let check = arr[Math.floor(Math.random()*arr.length)] 
//     let h1 = document.createElement('h1');
//     let x  = Math.floor(Math.random()*80)
//     let y  = Math.floor(Math.random()*80)
//     let c1 = Math.floor(Math.random()*256)
//     let c2 = Math.floor(Math.random()*256)
//     let c3 = Math.floor(Math.random()*256)
//     let rot = Math.floor(Math.random()*80);
//     let size = Math.floor(Math.random()*3);

//     h1.style.position = 'absolute';
//     h1.style.left = x+'%'
//     h1.style.top = y+'%'
//     h1.style.rotate = rot+'deg';
//     h1.style.scale = size;
//     h1.innerHTML = check;
//     h1.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    
//     box.appendChild(h1)
// })


let inner = document.querySelector('#inner');
let prog = document.querySelector('#progress');
let btn = document.querySelector('button');
let h1 = document.querySelector('h2');
let counter = 0;
btn.addEventListener('click',()=>{
    // 50 + math.rdn vr floor kela * 50 
    let num = 50+Math.floor(Math.random()*50);
    console.log(num);
    
   btn.style.pointerEvents= "none"
   let cn = setInterval(()=>{
    counter++;
    h1.innerHTML = `${counter}`+"%"
    prog.style.width = `${counter}%`
   },30)
   setTimeout(()=>{
   clearInterval(cn)
   btn.style.opacity = 0.3
   btn.innerHTML = "Downloaded"
   console.log("File is downloaded in",num/10+"Seconds");
   
   },3000)
})