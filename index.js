//selecting inputbox
// this is the image url 
const IMAGEURL = 'https://image.tmdb.org/t/p/w500';
/* The above code is declaring variables and assigning them to the HTML elements. */
const movieName = document.getElementById('text-box');
const searchBtn = document.getElementById('search-btn');
let movieBox = document.getElementById('showMovies');
var movieRequest = "";

//onclick btn
/* An event listener that listens for a click on the search button. When the button is clicked, it
takes the value of the input field and passes it to the searchMovie function. */
searchBtn.onclick = () =>{
    movieRequest = movieName.value;
    searchMovie(movieRequest);
}

/**
 * The function takes in a string as an argument and uses that string to make an API call to the Movie
 * Database API.
 * @param input - the value of the input field
 */
function searchMovie(input){
    
let inputurl =`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=da3a66d8d5e7b9b57503a1a79c697b38`;
apiCall(inputurl);
}

/**
 * It takes a url as an argument, makes an API call to the url, parses the response to JSON, and then
 * loops through the JSON data and logs each movie to the console.
 * @param url - The URL of the API you want to call.
 */

function apiCall(url){
    const x = new XMLHttpRequest();
    x.open('get',url);
    x.send();
    x.onload = function(){
        var res = x.response;
       
        // resp to JSON data 
        var conJson = JSON.parse(res);
        // array of movies 
       var  moviesArray = conJson.results;
        // create the movie cards here 
       //Remove duplicates from moviesArray
        var uniqueMoviesArray = moviesArray.filter((movie, index, self) =>
          index === self.findIndex(m => (
            m.id === movie.id
          ))
        );

        uniqueMoviesArray.forEach(movie => movieRender(movie));
          }
        }


function movieRender(movie){
   let li = document.createElement('li');
   li.classList.add('col-2');
   li.innerHTML = `
   <div  class="d-flex justify-content-between  bg-black" style="margin-top:5%;" >
   <div class="row">
   <div class="movie-poste colr"style="height:300px;">
   <a href="moviePage.html?id=${movie.id}"><img src= ${IMAGEURL+movie.poster_path} height="100%%" width="100%" alt="Movie Poster"></a>
</div>
<span class="col movie-title" style="font-size:1.5rem;">${movie.title}</span>
<div class="movie-element-tags col">
   <span class="movie-rating title-yellow">
   <i class="fas fa-star"></i> ${movie.vote_average} 
   </span>
   </div>
</div>
    </div>`   
movieBox.append(li);
}
   






 //fetch('https://api.themoviedb.org/3/movie/551?api_key=da3a66d8d5e7b9b57503a1a79c697b38')