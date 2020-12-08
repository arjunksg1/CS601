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
                    // Create a row <tr> element to add to the table
                    let rowElement = document.createElement("tr");
                    // Create <td> for school
                    let schoolElement = document.createElement("td");
                    schoolElement.innerHTML = element.school;
                    rowElement.appendChild(schoolElement); // Add <td> to <tr>
                    // Create <td> for program
                    let programElement = document.createElement("td");
                    programElement.innerHTML = element.program;
                    rowElement.appendChild(programElement); // Add <td> to <tr>
                    // Create <td> for type
                    let typeElement = document.createElement("td");
                    typeElement.innerHTML = element.type;
                    rowElement.appendChild(typeElement); // Add <td> to <tr>
                    // Create <td> for year
                    let yearElement = document.createElement("td");
                    yearElement.innerHTML = element.year;
                    rowElement.appendChild(yearElement); // Add <td> to <tr>
                    // Add <tr> to the table
                    degreeTableElement.appendChild(rowElement);
                }
            );            
        }
        else {
            console.log('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send(null);
}