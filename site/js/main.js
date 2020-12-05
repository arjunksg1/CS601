let keywords = null;
let apiUrl = null;

const baseUrl = "https://newsapi.org/v2/everything?q=";
const apiKey = "&apiKey=00280983d95c4b0b80f338db73e04773";

initializeKeywords();

function initializeKeywords() {
    console.log("initializing keywords");
    keywords = window.localStorage.getItem("keywords").split(",");
    if (keywords === null || keywords.length === 0 || keywords[0] === "") {
        keywords = ["technology", "business"];
        window.localStorage.setItem("keywords", keywords);
    }

    let searchString = "";
    
    keywords.forEach((element, index) => {
        searchString += element;
        if (index < keywords.length-1){
            searchString += "%20OR%20";
        }
    });
    apiUrl = baseUrl + searchString + apiKey;
    console.log("api url     " + apiUrl);

}

let app = new Vue({
    el: '#news-widget',
    data: {
        articles: null,
        apiUrl: apiUrl,
        keywords: keywords
    },
    methods: {
        callApi: function(){
            console.log("test");
            initializeKeywords();
            this.keywords = keywords;
            this.apiUrl = apiUrl;
            axios
            .get(this.apiUrl)
            .then(response => (this.articles = response.data.articles))
        }
    },
    mounted() {
        axios
            .get(this.apiUrl)
            .then(response => (this.articles = response.data.articles))
    }
});

function deleteKeyword(e){
    console.log(e.target.previousSibling);
    let toBeDeletedKeyword = e.target.previousSibling;
    e.target.previousSibling.remove();
    e.target.remove();
    let keywords = window.localStorage.getItem("keywords").split(",");
    let index = keywords.indexOf(toBeDeletedKeyword);
    keywords.splice(index, 1);
    window.localStorage.setItem("keywords", keywords);
    app.callApi();
}

function addKeyword(e){
    let toBeAddedKeyword = document.getElementById("keyword").value;
    document.getElementById("keyword").value = "";
    console.log(toBeAddedKeyword);
    let keywords = window.localStorage.getItem("keywords").split(",");
    keywords.push(toBeAddedKeyword);
    window.localStorage.setItem("keywords", keywords);
    app.callApi();

}

