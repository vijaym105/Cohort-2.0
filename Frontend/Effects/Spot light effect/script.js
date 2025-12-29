addEventListener("mousemove",(dets)=>{
    document.body.style.setProperty("--x", dets.clientX + 'px')
    document.body.style.setProperty("--y", dets.clientY + 'px')
    console.log(dets);
    
    
})