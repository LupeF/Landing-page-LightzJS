const moon = document.getElementById('moon-container');
const moonIcon = document.getElementById('moon-icon');
const backgroundColor = document.getElementById('night-color');
const featuresColor = document.getElementById('features-container');
const image = document.getElementById('image');
const lightningBolt = document.getElementById('lightning')
const syntaxSymbol= document.getElementById('syntax')
const wand = document.getElementById('wand')
const phone = document.getElementById('phone')

moon.addEventListener('click', (e)=>{
    backgroundColor.style.backgroundColor='#343A3D';
    featuresColor.style.backgroundColor='#3D4346';
    image.src = 'assets/hero-dark-mode.png';
    lightningBolt.src = 'assets/icon-lightning-gradient.png';
    syntaxSymbol.src = 'assets/icon-syntax-gradient.png';
    wand.src = 'assets/icon-wand-gradient.png';
    phone.src = 'assets/icon-phone-gradient.png';
    moonIcon.src ='assets/icon-sun-white.png';
})