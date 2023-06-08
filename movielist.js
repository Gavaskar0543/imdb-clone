
let movieList =[];
// Assign the movieList array to a global variable

const APIKEY = 'api_key=da3a66d8d5e7b9b57503a1a79c697b38';
const iMAGEURL = 'https://image.tmdb.org/t/p/w500';
let moviesbox;

const HOMEURL = `https://api.themoviedb.org/3/discover/movie?${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
$.ajax({
    type: "get",
    url: HOMEURL,
    success: function (data) {
      moviesbox =  data.results;
      moviesbox.forEach(element => {
        movieDisplay(element)
      });
      
    }
   
});
function movieDisplay(movie){
  let li = document.createElement('li');
  li.classList.add('col-8', 'col-sm-6', 'col-md-4', 'col-lg-2');

  li.innerHTML = `
  <div  class="d-flex justify-content-between  " style="margin-top:5%;" >
  <div class="row">
  <div class="movie-poste colr"style="height:300px;">
  <a href="moviePage.html?id=${movie.id}"><img src= ${iMAGEURL+movie.poster_path} height="100%%" width="100%" alt="Movie Poster"></a>
</div>
<span class="col movie-title" style="font-size:1.5rem;">${movie.title}</span>
<div class="movie-element-tags col">
  <span class="movie-rating title-yellow">
 
  <i class="fas fa-star"></i> ${movie.vote_average}
</span>
<span><i class="fas fa-heart fa-shake"  id="favmovie-${movie.id}" onclick="favmovie(${movie.id})"></i></span>
</div>
</div>
   </div>`   
/* `movieBox.append(li)` is appending the newly created `li` element to the `movieBox` element. This
means that the `li` element will be added as a child element of the `movieBox` element. */
$("#showMovies").append(li);
}

 
//fav
let favmovie = (movieId) => {
  // Get the specific heart icon element using the movie ID
  const heartIcon = document.getElementById(`favmovie-${movieId}`);

  // Update the heart icon's style or perform any desired action
  //heartIcon.style.backgroundColor = "red";
  if(heartIcon.style.backgroundColor != "red"){
    movieList.push(movieId);
    localStorage.setItem('movies', JSON.stringify(movieList));
    console.log(movieList);
    heartIcon.style.backgroundColor = "red";
  }
  else{
    const index = movieList.indexOf(movieId);
if (index !== -1) {
  movieList.splice(index, 1);
}
    localStorage.setItem('movies', JSON.stringify(movieList));
    console.log(movieList);
    heartIcon.style.backgroundColor = "black";
  }
};







 