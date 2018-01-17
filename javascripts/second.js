"use strict";

const $ = require('jQuery');

module.exports.getjsonData =() => {
    $.ajax({
        url:"blog-posts.json",
    }).done(
            (data)=>{
                 console.log("json",data);
                createBlogCards(data);
            }
        );
};


const createBlogCards = (ajaxData) => {
    console.log("in function");
    console.log("ajaxData");
    let blog = document.getElementById("blog");
    console.log(blog);

    for (let i=0; i < ajaxData.length; i++) {
        console.log("for loop");
        blog.innerHTML += `<div> <a href="" class="card"><div></div><article><h1>${ajaxData[i].title}${ajaxData[i].date}</h1> <p>${ajaxData[i].content}</p></article></a></div>`;
    }
};
createBlogCards();
