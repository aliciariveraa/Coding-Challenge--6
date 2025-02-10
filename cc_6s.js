// Task 1: Function Declaration - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

// Test data for Task 1
calculateProfit(20, 30, 100); // Expected output: "Total Profit: $1000"
calculateProfit(50, 70, 200); // Expected output: "Total Profit: $4000"


// Task 2: Function Expression - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
}

// Test data for Task 2
calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"


// Task 3: Arrow Function - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonus;
    switch (performanceRating) {
        case "Excellent":
            bonus = salary * 0.2;
            break;
        case "Good":
            bonus = salary * 0.1;
            break;
        case "Average":
            bonus = salary * 0.05;
            break;
        default:
            bonus = 0;
    }
    console.log(`Bonus: $${bonus}`);
}

// Test data for Task 3
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"


// Task 4: Parameters and Arguments - Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricePerMonth;

    switch (plan) {
        case "Basic":
            pricePerMonth = 10;
            break;
        case "Premium":
            pricePerMonth = 20;
            break;
        case "Enterprise":
            pricePerMonth = 50;
            break;
        default:
            pricePerMonth = 0;
    }

    const totalCost = pricePerMonth * months * (1 - discount / 100);
    console.log(`Total Cost: $${totalCost}`);
}

// Test data for Task 4
calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"


// Task 5: Returning Values - Currency Conversion
function convertCurrency(amount, exchangeRate) {
    const convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
}

// Test data for Task 5
convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"


// Task 6: Higher-Order Functions - Discount Strategy for Bulk Orders
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

// Test data for Task 6
let orders = [200, 600, 1200, 450, 800];
const discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log(discountedOrders); // Expected output: [200, 540, 1080, 450, 720]