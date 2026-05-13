export const projects = [
  {
    title: "Vocab Forest: Web App",
    subtitle: "Full stack development, UI/UX",
    description: "A web app that allows users to search and save words/definitions into lists. Built using React and Supabase, and styled using Tailwind.",
    tags: ["React", "Tailwind", "Supabase", "TypeScript", "Cloudflare"],
    links: [
      { name: "Live Site", link: "https://vocabforest.com/" },
      { name: "View Repo", link: "https://github.com/a7gela/vocab-forest/" },
    ],
    image: "../src/assets/vocab-forest/vocab-forest-homepage.png",
    cardId: "vocab-forest-card",
  },
  {
    title: "Data Visualisations",
    subtitle: "Data visualisation, Data cleaning and analysis",
    description: "Interactive data visualisations exploring Australian diets (Tableau) and shark bite incidents (VegaLite, JavaScript) that I created during uni.",
    tags: ["Tableau", "VegaLite", "JavaScript", "HTML/CSS"],
    links:
      [
        { name: "Australian Diet", link: "https://public.tableau.com/app/profile/angela1624/viz/AusDiet/Dashboard3" },
        { name: "Shark bite incidents", link: "https://a4gela.github.io/3179_A2/" },
      ],
    image: "../src/assets/data-vis/data-vis-card-image.png",
    cardId: "data-vis-card"
  }
]

export const vocabForest = projects[0];
export const dataVis = projects[1];