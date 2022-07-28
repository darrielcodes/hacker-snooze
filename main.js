let body = document.querySelector('ol');
let nav = document.querySelector('nav');
let navBar = document.querySelector('.navbar-brand');
let footer = document.querySelector('footer');
let page = document.querySelector('#page');
let hr = document.querySelector('hr');
let navContainer = document.querySelector('.container-fluid');
let topUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

// notes: parent.innerText = '230 points - Story title goes here'
// body.innerText = '20 comments - submitted by username'
// parent.appendChild(child);
// body.appendChild(parent);
// document.body.appendChild(body)

//////////// STYLES ///////////
page.style.position = 'relative'
page.style.padding = '0px 0px 90px 0px' // top, right, bottom, left
navContainer.style.backgroundColor = '#E67E22'
//navBar.style.margin = '0px 0px 0px 0px'
hr.style.border = '2px solid #E67E22'

footer.style.position = 'absolute'
footer.style.bottom = '0'
footer.style.padding = '10px 10px 10px 10px'
footer.style.marginLeft = '350px'
footer.style.textAlign = 'center'
footer.style.fontSize = 'x-small'

nav.style.marginLeft = '100px'
nav.style.marginRight = '70px'

body.style.marginLeft = '100px'
body.style.marginRight = '70px'
////////////////////////////////

fetch(topUrl)
    .then((res) =>{
        return res.json();
    }).then((data) => {
        console.log(data)
        for(let i = 0; i < 100; i++){
        let parent = document.createElement('li');
        parent.className = 'list-group-item';
        let child = document.createElement('li');
        child.className = 'child';
        let userId = data[i]
        let url = `https://hacker-news.firebaseio.com/v0/item/${userId}.json?print=pretty`;
        /////// PARENT/CHILD STYLE /////////////////
        //body.style.marginBottom = '70px'
        parent.style.backgroundColor = '#FEF5E7'
        parent.style.textDecoration = 'none'
        parent.style.color = 'black'
        child.style.fontSize = 'x-small'
        ///////////////////////////////
    fetch(url)
            .then((res1) => {
                return res1.json();
            }).then((data1) => {
                let title = data1.title
                let score = data1.score
                let comments = data1.descendants
                let user = data1.by
                let newUrl = data1.url
                /////// CREATE LINK ///////////
                let createA = document.createElement('a');
                createA.innerText = title;
                createA.href = newUrl;
                /////// LINK STYLE /////////////////
                createA.style.textDecoration = 'none'
                createA.style.color = 'black'
                ///////////////////////////////
                parent.appendChild(createA);
                child.innerText = `${score} points | submitted by ${user} | ${comments} comments`;
                
                parent.appendChild(child);
                body.appendChild(parent);
                page.appendChild(body);
            })  
        } 
    });