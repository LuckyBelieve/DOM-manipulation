//DOM manipulation

//reveal event

let revealBtn = document.querySelector('.reveal-btn');

let hiddenContent = document.querySelector('.hidden-content');

function revealContent(){

    if(hiddenContent.classList.contains('reveal-btn')){

        hiddenContent.classList.remove('reveal-btn');
    }else{
        hiddenContent.classList.add('reveal-btn')
    }
}
console.log(hiddenContent);

revealBtn.addEventListener("click",revealContent);