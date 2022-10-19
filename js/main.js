var formEl = document.querySelector(".form");
var nameEl = document.querySelector(".input_name");
var relationEl = document.querySelector("#relationship-choice");
var phoneNum = document.querySelector(".contact_phone");
var listEl = document.querySelector(".contact_list");

formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const nameVal = nameEl.value;
  const relationVal = relationEl.value;
  const phoneVal = phoneNum.value;
  const allValues = {
    ism: nameVal,
    relationship: relationVal,
    mobile: phoneVal,
  };
  const lists = [];
  lists.push(allValues);
  formEl.reset();

  for (const item of lists) {
    // creating elements
    var newListItem = document.createElement("li");
    newListItem.classList.add("contact_new_card");
    var newName = document.createElement("h5");
    var newRelation = document.createElement("p");
    var newPhone = document.createElement("a");
    newPhone.classList.add("phone_item");
    newPhone.setAttribute("href", `tel: + ${item.phoneVal}`);
    var deleteBtn = document.createElement("button");
    // placing elements
    deleteBtn.classList.add("btn-danger");
    deleteBtn.classList.add("delete_btn");
    newName.textContent = nameVal;
    newRelation.textContent = relationVal;
    newPhone.textContent = phoneVal;
    deleteBtn.textContent = "Delete";
    // executing files
    newListItem.appendChild(newName);
    newListItem.appendChild(newRelation);
    newListItem.appendChild(newPhone);
    newListItem.appendChild(deleteBtn);
    listEl.appendChild(newListItem);
  }

  deleteBtn.addEventListener("click", function () {
    newListItem.style.display = "none";

    // I need to update this mistake😑
    // if (evt.target.matches(".delete_btn")) {
    //   let deletedId = evt.target.dataset.listId;
    //   listEl.innerHTML = "";
    //   let findedIndex = lists.findIndex((item) => item.id == deletedId);
    //   lists.splice(findedIndex, 1);
    // }
  });
});
