const INFO = {
	main: {
		title: "Sukumar Portfolio",
		name: "Sukumar Chennari",
		email: "chennarisukumar@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/sukumar-chennari",
		linkedin: "https://www.linkedin.com/in/sukumar-chennari/",
	},

	homepage: {
		title: "Mobile & Web Developer building production-ready apps with Ionic, React, and real-world deployment experience.",
		description:
			"I engineer and ship high-performance mobile and web applications that solve real user problems. Specialized in delivering scalable solutions with clean architecture and practical design.",
	},

	services: [
		"Build mobile apps using Ionic + React (Android / iOS ready)",
		"Convert web apps into mobile apps using Capacitor",
		"Develop full-stack web apps using MERN stack",
		"Improve performance and fix production issues",
	],

	about: {
		title: "I’m Sukumar, a developer focused on mobile and web apps.",
		description:
			"I have 1.5 years of experience building professional-grade mobile and web applications. My expertise lies in Ionic and React, with a proven track record of deploying complex systems like telemedicine platforms to both Play Store and App Store. I focus on building practical, high-impact products that prioritize usability and performance over unnecessary complexity.",
	},

	skills: [
		{ name: "React", icon: "react.png" },
		{ name: "Ionic", icon: "ionic.png" },
		{ name: "JavaScript", icon: "js.jpeg" },
		{ name: "Node.js", icon: "node.jpeg" },
		{ name: "Express", icon: "express.jpeg" },
		{ name: "MongoDB", icon: "mongo.png" },
	],

	projects: [
		{
			title: "MedleyMed Telemedicine",
			description: "Production telemedicine platform supporting real-time video consultations and scheduling. ✅ Deployed to App Store & Play Store for real-world healthcare use.",
			logo: "/ionic.png",
			linkText: "App Store",
			link: "https://apps.apple.com/us/app/medleymed/id1148592938",
			tags: ["Ionic", "React", "Deployment"],
		},
		{
			title: "Voice Expense Tracker",
			description: "Voice-input mobile app designed to reduce manual input friction. Features rapid expense entry and persistent local storage for on-the-go usability.",
			logo: "/ionic.png",
			linkText: "Live Demo",
			link: "https://expense-tracker-app-sukumar.netlify.app",
			tags: ["Ionic", "React", "Voice API"],
		},
		{
			title: "MERN E-commerce Engine",
			description: "Full-stack e-commerce solution with optimized backend architecture and secure payment logic, built to handle real-world high-traffic shopping scenarios.",
			logo: "/mern.png",
			linkText: "GitHub",
			link: "https://github.com/sukumar-chennari/ecommerce-mern/tree/dev",
			tags: ["MERN", "Node.js", "APIs"],
		},
	],
};

export default INFO;