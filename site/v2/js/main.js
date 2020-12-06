let imagesBaseUrl = "https://arjunksg1.github.io/site/v2/images/";
window.onload = init;

function init() {
    loadTravelPictures();
    
}

function loadTravelPictures() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "images/", true);
    xhr.responseType = 'document';
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            let elements = xhr.response.getElementsByTagName("a");
            for (x of elements) {
                if (x.href.match(/\.(jpe?g|png|gif)$/)) {
                    let img = document.createElement("img");
                    let imgDiv = document.createElement("div");
                    imgDiv.classList.add("image-container");
                    let imgUrl = imagesBaseUrl + x.href.split("/")[7];
                    console.log(imgUrl);
                    let imageName = x.href.split("/")[7].replace(/\.(jpe?g|png|gif)$/,"");
                    imgDiv.id = imageName+"-image";
                    //img.src = x.href;
                    img.src = imgUrl;
                    img.classList.add("image");
                    imgDiv.appendChild(img);
                    let imgCtr = document.getElementById("travel-images");
                    imgCtr.appendChild(imgDiv);                    
                }
                if (x.href.match(/\.(txt|text)$/)) {
                    let fileName = x.href.split("/")[7].replace(/\.(txt|text)$/,"");
                    let fileUrl = imagesBaseUrl + x.href.split("/")[7];
                    console.log(fileUrl);
                    //let textContent = readTextFile(x.href);
                    let textContent = readTextFile(fileUrl);
                    let div = document.createElement("div");
                    div.classList.add("image-caption-container");
                    let desc = document.createElement("p");
                    desc.classList.add("image-caption");
                    desc.innerHTML = textContent;
                    div.appendChild(desc);
                    //desc.style.display = "none";
                    let imgDiv = document.getElementById(fileName+"-image");
                    imgDiv.appendChild(div);                    
                }
                
            };
        }
        else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send(null);
}

function readTextFile(file){
    let content = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                content = rawFile.responseText;
                console.log(content);
            }
        }
    }
    rawFile.send(null);
    return content;
}
