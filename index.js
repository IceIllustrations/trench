let isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if (window.innerHeight > window.innerWidth && !window.location.href.endsWith("mobile.html")) {
window.location.replace("mobile.html");
};

if (window.innerWidth > 1600 && window.location.href.endsWith("index.html")) {
document.getElementById("rectsvg").innerHTML = `<path d="M7294.73,0C7282.55,0 7270.41,-0.126 7258.34,-0.378L7258.34,0L6937.82,0L6460.69,0L892.104,0C394.29,18.043 0.021,247.929 0.021,528.468L0.026,528.472L0.004,528.461L0.004,9000L8250,9000L8250,26.401L8250,0.002L7294.73,0.002L7294.73,0Z" style="fill:rgb(0,96,255);"/>`
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', () => {
vw = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vw', `${vw}px`);
});