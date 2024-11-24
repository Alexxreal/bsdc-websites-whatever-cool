const gameList = [
    {console:"Super Nintendo", franchise:"Super Mario Bros.", name:"Super Mario World"},
    {console:"Playstation 2", franchise:"n/a", name:"Shadow of the Colossus"},
    {console:"PC", franchise:"n/a", name:"ULTRAKILL"},
    {console:"PC", franchise:"n/a", name:"Arx Fatalis"},
    {console:"XBox 360", franchise:"Halo", name:"Halo 3"},
    {console:"Nintendo", franchise:"The Legend of Zelda", name:"The Legend of Zelda: Breath of the Wild"}
]

const listNames = ["name", "console", "franchise"]

const softCodedList = document.getElementById('table')
const listMakerTable = document.getElementById('tableDiy')
const tBodyDiy = document.getElementById('tBodyDiy')
const listMakerTableHeader = document.getElementById('headerRowDiy')
const valuesInputBox = document.getElementById("inputBoxesValues")

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
    const newHeader = document.createElement('th')
    const header = document.getElementById("headerId").value;

    newHeader.innerHTML = header
    listMakerTableHeader.appendChild(newHeader) 
    valuesInputBox.innerHTML += `<input type="text" id="valuesId` + (listMakerTableHeader.childElementCount - 1) + `" name="` + header + `" placeholder="add to `+ header +`"> <br>`
}

function newValues(event) {
    event.preventDefault();
    var newRow = document.createElement('tr')
    for (x = 0; x < listMakerTableHeader.childElementCount; x++) {
        var newElement = document.createElement('td')
        var row = document.getElementById("valuesId"+ x).value;
        newElement.innerHTML = row
        newRow.appendChild(newElement);
    }
    tBodyDiy.appendChild(newRow)

}