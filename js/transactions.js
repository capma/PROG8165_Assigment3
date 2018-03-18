// Data to be used in transaction table
var transactionsData = [
  {
    name: "Drone",
    date: "December",
    transactionType: "Debit",
    location: "India",
    value: "-100"
  },
  {
    name: "Dress",
    date: "April",
    transactionType: "Debit",
    location: "Brazil",
    value: "-500"
  },
  {
    name: "Kiwi",
    date: "May",
    transactionType: "Credit",
    location: "Japan",
    value: "1000"
  },
  {
    name: "Toys",
    date: "June",
    transactionType: "Debit",
    location: "USA",
    value: "-1000"
  }
];
window.onload = function() {
  // for transaction page
  if(window.location.pathname.includes('dashboard.html') === true) {
    // Set table data from json data above
    var transactionTable = document.getElementById('transactionTable');
    for (var i=0; i<transactionsData.length; i++) {
      var row = document.createElement("tr");;

      var tdName = document.createElement("td");
      var nameAnchor = document.createElement("a");
      nameAnchor.setAttribute("href", "detailed-transaction.html?transaction="+i);
      var nameContent = document.createTextNode(transactionsData[i].name);
      nameAnchor.appendChild(nameContent);
      tdName.appendChild(nameAnchor);

      var tdDate = document.createElement("td");
      var dateContent = document.createTextNode(transactionsData[i].date);
      tdDate.appendChild(dateContent);

      var tdTransactionType = document.createElement("td");
      var transactionTypeContent = document.createTextNode(transactionsData[i].transactionType);
      tdTransactionType.appendChild(transactionTypeContent);

      var tdLocation = document.createElement("td");
      var locationContent = document.createTextNode(transactionsData[i].location);
      tdLocation.appendChild(locationContent);

      row.appendChild(tdName);
      row.appendChild(tdDate);
      row.appendChild(tdTransactionType);
      row.appendChild(tdLocation);

      transactionTable.appendChild(row);
    }
  }

  // for detail page
  if(window.location.pathname.includes('detailed-transaction.html') === true) {
    if(window.location.search && window.location.search!=""){
      // set dynamic value using index from detail page
      var index = window.location.search.split("=")[1];
      var transactionName = document.getElementById('transactionName');
      transactionName.innerHTML = transactionsData[index].name;

      var transactionDate = document.getElementById('transactionDate');
      transactionDate.innerHTML = transactionsData[index].date;

      var transactionLocation = document.getElementById('transactionLocation');
      transactionLocation.innerHTML = transactionsData[index].location;

      var transactionValue = document.getElementById('transactionValue');
      transactionValue.innerHTML = transactionsData[index].value;
    }
  }
}

//Sort function
function sortFunction() {
  var input, filter, table, tr, td, i, j;
  input = document.getElementById("transactionInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("transactionTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j]) {
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}
