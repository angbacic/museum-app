function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null
    if (!name && !msg) {
        alert('You forgot to fill in your name or message!')
        return true;
    }
    if (msg.length > 278) {
        alert('Your comment is too long')
        return true;
    }
    if (!name) {
        alert('Please fill your name')
        return true;
    }
    if (!msg) {
        alert('Please fill in the message!')
        return true;
    }
    if (name[0]!== name[0].toUpperCase()){
        return name[0].toLowerCase();
    }


     else return false;
    }



    //  console.log(comment)

