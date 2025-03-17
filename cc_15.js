// Task 1: Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard"); // Get the riskDashboard container where risk items will be added
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {  //Function to add a new risk item to the dashboard
    const riskCard = document.createElement("div");  //Create a new div element for the risk card
    riskCard.className = "riskCard";  // Assign a class for styling the risk card

// Task 4: Categorizing Risks by Level
    updateRiskCardStyle(riskCard, riskLevel);  // Update the background color of the risk card based on its severity level
    
    // Populate the risk card with risk information
    riskCard.innerHTML = `
    <p><strong>Risk Name:</strong> ${riskName}</p>
    <p><strong>Risk Level:</strong> <span class="riskLevelText">${riskLevel}</span></p>
    <p><strong>Department:</strong> ${department}</p>
    <button class="resolveButton">Resolve</button>
    `;
    // Task 3: Removing Risk Items
    const resolveButton = riskCard.querySelector(".resolveButton");  //Add event listener to the "Resolve" button to remove the risk card from the dashboard
    resolveButton.addEventListener("click", function (event) {
