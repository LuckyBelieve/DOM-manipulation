// coloring the heading using style used in css

let lucky = document.querySelector("h2");
lucky.style.color = 'blue';

//creating element and appending the text to them using append method

 let ul = document.querySelector('ul')
 let li = document.createElement('li')
 let text = document.createTextNode("Emancipation")
 li.setAttribute('class','list')
 ul.append(li);
 li.append(text);



 let allList = document.getElementsByClassName("list");
 for(let x = 0;x<allList.length;x++){
     allList[x].style.color = 'red'
    }
    //how to remove the element in html document

// li.remove()
// newList.remove();

//creating element 

let newUl = document.querySelector('ul')
let newList = document.createElement('li')
newList.innerText = 'Day shift';
newUl.append(newList)

//adding a class to the element that was created

newList.classList.add('list')

//coloring the text included in our lists

let belie = document.getElementsByClassName('list');
console.log(belie);
for (let i=0;i<belie.length;i++){
    belie[i].style.color = 'darkblue'
}

//The codes below are here to let us deal with the parent and children hierachy

let unList = document.querySelector('ul');

let believe = document.firstElementChild;
console.log(believe);

console.log(unList.childNodes)
console.log(unList.firstChild)

//coloring the lastchild of our unordered list
// we may say

unList.lastChild.style.color = 'red';

//these codes were used to color the background of all the childnodes of 
//list element

let mary = unList.childNodes;

for(let c = 0;c<mary.length;c++){
    mary[c].style.backgroundColor = 'violet'
}

//instead of using childnodes we can also use children and we may perform the same action

let happy = unList.children;
for(let c = 0;c<happy.length;c++){
    happy[c].style.backgroundColor = 'gray'
}
//accesing the nodes using their respective indices
console.log(unList.childNodes[0]);
