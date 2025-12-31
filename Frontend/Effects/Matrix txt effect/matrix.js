let txt = document.querySelector('h3');
let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let og = txt.innerHTML;
let count = 0;
txt.addEventListener("mouseenter",()=>{
    setInterval(()=>{
    let sep = og.split('').map((ch, index)=>{
        if(index < count){
            return ch
        }
       return char.split("") [Math.floor(Math.random()*53)]
    }).join("")

    txt.innerHTML = sep
    count += 0.25
    },30)
    
})

