const projects = [
    {
      title: "Maibel AI App",
      description: 
      `
      A mobile application for a startup I co founded: Maibel.ai. This app is aims to be the first app made for women that combines 
      storytelling and personalised AI coaching. I built the app with React Native, allowing for a single codebase to build an app 
      that is compatible with both Android and ios. Expo was also utilised for testing and deploying the application on playstore 
      and apple store. I made this early version of the application solo.
      `,
      slug: "maibel-ai-app",
      tags: ["mobile", "react-native", "expo"],
      media: ["/projects/maibel_app_start.jpg", "/projects/maibel_app_story.jpg", "/projects/maibel_app_chat.jpg"],
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
      githubRepo: "",
    },
  ];

export default projects;