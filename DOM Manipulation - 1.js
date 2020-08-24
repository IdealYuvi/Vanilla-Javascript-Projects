// ********************* SINGLE ELEMENT SELECTORS *************************

// document.getElementById()
const picker = document.getElementById("id-name");

// Get thingds from the element
picker.id;
picker.className;

// Change styling
picker.style.background = "#333";
picker.style.display = "none";

// Change content
picker.textContent = "something";
picker.innerText = "something";
picker.innerHTML = "<span style='color:red'>something</span>";

// document.querySelector()
document.querySelector("#id-name"); // # required before id name
document.querySelector(".class-name"); // . required before class name
document.querySelector("h2"); // if there are multiple elements, it will get the first one
document.querySelector("h2:nth-child(2)"); // select the specific element using pseudo code

// ********************* MULTIPLE ELEMENT SELECTORS *************************

// document.getElementsByClassName
const items = document.getElementsByClassName("class-name"); // gives HTML Collection of all the items in that class name
items[3].style.color = "red"; // selecting specific element from the HTML Collection

// document.getElementsByTagName
const lis = document.getElementsByTagName("li"); // gives HTML Collection of all the items in that class name
lis[0].textContent = "something";

// Convert HTML Collection into an Array, only then you can use reverse and forEach functions
lis = Array.from(lis);

lis.reverse();

lis.forEach(function (li, index) {
  li.textContent = "${index}: Hello";
});

// document.querySelectorAll
const items = document.querySelectorAll("class-name or tag-name or id-name"); // gives Node List of all the items, so no need to convert it into an array
liOdd = document.querySelectorAll("li:nth-child(odd)");
liOdd.forEach(function (li, index) {
  li.style.background = "#333";
});
