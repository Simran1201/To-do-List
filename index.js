function newElement(){
    let input = document.getElementById("addItem").value;
    let li = document.createElement("li");
    let txt = document.createTextNode(input);
    li.appendChild(txt);
    let mySpan = document.createElement("span");
    mySpan.innerHTML ="x";
    mySpan.className += "close";
    if(input === ""){
        alert ("Please enter some work.");
    }
    else{
        document.getElementById("list").appendChild(li);
        li.appendChild(mySpan);
    }
    document.getElementById("addItem").value ="";
    const close = document.getElementsByClassName("close");
    for(let i=0; i<close.length; i++){
        close[i].addEventListener("click",()=>{
            close[i].parentElement.style.display="none";
        })
    }            
}
let ul = document.getElementById("list");
ul.addEventListener("click",(e)=>{
    if(e.target.tagName === "li" || "LI"){
        e.target.classList.toggle("checked");
        console.log("check")
    }                
},false);