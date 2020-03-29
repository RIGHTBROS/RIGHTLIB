// Button 1

document.addEventListener("DOMContentLoaded", function () {
    var el = document.querySelector(".button-bird");
    var text = document.querySelector(".button-bird__text");
    el.addEventListener('click', function () {
        el.classList.toggle('active');

        if (el.classList.contains('active')) {
            console.log('true');
            text.innerHTML = 'DONE';
        } else {
            text.innerHTML = 'SEND';
        }
    });
});


// Button 3 JS

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.rb-button-3'),
        loader = document.querySelector('.rb-loader'),
        check = document.querySelector('.rb-check');

    btn.addEventListener('click', function () {
        loader.classList.add('active');
    });

    loader.addEventListener('animationend', function () {
        check.classList.add('active');
    });
});


// Button 4 JS

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },6000);
  };
  
  var classname = document.getElementsByClassName("button4-button");
  
  for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
  }