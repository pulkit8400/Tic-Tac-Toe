let boxes=document.querySelectorAll(".box");
let rstBtn=document.querySelector("#rst-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true)
            {
                box.innerText="O";
                box.setAttribute("style","color:red");
                turnO=false;
            }
        else
            {
                box.innerText="X";
                box.setAttribute("style","color:black");
                turnO=true;
            }
        box.disabled=true;
        checkwinner();
    });
    
})

let checkwinner=()=>
{
    for (let pattern of winPatterns)
        {
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;

            if(val1!="" && val2!="" && val3!="")
                {
                    if(val1===val2 && val2===val3)
                        {
                            showWinner(val1);
                        }
                }
        }
}

let showWinner=(val1)=>{
    msg.innerText=`Congratulations , Winner is ${val1}`;
    msgContainer.classList.remove("hide");

    for(let box of boxes)
        {
            box.disabled=true;
        }
}

let rstGame=()=>{
    turnO=false;
    msgContainer.classList.add("hide");
    for(let i=0;i<boxes.length;i++)
        {
            boxes[i].innerText="";
            boxes[i].disabled=false;
        }
}

newBtn.addEventListener("click",rstGame);
rstBtn.addEventListener("click",rstGame);