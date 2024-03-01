const arr=[ [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
 ];
           
let box=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let con=document.querySelector(".con");
let msg=document.querySelector(".msg");
let pat=document.querySelector(".pat");
let body=document.querySelector("body");
let newgame=document.querySelector(".newgame");
let turn=true;

box.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turn===true){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.style.backgroundColor="#DFD6A7";
        box.disabled=true;
        ceckwinner();  
    })
})  



let flag=0;
let winner="";

//To check weather the current pattern is a winner or not
const ceckwinner=()=>{
    for(let pattern of arr){
        let val1=box[pattern[0]].innerText;
        let val2=box[pattern[1]].innerText;
        let val3=box[pattern[2]].innerText;
        if(val1!="" && val2!="" && val2!=""){
            if(val1===val2 && val2==val3){
                winner=val1;
                win();
              
            }
        }
    }
  
}

//if winner then changing the html
const win=()=>{
    reset.classList.add("hide");
    msg.classList.remove("hide");
    pat.innerHTML=`🍾🎉Winner is ${winner}`;
    body.style.height="175vh";
    disabled();
}

//This disables all the buttons
const disabled=()=>{
    for(b of box){
        b.disabled=true;
    }
}


//funtion to control the new game button
const ngame=()=>{
    rst();
    body.style.height="100vh";
    reset.classList.remove("hide");
    msg.classList.add("hide");
}

newgame.addEventListener("click",ngame);


//funtionn to reset the game
const rst=()=>{
    turn=true;  
    for(let b of box){
        b.innerText="";
        b.style.backgroundColor="white";
        b.disabled=false;
    }
}
reset.addEventListener("click",rst);
