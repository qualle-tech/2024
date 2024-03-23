export interface ProjectInfo {
  path: string
  coverImg: string
  alt: string
  title: string
  desc: string
  timeline: string
}
export const PROJECTS: Array<ProjectInfo> = [
  {
    path: "/projects/mic-drop",
    coverImg: "/seed.png",
    alt: "Mic Drop Cover Image",
    title: "Mic Drop",
    desc: "Open Mic Event Dashboard for Comedians in NYC",
    timeline: "In Development",
  },
  {
    path: "/projects/admin-tool",
    coverImg: "/seed.png",
    alt: "Admin Tool Cover Image",
    title: "Operational System - Admin Tools",
    desc: "Admin Dashboard and Staff Portal for Culinary Services",
    timeline: "In Development - to be deployed in April 2024",
  },
  {
    path: "/projects/sourcing-tool",
    coverImg: "/seed.png",
    alt: "Sourcing Tool Cover Image",
    title: "Material Sourcing Tool",
    desc: "Monday Integration to source stones for a Bespoke Jewelry Designer",
    timeline: "Deployed January 2024",
  },
  {
    path: "/projects/internal-database",
    coverImg: "/seed.png",
    alt: "Internal Database Tool Cover Image",
    title: "Internal Database",
    desc: "Internal Database Tool for Non-Profits",
    timeline: "Deployed September 2023",
  },
  {
    path: "/projects/symptom-food-tracker",
    coverImg: "/seed.png",
    alt: "Symptom and Food Tracker Cover Image",
    title: "Food and Symptom Tracker",
    desc: "Demo Application for Food and Symptom Tracker",
    timeline: "Deployed April 2023",
  },
]
