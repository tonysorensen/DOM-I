const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Get all 'a' tags, make them into an array and add the text? look at codepen for iterating...
const links = document.getElementsByTagName('a')
links[0].textContent = 'Services'
links[1].textContent = 'Product'
links[2].textContent = 'Vision'
links[3].textContent = 'Features'
links[4].textContent = 'About'
links[5].textContent = 'Contact'

// add text to h1, add <br> and add button text to .cta-img figure out how to add line break
const lineBreak = document.createElement('BR')

const header = document.querySelector('h1')
// header.insertAdjacentElement("afterbegin", '<br>test</br>')
header.innerText ='DOM Is Awesome'
const startButton = document.getElementsByTagName('button')
startButton.innerText = 'Get Started'
startButton.fontSize ='16px'
console.log(startButton)



//add source for #cta-image
const topImg = document.getElementById("cta-img");
topImg.src="img/header-img.png";


//add text to 2 h4's and 2 p's in .top-content.text-content
const topContentHeads = document.getElementsByTagName('h4');
topContentHeads[0].textContent = 'Features'
topContentHeads[1].textContent = 'About';
const topContentPara = document.getElementsByTagName ('p');
topContentPara[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
topContentPara[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, ininterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//add source to .middle-img
const midImg = document.getElementById ('middle-img')
midImg.src="img/mid-page-accent.jpg"



//add text to 2 h4's and 2 p's in .bottom-content.text-content

//add text to h4 and p's in .contact

//add text to footer p








