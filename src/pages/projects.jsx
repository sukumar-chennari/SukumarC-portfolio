import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import useScrollAnimation from "../hooks/useScrollAnimation";

import "./styles/projects.css";

const Projects = () => {
	useScrollAnimation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container fade-in-section">
						<h1 className="title projects-title">
							Building apps that solve real-world problems.
						</h1>

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects, from professional telemedicine 
							platforms to personal tools focused on voice accessibility and clean UI. 
							Here's a selection of my work that demonstrates my focus on performance 
							and maintainable architecture.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
