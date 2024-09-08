
document.getElementById("resumeForm")?.addEventListener("submit", function(event){
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById("contact") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const workExperienceElement = document.getElementById("workExperience") as HTMLInputElement;
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    
    if(!nameElement.value ||!emailElement.value ||!contactElement.value || !profilePictureInput ||!educationElement.value ||!skillsElement.value ||!workExperienceElement.value){
        alert("Please fill out all fields.");
    }else{
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const workExperience = workExperienceElement.value;

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        const resumeOutput =`
        <h2 >Resume</h2>

        <hr>

        <h3>Personal Information</h3>
        ${profilePictureFile? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
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
         `
        const resumeOutputElement=document.getElementById("resumeOutput");
        if(resumeOutputElement){
            resumeOutputElement.innerHTML=resumeOutput;
        }
        else{
            console.error("Element with id'resumeOutput' not found.");
        }
    }

        
        
})



function toggleSection(sectionClass: string): void {
    const section = document.querySelector(`.${sectionClass}`) as HTMLElement;

    if (section) {
        if (section.style.height === "0px") {
            section.style.height = "auto";      
            section.style.overflow = "visible";  
            section.style.visibility = "visible"; 
        } else {
            section.style.height = "0px";        
            section.style.overflow = "hidden";   
            section.style.visibility = "hidden"; 
        }
    } else {
        console.error(`Section with class ${sectionClass} not found.`);
    }
}

