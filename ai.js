// ==UserScript==
// @name         Reddit and Twitch Time Limit
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Limits time on Reddit and Twitch to 15 minutes per day.
// @author       Your Name
// @match        https://www.reddit.com/*
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

const MAX_TIME_MINUTES = 15;
const CHECK_INTERVAL_MS = 60000; // 1 minute in milliseconds

let totalMinutes = 0;

// Function to check the time spent and take action if limit is reached
function checkTime() {
    totalMinutes++;
    localStorage.setItem("totalMinutes", totalMinutes);
    if (totalMinutes >= MAX_TIME_MINUTES) {
        alert("You've reached your daily limit on Reddit and Twitch.");
        window.location.href = "https://github.com/your-username/your-repo"; // Replace with your GitHub URL
    }
}

// Function to reset the time at midnight
function resetTimeAtMidnight() {
    const now = new Date();
    const millisTillMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0) - now;
    setTimeout(() => {
        totalMinutes = 0;
        localStorage.setItem("totalMinutes", totalMinutes);
        resetTimeAtMidnight(); // Reinitialize the midnight reset
    }, millisTillMidnight);
}

// Restore totalMinutes from local storage
totalMinutes = parseInt(localStorage.getItem("totalMinutes")) || 0;

// Check the time at regular intervals
setInterval(checkTime, CHECK_INTERVAL_MS);

// Set up the reset function to run at the next midnight
resetTimeAtMidnight();
