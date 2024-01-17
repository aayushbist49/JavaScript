// ADDING TO TABLE

var add = document.getElementById('add');
add.addEventListener("click", () => {
    console.log("Updating book...");

    tit = document.getElementById('title').value;
    aut = document.getElementById('author').value;
    gen = document.getElementById('genre').value;
    des = document.getElementById('description').value;

    var table = document.getElementById("table");
    var newRow = table.insertRow(-1);

    var titleCell = newRow.insertCell(0);
    titleCell.innerHTML = tit;
    var titleCell = newRow.insertCell(1);
    titleCell.innerHTML = aut;
    var titleCell = newRow.insertCell(2);
    titleCell.innerHTML = gen;
    var titleCell = newRow.insertCell(3);
    titleCell.innerHTML = des;

    document.getElementById("addInfo").innerHTML = 'Book "' + tit + '" has been added to the bookshelf';
})



// CLEAR INPUT

document.getElementById('clearInput').addEventListener("click", () => {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("description").value = "";
})



//DISPLAYING TABLE

table = document.getElementById('table');
document.getElementById("display").addEventListener("click", () => {
    table.style.display = 'block';
})



// SEARCHING BOOK

const searchFunction = () => {
    let input = document.getElementById('search').value.toUpperCase();
    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');
    for (var i = 1; i < tr.length; i++) {
        const title = tr[i].getElementsByTagName("td")[0].innerHTML.toUpperCase();
        const author = tr[i].getElementsByTagName("td")[1].innerHTML.toUpperCase();
        const genre = tr[i].getElementsByTagName("td")[2].innerHTML.toUpperCase();
        const description = tr[i].getElementsByTagName("td")[3].innerHTML.toUpperCase();
        if(title.includes(input)||author.includes(input) || genre.includes(input) || description.includes(input))
        {
            tr[i].style.display = "";
        }
        else{
            tr[i].style.display = "none";
        }
    }

};


// CLEARING SEARCH REUSLT

var clearSearch = document.getElementById('clearSearch');
clearSearch.addEventListener("click", () => {
    document.getElementById('search').value = "";
}
)