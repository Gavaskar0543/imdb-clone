 //fetch('https://api.themoviedb.org/3/movie/551?api_key=da3a66d8d5e7b9b57503a1a79c697b38')
//api_key=da3a66d8d5e7b9b57503a1a79c697b38
var movieList;
const movieId =  new URLSearchParams(window.location.search).get('id');
console.log(movieId);
 fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=da3a66d8d5e7b9b57503a1a79c697b38`)
.then(response =>{
    return response.json();
})
.then(data =>{
    getMovies(data);
})
.catch(error=>{
    console.log('error',error);
})

function getMovies(movie){
    console.log(movie);
}
/* function apiCall(url){
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
        moviesArray.forEach(movie => movieRender(movie));
    }
}*/