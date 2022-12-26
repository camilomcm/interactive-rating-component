let rating = document.querySelectorAll('.rating')

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', () => {
    if(rating[i].classList.contains('active')) {
      rating[i].classList.remove('active');
    } else {
      rating[i].classList.add('active');
    }
  });
}