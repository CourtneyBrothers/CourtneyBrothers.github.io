"use strict";

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
    console.log("in function");
    let blog = document.getElementById("blog");
    console.log(blog);

    for (let i=0; i < blogs.length; i++) {
        console.log("for loop");
        blog.innerHTML += `<div> <a href="" class="card"><div></div><article><h1>${blogs[i].title}${blogs[i].date}</h1> <p>${blogs[i].content}</p></article></a></div>`;
    }
}
createBlogCards();
