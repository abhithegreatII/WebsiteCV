// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    'On this website you\'ll find,',
    'Auf dieser Website finden Sie,',
    'my hobbies,',
    'meine Hobbys,',
    'my Timeline,',
    'meine Zeitleiste,',
    'Infos,',
    'pick a language to see more!',
    'um mehr zu sehen, bitte Sprache wählen!',
  ]

  const el = document.querySelector('.textde')
  const fx = new TextScramble(el)

  
  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1500)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next()



  // ——————————————————————————————————————————————————
  // multilanguage
  // ——————————————————————————————————————————————————


  function setLang(lang) {
    document.getElementsByTagName('html')[0].setAttribute('lang',lang);
  }

  // window.onhashchange = setLang(string(lang));

  function checkurl(lang) {
    if (lang == "infode") {
      topFunction();
      window.location.hash = 'infode';
      setLang("infode");
    } else if (lang == "de") {
      topFunction();
      window.location.hash = 'de';
      setLang("de");
    } else if (lang == "en") {
      topFunction();
      window.location.hash = 'en';
      setLang("en");
    } else if (lang == "infoen") {
      window.location.hash = 'infoen';
      setLang("infoen");
    } else if (lang == "hobbys") {
      window.location.hash = 'hobbys';
      setLang("hobbys");
    } else if (lang == "hobbies") {
      window.location.hash = 'hobbies';
      setLang("hobbies");
    } else if (lang == "choose") {
      window.location.hash = 'home';
      setLang("choose");
  
    }
  }

  var current_hash = window.location.hash;



  function check_hash() {
  
      if ( window.location.hash != current_hash ) {
  
          current_hash = window.location.hash;
          checkurl(current_hash.substr( 1,  current_hash.length));
          page_change( current_hash.substr( 1,  current_hash.length) );
  
      }
  
  }
  hashCheck = setInterval( "check_hash()", 50 );  



  







  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



$(document).keydown(function(e) {
  if (e.keyCode === 37) {
     // Previous
     $(".carousel-control.left").click();
     return false;
  }
  if (e.keyCode === 39) {
     // Next
     $(".carousel-control.right").click();
     return false;
  }
});