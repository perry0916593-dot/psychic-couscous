// Detect user country automatically using Geolocation + API
function autoDetectLocation() {
    const statusText = document.getElementById("status");

    statusText.innerText = "Detecting your location...";

    if (!navigator.geolocation) {
        statusText.innerText = "Geolocation not supported. Select manually.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (pos) => {
            const { latitude, longitude } = pos.coords;

            statusText.innerText = "Matching your country...";

            try {
                // Use Open-Meteo reverse geocoding API
                const url = `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}`;
                const response = await fetch(url);
                const data = await response.json();

                if (data && data.results && data.results.length > 0) {
                    let country = data.results[0].country;
                    document.getElementById("countrySelect").value = country;

                    statusText.innerText = `Detected: ${country}`;
                } else {
                    statusText.innerText = "Could not detect automatically.";
                }
            } catch (error) {
                statusText.innerText = "Error detecting location.";
            }
        },
        () => {
            statusText.innerText = "Permission denied. Select manually.";
        }
    );
}

// Save selected country & proceed
function continueToNext() {
    const country = document.getElementById("countrySelect").value;

    if (!country) {
        alert("Please choose your country.");
        return;
    }

    localStorage.setItem("user_country", country);

    // Go to next step (choose language)
    window.location.href = "language.html";
}

window.onload = autoDetectLocation;
