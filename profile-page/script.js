//console.log("page loaded...");

let requestElement=document.querySelector("#decrement")
let connectionElement=document.querySelector("#increment")
let userName = document.querySelector("#changeName")

function removeUser() {
    let deleteUser= document.querySelector("#firstuser")
    deleteUser.remove();
    requestElement.innerText--;
    connectionElement.InnerText++;
}

function removeThisUser(){
    let deleteUser= document.querySelector("#seconduser")
    deleteUser.remove();
    connectionElement.innerText++;
}
function editProfile(){
    if(userName.innerText == "Jane Doe") {
        userName.innerText = "John Doe"
    } else{userName.innerText = "Jane Doe"}
    // userName.innerText = "John Doe"
}
