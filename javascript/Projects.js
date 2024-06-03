/*--Dikchha Rijal, Project.js, 2024-03-08, This is a javascript file to add functionality of creating a slide showto the html page Projects.html*/

//It contains multiple objects, each representing a project with its details like title, description, date, technologies used, and image
const projects = [
    {
        title: "Registration Form",
        description: "This form is created using semantic HTML and CSS. The user can register their personal and payment information and then register for the event.",
        date: "2024-02-17",
        technologies: "HTML, CSS, IDE: Visual Studio",
        image: "Project1.png"

    },
    {
        title: "Saloon Appointment",
        description: "This is a database application designed for users to book an appointment in the hair saloon using the form. Any new client will be added to the database after the form has been filled",
        date: "2024-02-25",
        technologies: "MS Access, Microsoft SQL, SSMS",
        image: "Project2.png"
    },
    {
        title: "My Health Data Records",
        description: "This application is a user input-based program for recording electronic health records of patients for their first-time visit to the hospital",
        date: "2023-10-14",
        technologies: "Java, IDE: Eclipse",
        image: "Project3.png"
    },
    {
        title: "Java Calculator",
        description: "This application prompts the user to enter the numbers for calculation and is programmed for Exceptional handling of errors",
        date: "2023-11-23",
        technologies: "Java, IDE: Eclipse",
        image: "Project4.png"
    }

];


//This variable keeps track of the index of the currently displayed project.
let currentProjectIndex = 0;

//It stores the reference to the HTML element with the ID "ProjectContainer", presumably where the project details will be displayed.
const projectContainer = document.getElementById("ProjectContainer");

//This function takes an index as input, retrieves the project object from the projects array using the index, and then updates the content of the projectContainer with the details of the selected project.
function showProject(index) {
    const project = projects[index];
    projectContainer.innerHTML = `
        <div class="project">
        <img src="Images/${project.image}" alt="Image for Project" width="300px" height="300px" border="2px">
        <div class="project-details" text-align="center">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <p>Date Completed: ${project.date}</p>
            <p>Technologies Used: ${project.technologies}</p>    
        </div>
    `;


}

//This function increments the currentProjectIndex to display the next project in the array. 
function showNextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
}
//This function decrements the currentProjectIndex to display the previous project in the array
function showPrevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
}

document.getElementById("next").addEventListener("click", showNextProject);
document.getElementById("prev").addEventListener("click", showPrevProject);

// function is called to display the initial project when the page loads.
showProject(currentProjectIndex);  