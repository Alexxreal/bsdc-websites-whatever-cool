const gameList = [
    {console:"Super Nintendo", franchise:"Super Mario Bros.", name:"Super Mario World"},
    {console:"Playstation 2", franchise:"n/a", name:"Shadow of the Colossus"},
    {console:"PC", franchise:"n/a", name:"ULTRAKILL"},
    {console:"PC", franchise:"n/a", name:"Arx Fatalis"},
    {console:"XBox 360", franchise:"Halo", name:"Halo 3"},
    {console:"Nintendo", franchise:"The Legend of Zelda", name:"The Legend of Zelda: Breath of the Wild"}
]

const listNames = ["name", "console", "franchise"]

const softCodedList = document.getElementById('table') // soft coded table variable

const listMakerTable = document.getElementById('tableDiy') // gets the whole table div of the diy table maker
const tBodyDiy = document.getElementById('tBodyDiy') // gets the tbody div of the diy table maker
const listMakerTableHeader = document.getElementById('headerRowDiy') // gets the row for the header of the DIY table maker
const valuesInputBox = document.getElementById("inputBoxesValues") // gets the div for the input box(es)
var selectedCell

//soft coded

for (x = 0; x < gameList.length; x++) {
    const newRow = document.createElement('tr') // Adds a new 'tr' (table row) HTML Element 
    for (y = 0; y < listNames.length; y++) {
        if (gameList[x][listNames[y]] == "n/a") {
            break // If the table cell is empty to skip to the next loop in the for loop
        }
        newRow.innerHTML += `
        <td> `+ gameList[x][listNames[y]] +`</td>
        ` // to recode listNames, tranny hardcodes his code
    }
    softCodedList.appendChild(newRow)
}

// table maker


function newHeader(event) {
    event.preventDefault();
    const newHeader = document.createElement('th') // table header element to append to the table
    const header = document.getElementById("headerId").value; // gets the text box contents

    newHeader.innerHTML = header
    newHeader.setAttribute(`onclick`, "test(event)");
    listMakerTableHeader.appendChild(newHeader) 
    valuesInputBox.innerHTML += `<input type="text" value="test" id="valuesId0-` + (listMakerTableHeader.childElementCount - 1) + `" name="` + header + `" placeholder="add to `+ header +`"> <br>`
}

function newValues(event) {
    event.preventDefault();
    var newRow = document.createElement('tr')
    for (x = 0; x < listMakerTableHeader.childElementCount; x++) {
        var newElement = document.createElement('td')
        newElement.setAttribute(`onclick`, "test(event)");
        var row = document.getElementById("valuesId0-"+ x).value;
        newElement.innerHTML = row
        newRow.appendChild(newElement);
    }
    tBodyDiy.appendChild(newRow)

}

function test(event) {
    if (selectedCell != null) {
    selectedCell.style.backgroundColor="white";
    selectedCell.style.color="black";
    }

    selectedCell = event.target

    console.log(selectedCell + " selected")
    event.target.style.backgroundColor="black";
    event.target.style.color="white";
}