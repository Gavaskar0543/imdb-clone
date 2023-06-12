 //fetch('https://api.themoviedb.org/3/movie/551?api_key=da3a66d8d5e7b9b57503a1a79c697b38')
//api_key=da3a66d8d5e7b9b57503a1a79c697b38
var movieList;
/* This line of code is getting the value of the 'id' parameter from the URL query string of the
current page and assigning it to a constant variable called 'movieId'. The URLSearchParams() method
is used to extract the query string parameters from the URL, and the .get() method is used to
retrieve the value of the 'id' parameter. */
const movieId =  new URLSearchParams(window.location.search).get('id');
console.log(movieId);
const iMAGEURL = 'https://image.tmdb.org/t/p/w500';

$.ajax({
    type: "get",
    url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=da3a66d8d5e7b9b57503a1a79c697b38`,
    success: function (data) {
        console.log(data);
        movieDisplay(data);
    }
});

function movieDisplay(movie) {
    let div = document.createElement('div');
    div.classList.add('movie-display');
    
    div.innerHTML =`
    
    <div style="postion:absolute">
    <img src= ${iMAGEURL+movie.poster_path}  width="100%" alt="Movie Poster">

    </div>

    <div class="container"style="backgorund:${iMAGEURL+movie.backdrop_path}; width:50%;float:right;margin-top:-40%;margin-left:-10%;">
    <h1 class="title-yellow">${movie.title}</h1>
    <h1>Description</h1>
     <p>${movie.overview}</p>
     <h1>Rating:<span class="title-yellow">${movie.vote_average}</h1>
   
    <h1>Content: <span class="title-yellow">${movie.adult ? "A 18+" :'U 13+'}
    </span></h1>
    <h1>Language:<span class="title-yellow">${movie.original_language
    }</span></h1>
    <h1>Release Date:<span class="title-yellow">${movie.release_date}</span></h1>
    </div>
    </div>
   `
    $('#movie-show').append(div);
  }
  
