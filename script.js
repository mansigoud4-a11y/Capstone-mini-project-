// ============================================================================
// 1. DATA & INPUT INITIALIZATION
// ============================================================================
console.log("--- Initializing Inventory System ---");

// Initial baseline inventory array containing pre-existing items
const inventory = [
    { name: "Laptop", price: 800, category: "Premium" },
    { name: "Mouse", price: 25, category: "Budget" }
];

let newName = "";
let newPriceRaw = "";
let newPrice = 0;

// ============================================================================
// 3. LOOPS & FLOW CONTROL: Loop and validation check for missing/bad inputs
// ============================================================================
while (true) {
    newName = prompt("Enter new product name:", "Monitor");
    
    // Validate string content
    if (!newName || newName.trim() === "") {
        alert("Product name cannot be empty! Please try again.");
        continue; // Restart the loop if validation fails
    }

    newPriceRaw = prompt(`Enter price for "${newName}":`, "150");
    newPrice = Number(newPriceRaw);

    // Validate that input converts to a non-negative number
    if (isNaN(newPrice) || newPriceRaw.trim() === "" || newPrice < 0) {
        alert("Please enter a valid, non-negative numerical price!");
        continue; // Restart the loop if verification fails
    }

    // Input fields are clean and fully validated, break out of loop control framework
    break;
}

console.log(`[Prompt executed: User adds "${newName}" at "$${newPrice}"]`);
console.log("\n");

// ============================================================================
// 2. CONTROL FLOW & CONDITIONAL EVALUATION: Assign tier badge based on thresholds
// ============================================================================
let primaryTier = "";

// if...else boundary check
if (newPrice >= 500) {
    primaryTier = "HighValue";
} else if (newPrice >= 50 && newPrice < 500) {
    primaryTier = "MidValue";
} else {
    primaryTier = "LowValue";
}

let determinedCategory = "";

// switch statement block matching the evaluation flag criteria rules
switch (primaryTier) {
    case "HighValue":
        determinedCategory = "Premium";
        break;
    case "MidValue":
        determinedCategory = "Standard";
        break;
    case "LowValue":
        determinedCategory = "Budget";
        break;
    default:
        determinedCategory = "Standard";
}

// Push the freshly prepared entry object onto the global database list
inventory.push({ name: newName, price: newPrice, category: determinedCategory });

// ============================================================================
// 5. ARRAY METHODS & ITERATION: forEach() log structure output
// ============================================================================
console.log("--- Processing Inventory Roster (forEach) ---");
console.log("--");
inventory.forEach(item => {
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`);
});
console.log("\n");

// ============================================================================
// 4. FUNCTIONS & SCOPE: Calculate statistics with secure local parameters
// ============================================================================
console.log("--- Financial Analytics ---");

// Regular standard function computing bare inventory sums with local variable boundaries
function calculateTotalValue(itemsList) {
    let localTotalAccumulator = 0; // Locally block-scoped parameter
    
    itemsList.forEach(item => {
        localTotalAccumulator += item.price;
    });
    
    return localTotalAccumulator;
}

const totalInventoryValue = calculateTotalValue(inventory);
console.log(`Total Inventory Value: $${totalInventoryValue}`);

// ============================================================================
// 5. ARRAY METHODS & ITERATION: filter() and map() array manipulation pipelines
// ============================================================================

// Arrow function utilizing filter and map pipelines to isolate affordable items under \$200
const extractAffordableNames = (itemsList) => {
    return itemsList
        .filter(item => item.price < 200)
        .map(item => item.name);
};

const affordableItemsList = extractAffordableNames(inventory);

// Log output using JSON formatting to match console array structures exactly
console.log(`Filtered Affordable Items (Under $200):`, affordableItemsList);

// Transforming objects structure array into uppercase tracking reports array using map()
const formattedReportList = inventory.map(item => {
    return `${item.name.toUpperCase()}: $${item.price}`;
});

console.log(`Formatted Report List:`, formattedReportList);