const api_key = 'd0c3ec8dffc59c765f236e4cc01aa446'
const id_film = 550
const url = 'https://api.themoviedb.org/3/movie/'+ id_film + '?api_key=' + api_key

fetch(url)
    .then(function(response) 
    {   //la réponse de la requête est parsé en JSON () Promise PENDING
        return response.json(); //Promise RESOLVE
    })
    .then(function(json)
    {   //on manipule le json en fonction de ce que l'on veut
        console.log('parsed json', json)
    })
    .catch(function(ex)
    {
        console.log('parsing failed', ex) //Promise REJECTED
    })


module.exports = url