const ratingPage=document.querySelector(".Submit-btn");
const rateAgain=document.querySelector('.submit-again')
const thankyouCard=document.querySelector('.thank-u-state')
const evalPage=document.querySelector('.eval-page')
const btn=document.querySelectorAll('.btn')
const rating=document.getElementById('rateup')

 ratingPage.addEventListener("click", function(){

  thankyouCard.classList.remove('hidden-class');
  evalPage.classList.add('hidden-eval')

});
rateAgain.addEventListener('click', function(){
  evalPage.classList.remove('hidden-eval')
    thankyouCard.classList.add('hidden-class');
})

 btn.forEach((rate) => {
 rate.addEventListener('click', function(){
   rating.innerHTML=rate.innerHTML
 })
 });
