//element.addEventListener("click",function);

let button2 = document.querySelector('.btn-2')

function hello (){
    alert("I'm loving javaScript");
}
button2.addEventListener("click",hello);

//the efffective way of allowing events using function 

let newbgcolor = document.querySelector('.box3');
console.log(newbgcolor);

function changebgcolor(){
    newbgcolor.style.backgroundColor = 'gray'; 
   };
newbgcolor.addEventListener("mouseover",changebgcolor);

 let NEWbgcolor = document.querySelector('.box2')
 console.log(NEWbgcolor);
 
 function easy(){
    NEWbgcolor.style.backgroundColor  = 'gray'
 }
 NEWbgcolor.addEventListener("mouseover",easy)

 let helloWorld = document.querySelector('.box1')

 function hard(){
    helloWorld.style.backgroundColor = 'gray'
 }
 helloWorld.addEventListener('mouseover',hard)