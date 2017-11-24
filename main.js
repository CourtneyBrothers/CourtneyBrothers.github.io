eachBlog = [
    {
        title: "Title",
        date:"Nov 21 2017",
        content:"Today was the last day before Thanksgiving break and I'm already so sad because school is so awesome and now I have to go to the woods with no wifi for the next 3-daysLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget eros ultricies lacus cursus congue at dignissim tellus. Duis malesuada mauris et volutpat placerat. In vitae varius turpis, et vestibulum felis. Vestibulum et blandit tellus. Vivamus nec tortor quis nunc lobortis feugiat pulvinar tristique dui. Praesent dapibus eget sem a imperdiet. Aenean pharetra fringilla pellentesques Nam facilisis ex lacus, sit amet pharetra mi hendrerit a. Fusce pretium nisl tortor, id lobortis arcu auctor volutpat. Quisque sollicitudin felis a nurus nisl, suscipit at volutpat quis, gravida mollis ipsum. Nullam convallis purus nibh, vel ultricies eros semper a. Aliquam eu magna aliquet, sodales massa sit amet, blandit turpis. Vestibulum aliquam luctus sapien non pretium. Ut gravida urna dolor, nec ornare lorem mollis sit amet. Curabitur vel mi ac nunc porta pretium. In vestibulum laoreet fermentum. Etiam magna orci, feugiat eget venenatis mollis, pulvinar et libero. Duis dolor nunc, vehicula eu lectus vel, interdum venenatis felis. Maecenas eu semper lacus.",
        

    },{
        title:"Title 2",
        date:"November 2017",
        content:"“A man's work is nothing but this slow trek to rediscover, through the detours of art, those two or three great and simple images in whose presence his heart first opened.― Albert Camus",
        

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
