let val;
val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;

val = document.links;
val = document.links[3];
val = document.links[3].id;
val = document.links[3].href;
val = document.links[3].className;

val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];
val = document.links[0].classList[1];

val = document.images;
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].getAttribute("src");
val = document.images[0].getAttribute("abc");

// console.log(val);

// Change Styling
document.getElementById("task-title").style.background = "grey";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";

//Change Content
document.getElementById("task-title").textContent = "My List";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML = "<span style ='color:yellow'>My Lists</span>";

//Html Collection (array)
const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[3]);
items[3].style.color = "violet";
// items[3].innerText = "Have to shop";

const lis = document.getElementsByTagName("li");
// console.log(lis);
lis[0].style.color = "red";
// lis[0].textContent = "Have to visit"; 

// document.querySelector();
// console.log(document.querySelector("h4"));
// console.log(document.querySelector(".task-title"));
// console.log(document.querySelector("#task-title"));

// document.querySelector("li").style.color = "blue";
// document.querySelector("ul li").style.color = "green";
// document.querySelector("ul li:last-of-type").style.color = "blue";
// document.querySelector("ul li:nth-of-type(3)").style.color = "red";
// document.querySelector("ul li:nth-of-type(3)").innerText = "Have to cook";

const listitems = document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(listitems);

// document.querySelector("ul li:nth-of-type(odd)").style.background = "silver";
// document.querySelector("ul li:nth-of-type(even)").style.background = "silver"; 

// HTML Collection array
const lists = document.getElementsByTagName("li");
// console.log(lists);
// console.log(lists.length);

const arrlis = Array.from(lists);

arrlis.forEach(function(arrli,idx){
    // console.log(arrli);
    // console.log(arrli.className);
    // arrli.innerText = "Hello";
    // arrli.textContent = `${idx} : HelloMyanmar`;
});

// document.querySelectorAll() (nodelist = arr);
let itsqs = document.querySelector(".collection .collection-item");
// console.log(itsqs);
let itsqsas = document.querySelectorAll(".collection .collection-item");
// console.log(itsqsas);
// console.log(itsqsas.length);
// console.log(itsqsas[2]);

itsqsas.forEach(function(itsqsa,idx){
    // console.log(itsqsa);
    // console.log(itsqsa.className);
    // itsqsa.textContent = "Hello World";
    // itsqsa.innerText = `${idx} : Hello Myanmar`;
});

const liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);
const lievens = document.querySelectorAll("li:nth-child(even)");
// console.log(lievens);

liodds.forEach(function(liodd){
    // console.log(liodd);
    liodd.style.background = "gold";
});
for(let i=0 ; i<lievens.length ; i++){
    lievens[i].style.background = "orange";
}
// children
let chil;
const getul = document.querySelector("ul.collection");
// console.log(getul);
const getli = document.querySelector("li.collection-item");
// console.log(getli);

chil = document.getElementsByClassName("collection-item");
chil = document.getElementsByTagName("li");
chil = document.querySelector("ul").getElementsByClassName("collection-item");

// get children element
chil = getul.children;
chil = getul.children[1];

// children of children
chil = getul;
chil = getul.children[1].children[0].children[0].className;

//First Child
// chil = getul.children[0];
chil = getul.firstElementChild;

//Last Child
chil = getul.lastElementChild;

// Count child elements
// chil = getul.children.length;
chil = getul.childElementCount;


// Get Parent Element
chil = getli.parentElement;

//Get Next Sibliing
chil = getli.nextElementSibling;
chil = getli.nextElementSibling.nextElementSibling;

chil = getli.nextElementSibling.nextElementSibling.previousElementSibling;

// console.log(chil);

//Create Element
const li = document.createElement('li');

li.id = "new-item"

//Add class
li.className = "collection-item";
li.classList.add('collection-item');

//Adding custome attribute
            // (att name , value)
li.setAttribute("title","new-item");

//Create Text Node
// li.innerText = "abc";
// li.textContent = "efg";
// li.innerHTML = "hij";

const newnode = document.createTextNode("Hello Mandalay");
li.appendChild(newnode);
// console.log(li);

const link = document.createElement('a');
link.setAttribute('href',"#");
link.id = 'delete-item6';
// link.className = 'delete-item';
link.classList.add("delete-item");

link.innerHTML = `<i class="far fa-trash-alt"></i>`; 
// console.log(link);

//Append link into li
li.appendChild(link);
// console.log(li);

//Append li as child into ul
document.querySelector("ul.collection").appendChild(li);


//Replace Child
const newhaeding = document.createElement('h2');

newhaeding.id = 'task-title';

newhaeding.classList.add('taskk-title');

newhaeding.appendChild(document.createTextNode("Task List"));
// console.log(newhaeding);

//get old heading
const oldheading = document.getElementById('task-title');
// console.log(oldheading); 

//get parent
// const cardaction = document.querySelector('.card-action');
const cardaction = oldheading.parentElement;

//                      new,old
cardaction.replaceChild(newhaeding,oldheading);

//remove element
const lts = document.querySelectorAll('li');
// lts[5].remove();

