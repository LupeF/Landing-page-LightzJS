const moon = document.getElementById('moon-container');
const sun = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const backgroundColor = document.getElementById('night-color');
const featuresColor = document.getElementById('features-container');
const image = document.getElementById('image');
const lightningBolt = document.getElementById('lightning')
const syntaxSymbol= document.getElementById('syntax')
const wand = document.getElementById('wand')
const phone = document.getElementById('phone')

moonIcon.addEventListener('click', (e)=>{
    moonIcon.style.display = 'none';
    sun.style.display = 'block';
    backgroundColor.style.backgroundColor='#343A3D';
    featuresColor.style.backgroundColor='#3D4346';
    image.src = 'assets/hero-dark-mode.png';
    lightningBolt.src = 'assets/icon-lightning-gradient.png';
    syntaxSymbol.src = 'assets/icon-syntax-gradient.png';
    wand.src = 'assets/icon-wand-gradient.png';
    phone.src = 'assets/icon-phone-gradient.png';
})

sun.addEventListener('click', (e)=>{
    sun.style.display = 'none';
    moonIcon.style.display = 'block';
    backgroundColor.style.backgroundColor='#F9F9FA';
    featuresColor.style.backgroundColor='#E1E2E4';
    image.src = 'assets/hero-light-mode.png';
    lightningBolt.src = 'assets/icon-lightning-gray.png';
    syntaxSymbol.src = 'assets/icon-syntax-gray.png';
    wand.src = 'assets/icon-wand-gray.png';
    phone.src = 'assets/icon-phone-gray.png';

})