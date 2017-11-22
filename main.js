eachBlog = [
    {
        title: "Title",
        date:"Nov 21 2017",
        content:"Today was the last day before Thanksgiving break and I'm already so sad because school is so awesome and now I have to go to the woods with no wifi for the next 3-daysLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget eros ultricies lacus cursus congue at dignissim tellus. Duis malesuada mauris et volutpat placerat. In vitae varius turpis, et vestibulum felis. Vestibulum et blandit tellus. Vivamus nec tortor quis nunc lobortis feugiat pulvinar tristique dui. Praesent dapibus eget sem a imperdiet. Aenean pharetra fringilla pellentesques Nam facilisis ex lacus, sit amet pharetra mi hendrerit a. Fusce pretium nisl tortor, id lobortis arcu auctor volutpat. Quisque sollicitudin felis a nisl convallis pulvinar. Suspendisse placerat venenatis est, a scelerisque augue lacinia eleifend. Mauris vestibulum lobortis rhoncus. In imperdiet ultrices tortor, ut rutrum magna facilisis eget. Aenean sit amet dignissim massa. Morbi cursus nisl ex.Praesent laoreet ornare ante id laoreet. Integer sed iaculis ipsum. Vivamus molestie, est at sodales maximus, sem arcu tempus nulla, vel bibendum nisi est at justo. Nunc felis magna, luctus at turpis sed, dapibus consequat urna. Sed id metus dignissim, fringilla orci eget, maximus erat. Phasellus sed orci in orci pretium rhoncus vel non nibh. Curabitur molestie elit nibh, finibus lobortis augue egestas vel. Morbi pellentesque in neque a vestibulum. Mauris quis interdum augue.Suspendisse potenti. In nec justo eget mi suscipit gravida in egestas ante. In interdum magna a diam lobortis venenatis. Nunc dapibus ac lectus et venenatis. In euismod gravida nisl, a congue justo mattis vel. Vestibulum quis nisl arcu. Nam ullamcorper euismod massa non gravida. Integer id pulvinar dolor, quis euismod felis. Nulla nec metus nunc. In ultrices velit vitae erat cursus euismod. Vestibulum tortor purus, egestas at lacus id, dignissim congue ipsum. Curabitur lorem leo, sagittis eget pharetra ut, porttitor ac dolor.Praesent accumsan scelerisque ex, vitae feugiat massa porta at. Aenean id hendrerit nunc. Nulla nec consequat nunc, dapibus interdum tellus. Aenean purus nisl, suscipit at volutpat quis, gravida mollis ipsum. Nullam convallis purus nibh, vel ultricies eros semper a. Aliquam eu magna aliquet, sodales massa sit amet, blandit turpis. Vestibulum aliquam luctus sapien non pretium. Ut gravida urna dolor, nec ornare lorem mollis sit amet. Curabitur vel mi ac nunc porta pretium. In vestibulum laoreet fermentum. Etiam magna orci, feugiat eget venenatis mollis, pulvinar et libero. Duis dolor nunc, vehicula eu lectus vel, interdum venenatis felis. Maecenas eu semper lacus.",
        

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
resumeArticles = [
    {
        title: "Freelance graphic artist",
        dates:"2016-present",
        content:"m. Ut gravida urna dolor, nec ornare lorem mollis sit amet. Curabitur vel mi ac nunc porta pretium. In vestibulum laoreet fermentum. Etiam magna orci, feugiat eget venenatis mollis, pulvinar et libero. Duis dolor nunc, vehicula eu lectus vel, interdum venenatis felis. Maecenas eu semper lacus.",
        

    },{
        title:"Artist Director of House of Bread",
        dates:"2016-present",
        content:"“A man's work is nothing but this slow trek to rediscover, through the detours of art, those two or three great and simple images in whose presence his heart first opened.― Albert Camus",
        

    },{
        title:"Title 3",
        dates:"December 2017",
        content:"more copy needed",
        

    },{
        title:"Title 4",
        dates:"December 2017",
        content:"content about december",
        

    },{
        title:"Title 5",
        dates:"December 15 2017",
        content:"IM SO EXCITED FOR CHRISTMAS",

    }
]
function createResumeArticles() {
    let empty = "";
    for (var i=0; i < resumeArticles.length; i++) {
    let resumeArticle = `<div class="card"><h2>Title: ${resumeArticles[i].title}</h2> <h3>Date: ${resumeArticles[i].date}</h3> <p>${resumeArticles[i].content}</p></div>`;
    empty += resumeArticle;
    };
    document.querySelector(".resume").innerHTML = empty;
};

createResumeArticles();