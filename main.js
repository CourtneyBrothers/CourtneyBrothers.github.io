eachBlog = [
    {
        title: "Title",
        date:"Nov 20 2017",
        content:"lots of stuff will go here",
        

    },{
        title:"Title 2",
        date:"November 2017",
        content:"more content will be here",
        

    },{
        title:"Title 3",
        date:"December 2017",
        content:"more copy needed",
        

    },{
        title:"Title 4",
        date:"December 2017",
        content:"content about december",
        

    },{
        title:"Title 5",
        date:"December 15 2017",
        content:"IM SO EXCITED FOR CHRISTMAS",

    }
]
function createBlogCards() {
    let empty = "";
    for (var i=0; i < eachBlog.length; i++) {
    let blogCard = `<div class="card"><h2>Title: ${eachBlog[i].title}</h2> <h3>Date: ${eachBlog[i].date}</h3> <p>${eachBlog[i].content}</p></div>`;
    empty += blogCard;
    };
    document.querySelector(".container").innerHTML = empty;
};

createBlogCards();

   /* function cardAssign() {
        let empty = "";
        for (var i=0; i < kayakList.length; i++) {
            let productName = `<div class="card"><p>Name: ${kayakList[i].name}</p><p>Price: 	${kayakList[i].price}</p><p>Description: ${kayakList[i].description}</p><img src=${kayakList[i].url} alt="kayak product"></div>`;
            empty += productName;
            console.log('this is each card',empty);
        };
        console.log('this is your complete HTML',empty);
        document.querySelector(".container").innerHTML = empty;
    };
    cardAssign();
}*/
