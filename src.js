const hostname = window.location.hostname;
//www.reddit.com
if (hostname === 'www.twitch.tv') { 
    const timeLimit = 300; // Limit
    const startTime = Date.now();     // Get the current timestamp

    localStorage.setItem('startTime', startTime);

    const checkElapsedTime = () => {     // Check the elapsed time periodically
    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

        if (elapsedTime >= timeLimit) { // Redirect to another page
            window.location.href = 'file:///D:/Repositories/extension/Redirect.html';
        } else {
            setTimeout(checkElapsedTime, 1000); // Check every second
        }
    };
}
checkElapsedTime(); // Start checking elapsed time