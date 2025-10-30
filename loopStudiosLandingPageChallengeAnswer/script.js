const listsElement = document.querySelectorAll('.js-list');

const menuElementDiv = document.querySelector('.js-menu-div');

const hamburgerDivElement = document.querySelector('.js-hamburger-div');

const menuElement = document.querySelector('.js-menu');

const footerListElement = document.querySelectorAll('.js-footer-list');

const creationGridElement = document.querySelectorAll('.js-creation-grid');

// List ForEach
listsElement.forEach( (list) => {
  list.addEventListener('mouseenter', () => {
    list.classList.add('hovered');
  });

  list.addEventListener('mouseleave', () => {
    list.classList.remove('hovered');
  });

  list.addEventListener('click', () => {
      turnOffPreviousButton();

    if(!list.classList.contains('active-list')) {
      list.classList.add('active-list');
      list.classList.remove('list');
    }
  });
});

// Previous Button Function
function turnOffPreviousButton() {
  const previousButton = document.querySelector('.active-list')

  if (previousButton) {
       previousButton.classList.remove('active-list');
       previousButton.classList.add('list');
  } 
}

// Hamburger Div Function
hamburgerDivElement.addEventListener('click', () => {
  menuElementDiv.classList.toggle('active');

  if (menuElementDiv.classList.contains('active')) {
    hamburgerDivElement.innerHTML = `
    <img src="images/icon-close.svg" alt="close button">
    `

    menuElement.classList.add('active-menu');
  } else{
    hamburgerDivElement.innerHTML =`
    <img src="images/icon-hamburger.svg"
    class = "close-img" 
    alt="hamburger menu button">
    `;

    menuElement.classList.remove('active-menu');
  }
});

// Footer list addEventListener
footerListElement.forEach( (footerList) => {
  footerList.addEventListener('mouseenter', () => {
    footerList.classList.add('footer-hovered');
  });

  footerList.addEventListener('mouseleave', () => {
    footerList.classList.remove('footer-hovered');
  });
});

// Creation Grid eventlistener
creationGridElement.forEach( (creationGrid) => {
    creationGrid.addEventListener('mouseenter', () => {
    creationGrid.classList.add('creation-hovered');
  });

    creationGrid.addEventListener('mouseleave', () => {
    creationGrid.classList.remove('creation-hovered');
  });
});