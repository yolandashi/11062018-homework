// from data.js
let tableData = data;

// YOUR CODE HERE!

let tbody = d3.select("tbody");

data.forEach((tableData) => {
	let row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
	  	console.log(key, value);
		let cell = row.append("td");
     	cell.text(value);
	});	
});

let submit = d3.select("#filter-btn");

submit.on("click", function() {
    let filteredData = tableData;
    tbody.html("");
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
	let state = d3.select("#state").property("value");
	let country = d3.select("#country").property("value");
	let shape = d3.select("#shape").property("value");

    if (date) {filteredData = filteredData.filter(row => row.datetime === date);}
    if (city){filteredData = filteredData.filter(row => row.city === city)};
	if (state){filteredData = filteredData.filter(row => row.state === state)};
	if (country){filteredData = filteredData.filter(row => row.country === country)};
	if (shape){filteredData = filteredData.filter(row => row.shape === shape)};

	buildTable(filteredData);
});
    
function buildTable(filteredData) {
        filteredData.forEach((filteredData) => {
            let row = tbody.append("tr");
            Object.entries(filteredData).forEach(([key, value]) => {
                console.log(key, value);
                let cell = row.append("td");
                cell.text(value);
            });        
        });
    }
