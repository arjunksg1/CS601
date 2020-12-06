window.onload = init;

function init(){
    let articlesParentDiv = document.getElementById("articles");
    let articleDivs = articlesParentDiv.children;
    for (div of articleDivs){
        let filename = "text/" + div.id + ".html";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", filename, true);
        xhr.responseType = 'document';
        xhr.onload = () => {
            if (xhr.status === 200) {
                let articles = xhr.response.getElementsByTagName("article");
                for (article of articles){
                    div.appendChild(article);
                }
            }
            else {
                console.log('Request failed. Returned status of ' + xhr.status);
            }
        }
        xhr.send(null);
    }
}