let ratings = document.querySelectorAll('.rating');
let submit = document.querySelector('a');
let mainContainer = document.querySelector('#main-container');
let resultContainer = document.querySelector('#result-container');
let message = document.querySelector('.message');

for(let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', function() {
    for(let rtng = 0; rtng < ratings.length; rtng++) {
      ratings[rtng].classList.remove('active');
    }
    this.classList.add('active'); 
    console.log(ratings[i].textContent);

    submit.addEventListener('click', function() {
      mainContainer.classList.add('hidden');
      resultContainer.classList.remove('hidden');
      message.textContent = `You selected ${ratings[i].textContent} out of 5`;
    })
  });
};

let getBack = document.querySelector('.arrow-back');
getBack.addEventListener('click', function() {
  mainContainer.classList.remove('hidden');
  resultContainer.classList.add('hidden');
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
});