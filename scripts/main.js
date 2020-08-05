

const section= document.getElementById("section");
const btn_change = document.querySelector("#change-word");

const words =["Hi there!","My second element appearing","Third one now", "There wiil be more..."];
const colors =["Red" ,"Green", "Blue","Yellow"]
let cur_word = words.length -1;


section.innerHTML = `<p> ${words[cur_word]} </p>`;

// function wordchange(e) 
// {
//     if (cur_word == 0)
//      {
//         cur_word = words.length-1;
//     }else{
//         cur_word --;
//     }


// } section.innerHTML = `<p> ${words[cur_word]} </p>`;


btn_change.addEventListener("click" ,(e) =>{
    if(cur_word ==0)
    {
        cur_word = words.length-1;
    }
    else{
        cur_word --;
    }
    section.innerHTML =`<p> ${words[cur_word]} </p>`;
    section.style.color = colors[cur_word];
})


