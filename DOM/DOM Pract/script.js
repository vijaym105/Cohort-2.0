let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click', ()=>{
    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    let div = document.createElement('div');;
    div.style.height = '60px';
    div.style.width = '60px';
    div.style.position = 'absolute';
    div.style.top = y+'%';
    div.style.left = x+'%';
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    
    
    box.appendChild(div);
    
})