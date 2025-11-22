let btn = document.querySelector('button');
let box = document.querySelector('#box');

btn.addEventListener('click', ()=>{
   let col1 = Math.random()*256;
   let col2 = Math.random()*256;
   let col3 = Math.random()*256;

   box.style.backgroundColor = `rgb(${col1}, ${col2}, ${col3} )`
})
