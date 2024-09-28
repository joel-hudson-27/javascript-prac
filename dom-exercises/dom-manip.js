const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);
const paragraph = document.createElement("p");
paragraph.style.cssText = "color: red;";
paragraph.textContent = "Hey I am red";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.style.cssText = "color: blue;";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const myDiv = document.createElement("div");
const myH1 = document.createElement("h1");
const myP = document.createElement("p");
myH1.textContent = "I'm in a div";
myP.textContent = "ME TOO";
myDiv.appendChild(myH1);
myDiv.appendChild(myP);
container.appendChild(myDiv);

const button1 = document.createElement("Button");
button1.textContent = "Click me";
button1.setAttribute("id", "btn");
container.appendChild(button1);
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
btn.addEventListener("mouseover", () => {
    btn.style.cssText = "color: red;";
})
btn.addEventListener("mouseout", () => {
    btn.style.cssText = "color: black;";
})
