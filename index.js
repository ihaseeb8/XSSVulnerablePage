let myComments = []
const saveButton = document.getElementById("save-btn")
const nameEl = document.getElementById("name")
const commentEl = document.getElementById("comment")
const ulEl = document.getElementById("ul-el")
const commentsFromLocalStorage = JSON.parse( localStorage.getItem("myComments") )
const form = document.getElementById("comment-form")

if (commentsFromLocalStorage) {
    myComments = commentsFromLocalStorage
    render(myComments)
}


function render(comments) {

    for (let i = 0; i < comments.length; i++) {
        
        
        let listItem = `
            <li class="comment">
                <b>Name:</b>   ${comments[i].name} <br> <b>Comment:</b> ${comments[i].comment}
            </li>
        `

        const scriptEl = document.createRange().createContextualFragment(listItem);
        
        ulEl.appendChild(scriptEl)
    }

}

form.addEventListener("submit", function(event)  {
    let temp = {name: nameEl.value, comment: commentEl.value}
    myComments.push(temp)
    localStorage.setItem("myComments", JSON.stringify(myComments) )
}, false)