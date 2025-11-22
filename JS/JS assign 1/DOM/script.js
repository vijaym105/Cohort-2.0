const iplTeams = [
    { name: "Chennai Super Kings", team: "CSK", primaryColor: "Yellow", secondaryColor: "Blue", captain: "Thala" },
    { name: "Mumbai Indians", team: "MI", primaryColor: "Blue", secondaryColor: "Gold", captain: "VadaPav" },
    { name: "Royal Challengers Bangalore", team: "RCB", primaryColor: "Red", secondaryColor: "Black", captain: "Whyraat kohli" },
    { name: "Kolkata Knight Riders", team: "KKR", primaryColor: "Purple", secondaryColor: "Gold", captain: "Shreyas Iyer" },
    { name: "Rajasthan Royals", team: "RR", primaryColor: "Pink", secondaryColor: "Blue", captain: "Sanju Samson" },
    { name: "Sunrisers Hyderabad", team: "SRH", primaryColor: "Orange", secondaryColor: "Black", captain: "Pat Cummins" },
    { name: "Gujarat Titans", team: "GT", primaryColor: "Blue", secondaryColor: "Gold", captain: "Shubman Gill" },
    { name: "Lucknow Super Giants", team: "LSG", primaryColor: "Purple", secondaryColor: "Gold", captain: "KL Rahul" },
    { name: "Punjab Kings", team: "PBKS", primaryColor: "Red", secondaryColor: "Gold", captain: "Shikhar Dhawan" },
    { name: "Delhi Capitals", team: "DC", primaryColor: "Blue", secondaryColor: "Red", captain: "Rishabh Pant" }
];
iplTeams.forEach(team => {
    team.primaryColor = team.primaryColor.toLowerCase();
    team.secondaryColor = team.secondaryColor.toLowerCase();
})

let btn = document.querySelector('button');
let box = document.querySelector('#box');
let h1 = document.querySelector('h1');
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");

btn.addEventListener('click', ()=>{
    let ch = iplTeams.length;
    let rnd = iplTeams[Math.floor(Math.random()*ch)]
    console.log(rnd);
    
    h1.innerHTML = rnd.team;
    h3.innerHTML = rnd.name;
    h4.innerHTML = rnd.captain;

    box.style.backgroundColor = rnd.primaryColor;
    h3.style.color = rnd.secondaryColor;
    h4.style.color = rnd.secondaryColor;
    h1.style.color = rnd.secondaryColor;
})
