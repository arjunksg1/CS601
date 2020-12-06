window.onload = init;

function init(){
    displayHelloMessage();
    
}

function displayHelloMessage(){
    let messageElements = document.getElementsByClassName("default-hide");
    let helloElement = document.getElementById("message-display");
    let index = 0;
    setInterval(
        function(){
            if(index === messageElements.length){
                index = 0;
            }
            helloElement.innerHTML = messageElements[index].innerHTML;
            index++;
        },
        4000
    );
}


