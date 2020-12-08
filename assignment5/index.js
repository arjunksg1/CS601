const jsonFile = "my_degrees.json";

function getData() {
    // Get the table
    let degreeTableElement = document.getElementById("degrees-table");
    
    // Read JSON and write to table
    let json = null; 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', jsonFile, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status === 200) {
            json = xhr.response;
            json.forEach(
                element => {
                    console.log(element);
                    let rowElement = document.createElement("tr");
                    
                    let schoolElement = document.createElement("td");
                    schoolElement.innerHTML = element.school;
                    rowElement.appendChild(schoolElement);

                    let programElement = document.createElement("td");
                    programElement.innerHTML = element.program;
                    rowElement.appendChild(programElement);
                    
                    let typeElement = document.createElement("td");
                    typeElement.innerHTML = element.type;
                    rowElement.appendChild(typeElement);
                    
                    let yearElement = document.createElement("td");
                    yearElement.innerHTML = element.year;
                    rowElement.appendChild(yearElement);
                    
                    degreeTableElement.appendChild(rowElement);
                }
            );
            console.log(xhr.response);
        }
        else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send(null);
}