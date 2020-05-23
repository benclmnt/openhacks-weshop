import React from 'react';

import Iphone from '../assets/iphone.png'

function Home() {
  React.useEffect(() => {
    var words = document.querySelectorAll('.word');
    console.log(words);
    words.forEach(function(word) {
      var letters = word.textContent.split('');
      word.textContent = '';
      letters.forEach(function(letter) {
        var span = document.createElement('span');
        if (word.getAttribute('color'))
          span.style.setProperty('color', word.getAttribute('color'));
        if (letter == ' ') {
          span.textContent = ' ';
          span.className = 'letter';
          word.append(span);
        } else {
          span.textContent = letter;
          span.className = 'letter';
          word.append(span);
        }
      });
    });
    var currentWordIndex = 0;
    var maxWordIndex = words.length - 1;
    words[currentWordIndex].style.opacity = '1';
    var rotateText = function() {
      var currentWord = words[currentWordIndex];
      var nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];
      // rotate out letters of current word
      Array.from(currentWord.children).forEach(function(letter, i) {
        setTimeout(function() {
          letter.className = 'letter out';
        }, i * 40);
      });
      // reveal and rotate in letters of next word
      nextWord.style.opacity = '1';
      Array.from(nextWord.children).forEach(function(letter, i) {
        letter.className = 'letter behind';
        setTimeout(function() {
          letter.className = 'letter in';
        }, 500 + i * 20);
      });
      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };
    const timer = setInterval(rotateText, 3000);
    return () => clearInterval(timer);
  },[]);

  return (
    <div className="home rotating-text">
      <h1 className="mobile-hide" style={{ fontSize: 45, color: 'white' }}>
        We are 
      </h1>
      <h1>
        <span className="word col1" style={{ fontSize: 45, color: 'yellow' }}>
          WeShop
        </span>
        <span className="word col2" style={{ fontSize: 45, color: 'orange' }}>
          fighting Covid-19.
        </span>
        <span className="word col3" style={{ fontSize: 45, color: 'limegreen' }}>
          shopping made fun.
        </span>
        <span className="word col4" style={{ fontSize: 45, color: 'mediumblue' }}>
          a service for the consumer.
        </span>
        <span>
          <img
            src={Iphone}
          />
        </span>
      </h1>
    </div>
  );
}

export default Home;
