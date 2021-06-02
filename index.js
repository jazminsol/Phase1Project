const urlData = 'https://www.balldontlie.io/api/v1/players';

function getPlayers(){
fetch(urlData)
.then(res => res.json)
.then(playerData => playerData.forEach(renderPlayer))
.catch(error => console.error('Error:', error))
}

function makePlayer(newPlayer){
fetch(urlData, {
method: 'POST',
headers: {'Content-type': 'application/json'
},
body: JSON.stringify(newPlayer)
})
.then(res => res.json)
.then(data => {
    console.log(data)
    renderPlayer(data)
})



// function renderplayerData(playerData){
//     const childDiv = document.createElement('div')
//     childDiv.className= "player-profile"
//     document.querySelector('.player-container').appendChild(Childdiv)

//     let h2 = document.createElement('h2')
//     h2.innerText = playerData.first_name.last_name

//     let img = document.createElement('img')
//     img.src = playerData.

// }
// });

// function setUp() {
//     createButton("submit")
// }
// console.log(setUp)

// function getData() {
//   console.log('hello')
//   fetch('https://www.balldontlie.io/api/v1/players')
//   
//   .then((data) => getData((player) => renderPlayer(player)) )

// } 

// function renderPlayer(player) {
//   console.log(player)
// }
