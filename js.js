// Define the target websites where you want to close the tab
const targetWebsites = [
    "https://example.com",
    "https://another-example.com"
    // Add more websites as needed
];

// Check if the current website matches any of the target websites
if (targetWebsites.includes(window.location.href)) {
    // Set the time delay (in milliseconds) before closing the tab
    const delayInMilliseconds = 5000; // 5 seconds

    // Schedule the tab to close after the specified delay
    setTimeout(function() {
        window.close();
    }, delayInMilliseconds);
} else {
    console.log("This website is not in the target list. No action taken.");
}