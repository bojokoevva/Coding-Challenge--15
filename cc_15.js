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

        // Task 6: Handling Event Propagation
        event.stopPropagation();  // Prevent the event from propagating to parent elements
        riskDashboard.removeChild(riskCard);  // Remove the risk card from the dashboard
    });

    // Prevent clicks inside the card from triggering other dashboard actions
    riskCard.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    riskDashboard.appendChild(riskCard);  // Append the newly created risk card to the riskDashboard container
}

// Task 5: Implementing Bulk Updates
function increaseRiskLevels() {
    const riskCards = document.querySelectorAll(".riskCard");  // Select all risk cards on the dashboard
    riskCards.forEach((riskCard) => {  // Iterate through each risk card and update its risk level
        const riskLevelText = riskCard.querySelector(".riskLevelText");  // Find the current risk level text
        let currentLevel = riskLevelText.textContent.trim();

        // Update the risk levels
        switch (currentLevel.toLowerCase()) {
            case "low":
                // Change risk level from Low to Medium
                riskLevelText.textContent = "medium";
                // Update the background color to reflect the new risk level
                updateRiskCardStyle(riskCard, "medium");
                break;
            case "medium":
                // Change risk level from Medium to High
                riskLevelText.textContent = "high";
                // Update the background color to reflect the new risk level
                updateRiskCardStyle(riskCard, "high");
                break;
            case "high":
                // No change needed for high risk
                break;
        }
    });
}

// Task 4: Categorizing Risks by Level
function updateRiskCardStyle(riskCard, riskLevel) {  //Function to update the background color of the risk card based on its severity level
    switch (riskLevel.toLowerCase()) {
        case "low":
            riskCard.style.backgroundColor = "#a8e6cf"; 
            break;
        case "medium":
            riskCard.style.backgroundColor = "#ffecd1"; 
            break;
        case "high":
            riskCard.style.backgroundColor = "#ffb3b3"; 
            break;
        default:
            riskCard.style.backgroundColor = "#ffffff"; 
    }
}
