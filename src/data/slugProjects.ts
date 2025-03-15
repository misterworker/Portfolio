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
        An Agent Supervisor handles 4 distinct bots, each well equipped to perform specific tasks.
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
        coach and provide the user with an amazing custom experience. Personalities are based on pre-set options, for example 'Analytical'
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
    slug: "workAdvisor",
    media: [
      { type: 'header', content: 'Feature Demonstration', desc: "h2", id: "header-0" },
      { type: "video", content: '/videos/projects/slug/maibel_demo.mp4', desc: "Demo Video", id: "media-1" },
      { type: 'image', content: '/projects/workAdvisor/plan.jpg', desc: "Plan Overview", id: "media-2" },
      { type: "text", content: `
        As you can see, the application features Siew Wei Heng, Lee Yan Da Ethan and Gavin Lim.
      `, desc: "", id: "media-3" },
      { 
        "type": "header", 
        "content": "Scraping", 
        "desc": "h2", 
        "id": "header-1" 
      },
      { 
        "type": "text", 
        "content": `
          For the project, I scraped data from <a href="https://www.thestudentroom.co.uk/" target="_blank" class="project-link">The Student Room</a> 
          using <b>BeautifulSoup</b> and asynchronous requests. Initially, my requests were blocked due to a 
          <b>403 Forbidden</b> error. To bypass this, I modified the request headers to include a 
          custom <code>"User-Agent"</code>:<br /><br />
          
          <code>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"</code><br /><br />
      
          By using a common browser <code>"User-Agent"</code>, my requests appeared more normal, bypassing the block.<br /><br />
      
          After gaining access, I scraped <b>four main categories</b>: A-Levels, GCSEs, Job Experience, and Study Support. 
          From each category, I extracted <b>post links, number of likes, reply count, and titles</b>. However, I encountered a 
          major issue - <b>post content was dynamically rendered using JavaScript</b>.<br /><br />
      
          Since <b>BeautifulSoup</b> only parses static HTML, I initially considered using <b>Selenium</b> to interact with the JavaScript. 
          However, given the scale (over <b>100,000 rows</b>), Selenium would have been far too slow. Instead, I analyzed the site's JavaScript 
          code and used <b>regular expressions (regex)</b> to extract full post content directly from the page source.<br /><br />
      
          This approach allowed me to scrape the necessary data <b>efficiently and at scale</b> without needing to render JavaScript.
        `, 
        "desc": "", 
        "id": "media-12" 
      },
      { 
        "type": "header", 
        "content": "Deep Learning Model", 
        "desc": "h2", 
        "id": "header-2" 
      },
      { 
        "type": "text", 
        "content": `
          I designed and trained a <b>deep learning model</b> to classify posts using multiple input features, including <b>text, title, numerical data, and categorical data</b>. The architecture consists of:<br /><br />
      
          - <b>Text Input</b>: A <code>Bidirectional LSTM</code> processes the main post content.<br />
          - <b>Title Input</b>: Another <code>Bidirectional LSTM</code> processes the post title separately.<br />
          - <b>Numerical Input</b>: A single numerical feature (<code>days since post</code>) is included.<br />
          - <b>Categorical Input</b>: A <code>one-hot encoded</code> category input with 4 features.<br /><br />
      
          These inputs are <b>concatenated</b> and passed through dense layers with <b>L2 regularization</b> and <b>dropout</b> to prevent overfitting. The final output layer uses a <b>softmax activation</b> to classify posts into predefined categories.<br /><br />
      
          The model is compiled with <b>Adam optimizer</b> and <code>sparse_categorical_crossentropy</code> loss, making it well-suited for multi-class classification.
        `, 
        "desc": "", 
        "id": "media-13" 
      },
      { 
        "type": "header", 
        "content": "Model Deployment & API", 
        "desc": "h3", 
        "id": "header-11" 
      },
      { 
        "type": "text", 
        "content": `
          To deploy the deep learning model and make it accessible via API, I used <b>Google Cloud Run</b> with a <b>Dockerized FastAPI application</b>. This setup allows for seamless integration between the model and external services.<br /><br />
      
          The API handles:<br />
          - <b>Post Validation</b>: Ensures content is suitable for public posting.<br />
          - <b>Post Recommendations</b>: Uses <code>LLMs</code> (GPT-4o-mini & NVIDIA's Llama 3.1) to enhance user engagement.<br />
          - <b>Response Handling</b>: Implements parallel execution with <code>asyncio</code> to optimize response times.<br /><br />
      
          The service supports CORS for frontend interaction and uses structured output functions to return validated post suggestions and analysis.
        `, 
        "desc": "", 
        "id": "media-14" 
      }      
    ],
  },
  {
    slug: "workout-tracker-app",
    media: [
      { type: 'header', content: 'Feature Demonstration', desc: "h2", id: "header-0" },
      { type: "video", content: "https://www.youtube.com/embed/wrNX9XlC3xw?si=sJOZHtPXjVzo2Aog", desc: "Demo Video", id: "media-1" },
      { type: "text", content: `
        As you can see, the application features theme switching, firebase authentication and CRUD for workouts, history as well as exercises.
        It is also able to process payment, and visualise statistics.
      `, desc: "", id: "media-2" },
    ],
  },
];

export default slugProjects;