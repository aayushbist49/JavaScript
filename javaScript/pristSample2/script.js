const clickMe = document.querySelector('.topLeft');
const click2ndMe = document.querySelector('.topRight');
clickMe.addEventListener('click', function(){
  document.querySelector('.explaination').classList.add('showText');
  document.querySelector('.explaination2').classList.remove('showText');
});
click2ndMe.addEventListener('click', function(){
  document.querySelector('.explaination2').classList.add('showText');
  document.querySelector('.explaination').classList.remove('showText');
});