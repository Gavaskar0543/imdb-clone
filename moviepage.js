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

function movieDisplay(movie){
   let play = $("#movie-play");
   let genres = movie.genres;
let div = document.createElement('div');
  div.classList.add('movie-show');
  div.innerHTML = `
  <div style="color:white;position:relative; height:10%; width:90%;margin-top:5%; margin-left:5%; border:1px solid white;">
  <h1 style="color:white">${movie.title}</h1>
  <img src="${iMAGEURL+movie.poster_path}" alt="img" height="100%" width="30%" >
<div style="display:flex;margin-top:-40%; margin-left:35%;flex-direction:column;position:absolute; width:60%;">
<h3>Overview</h3>
<p>${movie.overview}</p>
<h3>Release Date-${movie.release_date}</h3></div> </div>   `  
play.append(div);
 } 