function hoveringId(element) {
    let rowId = element.parentElement.id;

    // Find if checkbox already exist for this row
    let checkbox = document.getElementsByName(rowId);
    if(checkbox.length === 0){
        // If doesn't exist then add empty checkbox
        element.innerHTML = `<input name=${rowId} type="checkbox" onchange="checkboxClick(this)">`;
    }
}

function endHovering(element) {
    // Get row id
    let rowId = element.parentElement.id;
    // Get row checkbox to check if is selected or not
    let checkbox = document.getElementsByName(rowId)[0];

    // If not selected then replace with row id
    if(!checkbox.checked){
        element.innerText = rowId;
    }
}

function unhideSelectable() {
    let items = document.getElementsByClassName("selectable");
    for(let item of items) {
        item.style.display = "";
    }
}

function hideSelectable() {
    let items = document.getElementsByClassName("selectable");
    for(let item of items) {
        item.style.display = "none";
    }
}

function checkboxClick(element) {
    let mainCheckbox = document.getElementById("main-checkbox");
    // If removed checkbox then remove main checkbox check
    if(!element.checked) {
        mainCheckbox.checked = false;
        if (countSelectedRows() === 0) {
            hideSelectable();
        }
    } else {
        // Check if all elements are selected
        let rows = document.getElementsByTagName("tr");

        // Convert from HTMLCollection to array
        rows = Array.from(rows);

        // Remove first element (first row)
        rows.shift();

        // check if all rows are selected
        let selectedRows = countSelectedRows();
        if (selectedRows === rows.length) {
            mainCheckbox.checked = true;
        }

        // Show selectable actions
        unhideSelectable();
    }
}

function countSelectedRows() {
    let rows = document.getElementsByTagName("tr");
    let number = 0;
    for (let row of rows) {
        try {
            if (row.children[0].children[0].checked) {
                number ++;
            }
        } catch {}
    }
    return number;
}


function selectAll() {
    let rows = document.getElementsByTagName("tr");

    // Convert from HTMLCollection to array
    rows = Array.from(rows);

    // Remove first element (first row)
    rows.shift()

    // Check if selected all or deselected all
    let checkbox = document.getElementById("main-checkbox");

    for (let row of rows) {
        let rowId = row.id;

        // Get first column cell
        let cell = row.children[0];

        if (checkbox.checked) {
            cell.innerHTML = `<input name=${rowId} type="checkbox" onchange="checkboxClick(this)" checked>`;
        } else {

            cell.innerHTML = rowId;
        }
    }
}