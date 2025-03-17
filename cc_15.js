// Task 1: Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard"); // Get the riskDashboard container where risk items will be added
console.log("Risk Dashboard Loaded");

// Task 2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {  //Function to add a new risk item to the dashboard
    const riskCard = document.createElement("div");  //Create a new div element for the risk card
    riskCard.className = "riskCard";  // Assign a class for styling the risk card
