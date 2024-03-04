const hostname = window.location.hostname;
//www.reddit.com
if (hostname === 'www.twitch.tv'){ 
    const timeLimit = 100; // Limit
    // Get the current timestamp
    const startTime = Date.now();

    // Store the start time in localStorage
    localStorage.setItem('startTime', startTime);

    // Check the elapsed time periodically
    const checkElapsedTime = () => {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

        if (elapsedTime >= timeLimit) {
            // Redirect to another page (e.g., "https://example.com")
            window.location.href = 'file:///D:/Repositories/extension/Redirect.html';
        } else {
            // Continue checking
            setTimeout(checkElapsedTime, 1000); // Check every second
        }
    };
}
// Start checking elapsed time
checkElapsedTime();
