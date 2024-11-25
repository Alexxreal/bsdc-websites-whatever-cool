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

const deleteCellButton = document.getElementById("deleteCell")
const deselectCellButton = document.getElementById("deselectCell")
const changeTextButton = document.getElementById("changeTextButton")
var selectedCells = []

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
    valuesInputBox.innerHTML += `<input type="text" id="valuesId0-` + (listMakerTableHeader.childElementCount - 1) + `" name="` + header + `" placeholder="add to `+ header +`"> <br>`
    update()
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
    update()
}

function test(event) {

    for (x = 0; x < selectedCells.length; x++) {
        if (selectedCells[x] == event.target) {
            selectedCells[x].style.backgroundColor="white";
            selectedCells[x].style.color="black";
            selectedCells.splice(x, 1);
            update()
            return
        }
    }
    
    selectedCells.push(event.target)
    event.target.style.backgroundColor="black";
    event.target.style.color="white";
    update()
}

function deleteCell() {
    for (x = 0; x < selectedCells.length; x++) {
        selectedCells[x].innerHTML = ``
    }
    update()
}

function deselectCell() {
    for (x = 0; x < selectedCells.length; x++) {
        selectedCells[x].style.backgroundColor="white";
        selectedCells[x].style.color="black";     
    }
    selectedCells.splice(0, selectedCells.length);
    update()   
}

function changeText(event) {
    event.preventDefault();
    const text = document.getElementById("changeTextId").value;

    for (x = 0; x < selectedCells.length; x++) {
        selectedCells[x].innerHTML = text 
    }
    update()
}

function update() {
    var selectedEmpty = true;
    for (x = 0; x < selectedCells.length; x++) {
        if (selectedCells[x].innerHTML != "") {
            selectedEmpty = false
            console.log(selectedCells[x])
        } 
    }

    if (selectedEmpty == true) {
        deleteCellButton.disabled = true;
    }
    else {
        deleteCellButton.disabled = false;
        deselectCellButton.disabled = false;
    }

    if (selectedCells.length == 0) {
        deselectCellButton.disabled = true;
    }


    if (selectedCells.length > 1) {
        deselectCellButton.innerHTML = `Deselect cells`
    }
    else {
        deselectCellButton.innerHTML = `Deselect cell`
    }

    if (selectedCells.length > 1) {
        deleteCellButton.innerHTML = `Delete cells`
    }
    else {
        deleteCellButton.innerHTML = `Delete cell`
    }
}