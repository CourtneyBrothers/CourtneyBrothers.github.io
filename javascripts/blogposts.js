"use strict";

// module.exports.blogData =() => {
//     let preMsg = null;
//     const blogReq = new XMLHttpRequest();
//     blogReq.addEventListener("load", parseMsg);
//     blogReq.open("GET", "blog-posts.json");
//     blogReq.send(); 
// };

// const parseMsg = () => {
//     const blogData = JSON.parse(event.target.responseText).title;
//     for (let i = 0; i < blogData.length; i++) {
       
//     }      
// };

 let blogs = [
    {
        title:"first blog",
        content: "Fail forward",
        date:"12/8/2018"
    },{
        title:"first blog",
        content: "Fail forward",
        date:"12/8/2018"
    },{
        title:"first blog",
        content: "Fail forward",
        date:"12/8/2018"
    },{
        title:"first blog",
        content: "Fail forward",
        date:"12/8/2018"
    },{
        title:"first blog",
        content: "Fail forward",
        date:"12/8/2018"
    }
];

function createBlogCards() {
    let empty = "";
    for (let i=0; i < blogs.length; i++) {
    let blogCards = `<div> <a href="" class="card><div></div><article><h1>${blogs[i].title}${blogs[i].date}</h1> <p>${blogs[i].content}</p></article></a></div>`;
    empty += blogCards;
    }
    document.querySelector(".blog").innerHTML = empty;
}
createBlogCards();
// <!-- <div id="card-1">
// <a href="" class="card">
//   <div class="thumb"></div>
//   <article>
//     <h1>BLOG 12/8/2017</h1>
//     <p> "Fail Forward"</p>
//     <p>-Joe Shepherd</p>

//   </article>
// </a> -->
// <!-- </div> -->
