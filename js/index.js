document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("search");
    const submit = document.getElementById("github-form").children[1]
    const userList = document.querySelector("#user-list")
    const repoList = document.getElementById("repos-list")

    getList()

    console.log(userList)
    console.log(repoList)

    function getList() {
        submit.addEventListener("click", (e) => {
            e.preventDefault()
            fetch(`https://api.github.com/search/users?q=${search.value}`)
                .then(res => res.json())
                .then(data => arrUsers = [].slice.call(data.items))
                .then(arrUsers => arrUsers.forEach(data => createList(data)))
        })
    }

    function createList(data) {
        console.log(data.repos_url)
        let addUser = document.createElement("li")
        addUser.innerHTML = `
        <p class = "content">
        <img src=${data.avatar_url}>
        <p>
        <a href=${data.repos_url}>Username: ${data.login}<a/>
        <p>
        <a href=${data.html_url}>${data.html_url}<a/>
        `;
        addUser;
        userList.appendChild(addUser)
    }

})

