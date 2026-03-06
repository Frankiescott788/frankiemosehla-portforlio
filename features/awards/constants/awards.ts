export type Award = {
  title: string;
  place?: string;
  date?: string;
  team?: string;
  description: string;
  placeholder?: boolean;
} & (
  | { placeholder: true }
  | {
      placeholder?: false;
      tags: string[];
      imageSrc: string;
      imageAlt: string;
    }
);

export const awards: Award[] = [
  {
    title: "Telkom 10x Hackathon",
    place: "First Place",
    date: "14 September 2025",
    team: "The Engineers",
    description:
      "Won first place with our Smart Shelf system — an IoT solution with a camera, sensors, and speaker that tracks when items are removed from a shelf and updates a web app in real time. Built with Next.js frontend and Python backend for rapid development and robust performance. Incredible teamwork, late-night coding sessions, and lots of problem-solving led us to victory.",
    tags: ["Next.js", "Python", "IoT", "Real-time"],
    imageSrc: "/images/awards/telkom-hack.png",
    imageAlt: "Telkom 10x Hackathon — First Place",
  },
  {
    title: "Geekulcha Annual Hackathon",
    place: "Third Place",
    date: "06 October 2024",
    team: "The Engineers",
    description:
      "My team, The Engineers, secured 3rd place at the Geekulcha Annual Hackathon with Thuso, an innovative project designed to assist blind individuals. Thuso combines a physical navigation bot with a web app for real-time monitoring and management, enhancing safety and mobility for visually impaired users.",
    tags: ["Hardware", "Web app", "Accessibility", "Thuso"],
    imageSrc: "/images/awards/ghack-2024.jpg",
    imageAlt: "Geekulcha Annual Hackathon 2024",
  },
  {
    title: "Telkom Learn Limpopo Hackathon",
    place: "First Place",
    date: "04 September 2024",
    team: "The Engineers",
    description:
      "Created during the Telkom Learn Limpopo Hackathon, my team, The Engineers, secured 1st place with this innovative web app. It promotes digital inclusivity by connecting underserved communities with resources, gamified learning modules, and accessibility features. It includes an AI chatbot and integration with the Thuso bot to assist users, including the visually impaired, along with community forums, a resource database, and interactive digital literacy training to help bridge the digital divide.",
    tags: ["Web app", "AI chatbot", "Thuso", "Accessibility"],
    imageSrc: "/images/awards/telkom-learn.png",
    imageAlt: "Telkom Learn Limpopo Hackathon — First Place",
  },
];
