let rapidApiKey = "22c5963e45mshda47e7ed7e6db30p19aa38jsn3a2a707e2d8d";
let yahooFinanceBaseUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart";
let rapidApiHost = "apidojo-yahoo-finance-v1.p.rapidapi.com";

document.addEventListener('DOMContentLoaded', function () {
    initializeKeywords();
    renderPage();
});

function initializeKeywords() {
    let keywords = window.localStorage.getItem("stocks");
    if (keywords === null || keywords === "") {
        window.localStorage.setItem("stocks", "TSLA,MSFT,PRGS,NIO,ACB,HEXO,BB");
    }
}


function renderPage() {
    let keywords = window.localStorage.getItem("stocks").split(",");
   
    let vueApp = new Vue({
        el: "#stocks-list",
        data: {
            stocks: []
        },
        methods: {
            getStock: function (options) {
                axios
                    .request(options)
                    .then(response => {
                        this.stocks.push(response.data.chart.result[0].meta);
                    })
            }
        }
    });

    keywords.forEach(element => {
        let options = {
            method: 'GET',
            url: yahooFinanceBaseUrl,
            params: {interval: '1d', symbol: element, range: '1d', region: 'US'},
            headers: {
              'x-rapidapi-key': rapidApiKey,
              'x-rapidapi-host': rapidApiHost
            }
          };
        
        
        setTimeout(function(){
            vueApp.getStock(options);
        }, 2000);
        
    });
}
