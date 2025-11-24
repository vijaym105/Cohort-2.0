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

let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click',()=>{
    let arr = ["Hey Vijay","Thala Bhaii","Rabada","Euuuuu","ChanaDaal","DOMMMM bhaiiii"];
    let check = arr[Math.floor(Math.random()*arr.length)]
    let h1 = document.createElement('h1');
    let x  = Math.floor(Math.random()*80)
    let y  = Math.floor(Math.random()*80)
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let rot = Math.floor(Math.random()*80);
    let size = Math.floor(Math.random()*3);

    h1.style.position = 'absolute';
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = rot+'deg';
    h1.style.scale = size;
    h1.innerHTML = check;
    h1.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    
    
    box.appendChild(h1)

    
    
})
