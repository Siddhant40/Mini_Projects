let user = 0;
let comp = 0;
let draw_count = 0;

let choices = document.querySelectorAll(".but");
let user_tag = document.querySelector("#you");
let comp_tag = document.querySelector("#comp");
let msg = document.querySelector("#msg");
let msg_back = document.querySelector(".msgcont");
let dr = document.querySelector("#draw");

//this is for computer color

let Rock1=document.querySelector(".Rock1");
let Paper1=document.querySelector(".Paper1");
let Scissors1=document.querySelector(".Scissors1");
let but1=document.querySelectorAll(".but1");

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        //user choice is named as but
        const but = choices.classList[1];
        playgame(but);
    })
})

//function to make randowm choice of computer it returns rock or paper of scissors
const comchoice = () => {
    const arr = ["Rock", "Paper", "Scissors"];
    const dig = Math.floor(Math.random() * 3);
    return arr[dig];
}

//function to handle the html if draw occurs
const draw = () => {
    msg.innerText = "It's a Draw ";
    dr.innerText = draw_count;
    msg.style.backgroundColor = "blue";

}

//fucntion to handle html if comp or user wins
const print_winner = (winner, but, computer_choice) => {
    if (winner === "comp") {

        msg.innerText = `Computer's ${computer_choice} beats your ${but}`;
        msg.style.backgroundColor = "red";
    }
    else {
        msg.style.backgroundColor = "green";
        msg.innerText = `Your ${but} beats ${computer_choice}`;
    }
}

const col=(div)=>{
    if(div==="Rock"){
        Rock1.classList.add("col");
    }
    else if(div==="Paper"){
        Paper1.classList.add("col");
    }
    else if(div==="Scissors"){
        Scissors1.classList.add("col");
    }
}
const rem=()=>{
    but1.forEach((but1)=>{
        but1.classList.remove("col");
    })
}
//fuction in which whole logic is written
const playgame = (but) => {
    console.log("User choice =", but);
    const computer_choice = comchoice();
    // console.log("computer choice=", computer_choice);
    if (but === computer_choice) {
        // console.log(computer_choice);
        rem();
        col(computer_choice);
        draw();
       
        draw_count++;
    } else {
        let userwin = true;
        if (but === "Rock") {
            if (computer_choice == "Paper") {
                userwin = false;
            }
            if (computer_choice == "Scissors") {    
                userwin = true;
            }

        }
        else if (but === "Paper") {
            if (computer_choice == "Rock") {
                userwin = true;
            }
            if (computer_choice == "Scissors") {
                userwin = false;
            }
        }
        else if (but === "Scissors") {
            if (computer_choice == "Rock") {
                userwin = false;
            }
            if (computer_choice == "Paper") {
                userwin = true;
            }
        }
        let winner;
        if (userwin === true) {
            user += 1;
            winner = "user";

        }
        else {
            comp += 1;
            winner = "comp";
        }
        rem();
        col(computer_choice);
        print_winner(winner, but, computer_choice);
        user_tag.innerHTML = user;
        comp_tag.innerHTML = comp;
    }


}


