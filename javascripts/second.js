resumeArticles = [
    {
        title: "Freelance graphic artist",
        dates:"2016-present",
        content:"m. Ut gravida urna dolor, nec ornare lorem mollis sit amet. Curabitur vel mi ac nunc porta pretium. In vestibulum laoreet fermentum. Etiam magna orci, feugiat eget venenatis mollis, pulvinar et libero. Duis dolor nunc, vehicula eu lectus vel, interdum venenatis felis. Maecenas eu semper lacus.",
        

    },{
        title:"Artist Director of House of Bread",
        dates:"2016-present",
        content:"“A man's work is nothing but this slow trek to rediscover, through the detours of art, those two or three great and simple images in whose presence his heart first opened.― Albert Camus",
        

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