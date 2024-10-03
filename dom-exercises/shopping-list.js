var shoppingList = document.querySelector("ul");
var input = document.querySelector("#item");
var button = document.querySelector("button");

function addNewItem() {
    var inputText = input.value;
    input.value = '';

    var newItem = document.createElement("li");
    var newItemText = document.createElement("span");
    var newItemButton = document.createElement("button");

    newItem.appendChild(newItemText);
    newItem.appendChild(newItemButton);
    newItemText.textContent = inputText;
    newItemButton.textContent = "Delete";
    shoppingList.appendChild(newItem);
    newItemButton.addEventListener("click", () => shoppingList.removeChild(newItem));
    input.focus();

}

button.addEventListener("click", addNewItem);
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addNewItem;
    }
})