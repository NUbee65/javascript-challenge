// from data.js
var incidents = data;

// YOUR CODE HERE!

// BASIC TABLE
// Iterate through each object in an array of objects
data.forEach((item) => {

  // Use D3 to select the table body
  var tbody = d3.select('tbody');
  
  // Append one table row per object (from array of objects)
  var row = tbody.append('tr');

  // Append one cell for the ufo incident date
  row.append('td').text(item.datetime);

  // Append one cell for the ufo incidentcity
  row.append('td').text(item.city);

  // Append one cell for the ufo incident state
  row.append('td').text(item.state);

  // Append one cell for the ufo incident country
  row.append('td').text(item.country);
  
  // Append one cell for the ufo incident shape
  row.append('td').text(item.shape);

  // Append one cell for the ufo incident duration (mins)
  row.append('td').text(item.durationMinutes);
  
  // Append one cell for the ufo incident comments
  row.append('td').text(item.comments);

})

// PROOF I CAN GET AT THE DATA

dates = incidents.map(incident => incident['datetime']);
cities = incidents.map(incident => incident['city']);
states = incidents.map(incident => incident['state']);
countries = incidents.map(incident => incident['country']);
shapes = incidents.map(incident => incident['shape']);
durations = incidents.map(incident => incident['durationMinutes']);
notes = incidents.map(incident => incident['comments']);

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
    
var datesUnique = dates.filter(onlyUnique)
var citiesUnique = cities.filter(onlyUnique)
var statesUnique = states.filter(onlyUnique)
var countriesUnique = countries.filter(onlyUnique)
var shapesUnique = shapes.filter(onlyUnique)

console.log(`--------------------------`)
console.log(`Dates: ${dates}`);
console.log(`Dates Number: ${dates.length}`);
console.log(`Dates Unique: ${datesUnique.length}`);
console.log(`--------------------------`)
console.log(`Cities: ${cities}`);
console.log(`Cities Number: ${cities.length}`);
console.log(`Cities Unique: ${citiesUnique.length}`);
console.log(`--------------------------`)
console.log(`States: ${states}`);
console.log(`States Number: ${states.length}`);
console.log(`States Unique: ${statesUnique.length}`);
console.log(`--------------------------`)
console.log(`Countries: ${countries}`);
console.log(`Countries Number: ${countries.length}`);
console.log(`Countries Unique: ${countriesUnique.length}`);
console.log(`--------------------------`)
console.log(`Shapes: ${shapes}`);
console.log(`Shapes Number: ${shapes.length}`);
console.log(`Shapes Unique: ${shapesUnique.length}`);
console.log(`--------------------------`)
console.log(`Durations (mins):${durations}`);
console.log(`Durations Number:${durations.length}`);
console.log(`--------------------------`)
console.log(`Comments: ${notes}`);
console.log(`Comments Number: ${notes.length}`);

// SEARCH FOR RECORD WITH A SPECIFIC DATE

function search(dateKey){
    for (var i=0; i < incidents.length; i++) {
        if (incidents[i].datetime === dateKey) {
            return incidents[i];
        }
    }
};


// d3.select('button')

var inputDate = d3.select('input');

// inputDate = "1/3/2010";

var resultObject = search(inputDate);
console.log(resultObject);



aa = data[0];

console.log(aa.datetime);
console.log(aa.city);
console.log(aa.state);
console.log(aa.country);
console.log(aa.shape);
console.log(aa.durationMinutes);
console.log(aa.comments);






function dateFilter() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("dateInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {      
      txtValue = td.textContent || td.innerText;      
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }                    
    }    
  }
}

// var data = [{"id":1,"term_id":5,"type":"car"},{"id":2,"term_id":3,"type":"bike"},{"id":3,"term_id":6,"type":"car"}];

var result = data.filter(function(e) {
  return e.datetime == "1/1/2010" && e.city == 'el cajon'
});

console.log(result);