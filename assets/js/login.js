usuarios = [
    {
        username: "Pedrito",
        email: "pedrito@example.com",
        password: "12345"
    }
]

function verifyUser(username, pass){
    usuarios.forEach(user => {
        if(user.username == username && user.password == pass){
            location.href = "./index.html";
        }
        else{
            console.log("Equivocado")
        }
    });
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const bntSubmit = document.getElementById("submit");
let userValue = "";
let passValue = "";

bntSubmit.addEventListener("click", function(e){
    userValue = username.value;
    passValue = password.value;
    verifyUser(userValue, passValue);
    userValue = "";
    passValue = ""
})

