function displayProjectPage(){
    let skillsPage = document.getElementById("skillsPage");
    let educationPage = document.getElementById("educationPage");
    let projectPage = document.getElementById("projectPage");
    skillsPage.style.top = "100vh";
    projectPage.style.top = "0vh";
    educationPage.style.top = "100vh";
    
}

function displayHomePage(){
    let skillsPage = document.getElementById("skillsPage");
    let educationPage = document.getElementById("educationPage");
    let projectPage = document.getElementById("projectPage");
    skillsPage.style.top = "100vh";
    projectPage.style.top = "100vh";
    educationPage.style.top = "100vh";
}

function displayEducationPage(){
    let skillsPage = document.getElementById("skillsPage");
    let educationPage = document.getElementById("educationPage");
    let projectPage = document.getElementById("projectPage");
    skillsPage.style.top = "100vh";
    projectPage.style.top = "100vh";
    educationPage.style.top = "0vh";
}

function displaySkillsPage(){
    let skillsPage = document.getElementById("skillsPage");
    let educationPage = document.getElementById("educationPage");
    let projectPage = document.getElementById("projectPage");
    skillsPage.style.top = "0vh";
    projectPage.style.top = "100vh";
    educationPage.style.top = "100vh";
}

function openOnlineCalendar(){
    window.open("https://HiItsMatt.github.io/The-Online-Calendar");
}

function openOnlineProjectManager(){
    window.open("https://github.com/HiItsMatt/The-Online-Project-Manager");
}