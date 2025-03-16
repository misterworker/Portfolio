const projects = [
    {
      title: "Maibel AI App",
      description: 
      `
      A mobile application for a startup I co founded: Maibel.ai. This app is aims to be the first app made for women that combines 
      storytelling and personalised AI coaching. I built the app with React Native, allowing for a single codebase to build an app 
      that is compatible with both Android and ios. Expo was also utilised for testing and deploying the application on playstore 
      and apple store. Developed Solo. <br />
      <b>Features</b>: Chatbots, Challenges, Stories, Other bots which facilitate user experience <br />
      <b>Technologies used</b>: React Native, Expo, Langchain/Langgraph, Google Cloud Run 

      `,
      slug: "maibel-ai-app",
      tags: ["mobile", "AI"],
      media: ["/projects/Maibel App/maibel_app_start.jpg", "/projects/Maibel App/maibel_app_story.jpg", "/projects/Maibel App/maibel_app_chat.jpg"],
      githubRepo: "https://github.com/misterworker/Maibel-AI-App",
    },
    {
      title: "WorkAdvisor",
      description: `
      A web application that focuses on ensuring that students and professionals get equal opportunities. It features a post predictor, 
      salary predictor and educational opportunities predictor. I personally worked on the post predictor myself, which predicts post 
      engagement, which reduces the lack of access to personalised guidance. <br />
      <b>Features</b>: Fully Connected Neural Network with self scraped and self trained data, AI for ease of use (Automatically suggesting 
      a revised post title and content), history of post engagements and the ability to restore them, AI filter to prevent abuse and PII leaks.
      Moreover, there is a page tour using Driver.js, ensuring the user has a grasp on the page features before calling the model.<br />
      <b>Technologies used</b>: NextJS, Tailwind, Tensorflow, Langchain, BeautifulSoup

      `,
      slug: "workAdvisor",
      tags: ["Web", "Deep Learning", "Scraping"],
      media: ["/projects/workAdvisor/mainPage.jpg", "/projects/workAdvisor/pageTour.jpg", "/projects/workAdvisor/finalPage.jpg"],
      githubRepo: "https:d//github.com/misterworker/workAdvisor",
      website: "https://work-advisor-seven.vercel.app/post-prediction"
    },
    {
      title: "MLOps",
      description: `
      A web application that features common MLOps practices as well as a machine learning pipeline. I personally worked on the 
      Used Car Price Predictor.
      (BentoML replaced with Cloud Run because it's cheaper). <br />
      <b>Features</b>: Dependency and Configuration management, speedy machine learning pipeline endpoint deployment, efficient dataset
      versioning and retrieval, interfacing on web application with batch processing & an exploratory data analysis (EDA) notebook<br />
      <b>Technologies used</b>: DVC, Hydra, BentoML, Poetry, MLFlow, PyCaret

      `,
      slug: "mlops",
      tags: ["mlops"],
      media: ["/projects/MLOps/mlops_result.jpg",],
      githubRepo: "https://github.com/misterworker/MLOps",
      website: "https://ml-ops-five.vercel.app/"
    },
    {
      title: "Workout Tracker App",
      description: `
      An Android mobile application developed for fitness lovers - Designed for an intuitive and satisfactory way of
      recording your workouts and analysing your progress metrics. Developed Solo. <br />
      <b>Features</b>: Theme Switching, Authentication with Firebase, CRUD functions for History, Workouts and Exercises, 
      Premium features, and Data Visualisations <br />
      <b>Technologies used</b>: Android Studio, Kotlin, Firebase, Google Cloud Run, Google Play Developer APIs 

      `,
      slug: "workout-tracker-app",
      tags: ["mobile"],
      media: ["/projects/Workout Tracker/workout_tracker_main.jpg", "/projects/Workout Tracker/workout_tracker_workouts.jpg", 
        "/projects/Workout Tracker/workout_tracker_premium.jpg"],
      githubRepo: "https://github.com/misterworker/WorkoutTracker",
    },
  ];

export default projects;