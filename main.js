let allSpans=document.querySelectorAll(".button span");
let result=document.querySelector(".results > span");
let input=document.getElementById("input");

allSpans.forEach((span) =>{
    span.addEventListener("click" , (e) =>{
        if(e.target.classList.contains("check-item")){
            checkItem()
        }
        if(e.target.classList.contains("add-item")){
            addItem()
        }
        if(e.target.classList.contains("delete-item")){
            deleteItem()
        }
        if(e.target.classList.contains("show-item")){
            showItem()
        }
    });
});

function checkInput(){
    result.innerHTML="input cant be empty"
}

function checkItem(){
    if(input.value !==""){
        if(localStorage.getItem(input.value)){
            result.innerHTML=`Found Local Storage Item Called <span>${input.value}</span>`; 
        }else{
            
            result.innerHTML=`No Found Local Storage Item Called <span>${input.value}</span>`; 
        }

    }else{
        checkInput();
    }
};
function addItem(){
    if(input.value !==""){
        localStorage.setItem(input.value,"test");
        result.innerHTML=`Local Storage Item <span>${input.value}</span> Add`;
        input.value="";

    }else{
        checkInput();
    }
};
function deleteItem(){
    if(input.value !==""){
        if(localStorage.getItem(input.value)){
            localStorage.removeItem(input.value)
            result.innerHTML=`local Storage Item ${input.value} Deleted`;
            input.value="";
        }

    }else{
        checkInput();
    }
};
function showItem(){
    if(localStorage.length){
        result.innerHTML=""
        for(let [key,value] of Object.entries(localStorage)){
            result.innerHTML +=`<span class="keys">${key}</span>`
        }
    }else{
        result.innerHTML="The Local Storage Is Empty";
    };
};