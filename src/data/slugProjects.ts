const slugProjects = [
  {
    slug: "maibel-ai-app",
    media: [
      { type: 'header', content: 'Feature Demonstration', desc: "h2", id: "header-0" },
      { type: "video", content: '/videos/projects/slug/maibel_demo.mp4', desc: "Demo Video", id: "media-0" },
      { type: "text", content: `
        As you can see, the application features an agent that you can speak with, challenge progression based on intent, validation
        checks, stories, and basic theme switching.
      `, desc: "", id: "media-1" },
      { type: 'header', content: 'Creating the AI', desc: "h2", id: "header-1" },
      { type: 'text', content: `
        Let's go through<br />
        1. the validation bot<br />
        2. challenge recommendation bot<br />
        3. The main conversational chatbot<br />
        4. Custom Avatar creation and how that affects the behavior of the chatbot
      `, desc: "", id: "media-2" },
      { type: 'header', content: 'Validation Bot', desc: "h3", id: "header-2" },
      { type: 'header', content: 'Challenge Bot', desc: "h3", id: "header-3" },
      { type: 'header', content: 'Conversational Bot', desc: "h3", id: "header-4" },
      { type: 'header', content: 'Custom Avatars', desc: "h3", id: "header-5" },
      { type: "text", content: `
        Coaches store<br />
        1. ID<br />
        2. Name<br />
        3. Background<br />
        4. Personality/Personalities<br />
        5. Gender <br />
        The last 4 are set by the user, and passed on to endpoints mentioned earlier. These fields help contextualise the ideal 
        coach and provide the user with an amazing custom experience. Personalities are based on pre set options, for example 'Analytical'
        or 'Motivating'. This encourages the user to enter a slightly more complex background, although simple ones like "Sarcastic High-
        School Dropout" would still work.
      `, desc: "", id: "media-3" },
      { type: 'header', content: 'Deployment', desc: "h2", id: "header-6" },
      { type: 'image', content: '/images/projects/slug/apple_developer_store.jpg', desc: "Apple Developer Store", id: "media-4" },
      { type: 'image', content: '/images/projects/slug/play_store.jpg', desc: "Google Play Store", id: "media-5" },
      { type: 'text', content: `
        As shown above, I've deployed the application for internal testing to a live audience of roughly 15 people in total. These
        were testers for Maibel's user testing session, and I managed to get the build up in about a month, with no prior experience
        whatsoever.
      `, desc: "", id: "media-6" },
      { type: 'header', content: 'Challenges', desc: "h3", id: "header-7" },
      { type: 'text', content: `
        It wasn't all sunshine and rainbows, though, as progress halted from a seemingly unbeatable bug. I was following the
        documentation on expo development build to the letter, but could not seem to start the app on my device. Eventually, I solved it
        <a href="https://stackoverflow.com/a/79362466/25544913" target="_blank" class="project-link">here</a>, after coming across a random
        Stack Overflow thread while doing research on similar issues. It took me over a week to overcome this hurdle, but thankfully I did
        before the user testing session.
      `, desc: "", id: "media-7" },
    ],
  },
  {
    slug: "fitness-app",
    media: [
      { type: 'header', content: 'Feature Demonstration', desc: "h2", id: "header-0" },
      { type: "video", content: '/videos/projects/slug/maibel_demo.mp4', desc: "Demo Video", id: "media-1" },
      { type: "text", content: `
        As you can see, the application features an agent that you can speak with, challenge progression based on intent, validation
        checks, stories, and basic theme switching.
      `, desc: "", id: "media-2" },
      { type: 'header', content: 'Creating the AI', desc: "h2", id: "header-3" },
      { type: 'text', content: `
        Let's go through<br />
        1. the validation bot<br />
        2. challenge recommendation bot<br />
        3. The main conversational chatbot<br />
        4. Custom Avatar creation and how that affects the behavior of the chatbot
      `, desc: "", id: "media-4" },
      { type: 'header', content: 'Validation Bot', desc: "h3", id: "header-5" },
      { type: 'header', content: 'Recommendation Bot', desc: "h3", id: "header-6" },
      { type: 'header', content: 'Conversational Bot', desc: "h3", id: "header-7" },
      { type: 'header', content: 'Custom Avatars', desc: "h3", id: "header-8" },
      { type: 'header', content: 'Deployment', desc: "h2", id: "header-9" },
      { type: 'image', content: '/images/projects/slug/apple_developer_store.jpg', desc: "Apple Developer Store", id: "media-10" },
      { type: 'image', content: '/images/projects/slug/play_store.jpg', desc: "Google Play Store", id: "media-11" },
      { type: 'text', content: `
        As shown above, I've deployed the application for internal testing to a live audience of roughly 15 people in total. These
        were testers for Maibel's user testing session, and I managed to get the build up in just a week, with no prior experience
        whatsoever.
      `, desc: "", id: "media-12" },
    ],
  },
  {
    slug: "ecommerce-site",
    media: [
      { type: 'header', content: 'Feature Demonstration', desc: "h2", id: "header-0" },
      { type: "video", content: '/videos/projects/slug/maibel_demo.mp4', desc: "Demo Video", id: "media-1" },
      { type: "text", content: `
        As you can see, the application features an agent that you can speak with, challenge progression based on intent, validation
        checks, stories, and basic theme switching.
      `, desc: "", id: "media-2" },
      { type: 'header', content: 'Creating the AI', desc: "h2", id: "header-3" },
      { type: 'text', content: `
        Let's go through<br />
        1. the validation bot<br />
        2. challenge progression bot<br />
        3. The main conversational chatbot<br />
        4. Custom Avatar creation and how that affects the behavior of the chatbot
      `, desc: "", id: "media-4" },
      { type: 'header', content: 'Validation Bot', desc: "h3", id: "header-5" },
      { type: 'header', content: 'Challenge Bot', desc: "h3", id: "header-6" },
      { type: 'header', content: 'Conversational Bot', desc: "h3", id: "header-7" },
      { type: 'header', content: 'Custom Avatars', desc: "h3", id: "header-8" },
      { type: 'header', content: 'Deployment', desc: "h2", id: "header-9" },
      { type: 'image', content: '/images/projects/slug/apple_developer_store.jpg', desc: "Apple Developer Store", id: "media-10" },
      { type: 'image', content: '/images/projects/slug/play_store.jpg', desc: "Google Play Store", id: "media-11" },
      { type: 'text', content: `
        As shown above, I've deployed the application for internal testing to a live audience of roughly 15 people in total. These
        were testers for Maibel's user testing session, and I managed to get the build up in just a week, with no prior experience
        whatsoever. Let's check out the demo below!
      `, desc: "", id: "media-12" },
    ],
  },
];

export default slugProjects;