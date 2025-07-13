const sampleArray = [
    {
        name: "Git",
        module: "https://www.crio.do/learn/me/ME_GIT_BASICS/ME_GIT_BASICS_MODULE_BYTE1/",
        cheetshit: "https://education.github.com/git-cheat-sheet-education.pdf",
        history: "https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git",
        links:  {
                    "Git Branches" : "https://www.atlassian.com/git/tutorials/using-branches",
                    "What is the git folder?" : "https://stackoverflow.com/questions/29217859/what-is-the-git-folder/56145562",
                    "Add all file to Repo" : "https://stackabuse.com/git-add-all-files-to-a-repo/",
                    "Commit syntax" : "https://www.atlassian.com/git/tutorials/saving-changes/git-commit",
                    "Commit message style guide" : "https://udacity.github.io/git-styleguide/",
                    "Git Pull Explained": "https://www.freecodecamp.org/news/git-pull-explained",
                    "Remote contains work that you don’t have locally error explained" : "https://blog.plover.com/prog/git-ff-error.html",

                },
    }
];

.app{
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  padding-top: 80px;
}

.content-wrapper {
  display: flex;
  flex: 1;
}


.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}

/* Sidebar / Navbar as Aside */
.sidebar {
  width: 15rem;
  background-color: var(--card-bg, #2c3e50);
  color: var(--text, #fff);
  padding: 1rem;
  flex-shrink: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  
}

/* Main content area */
.main-content {
  flex: 1;
  padding: 2rem;
  overflow-x: hidden;
}

@media (max-width: 600px) {
  .layout {
    flex-direction: column;
  }

  .sidebar {
    width: 95%;
    padding: 0.5rem 1rem;
  }

  .main-content {
    padding: 1rem;
  }
  
}
footer {
  margin-top: auto;
  padding: 1rem;
  background-color: #1e1e1e;
  color: #fff;
  text-align: center;
}




