// **************** Traversing the DOM ************************

let val;

const list = document.querySelector("ul.class-name");
const listItem = document.querySelector("li.class-name:first-child");

// Get children element
val = list.children; // gives node list of all the li in the ul
list.children[1].textContent = "Hello";
list.firstElementChild; // gives you the first li
list.lastElementChild; // gives you the last li
list.childElementCount; // gives the sum of all the li in that ul

// Get parent element
val = listItem.parentElement; // gives you the parent of the element, in this case 'ul'

// Get siblings
val = listItem.nextElementSibling; // gives the next li
val = listItem.previousElementSibling; // gives the prev li

// ****************** Creating Element ***************************

// Create element
const li = document.createElement("li");

// Add class
li.className = "something";

// Add id
li.id = "something";

// Add attribute
li.setAttribute("title", "something");

// Create text node and append
li.appendChild(document.createTextNode("Hello World"));

// Create new link element
const link = document.createElement("a");
// Add class
link.className = "something";
// Add icon html
link.innerHTML = "<i class='fa fa-remove'></i>";

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector("ul.class-name").appendChild(li);

// ****************** Replace Element ***************************

// Create new element
const newHeading = document.createElement("h2");
newHeading.id = "something";
newHeading.appendChild(document.createTextNode("something 1"));

// Get old heading
const oldHeading = document.getElementById("id-name");

// Get parent
const parentHeading = document.querySelector(".class-name");

// Replace oldHeading with newHeading through parent
parentHeading.replaceChild(newHeading, oldHeading);

// ****************** Remove Element ****************************

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove specific item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);
