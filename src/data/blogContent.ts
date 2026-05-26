export const blogContent: Record<string, string> = {
  "aws-pricelist-visualizer-project": `
This is a project log for **AWS Pricelist Visualizer**—my latest fullstack web app. Here’s a breakdown of what I learned and how I brought the idea to life, inspired by my experiences and the documentation style I admire.

> **Live Demo:**  
> [aws-pricing-project-frontend.vercel.app](https://aws-pricing-project-frontend.vercel.app/)

## The Idea: Why an AWS Pricelist Visualizer?

As someone fascinated by cloud infrastructure and developer experience, I wanted a tool to make AWS pricing more accessible and interactive. The official AWS pricing pages are comprehensive but often overwhelming. My goal: build a visual, searchable, and filterable interface for AWS service prices, with a focus on clarity and speed.

## Tech Stack Choices

- **Frontend:** React (with TypeScript), AWS Cloudscape Design System for UI, Tailwind CSS for custom styling.
- **Backend:** Node.js (TypeScript), RESTful API architecture, organized for easy extension.
- **Deployment:** Vercel, leveraging its serverless API routes and seamless frontend hosting.
- **Version Control:** GitHub ([repo link](https://github.com/kgurnoor/aws-pricing-project))

## Building the Frontend

I started by scaffolding the frontend with React and TypeScript inside a \`/frontend\` directory. For UI, I chose AWS Cloudscape Design—it’s modern, accessible, and fits AWS use cases perfectly. Tailwind CSS handled custom styling, especially for color utilities and responsive layouts.

### Key Features:

- **Service, Region, Product, and Duration Selectors:** All powered by React hooks and dynamic API data.
- **Pricing Table:** Sortable, searchable, and filterable, inspired by AWS’s own interfaces.
- **Global Search & Discount Info:** Fast toggling between filtered and global views.

## Building the Backend

The backend lives in \`/backend\`, written in TypeScript and compiled to JavaScript for deployment. I organized the API logic for clarity and future growth, using RESTful endpoints to serve version, product, region, and pricing data.

### API Architecture Highlights:

- **Separation of Concerns:** Each endpoint has a clear responsibility.
- **TypeScript for Safety:** Strong typing for all API responses.
- **Error Handling:** Consistent error responses and logging.

## Solving Common Challenges

### 1. React Hydration & HTML Structure
I ran into classic hydration errors, especially with invalid HTML like \`<ul>\` inside \`<p>\`. I learned to always keep block elements outside of paragraphs, and to check component structure carefully.

### 2. React Hook Order
React’s rules of hooks are strict—no conditional or nested hook calls! After some trial and error, I made sure all hooks are called at the top level of each component, avoiding mysterious runtime errors.

### 3. API Route Deployment on Vercel
Vercel only recognizes \`/api\` at the project root. I initially placed my backend API in \`/frontend/api\`, which resulted in 404 errors. The fix: move \`/api\` to the project root (or, for monorepo setups, set the correct root directory in Vercel’s dashboard).

### 4. Monorepo Deployment on Vercel: Fullstack Journey
Given the monorepo structure (\`/frontend\` and \`/backend\`), my deployment approach evolved:
- **First, I deployed the backend only:** I set the Vercel project root to \`/backend\`, configured the build output and routing with \`vercel.json\`, and ensured the serverless API worked as expected.
- **Then, I deployed the frontend:** I set up a new Vercel project with the root directory as \`/frontend\` and selected the Vite preset for fast React builds.
- **Connecting frontend to backend:** To enable the frontend to communicate with the backend, I set an environment variable in the frontend Vercel project pointing to the deployed backend’s domain. This allowed the frontend to make API requests to the correct backend URL, regardless of deployment environment.

This separation ensured that both parts of the app could be independently developed, deployed, and scaled, while still working together seamlessly in production.

## Deployment: Going Live with Vercel

Deploying to Vercel was smooth once the project structure was right:
- **Backend:** Set the root directory to \`/backend\` in the Vercel dashboard, configured the build and routing with \`vercel.json\`, and deployed the compiled serverless API.
- **Frontend:** Set the root directory to \`/frontend\`, selected the Vite preset for optimal React builds, and configured the environment variable (\`VITE_API_URL\`) to the backend’s deployed URL.
- **Result:** Both frontend and backend are independently deployed, but fully integrated thanks to environment-based API endpoint configuration.

## Lessons Learned

- **Read the Docs:** Vercel’s routing and build system is powerful, but only if you follow the conventions.
- **Component Structure Matters:** HTML validity and React hook order are non-negotiable for a stable app.
- **TypeScript Everywhere:** Strong typing in both frontend and backend pays off in reliability and maintainability.
- **Monorepo Deployments:** Vercel supports them well, but requires careful configuration of root directories, build outputs, and environment variables for cross-service communication.

## What’s Next?

- Add more AWS services and pricing models.
- Improve performance for large datasets.
- Deploy the frontend and backend together, possibly with shared environment variables and CI/CD.

## Conclusion

Building the **AWS Pricelist Visualizer** has been a deep dive into modern fullstack development: React, TypeScript, Cloudscape UI, REST APIs, and Vercel’s cloud platform.  
I’m excited to keep iterating and sharing what I learn.  
Check out the [GitHub repo](https://github.com/kgurnoor/aws-pricing-project) for source code, and feel free to open issues or contribute!

Thanks for reading!
`,

  "update-june25": `
Welcome to my June 2025 update! This month has been a great mix of hands-on problem-solving, deep learning breakthroughs, and dev debugging victories. Here's a breakdown of everything I've been working on:

---

## 🎓 Finished Course 4 – Convolutional Neural Networks (Deep Learning Specialization)

I completed the **fourth course** in the Deep Learning Specialization by Andrew Ng on Coursera:  
**Convolutional Neural Networks (CNNs)**.

This course introduced me to:
- Building and training ConvNets
- Understanding architectures like LeNet, ResNet, Inception
- Face recognition pipelines
- Transfer learning for performance boosts
- Neural style transfer (which was super fun!)

📜 [View My Certificate](https://www.coursera.org/account/accomplishments/verify/HMS553ZQ1IFY)

I now feel confident using CNNs in practical projects and understanding how visual features are learned hierarchically in neural networks.

---

## 🌲 LeetCode Progress — Trees and Dynamic Programming

I focused hard this month on **Trees** and **Dynamic Programming** from the **Blind 75** list. Some of the problems I covered include:
- Maximum Depth of Binary Tree
- Same Tree
- Invert/Flip Binary Tree
- Binary Tree Maximum Path Sum
- Binary Tree Level Order Traversal etc.

🧩 I've been tracking my daily streaks and problems on my profile:  
🔗 [LeetCode Profile](https://leetcode.com/u/kgurnoor/)  
📝 [Blind 75 List](https://leetcode.com/discuss/post/460599/blind-75-leetcode-questions-by-krishnade-9xev/)

Doing 2–3 problems daily has helped me solidify recursion, backtracking, and optimal substructure thinking. I'm getting more comfortable with bottom-up DP and memoization techniques too.

---

## 🤖 GenAI Hack2Skill Exchange Participation

In the last few months, I've been an active participant in the **GenAI Hack2Skill Exchange**, an event exploring practical generative AI applications and prompt-based tools. The hackathon is scheduled to begin on July 15th.

The training modules introduced me to:
- Prompt engineering concepts
- GenAI APIs and integration workflows
- Creative applications using LLMs

🎓 [Certificate of Participation](https://certificate.hack2skill.com/user/GenAI5-28M/2025H2S04GENAI-A01646)

This event has really encouraged me to continue experimenting with GenAI — especially as I build tools like Chat-with-PDFs.

---

## 🛠️ Debugged Tailwind + Next.js Deployment on Vercel

One frustrating but rewarding win this month was debugging a deployment issue with my **Next.js + Tailwind CSS** project (my own website) on **Vercel**.

The project built fine locally, but Vercel threw confusing errors like \`Can't resolve module\` or ignored Tailwind styles entirely. After trial and error, I figured out:
- Correct folder structure for Tailwind config
- How to ensure all used classes are not purged
- Fixing path alias issues
- Validating the production build output before pushing

💡 I wrote a full blog about this experience so others don’t waste as much time as I did:  
📖 [Read the Blog on Medium](https://medium.com/@gurnoorkaur0349/debugging-tailwind-css-and-next-js-from-cant-resolve-to-beautiful-deploys-on-vercel-3d1bdb08b160)

---

## 🚀 What's Next?

July goals:
- Finish **Course 5 (Sequence Models)** of the Deep Learning Specialization
- Complete the **Blind 75 list** entirely
- Start drafting ideas for a possible research project or blog series

Thanks for reading this far! I hope this gives you some inspiration to keep building, debugging, and learning.
`,

  "update-march25": `
This is an update post on my progress, let's explore what has been happening:

## College Mid-terms

I have been pretty busy preparing and attempting my mid-semester exams. Although it took a lot of caffeine and sleepless nights, it was a thrilling experience overall.  
I am currently in the 4th semester of my 8-semester degree and I have 6 core courses. All of these are highly relevant to Computer Science.  
I am actually so excited to learn about each of them because they make me feel closer to my field. It's a hard and long journey but I'm willing to give it my all!

## PWOC

My college Coding Club has given me the opportunity to participate in an event somewhat inspired by GSOC (Google Summer Of Code), which is **PWOC (PEC Winter Of Code)**.  
It's a contest where I will be contributing to an open-source project. By making high-quality contributions, my work will be integrated and appreciated.  
Honestly, I have not done this before, but I am so excited to dive into open source! I've always wanted to do so. Let's see where this goes.

## My first LLM Project - Chat-with-PDFs

This one is quite exciting! It's the second day I've been working on this project. I have gained a LOT of knowledge about various LLMs, embedders, vector storage, and other AI architectures.  
I have posted my learnings on my GitHub README file, check it out:  
🔗 [GitHub Repository](https://github.com/kgurnoor/ask-multiple-pdfs.git)  
*(The base project concept is adapted from [alejandro-ao's repository](https://github.com/alejandro-ao/ask-multiple-pdfs.git))*

## LeetCode

It has been a quite productive few weeks! I've reached the DP (Dynamic Programming) section of the Blind 75 problems.  
I think I've started to like problem-solving more than ever before. I feel motivated to solve more and more each day. It's going good, and I'm trying to stay consistent by solving 2 problems every day.

## Completed Course 2 - Deep Learning Specialization

I successfully completed **Course 2: Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization** by Andrew Ng.  
I received my certificate and posted it on LinkedIn today itself! Gained many insightful skills, including:
- Hyperparameter tuning
- Regularization strategies (L2, Dropout)
- Optimization algorithms (RMSprop, Adam, Batch Norm)
- Deep Learning frameworks (TensorFlow)

Today's goal is to begin **Course 3: Structuring Machine Learning Projects**.

## Conclusion

As I reflect on the past few weeks, I'm excited about the progress I've made across various fronts.  
From navigating college mid-terms to diving into open source through PWOC, and from exploring new project ideas like "Chat-with-PDFs" to advancing in LeetCode and the Deep Learning Specialization, it's been an amazing journey of growth.  
I'm looking forward to continuing this momentum. Thanks for following along!
`,

  "deep-learning-course1": `
## Course 1 Completion

Just got over with course 1 of the 'Deep Learning Specialization' on Coursera - **"Neural Networks and Deep Learning"**, feeling accomplished and eager to dive into the next course!  
There were 4 weeks of structured learning, and it was quite challenging to balance with my college exams, but I am looking forward to better time management skills going forward.

## What I learned

Course 1 was a great introduction to the basics of deep learning, covering topics such as:
- Introduction to deep learning and neural networks
- Basic neural network architecture (forward and backward propagation)
- The concept of Vectorizing for performance speedups
- Broadcasting rules in Python (NumPy)
- Choice of Activation functions (ReLU, Sigmoid, Tanh)

## Further goals:

- Completing the next course in the specialization: **"Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization"**
- Solving at least 10 questions of the "Blind 75" problem set on LeetCode
- Acing my college quizzes and assignments

## Conclusion

See you soon with more updates!
`,

  "Deep-Learning-Course": `
This week I officially started Andrew Ng's world-class **Deep Learning Specialization** on Coursera!  
Here is the link to the course:  
🔗 [Coursera Specialization Link](https://www.coursera.org/specializations/deep-learning)

I have been very keen on learning more about Data Science and Machine Learning since we started studying the foundations in our coursework at college.  
I began with **Course 1: Neural Networks and Deep Learning**, and I am really enjoying it so far. I am learning about the mathematical basics of neural networks and how they are applied in real-life scenarios.

The next 4 courses in the specialization are:
- **Course 2:** Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization
- **Course 3:** Structuring Machine Learning Projects
- **Course 4:** Convolutional Neural Networks
- **Course 5:** Sequence Models

Let's see how it goes. I'll document my learnings as I progress!
`,

  "my-first-website": `
I have been very keen on making a website for my portfolio for a long time. I finally decided to take the plunge and create one. I chose Vercel as my hosting and deployment platform.

## Buying the domain name

My brother helped me buy the domain name from Namecheap. I chose a simple and professional name: **gurnoor.net**.

## Linking with Vercel

I linked my custom domain name with my Vercel project, setting up the custom nameservers for seamless auto-deploys.

## Making edits

I don't have extensive prior knowledge of JavaScript, HTML, and CSS (though I excel in Python, C++, and C). So, I had to learn a lot of new web technologies. I started by getting to understand the template code using Perplexity AI.

These are the first set of edits I made:
1. I changed the social links to point directly to my GitHub and LinkedIn profiles.
2. I added my email and phone number at the bottom for quick contact.

## Conclusion

There are various styles and pages yet to be created, but I will keep this blog updated with each edit I make into my website!
`
};
