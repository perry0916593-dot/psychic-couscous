function saveLanguage() {
    const lang = document.getElementById("languageSelect").value;

    if (!lang) {
        alert("Please select your language.");
        return;
    }

    localStorage.setItem("user_language", lang);

    // Go to next onboarding step (username)
    window.location.href = "username.html";
}
