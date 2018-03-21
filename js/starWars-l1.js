var starWarsFilmsH4 = document.querySelector('h4');
var starWarsFilmsH5 = document.querySelector('h5');
var starWarsFilmsH6 = document.querySelector('h6');
var films;
var queryAPI;
// console.log('Entry: queryAPI = ', queryAPI);

const url = 'https://swapi.co/api/films'
   queryAPI = 1;
    fetch('https://swapi.co/api/films') 
    .then(function(response) {   
        console.log(response);
        return response.json(); 
    })
    .then(function(json) {
        console.log("JSON results: ", json.results);
        films = json.results;
        console.log("films results: ", films);
        let x = 0; 
        for(f of films) {
            let listItem = document.createElement('p');
            listItem.innerHTML =  f.title; 
            starWarsFilmsH4.appendChild(listItem);
        }
        let listItem = document.createElement('br');
        starWarsFilmsH4.appendChild(listItem);
    });
        
        swMovieButton.addEventListener('click', (event) => {
            queryAPI++;
            let list = document.getElementById("swMovieName");
            console.log('Click: ', swMovieName, ' list:',list.innerText);
            console.log('Entry '+queryAPI+ ' Movie: ', list.value, 'URL: ', f.url);
            let films1 = films[4];
            console.log("films results: ", films1);
            let listItem = document.createElement('p');
            listItem.innerHTML =  films1.title; 
            starWarsFilmsH5.appendChild(listItem);
            listItem.innerHTML =  '   URL: ' + films1.url;
            starWarsFilmsH5.appendChild(listItem);
            listItem.innerHTML =  '   Director: ' + films1.director;
            starWarsFilmsH5.appendChild(listItem);
            listItem.innerHTML =  '   Producer: ' + films1.producer;
            starWarsFilmsH5.appendChild(listItem);
            listItem.innerHTML =  films1.opening_crawl;
            starWarsFilmsH6.appendChild(listItem);
            listItem.innerHTML =  '   Episode: ' + films1.opening_crawl;
            starWarsFilmsH5.appendChild(listItem);
            listItem.innerHTML =  '   Release Date: ' + films1.release_date;
            starWarsFilmsH5.appendChild(listItem);
         });
