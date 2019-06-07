
let validateEmail = email => {
    let output = document.getElementById('email-error')
    let regex = /^[\w.-]+@([\w-]+)\.+\w{2,4}$/;
    //js test method returns true if there's match else false
    if (!regex.test(email)) {
        output.innerHTML = "Invalid email"
        return
    }else{
        output.innerHTML = ""
    }
}

let validateName = name => {
    let output = document.getElementById('name-error')
    
    if (name.length < 3){
        output.innerHTML = "Name should be more than 3 characters long!"
        return
    }else{
        output.innerHTML = ""
    }
}

let validateMessage = message => {
    let output = document.getElementById('message-error')
    
    if (message.length < 100){
        output.innerHTML = "Message should be more than 100 characters long!"
        return
    }else{
        output.innerHTML = ""
    }
}