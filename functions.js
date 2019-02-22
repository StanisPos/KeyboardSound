'use strict';

(function() {
  var soundKeys = {
    0 : 48,
    1 : 49,
    2 : 50,
    3 : 51,
    4 : 52,
    5 : 53,
    6 : 54,
    7 : 55,
    8 : 56,
    9 : 57,
    A : 65,
    B : 66,
    C : 67,
    D : 68,
    E : 69,
    F : 70,
    G : 71,
    H : 72,
    I : 73,
    J : 74,
    K : 75,
    L : 76,
    M : 77,
    N : 78,
    O : 79,
    P : 80,
    Q : 81,
    R : 82,
    S : 83,
    T : 84,
    U : 85,
    V : 86,
    W : 87,
    X : 88,
    Y : 89,
    Z : 90
  };

  var bodyPage = document.querySelector('body');
  var fieldAudio = document.querySelector('.audio');

  var fragment = document.createDocumentFragment();

  var createAudioElements = function() {
    for(var key in soundKeys) {
      var sound = document.createElement('audio');
      sound.id = '' + key;
      sound.src = 'sounds/' + key + '.mp3';
      sound.preload = 'auto';
      fragment.appendChild(sound);
    }

    fieldAudio.appendChild(fragment);
  };  

  createAudioElements();

  document.addEventListener('keydown', function(evt) {
    for(var key in soundKeys) {
      if(soundKeys[key] === evt.keyCode) {
        evt.preventDefault();
        
        bodyPage.style.backgroundColor = 'hsl(' + soundKeys[key] + ' , 100%' + ' , 50%)';
        document.getElementById('' + key).play();
      }
    }
  });

} ());