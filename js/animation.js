var salmon = document.getElementById('logo');

var animationon = function (event) {
  event.preventDefault();
  salmon.setAttribute('class', 'animate');
}

salmon.addEventListener('webkitAnimationEnd', function(){
    salmon.removeAttribute('class', 'animate');
}, false);

salmon.addEventListener('click', animationon);
