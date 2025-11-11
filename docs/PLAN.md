# MDE.AI Pitch Deck Builder: Project Plan & Design Specification

## 1. Project Overview

### 1.1. Vision Statement
To empower every founder, regardless of their design skills or resources, to create compelling, investor-ready pitch decks in minutes. MDE.AI will be the smartest, fastest, and most intuitive platform for transforming an idea into a powerful narrative that secures funding and builds momentum.

### 1.2. Core Goals
- **Speed:** Drastically reduce deck creation time from days to under 15 minutes.
- **Quality:** Ensure every generated deck is visually polished, structurally sound, and narratively coherent.
- **Intelligence:** Leverage AI to not only generate content but also suggest design improvements, relevant imagery, and strategic insights.
- **Ecosystem Integration:** Serve as a central tool for the Medellín startup community, connecting founders with resources, investors, and opportunities.

### 1.3. Target Audience
- **Early-Stage Founders:** Individuals or small teams at the idea or pre-seed stage who need a professional deck quickly.
- **Accelerators & Incubators:** Programs that need a scalable tool to help their cohorts prepare for demo days.
- **Students & Aspiring Entrepreneurs:** Individuals learning about entrepreneurship who need to create decks for projects or competitions.

### 1.4. Key Differentiators
- **Conversational AI Wizard:** A chat-like interface that makes inputting information feel natural and intuitive.
- **Ecosystem-Specific Data:** Integration with local market data and trends relevant to the Medellín and LATAM startup scene.
- **Holistic Founder Platform:** The deck builder is the entry point to a wider platform offering job matching, perks, and networking.

---

## 2. Technology Stack

- **Frontend:** React 19 with TypeScript, Vite for build tooling.
- **State Management:** Zustand for simple, scalable global state management.
- **Backend & Database:** Supabase for authentication, PostgreSQL database, and storage.
- **AI Engine:** Google Gemini API for content generation, analysis, and image prompting.
- **Styling:** Tailwind CSS for a utility-first styling workflow.
- **Animation:** Framer Motion for all UI animations and transitions.

---

## 3. Design System & Brand Identity

### 3.1. Color Palette
- **Primary (Deep Blue - `#00334F`):** Conveys professionalism, trust, and intelligence. Used for primary buttons, headers, and key UI elements.
- **Secondary (Vibrant Orange - `#E97A41`):** Represents energy, creativity, and action. Used for CTAs, highlights, and accents.
- **Accent (Warm Mustard - `#F3B93C`):** Friendly and optimistic. Used for secondary accents, illustrations, and callouts.
- **Neutrals:**
  - **Light (`#FBF6F1`):** A warm, off-white background that is easy on the eyes.
  - **Medium (`#6E6E6E`):** For body text and secondary information.
  - **Dark (`#1E1E1E`):** For primary headlines and strong text.

### 3.2. Typography
- **Headings:** `Manrope`, Extra-Bold (800). Modern, geometric, and highly readable for impactful titles.
- **Body:** `Manrope`, Regular (400). Provides a clean and consistent reading experience.

### 3.3. Iconography & Shapes
- **Icons:** A clean, line-art style (like Feather Icons) will be used for clarity and consistency.
- **Shapes & Borders:** A base border radius of 16px will be used for cards and containers to create a soft, modern feel.

### 3.4. Voice & Tone
Empowering, intelligent, and supportive. The UI copy will act as a co-founder, guiding the user with clear, encouraging, and actionable language.

---

## 4. Component Library
A breakdown of the reusable React components required to build the MDE.AI platform.

### 4.1. Core & Layout Components
- **`Navbar`**: The main navigation bar, handling authentication state and user profile links.
- **`Footer`**: The application footer with key links and social media icons.
- **`PageLayout`**: A wrapper component to ensure consistent padding, max-width, and background styling across all pages.

