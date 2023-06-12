


const iMAGEURL = 'https://image.tmdb.org/t/p/w500';

let movieplay = (movie)=>{
    let li = document.createElement('li');
    li.classList.add('col-8', 'col-sm-6', 'col-md-4', 'col-lg-2');
    li.innerHTML = `
    
    <div style="margin-left:10%;">
    <a href="moviePage.html?id=${movie.id}"><img src= ${iMAGEURL+movie.poster_path} width="100" alt="Movie Poster"></a>
 </div>
 <span class="col movie-title" style="font-size:1.5rem;">${movie.title}</span>
 <span class="movie-rating title-yellow">
   
 <i class="fas fa-star"></i> ${movie.vote_average}
</span>
<div class="border" style="color:red;cursor:pointer;">
  <p onclick="removeFav(${movie.id})"> REMOVE</p>
</div>
 `
 
    $("#showMovie").append(li);
}

const removeFav = (movieId) => {
    const movieList = JSON.parse(localStorage.getItem('movies'));
    const index = movieList.indexOf(movieId);
    
    if (index !== -1) {
      // Remove the movie ID from the list
      movieList.splice(index, 1);
      localStorage.setItem('movies', JSON.stringify(movieList));
      
      // Remove the movie element from the DOM
      const movieElement = document.getElementById(`movie-${movieId}`);
      if (movieElement) {
        movieElement.remove();
      }
    }
   
     
      location.reload();
  };
  
      

let start = () =>{
const storedMovieList = JSON.parse(localStorage.getItem('movies'));
console.log( "moveies",storedMovieList);
storedMovieList.forEach(element => {
    $.ajax({
        type: "get",
        url: `https://api.themoviedb.org/3/movie/${element}?api_key=da3a66d8d5e7b9b57503a1a79c697b38`,
        
        success: function (response) {
            movieplay(response);
        }
    });
});
};
start();