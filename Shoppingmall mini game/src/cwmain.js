// JSON file로부터 items를 동적으로 받아오는 메서드
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}
// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  // 콘솔에 한 번 찍어보기.
  // const html = items.map((item) => createHTMLString(item)).join("");
  // console.log(html);
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
<li class="item">
<img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
<span class="item__description">${item.gender}, ${item.size}</span>
</li>
`;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = event.target.dataset.key;
  const value = event.target.dataset.value;

  if (key == null || value == null) {
    return;
  }
  displayItems(items.filter((item) => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
