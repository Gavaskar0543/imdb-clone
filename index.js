//selecting inputbox
//const APIKEY = 'api_key=da3a66d8d5e7b9b57503a1a79c697b38';

// this is the image url 
/* The above code is declaring variables and assigning them to the HTML elements. */
var moviebox = (function(){

const movieName = document.getElementById('text-box');
const searchBtn = document.getElementById('search-btn');
let movieBox = document.getElementById('showMovies');
var movieRequest = "";

//onclick btn
/* An event listener that listens for a click on the search button. When the button is clicked, it
takes the value of the input field and passes it to the searchMovie function. */
searchBtn.onclick = () =>{
    movieRequest = movieName.value;
    console.log("working");
    searchMovies(movieRequest);
    movieBox.innerHTML = " ";
}



let searchMovies = (movie) =>{
  $.ajax({
    type: "get",
    url: `https://api.themoviedb.org/3/search/movie?query=${movie}&${APIKEY}`,
    success: function (response) {
      let data = response.results;
      data.forEach(element => {
      console.log(element)
        movieRender(element);
      });
    }
  });
}






function movieRender(movie){
   let li = document.createElement('li');
   li.classList.add('col-2');
   li.innerHTML = `
   <div  class="d-flex justify-content-between  bg-black" style="margin-top:5%;" >
   <div class="row">
   <div class="movie-poste colr"style="height:300px;">
   <a href="moviePage.html?id=${movie.id}"><img src= ${iMAGEURL+movie.poster_path} height="100%%" width="100%" alt="Movie Poster"></a>
   </div><span class="col movie-title" style="font-size:1.5rem;">${movie.title}</span>
<div class="movie-element-tags col">
   <span class="movie-rating title-yellow">
   <i class="fas fa-star"></i> ${movie.vote_average} 
   </span>
   </div>
</div>
    </div>`   
movieBox.append(li);
}
   




return{
  searchMoives,
  movieRender,
    }
  })();
  moviebox.searchMoives();

 //fetch('https://api.themoviedb.org/3/movie/551?api_key=da3a66d8d5e7b9b57503a1a79c697b38')