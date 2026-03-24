Here is your finalized Master Prompt. I have integrated your specific requirements for image filters (blur and noise) and the specific viewport behavior for the testimonial section into the system persona and technical specs.

You can now copy and paste this entire prompt directly to your AI coding agent.

***

### 🖥️ Master Website Build Prompt (Next.js / Tailwind / GSAP)

**System Persona & Tech Stack Definition:**
You are an elite, senior-level Front-End Developer and UI/UX Engineer. Your task is to build a high-performance, responsive, and visually sophisticated personal brand portfolio for "Michael McKay." Do not use generic templates; build this with a bespoke, premium, "creative agency" aesthetic.

* **Framework:** Next.js (App Router). Build modular, reusable React components.
* **Styling:** Tailwind CSS. Utilize Tailwind for all styling, layout (CSS Grid/Flexbox), and typography.
* **Animations:** GSAP (GreenSock). Use GSAP for all smooth transitions, hover states, and scroll-driven effects (e.g., ScrollTrigger for section snapping) to ensure exceptional performance.
* **Design Philosophy:** "Cinematic Earth Meets Corporate Strategy." Focused heavily on rich, warm earth tones, particularly a wide spectrum of Browns (espresso, burnt sienna, terracotta, sand). Images are moody, analog-film style, with high contrast.

---

### **Global Styles & Specific Art Direction (CRITICAL)**

#### **1. Typography (via `tailwind.config.js` extension):**
* **Headings (H1-H6):** Use the variable Google font **Parkinsans**. Configure authoritative weights for strong visual hierarchy.
* **Body Copy:** Use **Una** (by Omnibus-Type). Ensure high legibility with appropriate leading (line-height) and tracking utility classes.

#### **2. Specific Image Treatment Pipeline:**
Apply the following styles to **ALL** photo assets (portraits, landscapes, project mockups) to achieve a unified, color-gradient blend aesthetic.
* **Effect A (CSS Filter):** Apply a Gaussian blur of approximately `15px` to `20px`. (Goal: To transform the image details into smooth, blended gradients). *Note: Map this standard "30% reduction in sharpness" instruction to a modern CSS filter value that achieves the look without breaking the composition.*
* **Effect B (Grain Overlay):** Layer a 12% noise/grain texture on top of the blurred images. Use a generated SVG filter applied via CSS (`filter: url(#noiseFilter);`) or a subtle noise PNG image (`mix-blend-mode: overlay`).

#### **3. Interaction Design (GSAP):**
All transitions must be medium-paced, deliberate, and exceptionally smooth. Utilize `ease: "power2.inOut"` or similar for a responsive, "buttery" control panel feel.

---

### **Section-by-Section Wireframe Description**

#### **Section 1: The Hero (100vh)**
* **Layout:** Full-screen background image (`h-screen`).
* **Visuals:** Moody, high-resolution landscape/architectural shot with dark/gradient overlay for text legibility. Apply Global Image Treatment (Blur + Grain).
* **Content:**
    * **H1:** Michael McKay — Building the Future of Climate & Commerce.
    * **Subheadline:** A mission-driven strategist dedicated to saving the planet. I bridge the gap between authentic environmental ambition and high-level sales and marketing strategy to scale global climate action.
    * **Primary CTA:** [View My Work] (Use GSAP ScrollToPlugin for a smooth scroll to Section 4).

#### **Section 2: The Root / My Why (Credibility & Nature)**
* **Layout:** A clean, asymmetrical Bento-style grid using Tailwind's `grid` and `col-span` utilities.
* **Purpose:** Establish authentic credibility and connection to climate/ocean action.
* **Content:**
    * **Grid Item 1:** Core philosophy—why nature matters, the urgency of climate change.
    * **Grid Item 2:** Personal nature image. Apply Global Image Treatment (Blur + Grain).
    * **Grid Item 3:** Pull-quote emphasizing sustainability as the foundation of business.

#### **Section 3: The Toolkit (Leadership Skills & BCI Foundation)**
* **Layout Part A (Strengths Grid):** A 6x3 CSS Grid (`grid-cols-6 grid-rows-3`).
    * **Columns 1–4 (Rows 1-3):** 6 cards for leadership strengths (Connectedness, Intellection, Learner, Belief, Adaptability, Sales).
        * **GSAP Interaction:** On hover, use GSAP to smoothly cross-fade the skill title to reveal a 1-sentence internal insight. Background colors of cards should be varying shades of warm earth tones.
    * **Columns 5–6 (Rows 1-2):** High-quality vertical portrait image. Apply Global Image Treatment (Blur + Grain).
    * **Columns 5–6 (Row 3):** CTA block: "Discover the story behind the strengths →" linking to the About Me page.
* **Layout Part B (The BCI Skinny Bar):**
    * Narrow, full-width horizontal bar (`w-full py-4` or similar) placed immediately below the 6x3 grid.
    * **Content:** "Bachelor of Creative Industries @ BCIT. Where human-centered design meets commercial strategy."

#### **Section 4: The Impact / Enactus (The "Boom")**
* **Layout:** 50/50 split-screen (`md:grid-cols-2`).
* **Left Column (The Narrative):** "Where Business Meets Nature." Blurb explaining Enactus and solving UN SDGs. Bold CTA button.
* **Right Column (The Proof / Interactive Grid):** 2x2 grid of interactive project tiles (EcoMeter, Spark, High School Case Competition). Images must apply Global Image Treatment (Blur + Grain).
    * **GSAP Interaction:** Use GSAP to animate a semi-transparent overlay sliding up smoothly on hover to reveal the project title and SDG.

#### **Section 5: Voices of Impact (Social Validation - CRITICAL VIEWPORT SPEC)**
* **Layout:** Horizontal carousel/slider built with Next.js/Tailwind. Use a soft canvas background color.
* **Viewport Behavior:** Each testimonial card must fill the *entire* viewport width and height (e.g., `90vw, 90vh`). Use padding/margins on the slides to expose the background just slightly (e.g., a "slide within a frame" effect).
* **GSAP Interaction:** Implement snapping functionality. When a transition occurs, the **entire slide cell** must move horizontally across the screen, snapping precisely into the viewport frame. Transitions must be buttery smooth and medium-paced.
* **Content:** Testimonial quotes highlighting specific skills, circular headshot, name, and title.

#### **Section 6: Strategic Alignment & Contact (The Close)**
* **Layout:** Visually striking footer-adjacent section with a wide background image featuring dark, moody architectural or natural textures. Apply Global Image Treatment (Blur + Grain).
* **The "Multiply" Effect:** Render the 3 target job cards over this background using Tailwind's `mix-blend-multiply` utility class so they appear physically "stitched" into the background image grain.
* **Content:**
    * **Header:** Ready to scale your impact?
    * **Action Buttons:** [Download Resume (PDF)] and [Connect on LinkedIn].
    * **Job Target Cards (The 3 Cards below the buttons):** Marketing Strategy Lead, Sustainable Sales & Partnerships, Climate Action Project Manager. (Include a 1-sentence description on each card).

#### **Section 7: Standard Footer**
* **Layout:** Minimalist bottom bar in deep espresso brown.
* **Content:** Copyright (Michael McKay), quick navigation links, and minimalist social icons.