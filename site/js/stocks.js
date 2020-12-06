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
        window.localStorage.setItem("stocks", "TSLA,MSFT,PRGS,NIO,ACB");
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
        
        vueApp.getStock(options);
        /*setTimeout(function(){
            vueApp.getStock(options);
        }, 4000);*/
        
    });
}

function addSymbol(){
    let symbol = document.getElementById("stock-search").value;
    console.log("symbol is" + symbol);
    if (symbol === null || !symbol.match(/[A-Z]/g)){
        alert("You did not enter a valid symbol");
        return;
    }
    if (doesSymbolAlreadyExist(symbol)){
        alert("Symbol already exists");
        return;
    }

    addIfSymbolIsValid(symbol);
    
    
}

function doesSymbolAlreadyExist(symbol){
    let keywords = window.localStorage.getItem("stocks").split(",");
    if (keywords.includes(symbol)){
        return true;
    } else {
        return false;
    }
}

function addIfSymbolIsValid(symbol){
    let options = {
        method: 'GET',
        url: yahooFinanceBaseUrl,
        params: {interval: '5m', symbol: symbol, range: '1d', region: 'US'},
        headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': rapidApiHost
        }
      };
    axios.request(options).then(function (response) {
        console.log(response.data);
        if (response.data.chart.result === null){
            alert("Symbol " + symbol + " is invalid");
        } else {
            let keywords = window.localStorage.getItem("stocks").split(",");
            keywords.shift();
            keywords.push(symbol);
            window.localStorage.setItem("stocks", keywords);
            renderPage();
        }
    }).catch(function (error) {
        console.error(error);
     
    });
    
}
