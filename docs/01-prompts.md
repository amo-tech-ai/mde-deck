You are an AI Creative Director and Senior UX Motion Designer.
Your task is to design a beautiful, responsive, premium webpage for MDE.AI Pitch Deck Builder — a next-gen AI platform that helps founders create investor-ready pitch decks in minutes.

🎯 Goal

Create a complete, production-ready visual design specification for the Pitch Deck Builder webpage, showcasing a step-by-step intelligent process, glowing neural visuals, ROI data storytelling, and professional CTAs.

The page must feel intelligent, professional, confident, and conversion-optimized, blending AI aesthetics with motion-driven storytelling.

🧠 Creative Brief
Visual Theme

Premium AI branding with soft gradients, glowing neural lines, and data-inspired backgrounds.

Subtle motion parallax and particle effects that evoke “AI intelligence at work.”

Color palette:

Primary: #00334F (Deep Blue)

Accent: #E97A41 (Vibrant Orange)

Highlight: #F3B93C (Mustard)

Neutrals: #FBF6F1, #6E6E6E, #1E1E1E

Typography

Manrope (800 headings / 400 body)

Large, confident headings with animated reveal

Crisp, minimal text with breathing room and visual rhythm

Tone & Feel

Intelligent, supportive, forward-looking

Blends the precision of AI with the warmth of human design

Encourages founders to “Start Smart, Pitch Confidently”

🧩 Structure & Components

Return a structured JSON object describing the full design layout, including all sections, visuals, animations, and responsive behavior.

{
  "summary": "Premium, motion-enhanced, responsive design for MDE.AI Pitch Deck Builder — intelligent, data-driven, and conversion-optimized.",
  "sections": [
    {
      "id": "hero",
      "goal": "Instantly communicate value and drive signup.",
      "layout": "2-column grid (text + animated visual)",
      "content": {
        "headline": "From Idea to Investor-Ready in Minutes",
        "subheadline": "AI-powered storytelling that builds momentum.",
        "cta": "Create My Deck →"
      },
      "visuals": {
        "animation": "glowing neural background, slow pulsating grid, subtle camera pan",
        "elements": ["animated neurons", "deck preview mockup", "gradient motion lines"]
      },
      "motion_effects": {
        "entry": "fade-up + scale-in",
        "scroll_behavior": "parallax background depth 20%",
        "cta_hover": "gradient glow pulse"
      }
    },
    {
      "id": "process",
      "goal": "Showcase AI-driven deck creation as an intelligent step-by-step journey.",
      "layout": "animated horizontal timeline",
      "visualization": {
        "type": "scroll-synced timeline",
        "style": "glowing line that lights up each step as user scrolls",
        "steps": [
          { "title": "1. Input Your Idea", "icon": "💡", "motion": "fade-in-left" },
          { "title": "2. AI Understands Context", "icon": "🤖", "motion": "fade-in-up" },
          { "title": "3. Draft Your Deck", "icon": "📊", "motion": "zoom-in" },
          { "title": "4. Refine with Insights", "icon": "🧠", "motion": "slide-up" },
          { "title": "5. Export & Share", "icon": "🚀", "motion": "fade-in-right" }
        ]
      },
      "extras": {
        "mermaid_diagram": "flowchart LR A[Idea Input]-->B[AI Generation]-->C[Deck Draft]-->D[Refine]-->E[Export]"
      },
      "motion_effects": {
        "scroll_trigger": "reveal each step sequentially on scroll",
        "connectors": "glow when active step is visible"
      }
    },
    {
      "id": "roi_section",
      "goal": "Use data storytelling to prove time, cost, and quality ROI.",
      "layout": "responsive 3-column grid",
      "charts": [
        { "type": "animated bar", "metric": "Time saved (Days → Minutes)", "color": "#E97A41" },
        { "type": "animated donut", "metric": "Success Rate: 92%", "color": "#00334F" },
        { "type": "animated counter", "metric": "500+ Decks Created", "color": "#F3B93C" }
      ],
      "motion_effects": { "onScroll": "grow chart bars with easing", "hover": "subtle pulse" }
    },
    {
      "id": "testimonials",
      "goal": "Build trust with authentic founder voices.",
      "layout": "carousel",
      "cards": [
        { "quote": "MDE.AI turned my rough notes into a beautiful deck investors loved.", "name": "Camila R., Founder" },
        { "quote": "Saved me 10 hours and landed a meeting with an accelerator.", "name": "Juan P., Startup CEO" }
      ],
      "animation": "auto-scroll with fade transition"
    },
    {
      "id": "cta_section",
      "goal": "Convert visitors with a final compelling CTA.",
      "layout": "centered glowing card",
      "content": {
        "headline": "Ready to Build Your Investor-Ready Deck?",
        "cta": "Start Free →"
      },
      "visuals": { "background": "animated gradient waves", "effect": "soft glow pulse" }
    }
  ],
  "ui_components": [
    "HeroCTAButton",
    "AnimatedTimeline",
    "ChartCard",
    "TestimonialCarousel",
    "GlowingCard"
  ],
  "responsive_rules": {
    "mobile": ["stacked layout", "scroll-snap timeline", "compact typography"],
    "tablet": ["2-column grids", "reduced motion"],
    "desktop": ["parallax layers", "timeline sync scroll"]
  },
  "mock_data": {
    "metrics": [
      { "label": "Avg Time to Deck", "value": "12 minutes" },
      { "label": "Investor Conversion", "value": "91%" },
      { "label": "Users", "value": "4,200+" }
    ]
  },
  "acceptance_checks": [
    "✅ Page renders under 2.5s LCP",
    "✅ Animations achieve 60fps smoothness",
    "✅ All charts and timelines are mobile-responsive",
    "✅ CTAs visible on first viewport scroll",
    "✅ a11y compliant: roles, labels, and focus states"
  ],
  "production_checklist": [
    "Setup Framer Motion variants for all sections",
    "Lazy-load large animations below the fold",
    "Use prefers-reduced-motion query for accessibility",
    "Optimize charts with lightweight SVG or Canvas",
    "Test scroll-triggered timeline on all breakpoints"
  ]
}

🧩 Key Features You Must Include

Animated horizontal timeline in the Process section (scroll-synced)

Data storytelling visuals: ROI charts, metrics, impact numbers

AI-inspired glowing neural visuals and gradient effects

Professional CTAs designed for conversion

Fully responsive layout (mobile → desktop)

Clean, minimal typography with visual rhythm

Mock/placeholder data for all visuals and charts

✅ Success Criteria

The output provides a complete responsive design spec (visuals, motion, charts, layout).

Each section includes purpose, visuals, animation behavior, and mock data.

Ready for Figma handoff or React implementation.

Visual hierarchy optimized for conversion and storytelling.
