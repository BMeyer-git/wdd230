
let copyright = document.querySelector("#copyright");
copyright.innerHTML = "©" + new Date().getFullYear();

let modifyrecord = document.querySelector("#lastModified");
modifyrecord.innerHTML = "Last Modification: " + document.lastModified;