//remove child emement
const ullts = document.querySelector('ul');
// ullts.removeChild(ullts.children[4]);
ullts.removeChild(lts[5]);

const firstli = document.querySelector('li');
// console.log(flink.children[0]);

const flink = firstli.children[0];


let lk = flink.classList;
// console.log(lk);
// console.log(lk[0]);
// console.log(lk[1]);

//replace class (old ,new)
// flink.classList.replace("active","disable");

//Add Class
// flink.className = "delete-item active";
// flink.classList.add('disable');

// Attribute
let lia = flink.getAttribute('href');
// console.log(lia);

// lia = flink.setAttribute('href',"https://google.com");

//addEventListener(type,function)
let clearbtn = document.querySelector('.cleartasks');
// console.log(clearbtn);
// clearbtn.addEventListener('click',function(e){
//     // console.log('hay');
//     console.log(e);
//     e.preventDefault();
// });

//Method 2
clearbtn.addEventListener('click',myclick);
function myclick(e){
    // console.log('hay myanmar');

    let val;
    val = e;
    val = e.target;
    val = e.target.className;
    val  = e.target.classList;
    val = e.target.href;
    val = e.target.getAttribute('href');
    val = e.target.id;

    // e.target.innerText = "Click Me";
    
    //Event Type
    val = e.type;

    //Coordinate event relate to the window
    val = e.clientY;
    val = e.clientX;

    //Coordinate event relate to the element
    val = e.offsetY;
    val = e.offsetX;
    
    // console.log(val);

    e.preventDefault();
}
// Moven Event
clearbtn = document.querySelector('.cleartasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');

// clearbtn.addEventListener('click',runevent);

//double click
// clearbtn.addEventListener('dblclick',runevent)

//Mouse Down
// clearbtn.addEventListener('mousedown',runevent);

//Mouse Up
// clearbtn.addEventListener('mouseup',runevent);

//Mouse Enter
// clearbtn.addEventListener('mouseenter',runevent);

//Mouse Leave
// clearbtn.addEventListener('mouseleave',runevent);

//Mouse move
// card.addEventListener('mousemove',runevent);

function runevent(e){
    console.log(`Event type = ${e.type}`);
    // e.preventDefault();
    heading.textContent =  `MouseX : ${e.offsetX} MouseY : ${e.offsetY} `;

    document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1`;
    e.preventDefault();
}


//Input Event
let taskinput = document.getElementById('task');
// console.log(taskinput);

const form = document.querySelector('form');
// console.log(form);


//get value by submit
// form.addEventListener('submit',runevent2);

function runevent2(e){
    console.log(`Event Type = ${e.type}`);
    console.log(taskinput.value);
    // e.preventDefault();
}

//Get value by typing
//keydown
// taskinput.addEventListener('keydown',runevent2);

//keyup
// taskinput.addEventListener('keyup',runevent2);

//input
// taskinput.addEventListener('input',runevent2);

//keypress
// taskinput.addEventListener('keypress',runevent2);

//blur
// taskinput.addEventListener('blur',runevent2);

//focus
// taskinput.addEventListener('focus',runevent2);

//cut
// taskinput.addEventListener('cut',runevent2);

// taskinput.addEventListener('paste',runevent2);

//Event Bubbling Vs Event Delegation

//Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('i am card title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('I am card content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('i am card');
// });

//Event Delegation
const deleteitem = document.querySelector('.delete-item');
// console.log(deleteitem);

document.body.addEventListener('click',delitem);
function delitem(e){
    // console.log(e.target);
    // console.log(e.target.className);
    // if(e.target.className === 'far fa-trash-alt'){
    //     console.log('hay');
    // }

    // if(e.target.className == 'far fa-trash-alt'){
    //     console.log('hay');
    // }

    // if(e.target.parentElement.className === 'delete-item'){
    //     console.log('hay');      
    // }

    // if(e.target.parentElement.className === 'delete-item disable'){
    //     console.log('hay');      
    // }

    if(e.target.parentElement.classList.contains('active')){
        console.log('hay');
        console.log(e.target.parentElement);
        
        // remove itself
        // e.target.parentElement.remove();

        e.target.parentElement.parentElement.remove();
    }

}

//Storage
document.querySelector('.form').addEventListener('submit',(e)=>{
    // console.log('hay');

    const newtask = document.getElementById('task').value;
//    console.log(newtask);

    // localStorage.setItem('tasks',newtask);

    let myworks;
    // console.log(myworks);

    if(localStorage.getItem('tasks') === null){
        myworks = [];
    }else{
        myworks = JSON.parse(localStorage.getItem('tasks'));
        // console.log(myworks);
        // console.log(typeof myworks);
    }
    myworks.push(newtask);
    localStorage.setItem('tasks',JSON.stringify(myworks));

    window.alert("New Task Saved");

    e.preventDefault();
});

let mytasks = JSON.parse(localStorage.getItem('tasks'));
// console.log(mytasks);
//type of mytasks = string
// console.log(typeof mytasks);

// console.log(mytasks.length);
// console.log(mytasks[1]);

mytasks.forEach(function(mytask){
    console.log(mytask);
});