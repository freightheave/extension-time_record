const hostName = window.location.hostname;
const timer = 10000; // Timeout value in milliseconds

if (hostName === 'www.twitch.tv') {
    setTimeout(() => {
        window.location.href = "https://www.github.com/freightheave";
    }, timer);
} else {
    window.location.href = "https://www.github.com/freightheave"; // Redirect to GitHub if the hostname is not www.twitch.tv
}