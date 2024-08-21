function displayProjectPage(){
    let projectPage = document.getElementById("projectPage");
    let educationPage = document.getElementById("educationPage");
    projectPage.style.top = "0vh";
    educationPage.style.top = "100vh";
    
}

function displayHomePage(){
    let projectPage = document.getElementById("projectPage");
    projectPage.style.top = "100vh";
    let educationPage = document.getElementById("educationPage");
    educationPage.style.top = "100vh";
}

function displayEducationPage(){
    let educationPage = document.getElementById("educationPage");
    let projectPage = document.getElementById("projectPage");
    projectPage.style.top = "100vh";
    educationPage.style.top = "0vh";
}

function openOnlineCalendar(){
    window.open("https://HiItsMatt.github.io/The-Online-Calendar");
}

function openOnlineProjectManager(){
    window.open("https://github.com/HiItsMatt/The-Online-Project-Manager");
}