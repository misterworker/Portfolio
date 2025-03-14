const slugProjects = [
  {
    slug: "maibel-ai-app",
    media: [
      { type: 'header', content: 'Feature Demonstration', desc: "h2", id: "header-0" },
      { type: "video", content: "https://www.youtube.com/embed/tMcr0VH0t0k?si=FVv-vMvCLsiv9B2rm", desc: "Demo Video", id: "media-0" },
      { type: "text", content: `
        As you can see, the application features an agent that you can speak with, challenge progression based on intent, validation
        checks, and stories.
      `, desc: "", id: "media-1" },
      { type: 'header', content: 'Creating the AI', desc: "h2", id: "header-1" },
      { type: 'text', content: `
        An Agent Supervisor handles 4 distinct bots, each well equiped to perform specific tasks.
        Let's go through<br />
        1. Validation Bot - When it is triggered and what triggers it<br />
        2. Recommendation Bot - What it recommends<br />
        3. Challenge Bot - How it manipulates challenge progression accurately<br />
        4. The main conversational chatbot - Technologies used<br />
        5. Custom Avatar creation and how that affects the behavior of the chatbot
      `, desc: "", id: "media-2" },
      { type: 'header', content: 'Validation Bot', desc: "h3", id: "header-2" },
      { type: "text", content: `
        On <b>Day 1</b>, users answer a series of questions, which are processed through the <code>validate_response</code> endpoint.
        This validation step analyses:<br />
        1. Individual question and reply<br />
        2. Outputs from GPT-4o-mini to determine:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <b>Nonsensical (Boolean)</b> → Whether the response makes sense<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <b>Nudge (String)</b> → A prompt to improve the response<br />
        &nbsp;&nbsp;&nbsp;&nbsp;- <b>Manipulative (Boolean)</b> → If the user is trying to bypass logic checks<br />
        <br />
        On subsequent days, when the user completes a challenge, the <b>Recommendation Bot</b> takes over.
      `, desc: "", id: "media-3" },
      { type: 'header', content: 'Recommendation Bot', desc: "h3", id: "header-3" },
      { type: "text", content: `
        When a user clicks "Congratulations" to proceed to the next day, the <code>rec_x_challenge</code> endpoint processes:<br />
        1. The next day's challenge<br />
        2. User data (questions & responses from Day 1 onward)<br />
        <br />
        GPT-4o mini then determines:<br />
        - <b>Recommendation (Integer)</b> → Adjusts challenge based on user behavior (e.g., if a user drinks only 500ml of water daily, the bot suggests increasing intake to 1L)<br />
        - <b>Unit (String)</b> → Readable format (e.g., "L" or "Liters")<br />
        <br />
        The final challenge string is generated client-side.
      `, desc: "", id: "media-4" },
      { type: 'header', content: 'Challenge Bot', desc: "h3", id: "header-4" },
      { type: "text", content: `
        When a message is sent on <b>Day 2 onwards</b>, GPT-4o mini calculates:<br />
        - <b>Progress Amount (Float)</b> → % progress towards goal<br />
        - <b>isProgChallenge (Boolean)</b> → Whether the user is actively working on the challenge<br />
        <br />
        If <code>isProgChallenge = true</code>, progress updates are handled accordingly. Otherwise, the <b>Conversational Bot</b> takes over.<br /><br />

        Challenge Bot handles <b>real-time challenge progression tracking</b> based on user input. The bot processes:<br />
        - User's voluntary deductions<br />
        - Challenge completion status (above 100% progress)<br />
        - Ongoing progress updates
      `, desc: "", id: "media-5" },
      { type: 'header', content: 'Conversational Bot', desc: "h3", id: "header-5" },
      { type: "text", content: `
        If a user is not updating their challenge, the system engages in regular conversation. The process:<br />
        1. <b>Dynamic System Prompt</b> → Adjusted based on coach info, challenge, and progress<br />
        2. <b>Vector Search (Pinecone)</b> → Retrieves relevant context<br />
        3. <b>Memory (Postgres Checkpoints with AsyncConnectionPool from Langgraph)</b> → Stores conversation history for a group of users<br />
        4. <b>LLM Processing (GPT-4o Mini or NVIDIA Nemotron 3.1 70B Llama Instruct)</b> → Provides responses, with a 20s timeout<br />
        <br />
        Future upgrades will include intent recognition for actions like engaging customer service or designing workout plans.
      `, desc: "", id: "media-6" },
      { type: 'header', content: 'Custom Avatars', desc: "h3", id: "header-6" },
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
      `, desc: "", id: "media-7" },
      { type: 'header', content: 'Deployment', desc: "h2", id: "header-7" },
      { type: 'image', content: '/projects/slug/apple_developer_store.jpg', desc: "Apple Developer Store", id: "media-8" },
      { type: 'image', content: '/projects/slug/play_store.jpg', desc: "Google Play Store", id: "media-9" },
      { type: 'text', content: `
        As shown above, I've deployed the application for internal testing to a live audience of roughly 15 people in total. These
        were testers for Maibel's user testing session, and I managed to get the build up in about a month, with no prior experience
        whatsoever.
      `, desc: "", id: "media-10" },
      { type: 'header', content: 'Challenges', desc: "h3", id: "header-8" },
      { type: 'text', content: `
        It wasn't all sunshine and rainbows, though, as progress halted from a seemingly unbeatable bug. I was following the
        documentation on expo development build to the letter, but could not seem to start the app on my device. Eventually, I solved it
        <a href="https://stackoverflow.com/a/79362466/25544913" target="_blank" class="project-link">here</a>, after coming across a random
        Stack Overflow thread while doing research on similar issues. It took me over a week to overcome this hurdle, but thankfully I did
        before the user testing session.
      `, desc: "", id: "media-11" },
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