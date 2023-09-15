const toShow = document.getElementById('toShow');
toShow.addEventListener('click', function() {
  const shows = document.querySelectorAll('.shows');
  shows.forEach(show => {
    show.classList.add('label');
  });
});
const toHide = document.getElementById('toHide');
toHide.addEventListener('click', function() {
  const shows = document.querySelectorAll('.shows');
  shows.forEach(show => {
    show.classList.remove('label');
  });
});