const apps = [
    {
      "id": 3,
      "name": "Marvel-Mania",
      "image": "images/marvel-mania-screenshot.png",
      "description": "An app built to explore the Marvel Comics API and to increase my skills with React and Bootstrap.  Still a work in progress, but far enough along to add to my portfolio",
      "repo": "https://github.com/swillrich5/marvel-mania",
      "deployed": "https://marvel-mania.vercel.app/"
    },
    {
      "id": 2,
      "name": "Employee Directory",
      "image": "images/employee-directory.png",
      "description": "An organizational directory of employees that can be sorted and searched by name.  A React application using Bootstrap for styling.",
      "repo": "https://github.com/swillrich5/employee-directory",
      "deployed": "https://employee-directory-2021.netlify.app/"
    },   
    {
      "id": 4,
      "name": "Film Bank",
      "image": "images/filmbank.png",
      "description": "Provides information on movies including description, cast, moview review, and where it's streaming.",
      "repo": "https://github.com/swillrich5/filmbank",
      "deployed": "https://swillrich5.github.io/filmbank/"
    }, 
    {
      "id": 5,
      "name": "Password Generator",
      "image": "images/passwordgenerator.png",
      "description": "Based on criteria from the user (password size, character sets to include), a random password is created.",
      "repo": "https://github.com/swillrich5/password-generator",
      "deployed": "https://swillrich5.github.io/password-generator"
    },
    {
      "id": 7,
      "name": "Techno Blog",
      "image": "images/techno-blog.png",
      "description": "a web-based application that allows users to read technical blog posts from other users, comment on them, and post their own blog entries. A full-stack Handlebars application with a MySQL database.",
      "repo": "https://github.com/swillrich5/techno-blog",
      "deployed": "https://boiling-hamlet-77831.herokuapp.com/"
  },
  {
    "id": 8,
    "name": "Budget Anywhere",
    "image": "images/budget-anywhere.png",
    "description": "Budget-anywhere is an application that allows the user to track income and expenses on the go, even without an internet connection. A progressive web application (PWA).",
    "repo": "https://github.com/swillrich5/budget-anywhere",
    "deployed": "https://scott-budget-anywhere.herokuapp.com/"
  },
  {
    "id": 9,
    "name": "Scott Willrich Portfolio",
    "image": "images/scott-willrich-portfolio.png",
    "description": "My portfolio site, written with React.",
    "repo": "https://github.com/swillrich5/scott-willrich",
    "deployed": "https://www.scottwillrich.com"
  }
  ];


  function imageLoader() {
    return apps;
  }

  export default imageLoader;