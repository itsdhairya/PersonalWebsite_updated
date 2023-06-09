// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dhairya",
  middleName: "",
  lastName: "Brahmbhatt",
  message: " Empowering the Future with Innovative Technology Solutions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/itsdhairya",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dhairya-brahmbhatt-3949011b4/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/picture.png"),
  imageSize: 375,
  message:
    "Welcome to my personal website! I am Dhairya Brahmbhatt, a skilled database administrator and administrative accountant with a passion for technology and data analysis.",
  resume: "../editable-stuff/Resume-Dhairya-Brahmbhatt.pdf",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "itsdhairya", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: ["Al-Personal-Assistant", "EasyApplyJobsBot ", "AI-Generator", "CHAT-GPT-WhatsappBot","Hand-Gesture-ROBOT-Arduino-" ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "I am a passionate and dedicated individual who is eager to make a positive impact in the world through the power of technology. With a degree in Computer Engineering and experience in various programming languages, I am well-equipped to tackle any challenge that comes my way. I am also a strong believer in giving back to the community, and I strive to do so through volunteering and contributing to open-source projects in my free time. Overall, I am committed to continuous learning and growth in both my personal and professional endeavors.",
  images: [
    { 
      img: require("../editable-stuff/picture.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/picture.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 95 },
    { name: "Data Structures", value: 90 },
    { name: "C/C++", value: 70 },
    { name: "JavaScript", value: 60 },
    { name: "React", value: 60 },
    { name: "HTML/CSS", value: 65 },
    { name: "C#", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "business4dhairya@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Database Administration',// Here Add Company Name
      companylogo: require('../assets/img/daymak.jpg'),
      date: 'Novemember 2022 – Present',
    },
    {
      role: 'Administrative Assistant',
      companylogo: require('../assets/img/daymak.jpg'),
      date: 'April 2012 – November 2022',
    },
    {
      role: 'Clinic Coordinator [Covid Clinic]',
      companylogo: require('../assets/img/occumed.jpg'),
      date: 'April 2012 – November 2022',
    },
    {
      role: 'Vaccine Community Clinic Assistant',
      companylogo: require('../assets/img/york.png'),
      date: 'October 2021 – January 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
