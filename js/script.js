let ratings = document.querySelectorAll('.rating');

// ratings.forEach(rating => {
//   rating.addEventListener('click', function() {
//     ratings.forEach(rtng => rtng.classList.remove('active'));
//     this.classList.add('active');
//     finalRating = rating.textContent;
//     console.log(finalRating);
//   });
// });

// export let finalRating;

for(let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', function() {
    let finalRating;
    for(let rtng = 0; rtng < ratings.length; rtng++) {
      ratings[rtng].classList.remove('active');
    }
    this.classList.add('active');
    finalRating = ratings[i].textContent;
  });
};
