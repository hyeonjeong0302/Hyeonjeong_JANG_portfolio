const movieList = document.querySelectorAll('.movie_btns div');
const movie = document.querySelectorAll('.movie_ex .movie')
let activeMovie = '';

for (let i = 0; i < movieList.length; i++) {
  movieList[i].querySelector('.movie_btn').addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < movieList.length; j++) {
      movieList[j].classList.remove('active');

      movie[j].style.display = 'none';
    }

    this.parentNode.classList.add('active');

    activeMovie = this.getAttribute('href');
    document.querySelector(activeMovie).style.display = 'block';
  });
}