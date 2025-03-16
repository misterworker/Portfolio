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
        - <b>Recommendation (Integer)</b> → Adjusts challenge based on user behavior (e.g., if a user drinks only 500ml of water daily, 
        the bot suggests increasing intake to 1L)<br />
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
        If <code>isProgChallenge = true</code>, progress updates are handled accordingly. Otherwise, the <b>Conversational Bot</b> takes 
        over.<br /><br />

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
      { type: 'image', content: '/projects/Maibel App/apple_developer_store.jpg', desc: "Apple Developer Store", id: "media-8" },
      { type: 'image', content: '/projects/Maibel App/play_store.jpg', desc: "Google Play Store", id: "media-9" },
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
      { type: 'header', content: 'Plan Overview', desc: "h2", id: "header-0" },
      { type: 'image', content: '/projects/workAdvisor/plan.jpg', desc: "Plan Overview", id: "media-0" },
      { type: "text", content: `
        The above is a simple illustration of the web application features at a high level.
      `, desc: "", id: "media-1" },
      { 
        "type": "header", 
        "content": "Problem", 
        "desc": "h2", 
        "id": "header-1" 
      },
      { type: "text", content: `
        Many working professionals and students face unequal opportunities in their educational and professional 
        journeys due to factors beyond their control, hindering their ability to thrive and achieve their full potential.
      `, desc: "", id: "media-2" },
      { 
        "type": "header", 
        "content": "Solution", 
        "desc": "h2", 
        "id": "header-2" 
      },
      { type: "text", content: `
        The post predictor provides personalised guidance by predicting the popularity of forum posts using a Neural Network 
        model deployed with FastAPI on Google Cloud Run. It also includes Generative AI to prevent invalid posts and offer 
        improvement suggestions, ultimately promoting equal access to relevant insights for better educational and career opportunities.
      `, desc: "", id: "media-3" },
      { 
        "type": "header", 
        "content": "Scraping", 
        "desc": "h2", 
        "id": "header-3" 
      },
      { 
        "type": "text", 
        "content": `
          For the project, I scraped data from <a href="https://www.thestudentroom.co.uk/" target="_blank" class="project-link">The 
          Student Room</a> using <b>BeautifulSoup</b> and asynchronous requests. Initially, my requests were blocked due to a 
          <b>403 Forbidden</b> error. To bypass this, I modified the request headers to include a custom <code>"User-Agent"</code>:<br /><br />
          
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
        "id": "media-4" 
      },
      { 
        "type": "header", 
        "content": "Deep Learning Model", 
        "desc": "h2", 
        "id": "header-4" 
      },
      { 
        "type": "text", 
        "content": `
          I designed and trained a <b>deep learning model</b> to classify posts using multiple input features, including <b>text, title, 
          numerical data, and categorical data</b>. The architecture consists of:<br /><br />
      
          - <b>Text Input</b>: A <code>Bidirectional LSTM</code> processes the main post content.<br />
          - <b>Title Input</b>: Another <code>Bidirectional LSTM</code> processes the post title separately.<br />
          - <b>Numerical Input</b>: A single numerical feature (<code>days since post</code>) is included.<br />
          - <b>Categorical Input</b>: A <code>one-hot encoded</code> category input with 4 features.<br /><br />
      
          These inputs are <b>concatenated</b> and passed through dense layers with <b>L2 regularization</b> and <b>dropout</b> to prevent 
          overfitting. The final output layer uses a <b>softmax activation</b> to classify posts into predefined categories.<br /><br />
      
          The model is compiled with <b>Adam optimizer</b> and <code>sparse_categorical_crossentropy</code> loss, making it well-suited for 
          multi-class classification.
        `, 
        "desc": "", 
        "id": "media-5" 
      },
      { 
        "type": "header", 
        "content": "Model Deployment & API", 
        "desc": "h3", 
        "id": "header-5" 
      },
      { 
        "type": "text", 
        "content": `
          To deploy the deep learning model and make it accessible via API, I used <b>Google Cloud Run</b> with a <b>Dockerized FastAPI 
          application</b>. This setup allows for seamless integration between the model and external services.<br /><br />
      
          The API handles:<br />
          - <b>Post Validation</b>: Ensures content is suitable for public posting.<br />
          - <b>Post Recommendations</b>: Uses <code>LLMs</code> (GPT-4o-mini & NVIDIA's Llama 3.1) to enhance user engagement.<br />
          - <b>Response Handling</b>: Implements parallel execution with <code>asyncio</code> to optimize response times.<br /><br />
      
          The service supports CORS for frontend interaction and uses structured output functions to return validated post suggestions and analysis.
        `, 
        "desc": "", 
        "id": "media-6" 
      },
      { 
        "type": "header", 
        "content": "Model Evaluation", 
        "desc": "h3", 
        "id": "header-6" 
      },
      { type: 'image', content: '/projects/workAdvisor/original_model.jpg', desc: "Original Model", id: "media-8" },
      { type: 'image', content: '/projects/workAdvisor/optimised_model.jpg', desc: "Optimised Model", id: "media-9" },
      { 
        "type": "text", 
        "content": `
          Above are the classification reports for both my neural network models.
          All around, our priority is to increase the F1-score to balance identifying engaging posts while avoiding promoting low-quality 
          ones. From the metrics, we can see that the new model maintains a recall above 0.33 for both Decent and Popular posts, ensuring 
          that we continue surfacing engaging content.
          Additionally, the F1-score for Popular posts improved from 0.15 to 0.18, and overall accuracy increased from 0.54 to 0.59, demonstrating 
          a more balanced performance.
          The only issue is that precision for decent posts have decreased by .03, but the trade-off results in better recall for engaging posts, 
          and an overall increase in accuracy. Ultimately, this model is stable, but its predictive capabilities for popular and decent posts seem 
          to be limited. This could be improved with more data and optimising NN layers further.
        `, 
        "desc": "", 
        "id": "media-10" 
      },
      { 
        "type": "header", 
        "content": "Features/UX", 
        "desc": "h2", 
        "id": "header-7" 
      },
      { type: 'image', content: '/projects/workAdvisor/pageTour.jpg', desc: "Initial Page Tour", id: "media-11" },
      { 
        "type": "text", 
        "content": `
          The user experience is intuitive, featuring a guidance tour right off the get go. The tour highlights the relevant 
          parts of the page and explains to the user what each part does. This occurs for post crafting, AI Generated Feedback, 
          Suggestion Implementation, Analysis results, and Analysis History. <br />
          Additionally, the user can click on the question mark highlighted in red to access the tour again.
        `, 
        "desc": "", 
        "id": "media-12" 
      },
      { type: 'image', content: '/projects/workAdvisor/gen_ai.jpg', desc: "Generative AI", id: "media-13" },
      { 
        "type": "text", 
        "content": `
          The Generative AI component has the ability to filter information and determine if the post is not suitable for posting 
          on the internet. It checks for personally identifiable information, nonsensical posts and posts that do not align with 
          the category of the post. If any of these filters are detected, it mentions the issue above. Moreover, if these checks 
          are flagged, the predictive model will not be called to save resources. <br />
          Additionally, the AI has the capability to generate recommendations on how to improve the post, as well as always provide 
          the link to a page with posts of the similar category based on the current selected category. It also always provides 
          outputs in point form (unless manipulated to do otherwise)
        `, 
        "desc": "", 
        "id": "media-14" 
      },
      { type: 'image', content: '/projects/workAdvisor/suggestion.jpg', desc: "Suggestion", id: "media-15" },
      { 
        "type": "text", 
        "content": `
          This feature allows the user to implement suggested changes from the AI immediately. After clicking on the 
          'edit' icon, the changes are placed into the post title and content. Moreover, the option to validate posts 
          is temporarily disabled to prevent unnecessary calls to the model, since the changes are in an intermediary 
          stage. If the user clicks on the tick icon, the changes are made. If the user clicks on the cross, the changes 
          are reverted and the original post title and content are restored. <br />

          This feature removes the redundant manual and laborious task of having to incorporate each suggestion from the 
          AI on your own, saving time.
        `, 
        "desc": "", 
        "id": "media-16" 
      },
      { type: 'image', content: '/projects/workAdvisor/analysis_history.jpg', desc: "Analysis History", id: "media-17" },
      { 
        "type": "text", 
        "content": `
          This feature allows the user to load the posts they've predicted before. The history is stored in localstorage, 
          and clearing history clears the history within localstorage (This is immediately reflected on the UI)
        `, 
        "desc": "", 
        "id": "media-18" 
      },
      { 
        "type": "header", 
        "content": "Thoughts on Improvement", 
        "desc": "h2", 
        "id": "header-8" 
      },
      { 
        "type": "text", 
        "content": `
          In terms of scraping, I believe that I should have scraped posts for multiple days, comparing the engagement levels for posts and 
          adding extra columns for engagement popularity after x days. This would have been a more accurate measure of engagement prediction.<br />
          For EDA, I also regret not considering feature extraction for my dataset. I could have added additional features like a boolean for if 
          the post is grammatically sound, or if the post had inappropriate language, which could have helped with the model f1 scores.<br />
          Additionally, as mentioned earlier, I would have scraped more data if I had more patience, as I had to restart my jupyter notebook many 
          times. These would certainly have improved the existing solution. <br />
          In terms of solution modification, I would likely also have refrained from adding the “Decent” engagement category, as it has little 
          difference from popular posts. Both simulate enough conversation to obtain personalised guidance, and combining both would have made 
          the model much more reliable in its predictions.

        `, 
        "desc": "", 
        "id": "media-19" 
      },
    ],
  },
  {
    "slug": "mlops",
    "media": [
      { "type": "header", "content": "Feature Demonstration", "desc": "h2", "id": "header-0" },
      { "type": "video", "content": "https://www.youtube.com/embed/xZ6jbb7oEqg?si=vcCgfkG_k_PD5Pg9", "desc": "Demo Video", "id": "media-1" },
      { "type": "text", "content": `
        The Used Car Price Predictor is part of an <b>MLOps pipeline</b> that integrates <b>DVC for dataset versioning, Poetry for dependency management, Hydra for configuration handling, and MLflow for experiment tracking.</b> This section walks through the dataset, model training, deployment, and web application for real-time predictions.
      `, "desc": "", "id": "media-2" },
  
      { "type": "header", "content": "Project Structure", "desc": "h3", "id": "header-3" },
      { "type": "text", "content": `
        The project is structured as follows:
        - <b>\`used-car-predictor/\`</b> - Main directory for the predictor.
        - <b>\`.dvc/\`</b> - Tracks dataset versions efficiently.
        - <b>\`bentoml/\`</b> - Contains the BentoML service for model deployment.
        - <b>\`configs/\`</b> - Stores Hydra configuration for ML experiments.
        - <b>\`datasets/\`</b> - Holds raw and preprocessed datasets.
        - <b>\`experiments/\`</b> - Stores the trained ML pipeline as a pickle file.
        - <b>\`notebooks/\`</b> - Contains EDA and model training notebooks.
        - <b>\`pyproject.toml\`</b> - Poetry dependency management file.
      `, "desc": "", "id": "media-4" },
  
      { "type": "header", "content": "Pipeline & Training", "desc": "h3", "id": "header-5" },
      { "type": "text", "content": `
        The <b>machine learning pipeline</b> is built using <b>PyCaret</b> with <b>Hydra-based configuration</b> to dynamically adjust hyperparameters. The training steps include:
        - <b>Exploratory Data Analysis (EDA)</b> to understand dataset trends.
        - <b>Model selection using \`compare_models()\`</b>, followed by tuning.
        - <b>Logging experiments with MLflow</b> for tracking performance.
        - <b>Dataset versioning with DVC</b>, backed by Google Cloud Storage.
        
        All configurations for the pipeline, including imputation strategies and feature selection, are stored in \`configs/config.yaml\`.
      `, "desc": "", "id": "media-6" },
      
      { "type": "image", "content": "/projects/MLOps/mlflow.jpg", "desc": "MLflow Experiment Tracking", "id": "media-7" },
  
      { "type": "header", "content": "Dataset Management with DVC", "desc": "h3", "id": "header-8" },
      { "type": "text", "content": `
        <b>DVC (Data Version Control)</b> is used alongside <b>Google Cloud Storage (GCS)</b> to manage dataset versions. The dataset is stored in a remote bucket, and the latest version can be pulled using:
        
        \`\`\`bash
        poetry run dvc pull
        \`\`\`
  
        This ensures that every team member has access to the most recent dataset while maintaining reproducibility.
      `, "desc": "", "id": "media-9" },
  
      { "type": "header", "content": "Model Deployment with BentoML", "desc": "h3", "id": "header-10" },
      { "type": "text", "content": `
        Instead of manually setting up a FastAPI server and Dockerizing it, <b>BentoML</b> was used for efficient model deployment. BentoML provides:
        - <b>Built-in model serving</b> with automatic endpoint creation.
        - <b>Optimized inference</b> with batching and scaling capabilities.
        - <b>Faster deployment</b> compared to setting up Google Cloud Run manually.
        
        The model service is defined in <b>\`bentoml/service.py\`</b>, where preprocessing steps and inference logic are implemented.
      `, "desc": "", "id": "media-11" },
  
      { "type": "header", "content": "Web App Integration", "desc": "h3", "id": "header-12" },
      { "type": "text", "content": `
        The <b>Next.js-based web application</b> provides a frontend for users to input car details and predict their prices using the BentoML API. Features include:
        - <b>Multiple car inputs</b> for batch predictions.
        - <b>Random auto-fill</b> for easy testing.
        - <b>Real-time results</b> fetched from the deployed model.
        
        The API response includes predicted car prices based on the trained model, ensuring an interactive user experience.
      `, "desc": "", "id": "media-13" }
    ]
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