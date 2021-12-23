var target = document.querySelector('.nav_col2');

function hideMenu(){
    target.style.right = "-500px";
}
function showMenu(){
    target.style.right = '0px';
}

function destination(){
    window.location = 'destination-moon.html';
}


// window.addEventListener('load', () => {
//     fetch("data.json")
//      .then(response => response.json())
//      .then(json => {
//          LoadMoon(json.destinations[0]);
//          LoadMars(json.destinations[1]);
//      });
//     });

function DataForMoon(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
         LoadMoon(json.destinations[0]);
     });
}

function DataForMars(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
         LoadMars(json.destinations[1]);
     });
}

function DataForEuropa(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
         LoadEuropa(json.destinations[2]);
     });
}

function DataForTitan(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
         LoadTitan(json.destinations[3]);
     });
}

function LoadMoon(data){
    var name = document.querySelector('.moon-name');
    var desc = document.querySelector('.moon-description');
    var distance = document.querySelector('.moon-distance');
    var time = document.querySelector('.moon-travel');
    name.innerHTML = data.name;
    desc.innerHTML = data.description;
    distance.innerHTML = data.distance;
    time.innerHTML = data.travel;
    // console.log(data.description);
}

function LoadMars(data){
    var name = document.querySelector('.mars-name');
    var desc = document.querySelector('.mars-description');
    var distance = document.querySelector('.mars-distance');
    var time = document.querySelector('.mars-travel');
    name.innerHTML = data.name;
    desc.innerHTML = data.description;
    distance.innerHTML = data.distance;
    time.innerHTML = data.travel;
    // console.log(data.description);
}

function LoadEuropa(data){
    var name = document.querySelector('.europa-name');
    var desc = document.querySelector('.europa-description');
    var distance = document.querySelector('.europa-distance');
    var time = document.querySelector('.europa-travel');
    name.innerHTML = data.name;
    desc.innerHTML = data.description;
    distance.innerHTML = data.distance;
    time.innerHTML = data.travel;
    // console.log(data.description);
}

function LoadTitan(data){
    var name = document.querySelector('.titan-name');
    var desc = document.querySelector('.titan-description');
    var distance = document.querySelector('.titan-distance');
    var time = document.querySelector('.titan-travel');
    name.innerHTML = data.name;
    desc.innerHTML = data.description;
    distance.innerHTML = data.distance;
    time.innerHTML = data.travel;
    // console.log(data.description);
}

function DataForCommander(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
        //  console.log(json.crew)
        LoadCommander(json.crew[0]);
     })
}

function LoadCommander(data){
    // console.log(data.name);
    var name = document.querySelector('.crew-name');
    var row = document.querySelector('.crew-role');
    var bio = document.querySelector('.crew-bio');
    
    name.innerHTML = data.name;
    row.innerHTML = data.role;
    bio.innerHTML = data.bio
}

function DataForMissionSpecialist(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
        //  console.log(json.crew)
        LoadMissionSpecialist(json.crew[1]);
     })
}

function LoadMissionSpecialist(data){
    // console.log(data.name);
    var name = document.querySelector('.crew-name');
    var row = document.querySelector('.crew-role');
    var bio = document.querySelector('.crew-bio');
    
    name.innerHTML = data.name;
    row.innerHTML = data.role;
    bio.innerHTML = data.bio
}

function DataForPilot(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
        //  console.log(json.crew)
        LoadPilot(json.crew[2]);
     })
}

function LoadPilot(data){
    // console.log(data.name);
    var name = document.querySelector('.crew-name');
    var row = document.querySelector('.crew-role');
    var bio = document.querySelector('.crew-bio');
    
    name.innerHTML = data.name;
    row.innerHTML = data.role;
    bio.innerHTML = data.bio
}

function DataForFlightEngineer(){
    fetch("data.json")
     .then(response => response.json())
     .then(json => {
        //  console.log(json.crew)
        LoadFlightEngineer(json.crew[3]);
     })
}

function LoadFlightEngineer(data){
    // console.log(data.name);
    var name = document.querySelector('.crew-name');
    var row = document.querySelector('.crew-role');
    var bio = document.querySelector('.crew-bio');
    
    name.innerHTML = data.name;
    row.innerHTML = data.role;
    bio.innerHTML = data.bio;
}
