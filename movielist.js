
var movieList =[];

$.ajax({
    type: "get",
    url: "https://api.themoviedb.org/3/movie/200?api_key=da3a66d8d5e7b9b57503a1a79c697b38",
    success: function (data) {
       // console.log(data);
        movieDisplay(data);
    }
   
});


function movieDisplay(movie){
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
    <i class="fa-sharp  fa-heart"></i>
    </span>
    </div>
 </div>
     </div>`   
/* `movieBox.append(li)` is appending the newly created `li` element to the `movieBox` element. This
means that the `li` element will be added as a child element of the `movieBox` element. */
.$("#showmovie").append(li);
 } 


 