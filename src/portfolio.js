/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Yacine Rahimi",
  title: "Hi all, I'm Yacine",
  subTitle: emoji(
    "A passionate Front End  Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yacinerahimi",
  linkedin: "https://www.linkedin.com/in/yacine-rahimi-71140120a/",
  gmail: "y.yacine.rahimi@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    // {
    //   skillName: "Adobe XD",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "Adobe Photoshop",
    //   fontAwesomeClassname: "fab fa-python"
    // }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EUROPEAN EDUCATION FEDERATION - FEDE",
      logo: require("./assets/images/Logo_fede_2016_.png"),
      subHeader: "European Master, IT Project Manager",
      duration: "December 2020 - July 2021",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },    {
      schoolName: "SULTAN MOULAY SLIMANE UNIVERSITY",
      logo: require("./assets/images/soltan.png"),
      subHeader: "Professional License of University Geomatics Topography",
      duration: "December 2014 - July 2015",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },  {
      schoolName: "SCHOOL OF APPLIED COMPUTER SCIENCES AND BANKS",
      logo: require("./assets/images/bnk.jpeg"),
      subHeader: "Certificate of training in Algorithm and programming languages",
      duration: "December 2013 - July 2014",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "SPECIALIZED INSTITUTE OF APPLIED TECHNOLOGY",
      logo: require("./assets/images/ofptt.jpeg"),
      subHeader: "Specialized Technician Surveyor Topographer",
      duration: "December 2011 - July 2013",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
    // ,
    // {
    //   schoolName: "YOUSSEF IBN TACHFIN HIGH SCHOOL",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Scientific Baccalaureate",
    //   duration: "December 2010 - July 2011",
    //   // desc: "Participated in the research of XXX and published 3 papers.",
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   // ]
    // },
  
  

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Supervisor",
      company: "ANCFCC",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "December 2017 – Present",
      desc: "THE NATIONAL AGENCY OF LAND CONSERVATION, CADASTRE AND MAPPING.",
      descBullets: [
        "Creation and development of the Eragis application to draw plans on terrain using geolocation and link them to the cadastre database.",
        "Development of a local site to find legal documents scanned of each file.",
        "Confrontation between the plans drawn by the surveyors and the images aerial.",
    
      ]
    },
    {
      role: "Team leader",
      company: "ADETOP SARL COMPANY",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
  //    desc: "",
      descBullets: [
        "Creation and development of the Eragis application to draw plans on terrain using geolocation and link them to the cadastre database.",
        "Development of a local site to find legal documents scanned of each file.",
        "Confrontation between the plans drawn by the surveyors and the images aerial.",
    
      ]
    },
    {
      role: "Web designer / developer",
      company: "COMPANY GTAP SARL",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "April 2014 – Oct 2016",
  //    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Numérisation des archives des sociétés et des Institutions gouvernementales.",
        "Dessin de panneaux publicitaires",

        "Création des sites web des sociétés et des Institutions gouvernementales.",
        "Faire des Dessins publicitaires pour des supermarchés, des cybercafés et des écoles."
       ]
    },    {
      role: "Web designer / developer",
      company: "KAMAWORK SARL COMPANY",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Sep 2013 – Sep 2014",
 //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Numérisation des archives des sociétés et des Institutions gouvernementales.",
        "Dessin de panneaux publicitaires",
        ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SOCIÉTÉ FOYER POUR VOUS SARL CERTIFICATE OF APPRECIATIONL",
      subtitle:
        "A certificate of recognition of the efforts made and the contribution to the creation of a site Web containing 3D images of the apartments for sale of the company FOYER POUR VOUS.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    {
      title: "CERTIFICATE OF APPRECIATION ALITRAV SARL COMPANY",
      subtitle:
        "A certificate of recognition of the efforts made and the contribution to the creation of a 3D project of Riyadh subdivision buildings by Sketchup for the company AliTrav.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "y.yacine.rahimi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
