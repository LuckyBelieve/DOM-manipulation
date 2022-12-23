//element.addEventListener("click",function);

let button2 = document.querySelector('.btn-2')

function hello (){
    alert("I'm loving javaScript");
}
button2.addEventListener("click",hello);

//the efffective way of allowing events using function 

let newbgcolor = document.querySelector('.box2');
console.log(newbgcolor);

function changebgcolor(){
    newbgcolor.style.backgroundColor = 'gray'; 
   };
newbgcolor.addEventListener("mouseover",changebgcolor);

 