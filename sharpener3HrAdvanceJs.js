function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const cate = event.target.category.value;

    const obj = {
        name,
        email,
        cate
    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
}

window.addEventListener("DOMContentLoader", () => {
    const localStorageObj = localStorage;
    const localStoragekeys = Object.keys(localStorageObj)

    for (var i = 0; i < localStoragekeys.length; i++) {
        const key = localStoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(obj)

    }
})

function showNewUserOnScreen(user) {
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("category").value = "";

    if (localStorage.getItem(user.email) !== null) {
        removeUserFromScreen(user.name)

        const parentNode = document.getElementById("listOfUsers");
        const childHTML = `<li id=${user.email}> ${user.name} - ${user.email} - ${user.cate}
        <button onclick=deleteUser('${user.email}')> Delete Expense </button>
        <button onclick=editUserDetails('${user.email}','${user.name}','${user.cate}')>Edit Expense </button>
        </li>`

        parentNode.innerHTML = parentNode.innerHTML + childHTML;

    }

    function editUserDetails(emailId, name, cate) {
        document.getElementById("email").value = emailId;
        document.getElementById("username").value = name;
        document.getElementById("category").value = cate;

        deleteUser(emailId)
    }

    function deleteUser(emailId) {
        console.log(emailId)
        localStorage.removeItem(emailId, name, cate);
        removeUserFromScreen(emailId);
    }

    function removeUserFromScreen(emailId) {
        const parentNode = document.getElementById("listOfUsers");
        const childNodeToBeDeleted = document.getElementById(emailId);
        if (childNodeToBeDeleted) {
            parentNode.removeChild(childNodeToBeDeleted)
        }
    }

}