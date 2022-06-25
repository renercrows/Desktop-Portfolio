const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
  navLogo.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active');
  navLogo.classList.toggle('active');
}));

const workInfo = [
  {
    img: 'images/Snapshoot.png',
    closeImg: 'images/Enabled.png',
    sourceImg: 'images/Icon1.png',
    sourceImg2: 'images/Icon2.png',
    title: 'Multi-Post Stories Gain+Glory',
    title2: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'JavaScript'],
    lan: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },

  {
    img: 'images/Snapshoot.png',
    closeImg: 'images/Enabled.png',
    sourceImg: 'images/Icon1.png',
    sourceImg2: 'images/Icon2.png',
    title: 'Multi-Post Stories Gain+Glory',
    title2: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'JavaScript'],
    lan: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },

  {
    img: 'images/Snapshoot.png',
    closeImg: 'images/Enabled.png',
    sourceImg: 'images/Icon1.png',
    sourceImg2: 'images/Icon2.png',
    title: 'Multi-Post Stories Gain+Glory',
    title2: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'JavaScript'],
    lan: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },

  {
    img: 'images/Snapshoot.png',
    closeImg: 'images/Enabled.png',
    sourceImg: 'images/Icon1.png',
    sourceImg2: 'images/Icon2.png',
    title: 'Multi-Post Stories Gain+Glory',
    title2: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'JavaScript'],
    lan: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },

  {
    img: 'images/Snapshoot.png',
    closeImg: 'images/Enabled.png',
    sourceImg: 'images/Icon1.png',
    sourceImg2: 'images/Icon2.png',
    title: 'Multi-Post Stories Gain+Glory',
    title2: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'JavaScript'],
    lan: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },

  {
    img: 'images/Snapshoot.png',
    closeImg: 'images/Enabled.png',
    sourceImg: 'images/Icon1.png',
    sourceImg2: 'images/Icon2.png',
    title: 'Multi-Post Stories Gain+Glory',
    title2: 'Keeping track of hundreds of components',
    languages: ['Ruby on rails', 'css', 'JavaScript'],
    lan: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    seelive: 'link-to-other-ptoject',
    linkCode: 'link-to-the-repository',
  },
];

// This part will create the variables for cards
const mainCard = document.querySelector('.card');
const createCards = (num) => {
  const cards1 = document.createElement('div');
  cards1.classList.add('box', 'cards1');
  const blank = document.createElement('div');
  blank.classList.add('blank');
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('cardscontainer');
  const p = document.createElement('p');
  p.classList.add('cardtitle');
  p.textContent = `${num.title}`;
  cardContainer.appendChild(p);
  const ul = document.createElement('ul');
  ul.classList.add('ul1');
  const ruby2 = document.createElement('li');
  ruby2.classList.add('ruby2');
  const css0 = document.createElement('li');
  css0.classList.add('css0');
  const java0 = document.createElement('li');
  java0.classList.add('java0');
  const html0 = document.createElement('li');
  html0.classList.add('html0');

  for (let i = 0; i < (num.languages).length; i += 1) {
    const liCard2 = document.createElement('li');
    liCard2.classList.add('list2');
    liCard2.textContent = `${num.languages[i]}`;
    ul.appendChild(liCard2);
    ul.appendChild(ruby2);
    ul.appendChild(css0);
    ul.appendChild(java0);
    ul.appendChild(html0);
  }

  for (let i = 0; i < (num.lan).length; i += 1) {
    const liCard = document.createElement('li');
    liCard.classList.add('list1');
    liCard.textContent = `${num.lan[i]}`;
    ul.appendChild(liCard);
    ul.appendChild(ruby2);
    ul.appendChild(css0);
    ul.appendChild(java0);
    ul.appendChild(html0);
  }

  cardContainer.appendChild(ul);

  const projectBtn = document.createElement('button');
  projectBtn.classList.add('button1');
  projectBtn.textContent = 'See Project';
  cardContainer.appendChild(projectBtn);
  blank.appendChild(cardContainer);
  cards1.appendChild(blank);
  mainCard.appendChild(cards1);
};

// from this part on i will create a function which will create the popup
// for the cards in a dinamic way

const popup = document.querySelector('.model-container');
const createPopup = (num) => {
  const model = document.createElement('div');
  model.classList.add('model');
  popup.appendChild(model);
  const popupTitle = document.createElement('h3');
  popupTitle.classList.add('popup-title');
  popupTitle.textContent = num.title2;
  model.appendChild(popupTitle);
  const ulPopup = document.createElement('ul');
  ulPopup.classList.add('popuplist');
  model.appendChild(ulPopup);

  for (let i = 0; i < workInfo[0].languages.length; i += 1) {
    const liPopup = document.createElement('li');
    liPopup.textContent = `${num.languages[i]}`;
    ulPopup.appendChild(liPopup);
  }

  function closePopup() {
    document.querySelector('.visibility').classList.toggle('visibility');
    document.querySelector('.model-container').classList.toggle('show');
  }

  const close = document.createElement('a');
  close.classList.add('close');
  model.appendChild(close);
  const closeBtn = document.createElement('img');
  closeBtn.setAttribute('src', num.closeImg);
  closeBtn.addEventListener('click', closePopup);
  close.appendChild(closeBtn);
  const imgInf = document.createElement('img');
  imgInf.setAttribute('src', num.img);
  imgInf.classList.add('snap');
  model.appendChild(imgInf);
  const secP = document.createElement('p');
  secP.classList.add('information');
  secP.textContent = `${num.info}`;
  model.appendChild(secP);
  const secBtn1 = document.createElement('button');
  secBtn1.classList.add('button5');
  secBtn1.textContent = 'See Live';
  model.appendChild(secBtn1);
  const secBtn2 = document.createElement('button');
  secBtn2.classList.add('button6');
  secBtn2.textContent = 'See Source';
  model.appendChild(secBtn2);
  const linkImg1 = document.createElement('img');
  linkImg1.setAttribute('src', num.sourceImg);
  linkImg1.classList.add('icon1');
  secBtn1.appendChild(linkImg1);
  const linkImg2 = document.createElement('img');
  linkImg2.setAttribute('src', num.sourceImg2);
  linkImg2.classList.add('icon2');
  secBtn2.appendChild(linkImg2);
};

// creating of cards dinamically
for (let i = 0; i < workInfo.length; i += 1) {
  createPopup(workInfo[i]);
}

for (let i = 0; i < workInfo.length; i += 1) {
  createCards(workInfo[i]);
}
// variables for popup
const modelLi = document.querySelectorAll('.model');
const model = Array.from(modelLi);
const projectBtn = document.querySelectorAll('.button1');
const btnList = Array.from(projectBtn);

// functions for popup
for (let i = 0; i < btnList.length; i += 1) {
  btnList[i].addEventListener('click', () => {
    model[i].classList.toggle('visibility');
    popup.classList.add('show');
  });
}

// validation for email input
document.querySelector('.form1').addEventListener('submit', (event) => {
  const email = document.querySelector('.username').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const emailError = document.getElementById('error-message');
    emailError.innerText = 'Email should be in lower case';
    emailError.classList.add('active');
  }
});
