// Sample placement data (you can replace this with your data)
// Sample placement data (you can replace this with your data)
const placementData = [
    { sno: 1, company: "ABC Corp", date: "2023-05-15", selections: 5 },
    { sno: 2, company: "XYZ Solutions", date: "2023-06-20", selections: 8 },
    { sno: 3, company: "Tech Innovators", date: "2022-12-10", selections: 10 },
    { sno: 4, company: "Global Enterprises", date: "2022-11-25", selections: 7 },
];

const yearSelect = document.getElementById("year-select");
const placementTable = document.getElementById("placement-data");

// Function to filter data based on the selected year
function filterPlacementData(year) {
    const filteredData = placementData.filter(entry => entry.date.startsWith(year));
    return filteredData;
}

// Function to populate the table with filtered data
function populateTable(year) {
    const filteredData = filterPlacementData(year);

    const tableRows = filteredData.map(entry => `
        <tr>
            <td>${entry.sno}</td>
            <td>${entry.company}</td>
            <td>${entry.date}</td>
            <td>${entry.selections}</td>
        </tr>
    `).join('');

    placementTable.innerHTML = tableRows;
}

// Event listener for the year select dropdown
yearSelect.addEventListener("change", function () {
    const selectedYear = yearSelect.value;
    populateTable(selectedYear);
});

// Initial population of the table with the default year
populateTable(yearSelect.value);
