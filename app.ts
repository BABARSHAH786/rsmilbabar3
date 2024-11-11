// // Interface for Input Field Values
// interface InputFieldValues {
//     name: string;
//     title: string;
//     filename?: string; // Optional field
//     objective: string;
//     skills: string;
//     academic_details: string;
//     contact: string;
//     work_experience: string;
//     achievements: string;
//     projects: string;
//   }
  
//   const inputField: HTMLInputElement | null = document.querySelector(".inputField");
//   const main: HTMLElement | null = document.querySelector(".resume-builder");
//   const outputContainer: HTMLElement | null = document.querySelector(".output_container");
  
//   let isHidden = true;
  
//   // Function to toggle between input form and resume preview
//   function hide(): void {
//     if (isHidden) {
//       // Hide the input form and show the resume preview
//       main?.style.display = "none";
//       isHidden = false;
  
//       outputContainer?.style.display = "block";
//       outputContainer?.innerHTML = `
//         <div class="output">
//           <div class="heading">
//             <h1>${(inputField as HTMLInputElement)?.value}</h1>  // Type casting for inputField
//             <h4>${inputField?.getAttribute("title")}</h4>  // Accessing attribute
//             <div>${inputField?.getAttribute("filename") || ""}</div>  // Optional filename
//           </div>
//           <div class="info">
//             <div class="left">
//               <div class="box">
//                 <h2>Objective</h2>
//                 <p>${(inputField as HTMLInputElement)?.getAttribute("objective")}</p>
//               </div>
//               <div class="box">
//                 <h2>Skills</h2>
//                 <p>${(inputField as HTMLInputElement)?.getAttribute("skills")}</p>
//               </div>
//               <div class="box">
//                 <h2>Academic Details</h2>
//                 <p>${(inputField as HTMLInputElement)?.getAttribute("academic_details")}</p>
//               </div>
//               <div classclass="box">  // Typo fixed
//                 <h2>Contact</h2>
//                 <p>${(inputField as HTMLInputElement)?.getAttribute("contact")}</p>
//               </div>
//             </div>
//             <div class="right">
//               <div class="box">
//                 <h2>Work Experience</h2>
//                 <p>${(inputField as HTMLInputElement)?.getAttribute("work_experience")}</p>
//               </div>
//               <div class="box">
//                 <h2>Achievements</h2>
//                 <p>${(inputField as HTMLInputElement)?.getAttribute("achievements")}</p>
//               </div>
//               <div class="box">
//                 <h2>Projects</h2>
//                 <p>${(inputField as HTMLInputElement)?.getAttribute("projects")}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button onclick="print()">Print Resume</button>
//       `;
//     } else {
//       // Show the input form and hide the resume preview
//       main?.style.display = "block";
//       isHidden = true;
  
//       outputContainer?.style.display = "none";
//       outputContainer?.innerHTML = "";
//     }
//   }



// // shrable link...............................
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-display') as
// HTMLDivElement;

// const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;

// const shareableLinkElement = document.getElementById('shareable-link') as
// HTMLAnchorElement;
// const downloadPdfButton = document.getElementById('download-pdf') as
// HTMLButtonElement;
// // Handle form submission
// form.addEventListener('submit', (event: Event) => {
// event.preventDefault(); // prevent page reload
// // Collect input values
// const username = (document.getElementById('username') as
// HTMLInputElement).value;
// const name = (document.getElementById('name') as HTMLInputElement).value;
// const email = (document.getElementById('email') as HTMLInputElement).value;
// const phone = (document.getElementById('phone') as HTMLInputElement).value;
// const education = (document.getElementById('education') as
// HTMLTextAreaElement).value;
// const experience = (document.getElementById('experience') as
// HTMLTextAreaElement).value;
// const skills = (document.getElementById('skills') as
// HTMLTextAreaElement).value;
// // Save form data in localStorage with the username as the key
// const resumeData = {
// name,
// email,
// phone,
// education,
// experience,
// skills
// };
// localStorage.setItem(username, JSON.stringify(resumeData))
// const resumeHTML = `
// <h2>Editable Resume</h2>
// <h3>Personal Information</h3>
// <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
// <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
// <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
// <h3>Education</h3>
// <p contenteditable="true">${education}</p>
// <h3>Experience</h3>
// <p contenteditable="true">${experience}</p>
// <h3>Skills</h3>
// <p contenteditable="true">${skills}</p>
// `;
// // Display the generated resume
// resumeDisplayElement.innerHTML = resumeHTML;
// // Generate a shareable URL with the username only
// const shareableURL =
// `${window.location.origin}?username=${encodeURIComponent(username)}`;
// // Display the shareable link
// shareableLinkContainer.style.display = 'block';
// shareableLinkElement.href = shareableURL;
// shareableLinkElement.textContent = shareableURL;
// });
// // Handle PDF download
// downloadPdfButton.addEventListener('click', () => {
// window.print(); 
// });
// // Prefill the form based on the username in the URL
// window.addEventListener('DOMContentLoaded', () => {
// const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('username');
// if (username) {
//     const savedResumeData = localStorage.getItem(username);
// if (savedResumeData) {
// const resumeData = JSON.parse(savedResumeData);
// (document.getElementById('username') as HTMLInputElement).value =
// username;
// (document.getElementById('name') as HTMLInputElement).value =
// resumeData.name;
// (document.getElementById('email') as HTMLInputElement).value =
// resumeData.email;
// (document.getElementById('phone') as HTMLInputElement).value =
// resumeData.phone;
// (document.getElementById('education') as HTMLTextAreaElement).value =
// resumeData.education;
// (document.getElementById('experience') as HTMLTextAreaElement).value
// = resumeData.experience;
// (document.getElementById('skills') as HTMLTextAreaElement).value =
// resumeData.skills;
// }
// }
// });