### 4.2. UI Primitives
- **`Button`**: A versatile button component with variants for `primary`, `secondary`, and `text` styles, including loading and disabled states.
- **`Input`**: A styled text input for forms with integrated label and error message handling.
- **`Textarea`**: A styled textarea for larger text inputs, used heavily in the wizard.
- **`Card`**: A base card component with consistent styling (padding, border-radius, shadow) to be extended by other components.
- **`Modal`**: A generic modal component for pop-ups, such as confirmation dialogs or settings.
- **`Spinner`**: A loading indicator for asynchronous actions.
- **`Tooltip`**: A small pop-up that displays information when a user hovers over an element.

### 4.3. Feature Components
- **`HeroSection`**: The main hero section for the landing page, incorporating animated visuals.
- **`FeatureHighlightCard`**: A card to showcase a specific product feature with an icon and description.
- **`TestimonialCard`**: A card to display user testimonials with a quote, name, and image.
- **`DeckCard`**: A card for the user dashboard, showing a deck thumbnail, title, and a context menu for actions (rename, delete).
- **`Wizard`**: The main container for the multi-step deck creation process, managing state and navigation between steps.
- **`WizardStep`**: A single step within the wizard, containing a prompt, an input field, and AI-assist features.
- **`EditorCanvas`**: The main interactive area for editing a slide, handling direct manipulation of text and image elements.
- **`SlideThumbnail`**: A small, clickable, and draggable preview of a slide for the editor's left sidebar.
- **`InspectorPanel`**: The context-aware right sidebar in the editor for modifying element properties (typography, color, layout).
- **`AIGenerationLoader`**: An engaging loading screen with animated messages shown while the Gemini API is generating the deck.
- **`ThemeSwitcher`**: A component within the editor to apply global brand colors and logos to the entire deck.
- **`ImageGenerator`**: A modal or panel component with an input field to generate images using the Gemini API.

---

## 5. Page-by-Page Breakdown

### 5.1. Landing Page (`/`)
- **Purpose:** To attract and convert new users by clearly communicating the value proposition.
- **UI/UX Layout:**
  - **Hero Section:** A compelling headline ("Go from idea to investor-ready in minutes."), a sub-headline, a primary CTA ("Create My Deck for Free"), and an animated visual showcasing the final product.
  - **Feature Highlights:** A 3-column section with icons detailing the core features (AI Wizard, Smart Design, Export & Share).
  - **How It Works:** A visual, step-by-step diagram of the user journey.
  - **Testimonials:** Cards featuring quotes from early users or local startup leaders.
  - **Pricing/Tiers:** A simple breakdown of Free vs. Pro plans.
  - **Footer:** With navigation and social links.
- **Features:**
  - Crisp animations on scroll using Framer Motion.
  - A clear and unmissable call-to-action.

### 5.2. Authentication (`/auth/login`, `/auth/signup`)
- **Purpose:** To provide a seamless and secure way for users to access their accounts.
- **UI/UX Layout:** A centered, clean card on a minimal background.
- **Features:**
  - Email/password login and signup forms.
  - Social sign-on with Google and GitHub via Supabase Auth.
  - Clear error handling and validation messages.

### 5.3. Pitch Deck Wizard (`/wizard`)
- **Purpose:** To gather all necessary information from the founder to generate a high-quality first draft of the pitch deck.
- **UI/UX Layout:**
  - A full-screen, modal-like experience to minimize distractions.
  - **Top:** A progress bar showing the steps (e.g., `Idea -> Problem -> Solution -> Market ...`).
  - **Center:** The main content area with one key question per step. Uses large, friendly textareas and inputs.
  - **Side Panel:** A collapsible panel with tips, examples, and an AI-powered "Improve This" button.
- **Features:**
  - **Conversational Prompts:** Instead of "Market Size," the prompt will be "Who are your customers and how big is the opportunity?"
  - **Auto-Saving:** Progress is saved automatically.
  - **Gemini API Integration:**
    - The "Improve This" button sends the user's text to Gemini with a prompt to refine it for an investor audience.
    - On completion, all inputs are compiled into a structured JSON object and sent to the Gemini API to generate the full deck content.
  - **Loading Animation:** An engaging loading screen with messages like "Crafting your narrative..." while the AI works.

