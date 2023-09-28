const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");

    listItem.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    listItem.append(deleteButton);
    list.append(listItem);

    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener("click", () => {
    if (input.value != "")
    {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.focus();
        input.value= "";
    }
    else
    {
        input.focus();
    }
});