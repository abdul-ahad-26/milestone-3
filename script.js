"use strict";
var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const contactElement = document.getElementById("contact");
    const educationElement = document.getElementById("education");
    const skillsElement = document.getElementById("skills");
    const workExperienceElement = document.getElementById("workExperience");
    const profilePictureInput = document.getElementById("profilePicture");
    if (!nameElement.value || !emailElement.value || !contactElement.value || !profilePictureInput || !educationElement.value || !skillsElement.value || !workExperienceElement.value) {
        alert("Please fill out all fields.");
    }
    else {
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const workExperience = workExperienceElement.value;
        const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        const resumeOutput = `
        <h2 >Resume</h2>

        <hr>

        <h3>Personal Information</h3>
        ${profilePictureFile ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>

        <hr>

        <h3>Education</h3>
        <p>${education}</p>

        <hr>

        <h3>Skills</h3>
        <p>${skills}</p>

        <hr>

        <h3>Work Experience</h3>
        <p>${workExperience}</p>

        <hr>
         `;
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Element with id'resumeOutput' not found.");
        }
    }
});
function toggleSection(sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
    if (section) {
        if (section.style.height === "0px") {
            section.style.height = "auto";
            section.style.overflow = "visible";
            section.style.visibility = "visible";
        }
        else {
            section.style.height = "0px";
            section.style.overflow = "hidden";
            section.style.visibility = "hidden";
        }
    }
    else {
        console.error(`Section with class ${sectionClass} not found.`);
    }
}