### 5.4. User Dashboard (`/dashboard`)
- **Purpose:** To be the central hub for users to manage their decks.
- **UI/UX Layout:**
  - **Header:** A welcoming message and a prominent "Create New Deck" button.
  - **Main Area:** A grid of `DeckCard` components. Each card shows a thumbnail preview of the title slide, the deck title, and last modified date.
- **Features:**
  - Deck cards have a context menu (three dots) for options like Rename, Duplicate, and Delete.
  - A search bar to filter decks by title.

### 5.5. Deck Editor (`/deck/:id/edit`)
- **Purpose:** The core of the application where users refine the AI-generated deck.
- **UI/UX Layout:** A classic three-column editor layout.
  - **Left Sidebar (Slide Sorter):** A vertical list of slide thumbnails. Users can drag-and-drop to reorder slides.
  - **Center Canvas:** A large, interactive preview of the selected slide. All text and image elements are directly editable.
  - **Right Sidebar (Inspector Panel):** Context-aware controls.
    - When text is selected: Show typography controls (font size, weight, color).
    - When an image is selected: Show options to replace, crop, or generate a new image with AI.
    - When the slide background is selected: Show slide layout options and theme/color controls.
- **Features:**
  - **Real-time Editing:** All changes are reflected instantly on the canvas.
  - **AI Image Generation:** An input field where users can type a prompt (e.g., "A team working on a laptop in a modern office") to generate a new image for the slide.
  - **Theming Engine:** A "Brand" tab in the inspector allows users to set a primary color and upload a logo, which then propagates across all slides.
  - **Presentation Mode Button:** A clear button to enter the full-screen preview.
  - **Export Button:** To download the deck as a PDF.

### 5.6. Deck Preview (`/deck/:id/preview`)
- **Purpose:** To allow users to present their deck in a clean, professional format.
- **UI/UX Layout:** A full-screen, immersive view of the slides. Minimal UI, with only a slide counter (`3 / 10`) and an "Exit" button visible on hover.
- **Features:**
  - Navigation with arrow keys.
  - A shareable link option.

---

## 6. Data & Backend Architecture (Supabase)

### 6.1. Database Schema
- **`users`:** Stores user profile information, linked to Supabase Auth.
- **`decks`:**
  - `id` (uuid, pk)
  - `user_id` (fk to `users.id`)
  - `title` (text)
  - `created_at` (timestamp)
  - `theme_settings` (jsonb for colors, fonts)
- **`slides`:**
  - `id` (uuid, pk)
  - `deck_id` (fk to `decks.id`)
  - `order` (integer for slide sequence)
  - `content` (jsonb): A flexible structure to store the elements of a slide, e.g., `{ "type": "title", "text": "..." }`, `{ "type": "image", "url": "..." }`.
  - `layout_template` (text, e.g., "title_and_body")

---

## 7. Development Roadmap

### Phase 1: Foundation & Core UI (Weeks 1-2)
- Setup project (React, Supabase, Tailwind).
- Build the Design System: components for buttons, inputs, cards.
- Implement Authentication pages and Supabase Auth.
- Build static UI for the Dashboard and Deck Editor.

### Phase 2: Wizard & AI Integration (Weeks 3-4)
- Build the multi-step Wizard component.
- Develop the core Gemini API service for content generation.
- Connect the Wizard output to the AI service.
- Implement logic to parse the AI response and create `deck` and `slide` records in Supabase.
- Build the engaging loading state animation.

### Phase 3: Deck Editor & Theming (Weeks 5-7)
- Make the central `Canvas` interactive, allowing direct text editing.
- Implement the slide reordering functionality in the sidebar.
- Build the contextual Inspector Panel.
- Develop the global theming engine (color and logo propagation).
- Integrate Gemini for AI image generation.

### Phase 4: Final Touches & Deployment (Week 8)
- Build the full-screen Presentation Mode.
- Implement PDF export functionality.
- Conduct thorough testing, and responsiveness checks.
- Deploy to a hosting provider (e.g., Vercel, Netlify).
