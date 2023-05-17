 //fetch('https://api.themoviedb.org/3/movie/551?api_key=da3a66d8d5e7b9b57503a1a79c697b38')
//api_key=da3a66d8d5e7b9b57503a1a79c697b38
var movieList;
/* This line of code is getting the value of the 'id' parameter from the URL query string of the
current page and assigning it to a constant variable called 'movieId'. The URLSearchParams() method
is used to extract the query string parameters from the URL, and the .get() method is used to
retrieve the value of the 'id' parameter. */
const movieId =  new URLSearchParams(window.location.search).get('id');
console.log(movieId);
 
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
let div = document.createElement('div');
  div.classList.add('movie-show');
  div.innerHTML = `
  <h1 style="color:white">${movie.title}</h1>`
play.append(div);
 } 