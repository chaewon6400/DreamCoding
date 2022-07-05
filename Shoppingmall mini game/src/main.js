// JSON file로부터 items를 동적으로 받아오는 메서드
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// main
loadItems()
  .then((items) => {
    console.log(items);
    //displayItems(items);
    //setEventListeners(items)
  })
  .catch(console.log);
