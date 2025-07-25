const projects = [
    // { 
    //     id: 0, 
    //     name: "Task Manager", 
    //     goal: "",
    //     focus: "NA",
    //     plateform: ["Vercel"], 
    //     type: "Full Stack",
    //     skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
    //     detail: "",
    //     figma: "NA",
    //     doc: "NA",
    //     github:"", 
    //     page: "",
    //     description: [
    //       "Create a Task schema in MongoDB with title, description, status, linked file, created on, deadline",
    //     ],
    // },
    { 
        id: 1, 
        name: "QTIFY", 
        goal: "Build the UI for a music browsing web-app from scratch.",
        focus: "ReactJS, CSS, UI libraries",
        plateform: ["Vercel",], 
        type: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "UI libraries"],
        detail: "https://www.crio.do/learn/me/ME_BUILDOUT_QTIFY_V2/",
        figma: "https://www.figma.com/design/tuCV26ozM1R75Ze6ShZxKs/Qtify?node-id=0-1&p=f",
        doc: "NA",
        github:"https://github.com/Kamlesh-Sahu-R/L-square-QTify", 
        page: "https://l-square-q-tify-lime-chi.vercel.app/",
        description: [
          "Created Navbar and Hero with search bar and feedback button.",
          "Created Albums grid card for featched data from API endpoind.",
          "Used the Swiper open-source UI library to build the Carousel for group of album card.",
        ],
    },
    { 
        id: 2, 
        name: "Task Manager", 
        goal: "Implement frontend and backend from scratch, connecting them, and following the best practices for MERN-stack.",
        focus: "Connecting the front-end and back-end.",
        plateform: ["Vercel", "Render"], 
        type: "Full Stack",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Material UI"],
        detail: "https://www.crio.do/learn/me/ME_MERN_TASK_MANAGER/ME_MERN_TASK_MANAGER_MODULE_BYTE1/",
        figma: null,
        doc: "https://docs.google.com/document/d/1nEl0JB0RP_7QigNijvFmRxdr3L--rriCn2NPD0sq7cY/edit?tab=t.0#heading=h.qdi1uvac1n6i",
        github:"https://github.com/Kamlesh-Sahu-R/task-manager", 
        page: "https://task-manager-zeta-tawny.vercel.app/",
        description: [
            "Created a Task schema in MongoDB with title, description, status, linked file, created on and deadline.",
            "Implemented frontend that include the Task List View, Add Task Button and Task Status.",
        ],
    },
    { 
        id: 3, 
        name: "Expense Tracker", 
        goal: "Implement an application where the user can manage their expenses by adding, editing, and deleting expense records, viewing summaries, and tracking a wallet balance.",
        focus: "REACT",
        plateform: ["Netlify"], 
        type: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
        detail: "https://www.crio.do/learn/me/ME_FE_XEXPENSETRACKER_V2/",
        figma: "https://www.figma.com/design/yHps1cSScYurYlrtnHmQMN/Crio-Takehome---Expense-Tracker?node-id=0-1&p=f",
        doc: "NA",
        github:"https://github.com/Kamlesh-Sahu-R/xexpansetracker", 
        page: "https://melodious-kashata-a765eb.netlify.app/",
        description: [
            "Implemented an application with core functionalities of Wallet balance, Add Expense and Edit/Delete Expense.",
            "Use figma document to create this UI.",
            "Implemented Model for adding expense and balance.",
        ],
    },
    { 
        id: 4, 
        name: "QKart Frontend", 
        goal: "QKart is an e-commerce application offering a variety of products for customers to choose from.",
        focus: "ReactJS, Material UI, Responsive Design, Event Handling and React Hooks",
        plateform: ["Vercel",], 
        type: "Frontend",
        skills: ["Developer Tool", "Material UI", "Local Storage", "Event Handling", "Responsive Design", "Form", "React Hook", "React Hooks", "React Router"],
        detail: "https://www.crio.do/learn/me/ME_QKART_FRONTEND_V2/",
        figma: "NA",
        doc: "NA",
        github:"https://github.com/Kamlesh-Sahu-R/kamleshsahur-ME_QKART_FRONTEND_V2", 
        page: "https://qkart-frontend-6v9iggg7y-kamlesh-sahus-projects-7d947fc5.vercel.app/",
        description: [
          "Implemented the core logic for authentication, shopping cart and checkout.",
          "Improved UI by adding responsive design elements for uniform experience across different devices.",
          "Utilized REST APIs to dynamically load and render data served by the backend server",
        ],
    },
    { 
        id: 5, 
        name: "X Board", 
        goal: "Build XBoard which is a Crio News Feed website that will feature the latest news for select topics, from Flipboard. Use your HTML, CSS, Bootstrap and JavaScript skills to achieve this.",
        focus: "HTML, CSS, JS, Bootstrap",
        plateform: ["Netlify"], 
        type: "Frontend",
        skills: ["HTML", "Bootstrap","JavaScript", "CSS", "HTTP"],
        detail: "https://www.crio.do/learn/me/ME_BUILDOUT_XBOARD/",
        figma: null,
        doc: "NA",
        github:"https://github.com/Kamlesh-Sahu-R/kamleshsahur-ME_BUILDOUT_XBOARD", 
        page: "https://inquisitive-jelly-b6c051.netlify.app/",
        description: [
            "Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch",
            "Used Accordions and Image Carousel to improve UI",
            "Fetched news content from flipboard's RSS feed using REST API",
        ],
    },
    { 
        id: 6, 
        name: "QTripDynamic", 
        goal: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.",
        focus: "HTML, JavaScript, Web Design",
        plateform: ["Vercel"], 
        type: "Frontend",
        skills: ["HTML", "Bootstrap","JavaScript", "DOM Manipulation", "JSON", "Developer Tool", "VS Code Live Server", "REST", "Event Handling"],
        detail: "https://www.crio.do/learn/me/ME_QTRIPDYNAMIC/",
        figma: "NA",
        doc: "NA",
        github:"https://github.com/Kamlesh-Sahu-R/kamleshsahur-ME_QTRIPDYNAMIC", 
        page: "https://kamleshsahur-me-qtripdynamic.vercel.app/",
        description: [
            "Created web pages using HTML and CSS and made them dynamic using JavaScript",
            "Improved UX with multi-select filters, image carousels",
            "Utilised localStorage to persist user preferences at client-side",
        ],
    },
    { 
        id: 7, 
        name: "Medify", 
        goal: "Build XMedify - an app to book doctor appointments and get it looking as close to the design as possible. Use your REACTJS skills to achieve this.",
        focus: "REACT",
        plateform: ["Vercel"], 
        type: "Full Stack",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
        detail: "https://www.crio.do/learn/me/ME_FE_XMEDIFY_V2/",
        figma: "https://www.figma.com/design/BLZw4DOia4hXyqt8X1Yuyl/Desktop-Designs---Healthcare-Consultation--Community-?node-id=0-1&p=f",
        doc: "NA",
        github:"https://github.com/Kamlesh-Sahu-R/medify", 
        page: "https://medify-six-sand.vercel.app/",
        description: [
            "Created dropdown for city and state and fetch the hospital after selection of both.",
            "Created appoinment booking section when a medical center is clicked.",
            "User can slect date and time and book appoinment.",
            "Displayed booking slots on My Booking page.",
        ],
    },

  
];

export default projects;