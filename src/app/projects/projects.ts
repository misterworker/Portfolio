const projects = [
    {
      title: "Maibel AI App",
      description: 
      `
      A mobile application for a startup I co founded: Maibel.ai. I built the app with React Native, allowing for a single
      codebase to build an app that is compatible with both Android and ios. Expo was also utilised for testing and deploying
      the application on playstore and apple store. I made this early version of the application solo, and stuck to it despite
      encountering <a href="https://stackoverflow.com/a/79362466/25544913" target="_blank" class="project-link">bugs</a>.
      `,
      slug: "Maibel AI App",
      tags: ["mobile", "react-native", "expo"],
      media: ["/images/projects/maibel_app_thumbnail.jpg", "/images/projects/maibel_app_start.jpg"],
      githubRepo: "https://github.com/misterworker/Maibel-AI-App",
    },
    {
      title: "Fitness App",
      description: "A fitness app to track workouts.",
      slug: "fitness-app",
      tags: ["mobile", "android", "kotlin"],
      media: "/images/fitness-app.jpg",
      githubRepo: "https://github.com/misterworker/fitness-app",
    },
    {
      title: "E-commerce Site",
      description: "An online shopping platform.",
      slug: "ecommerce-site",
      tags: ["Web", "React"],
      media: "/images/ecommerce.jpg",
      githubRepo: "https://github.com/misterworker/ecommerce-site",
    },
  ];

export default projects;