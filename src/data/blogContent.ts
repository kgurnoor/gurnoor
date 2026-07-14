export const blogContent: Record<string, string> = {
  "update-jul26": `
I'm writing this from my bedroom in Kurali, Punjab. My mom made rajma-chawal for lunch. The fan above me is the same one that was here when I left.

It's July 14, 2026. The internship ended four days ago. I'm still processing it.

---

## The Last Day — July 10

I handed over my **MacBook** at 5 PM.

It was assigned to me on my very first day in January — brand new, the kind of machine I'd only ever used for a few hours in a computer lab. For six months, it was my tool, my workspace, my entire coding environment. And on the last day, you slot it back into a box and sign a form and that's that.

I know it's just a laptop. But it felt like something.

My manager **Rohan Kochar** sat with me for a final review session a few days back. He walked through everything I'd built, gave me his honest assessment, and told me things I'll be thinking about for a long time. Good things. The kind of feedback that makes you want to keep working, not just celebrate and leave.

The whole team signed off positively. I got an **A+ grade** from my mentor. I don't know if I've ever been prouder of a piece of work.

---

## The Drive Back

My mom and dad came to pick me up.

We packed everything into an **Ertiga** — same as when I arrived, just in reverse. Six months of clothes, books, random Cyberhub coffee cups I'd collected for no reason, a little box of Dohful cookies I'd bought on my last weekend just to have something from here.

The drive back from Gurgaon to Kurali takes about five and a half hours. We talked the whole way. They asked questions, I answered them. At some point I fell asleep mid-sentence and woke up to the Punjab flatlands outside the window and felt something settle.

---

## What I Actually Built

Let me be honest about the technical journey, because it didn't start clean.

The first task was deceptively simple: connect a **Glean agent** to Slack so that whenever someone tagged **@AVA** in any channel, they'd get back the same response the agent would give in the Glean UI — just without having to leave Slack. Lambda function, a Slack event subscription, call the Glean API, post the response. Done. I finished it faster than expected.

And then the requirements started growing.

Room availability queries. Zoom license audits. General OpenAI responses for things Glean couldn't handle. Slash commands. Whitelisting controls. An EventBridge cron for weekly audits with undo functionality backed by S3. Each new requirement went into the same function, and by the time I looked up, the Lambda was approaching **800 lines** — a single file holding logic for five completely different things, no clear separation, no way to test one piece without touching everything else.

So the real engineering challenge wasn't any individual feature — it was recognising that the code had outgrown its container and doing something about it. I moved AVA into a proper **GitHub repository** with structured modules: separate files for intent routing, each API integration, Slack formatting, and audit logic. Environment-driven configuration. Clean interfaces between layers. What had been one long file became something another engineer could read, extend, and hand off without a walkthrough.

That was the actual lesson: **production code isn't about clever functions. It's about what happens six months later when someone else opens the file.**

AVA was recognised at the **Enterprise Services All-Hands Q1 2026**. And I got written recognition from **Daniel Solbach** — the lead engineer of the AV team based in the US office and the direct stakeholder of the project. That meant more than any grade.

The second project — **GH-EMU-ACCESS** — came from a different kind of problem. Every single day, four or five requests would land in the team's Slack channel: someone needed access to GitHub Enterprise, engineers had to manually hunt through Okta groups, find the right ones, add the user, confirm it was done. Repetitive, time-consuming, and completely automatable. So I built a slash command: one engineer types the username of whoever needs access, hits enter, and the whole provisioning flow runs — HMAC-verified, allowlist-checked, Okta workflows triggered, CloudWatch logged. What used to take manual effort across multiple portals became a single command. I built it, tested it, documented it, and it went live.

My buddy **Mrinal Kanti Mishra** was the person I went to every time I hit something I didn't understand — and I hit plenty. He never made me feel like the question was too small. That mattered more than I expected it to.

---

## Gurgaon Was a Chapter of Its Own

The office was on the **19th and 20th floors**. Floor-to-ceiling windows, the entire NCR skyline visible on a clear day. I spent more than a few lunch breaks just standing at the glass.

The hybrid schedule was **WFH on Monday, Tuesday, Friday** — **WFO on Wednesday and Thursday**. The WFH days I built in the quiet of my room in Sector 42. The WFO days I got dressed, caught the company cab, and walked into a real office building with an access card and everything. Both modes were good, in different ways.

The eateries in and around the building became a small ritual. **Blue Tokai** for the mornings I needed to feel serious. **Dohful** cookies as a reward for finishing something difficult. There was a coffee shop I kept going back to just because the seats were comfortable and the WiFi was fast — **AB Coffee** — and eventually the staff stopped asking for my name because they just knew.

**Cyberhub** is five minutes from the office and I went there more than I planned to. Walked through it on weekdays after work when the crowds were manageable. Went to **Social** on a Friday evening with some new friends and had a genuinely great night. Figured out that Gurgaon has this energy after 7 PM where the whole city collectively decides to be somewhere.

On weekends I had more of the city to myself. I went to **Westside** solo once and bought exactly one thing, spent two hours in there, and left feeling very adult about it. Took a metro to **CP** and walked Janpath and got completely lost and completely okay with that. Made a weekend trip to **Delhi Diaries** and sat there with a journal and a lot of chai.

Somewhere around April I joined a gym near Sector 42. Kept at it through May and June. Morning sessions before WFH days, evening sessions after WFO. It was the most consistent I've been about it in my life, mostly because having a routine in a new city made everything feel less untethered.

---

## The People

This is the part I didn't fully anticipate.

I met people in the company cabs. The cabs in Gurgaon are shared — you get pooled with whoever else lives near your route. I ended up having proper conversations with engineers, analysts, people from all sorts of teams. I learned more about what a career in tech actually looks like day-to-day from those 30-minute commutes than I could have from any amount of LinkedIn browsing.

I met **PEC alumni** in there — people who had walked the same corridors I walk, sat in the same ToC lectures, and somehow ended up here. They gave me advice I didn't ask for but absolutely needed. Real advice. About interviews, about what the first two years out of college actually feel like, about what to prioritize.

I made **new friends inside the team** as well. People I'll stay in touch with. The kind of connections that feel genuine because they were built through work — through debugging together, through cracking jokes in the all-hands meeting chat, through eating lunch at the same table enough times that you just become comfortable.

---

## What I Came Back With

There's the obvious stuff: a stronger understanding of serverless architecture, production IAM, async Lambda patterns, Slack API, enterprise AI integrations.

But the less obvious stuff is what I'm sitting with tonight.

I learned how to **work in a professional environment without a syllabus**. There's no professor telling you which chapters matter this week. You read documentation, ask the right questions, figure it out, and ship. And somehow that's manageable — more manageable than I thought it would be.

I learned that **feedback is a gift when it comes from people who actually want you to grow**. Both Rohan and Mrinal gave me feedback that was specific and honest and useful. I want to carry that into how I work with people going forward.

I learned that I can be **alone in a new city and be okay**. More than okay. I built routines, found my cafes, made my people, navigated a place I'd never been. That is something I will not take for granted.

---

## What's Next

I'm home, but not for long.

**Placements start July 20th.** I'm back to hostel on the 20th — unpacking the bags I just finished unpacking here, setting up the same desk in the same room in Chandigarh, and starting again. It's a little funny. Six days at home, then right back.

DSA is already open on my laptop. CS fundamentals — OS, networks, DBMS, the classics — getting a full refresh. The resume needs updating with everything I actually built. New projects are already taking shape in my head.

The season is real and it starts in less than a week.

But this afternoon I'm having rajma-chawal and sitting under the same fan that was here when I left, and I'm going to let the last six months mean what they mean before I start running again.

I went to Gurgaon a third-year student with a lot to prove.

I came back with proof.

That feels like enough for right now. 🌸
`,

  "update-jan26": `
I'm writing this sitting on the floor of my new room in Gurgaon because I haven't figured out where to put the chair yet.

It's January 5, 2026. I made it here.

---

## Sector 42, Gurgaon

We drove down — me, my mom, my dad, and my brother. The bags alone needed a plan: we booked an **Ertiga** to fit everything, because there is no light packing when you're moving cities for six months. The road trip itself was the first real look I got at this place, and Gurgaon does not ease you in gently. It just *is*. Glass towers lit up against the night sky, flyovers stacked on flyovers, lanes of headlights stretching in every direction.

My place is in **Sector 42** — on the backside of the **Aralias**, which means the view is actually pretty good. Those towers are something else up close: DLF's iconic ultra-luxury high-rises, fifty-plus floors of glass and light. I'm obviously not in one of them, but living right behind them gives the skyline outside my window a kind of quiet drama I wasn't expecting.

This is my first time having my own space. A **1 RK** — one room, a kitchen corner, a bathroom. Small. Clean. Mine.

We spent the evening setting everything up — unpacking, making the bed, figuring out where the power sockets are, arguing about whether the curtain rod was level (it wasn't). The ordinary stuff that somehow feels significant when it's the first time.

---

## Dinner in the 1 RK

Mom had carried food from home.

We sat together — all four of us, in that small kitchen space — and had a proper homemade dinner. The kind of dinner that tastes different when you know it's the last one for a while. Nobody said much. We didn't have to.

My brother kept cracking jokes to keep it light. It worked, mostly.

---

## A Little About Cvent

I've been doing my reading, so here's the quick version:

**Cvent** was founded in **1999** by Reggie Aggarwal, an Indian-American entrepreneur, and is headquartered in **Tysons, Virginia, USA**. It's one of the world's leading SaaS platforms for **event management and hospitality technology** — think event registration, venue sourcing, attendee engagement, and everything that goes into running a large-scale corporate event or conference.

Their clients include Fortune 500 companies and large enterprises across industries. The platform processes hundreds of millions in event spend annually. In **2023**, Cvent was acquired by **Blackstone** in a deal valued at approximately **$4.6 billion** — making it one of the larger private equity acquisitions in enterprise SaaS.

Their **Gurgaon office** is one of their major global technology hubs — a significant engineering and services centre. I'll be joining the **Enterprise Services team**, in the IT department. My role: **AI & Automation Engineer Intern**.

I still can't fully believe I get to say that.

---

## What's Coming

Office starts **January 8th**. Three days to settle in, explore a little, figure out where I'm getting my morning chai.

Some things I already know about how the internship works:
- **Cab allocation** for commute — door-to-door office transport, which is standard for large IT setups here
- **Lunch provided** at the office
- A new **team** to meet, a manager to impress, actual production work to do

I want to try the food here — the dhabas, the cafes, the random street stalls. I want to see what Gurgaon looks like in different seasons. I want to meet people who are building things. This city moves fast and I want to move with it.

---

## Tomorrow

Mom, Dad, and my brother leave in the morning.

I'll wake up, we'll have tea, and then they'll take a taxi from here to **IFFCO Chowk** and catch a **NueGo bus** back home. That's the plan. Very simple on paper.

I've been looking forward to this — the independence, the chapter, the city — for so long that I almost forgot this part would feel like anything. But sitting here tonight, all four of us cramped in this little room, it feels like something.

Gurgaon, let's go. 🏙️
`,

  "update-oct25": `
I got it.

After everything — the rejections, the tests, the late nights, the doubt — I got it.

This is the blog I didn't let myself write until I was holding the offer in my hands.

---

## The Long Road Before Today

If you read my August update, you know how the past few months looked. Grinding the Striver SDE Sheet at midnight. Sitting through three-hour online assessments after a full day of Semester 5 lectures. Refreshing email at 2 AM. Watching shortlist after shortlist go up and not seeing my name.

I applied everywhere. On-campus, off-campus, referrals, cold applications. I gave tests for companies I'd only half-heard of just to keep the reps up. Some I cleared. Most I didn't. A few I came close — close enough to hurt.

The rejection after rejection thing doesn't get easier. It just gets quieter. You stop announcing you applied. You stop counting. You just keep going.

---

## October 31, 2025 — Cvent Drive Day

Woke up early. Packed my resume printouts, dressed sharp, and walked into my college auditorium by **9 AM**.

Cvent was on campus for **3 roles**. Out of the entire third year — close to **1,000 students** — roughly **80 had cleared their online assessment** to make it to this day. I was one of them, and I was already terrified.

The process: shortlisted → Technical Round 1 → Technical Round 2 → HR. They called names out loud after each round. And each time they read a name, the room held its breath.

---

## The Rounds

Both technical rounds felt like a conversation, not an interrogation. The questions landed squarely in things I'd actually built and studied:

- **AWS Lambda, S3, serverless architecture** — the exact stack I'd been building with
- **LLMs, RAG pipelines, vector databases** — what I spent months learning
- **Automation workflows, Python scripting** — my day-to-day
- **GitHub, version control, collaboration workflows** — second nature by now
- **Prompt engineering** — something I genuinely enjoy

For possibly the first time in this whole process, I wasn't trying to fake competence. I knew this. I'd *built* this.

---

## The HR Round

The HR round was with the **Director of Enterprise Services** from Cvent's IT department.

She was, genuinely, the warmest person I spoke to that entire day. It wasn't a round designed to trip me up — it was a real conversation. She asked about my goals, my projects, what I wanted to build. I told her honestly.

When I walked out, I didn't know what to think. I just knew it had felt right.

---

## Hearing My Name

When they called names after HR, every person left in the room leaned forward.

They called mine.

The people around me — some I'd barely spoken to before — started cheering. I remember not fully processing it for a second. Then it hit. I had just been sitting in that auditorium since **9 AM**. It was almost **9 PM**.

Twelve hours. Worth every minute.

---

## The Goodies, The T-shirt, The Moment

Because of hostel curfew, the placement cell — **CDGC** — pulled me aside before the formal wrap-up and handed me my Cvent welcome kit early. A **t-shirt, a mug, a diary**. Small things. But I stood there holding them and felt something I hadn't felt in months.

Relief. Real, actual relief.

---

## Dad's Birthday

Here's the part that made the night perfect.

It was my **dad's birthday**.

I called home that night. They were out at dinner celebrating. I sent them pictures — the t-shirt, the mug, the diary, me grinning like an idiot. My parents, who never once made me feel like I wasn't enough during every quiet rejection, got to see this on that exact day.

I don't think I'll forget that phone call for a long time.

---

October 31, 2025 — **AI & Automation Engineer Intern at Cvent**, starting January 2026.

One of the happiest days of my life so far. On to the next chapter. 🧡
`,

  "update-aug25": `
Summer's over. Semester 5 just started. And I'm simultaneously the most motivated and most terrified I've ever been. Here's the honest version of August 2025.

---

## Semester 4 Results — 9.33 SGPA

Let's start with the good news.

**SGPA: 9.33 / 10.** Cumulative CGPA now sitting at **9.31**.

I won't pretend it was easy. Semester 4 was heavy — dense theory, back-to-back assessments, side projects running in parallel. But seeing that number made every skipped sleep-in worth it. The consistency is paying off, and I'm holding onto that going into what's shaping up to be the hardest semester yet.

---

## Semester 5 Subjects

Five courses, one minor project, zero chill:

- **Theory of Computation** — automata, grammars, Turing machines. Maths wearing a CS costume.
- **Soft Computing** — fuzzy logic, neural nets, genetic algorithms. Actually more interesting than I expected.
- **Software Engineering** — SDLC, design patterns, requirement specs. More real-world than it sounds in the syllabus.
- **Database Management System** — SQL, normalization, transactions, indexing. Finally a subject that feeds directly into interviews.
- **Minor Project** — building something real with a team. Exciting and terrifying in equal parts.

Coffee intake has doubled. ToC alone is responsible for at least 40% of that.

---

## The Internship Hunt — Honest Edition

This is the part I wasn't prepared for emotionally.

Semester 6 is the internship semester — **January to July 2026** — and companies are already running their shortlisting cycles. Which means right now I'm juggling:

- 3-hour online assessments after a full day of lectures
- Daily LeetCode grinds (working through the **Striver SDE Sheet** — arrays, graphs, DP, the whole thing)
- Technical interview rounds
- Mid-sem quizzes and assignment deadlines
- Trying to get seven hours of sleep and consistently failing

And the hardest part isn't the workload. It's watching everyone around you and wondering if you're falling behind. Someone gets a call. Someone clears a round. Someone posts an offer. And you refresh your inbox, close it, and go back to problem 47 of the SDE sheet.

I know comparison is the thief of joy. I've read that enough times. But knowing it doesn't make the 1 AM self-doubt any quieter.

---

## Still Showing Up

Here's what I keep coming back to: **I'm still in the room.**

Every company test — I've submitted. Every shortlist call — I've taken it. Every wrong answer on LeetCode — I've read the editorial and tried again. Some days I'm running on four hours of sleep and pure stubbornness. But I'm showing up, and I'm not stopping.

The internship will come. The work is being done.

---

That's August. Chaotic, exhausting, and somehow still exciting. Back to it. 🤞
`,

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
