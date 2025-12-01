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

// Day 45 Dom task Download btn
// let inner = document.querySelector('#inner');
// let prog = document.querySelector('#progress');
// let btn = document.querySelector('button');
// let h1 = document.querySelector('h2');
// let counter = 0;
// btn.addEventListener('click',()=>{
//     let num = 50+Math.floor(Math.random()*50);

//     btn.style.pointerEvents= "none"
//     let cn = setInterval(()=>{
//     counter++;
//     h1.innerHTML = `${counter}`+"%"
//     prog.style.width = `${counter}%`
//    },30)

//    setTimeout(()=>{
//    clearInterval(cn)
//    btn.style.opacity = 0.3
//    btn.innerHTML = "Downloaded"
//    console.log("File is downloaded in",num/10+"Seconds");
//    },3000)
// })

// let icn = document.querySelector('i');
// let img = document.querySelector('img');
// let card = document.querySelector('#card');

// img.addEventListener('dblclick',()=>{
//     icn.style.transform = "scale(2)"
//     icn.style.opacity = 1
//     icn.style.color = "red"

// })

// const cards = [
//   {
//     img: "https://picsum.photos/300/200?random=1",
//     name: "John Carter",
//     about: "Frontend developer who loves building clean UI components."
//   },
//   {
//     img: "https://picsum.photos/300/200?random=2",
//     name: "Alicia Gomez",
//     about: "Digital marketer specializing in branding and SEO strategy."
//   },
//   {
//     img: "https://picsum.photos/300/200?random=3",
//     name: "Michael Lee",
//     about: "Full-stack engineer passionate about cloud and automation."
//   },
//   {
//     img: "https://picsum.photos/300/200?random=4",
//     name: "Sara Patel",
//     about: "UI/UX designer who enjoys crafting intuitive user experiences."
//   },
//   {
//     img: "https://picsum.photos/300/200?random=5",
//     name: "David Kim",
//     about: "Data analyst focused on insights, dashboards and storytelling."
//   }
// ];
// let sum = ''
// cards.forEach((elem)=>{
//     sum = sum + `<div id="card">
//     <img src="${elem.img}" alt="Not Found">
//     <h2>${elem.name}</h2>
//     <h4>${elem.about}</h4>
//    </div>`
    
// })

// let box = document.querySelector('#box');
// box.innerHTML = sum;

let cursor = document.querySelector('#cursor');
let box = document.querySelector("#box")

window.addEventListener('mousemove',(dets)=>{
    cursor.style.top = dets.y+'px'
    cursor.style.left = dets.x + 'px'
    console.log(dets);
})

