const paragraph = document.getElementsByTagName('p');
console.log(paragraph);

document.body.onload = createAttribute;
document.body.onload = createElement;


function createElement(){
  
  const heading = document.createElement('h1');
  const headingContent = document.createTextNode('Heading 1');
  heading.appendChild(headingContent);

  const curentP = document.getElementById('firstParagraph');
  document.body.insertBefore(heading, curentP);

  const button = document.createElement('button');
  button.innerHTML = 'Button';
  const getDivOne = document.getElementById('divOne');
  document.body.insertBefore(button, getDivOne);
}

function createAttribute(){

const divNode = document.getElementById('divOne');
// const divAtribute = document.createAttribute('class');
// divAtribute.value = 'div-one';
divNode.setAttribute('class', 'div-one');
  
}

document.body.onload = onClick

function onClick () {
  const btn = document.getElementById('btn-language');

  btn.addEventListener('click', () => {
    const languages = document.getElementsByName('language');
    languages.forEach(languages => {
      if (languages.checked){
        alert(`You are: ${languages.value} developer`);
      };
    });
  });
};

document.body.onload = countHeadingTwo;

function countHeadingTwo (){
  const btn = document.getElementById('btn-count');
  btn.addEventListener('click', () => {
    const headings = document.getElementsByTagName('h2');
    alert(`The number of h2 tags: ${headings.length}`);
  });
};

// ========================================================
const note = document.getElementsByClassName('note');
console.log(note[0].parentNode);

// =========================================

const parentElement = document.getElementById('unordered-menu');
const firstChild = parentElement.firstElementChild;
console.log(firstChild)

const lastChild = parentElement.lastElementChild;
console.log(lastChild);

const children = parentElement.children;
console.log(children);

// =======================================================

const menu = document.getElementById('unordered-menu')

const newList = document.createElement('li');
newList.textContent = 'Team';
menu.appendChild(newList);

console.log(menu.innerHTML);

// ============= Add new html ================

const newElement = `
<li>About us!</li>
<li>Meet us!</li>
`
menu.innerHTML = newElement;

// =========================


function createNewMenuItem(name){
  const li = document.createElement('li');
  li.textContent = name;
  return li;
};

const getMenu = document.getElementById('menu');
getMenu.appendChild(createNewMenuItem('Zdravo'));
getMenu.appendChild(createNewMenuItem('About us'));
getMenu.appendChild(createNewMenuItem('Home'));


// ==================================

const app = document.getElementById('app');

const lang = ['JavaScript', 'HTML', 'CSS'];
const nodes = lang.map(lang => {
  const li = document.createElement('li');
  li.textContent = lang;
  return li;
})
app.append(...nodes);


