var starWarsFilmList = document.querySelector('h5');
var starWarsFilmList2 = document.querySelector('h6');
var films;
var queryAPI = 0;
console.log('Entry: queryAPI = ', queryAPI);
if (queryAPI == 0) {
    console.log('Entry (queryAPI == 0): queryAPI = ', queryAPI);
    queryAPI = 1;
    fetch('https://swapi.co/api/films') 
    .then(function(response) {   
        return response.json(); 
        console.log(response);
    })
    .then(function(json) {
        console.log("JSON results: ", json.results);
        films = json.results;
        console.log("films results: ", films);
        let x = 0; 
        for(f of films) {
            let listItem = document.createElement('p');
            listItem.innerHTML =  f.title; 
            starWarsFilmList.appendChild(listItem);
        }
        let listItem = document.createElement('br');
        starWarsFilmList.appendChild(listItem);
    });
        
        swMovieButton.addEventListener('click', (event) => {
            let list = document.getElementById("swMovieName");
            console.log('Click: ', swMovieName, ' list:',list);
            list.innerHTML = list.value;
            starWarsFilmList.appendChild(list);
            
        })

    console.log('1st Exit after listing films: queryAPI = ', queryAPI);
} else {
    console.log('Entry (queryAPI != 1): queryAPI = ', queryAPI);
    fetch('https://swapi.co/api/films') 
    .then(function(response) {   
        return response.json(); 
        console.log(response);
    })
    .then(function(json) {
        console.log("JSON results: ", json.results);
        films = json.results;
        console.log("films results: ", films.results);
        let x = 0; 
        for(f of films) {
            let listItem = document.createElement('p');
            console.log('Title=', f.title)
            console.log('URL=', f.url)
            console.log('Director=',f.director)
            console.log('Producer=', f.producer)
            console.log('Episode_id=', f.episode_id)
            console.log('Release_date=', f.release_date)
            console.log('Opening_crawl=', f.opening_crawl)
            listItem.innerHTML =  f.title; 
            starWarsFilmList.appendChild(listItem);
            listItem.innerHTML =  '   URL: ' + f.url;
            starWarsFilmList.appendChild(listItem);
            listItem.innerHTML =  '   Director: ' + f.director;
            starWarsFilmList.appendChild(listItem);
            listItem.innerHTML =  '   Producer: ' + f.producer;
            starWarsFilmList.appendChild(listItem);
            listItem.innerHTML =  '   Episode: ' + f.episode_id;
            starWarsFilmList.appendChild(listItem);
            listItem.innerHTML =  '   Release Date: ' + f.release_date;
            starWarsFilmList.appendChild(listItem);
            x++;
        }

        // addEventListener('click', (f) => {
        //     let list = document.getElementById("btn-film");
        //     list.innerHTML = f.title;
        //     console.log(list.innerHTML);
        //     starWarsFilmList.appendChild(list);
        // })
    });
    console.log('1st Exit within else logic: queryAPI = ', queryAPI);
}
