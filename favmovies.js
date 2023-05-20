


const iMAGEURL = 'https://image.tmdb.org/t/p/w500';

let movieplay = (movie)=>{
    let li = document.createElement('li');
    li.classList.add('col-6');
    li.innerHTML = `
    
    <div style="margin-left:10%;">
    <a href="moviePage.html?id=${movie.id}"><img src= ${iMAGEURL+movie.poster_path} width="100" alt="Movie Poster"></a>
 </div>
 <span class="col movie-title" style="font-size:1.5rem;">${movie.title}</span>
 <span class="movie-rating title-yellow">
   
 <i class="fas fa-star"></i> ${movie.vote_average}
</span>
 `
 
    $("#showMovie").append(li);
}
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