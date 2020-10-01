const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM\n Is\n Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street \nSomewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Navigation bar:
const nav = document.querySelectorAll("nav a");
nav.href = "/index.html";

//Updating to green individually since the style is not applicable to a whole NodeList, but rather the individual elements.
/* nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green"; */
//I'll loop this below where I add additional navigational items.

// back to content updating:
nav[0].textContent = siteContent["nav"]["nav-item-1"];
nav[1].textContent = siteContent["nav"]["nav-item-2"];
nav[2].textContent = siteContent["nav"]["nav-item-3"];
nav[3].textContent = siteContent["nav"]["nav-item-4"];
nav[4].textContent = siteContent["nav"]["nav-item-5"];
nav[5].textContent = siteContent["nav"]["nav-item-6"];

//adding additional link to Nav bar with appendChild():
const newLink1 = document.createElement("a");
newLink1.textContent = "Coded By";
newLink1.href = "https://github.com/devandapaige";
document.querySelector("nav").appendChild(newLink1);

//adding additional link to Nav bar with prepend():
const newLink2 = document.createElement("a");
newLink2.textContent = "Blog";
newLink2.href = "/original.html";
document.querySelector("nav").prepend(newLink2);

//loop to make all the nav text green:
var x = document.getElementsByTagName("a");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "green";
}

//console.log(nav); // node list updated with all the text content and links back to the index.html for each link.

//Main Header:
const ctaH1 = document.querySelector(".cta h1");
ctaH1.innerText = siteContent["cta"]["h1"];

//Button:
const ctaButton = document.querySelector(".cta button");
ctaButton.innerText = siteContent["cta"]["button"];

//round image in header (only visable in desktop view):
const ctaImg = document.querySelector(".cta img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//main-content headers:
const allH4s = document.querySelectorAll(".text-content h4");
allH4s[0].innerText = siteContent["main-content"]["features-h4"];
allH4s[1].innerText = siteContent["main-content"]["about-h4"];
allH4s[2].innerText = siteContent["main-content"]["services-h4"];
allH4s[3].innerText = siteContent["main-content"]["product-h4"];
allH4s[4].innerText = siteContent["main-content"]["vision-h4"];
//console.log(allH4s)

//main-content paragraphs:
const allps = document.querySelectorAll(".text-content p");
allps[0].innerText = siteContent["main-content"]["features-content"];
allps[1].innerText = siteContent["main-content"]["about-content"];
allps[2].innerText = siteContent["main-content"]["services-content"];
allps[3].innerText = siteContent["main-content"]["product-content"];
allps[4].innerText = siteContent["main-content"]["vision-content"];

//main body image of code snippets:
const mainImg = document.querySelector("#middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
console.log(mainImg);

//Contact: H4 selected first, then the 3 paragraphs.
const contactH4 = document.querySelector(".contact h4");
contactH4.innerText = siteContent["contact"]["contact-h4"];

const contactps = document.querySelectorAll(".contact p");
contactps[0].innerText = siteContent["contact"]["address"];
contactps[1].innerText = siteContent["contact"]["phone"];
contactps[2].innerText = siteContent["contact"]["email"];

const copyright = document.querySelector("footer p");
copyright.innerText = siteContent["footer"]["copyright"];
