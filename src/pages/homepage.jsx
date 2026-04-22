import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";

import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";
import useScrollAnimation from "../hooks/useScrollAnimation";

import "./styles/homepage.css";

const Homepage = () => {
	useScrollAnimation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />

				<div className="content-wrapper">
					{/* HERO SECTION */}
					<section className="hero-section fade-in-section">
						<div className="hero-main">
							<div className="hero-content">
								<h1 className="hero-name">{INFO.main.name}</h1>
								<h2 className="title hero-title">{INFO.homepage.title}</h2>
								<p className="subtitle hero-subtitle">{INFO.homepage.description}</p>

								<div className="hero-ctas-container">
									<div className="hero-ctas">
										<a href="#projects" className="btn btn-primary">
											View Projects <FontAwesomeIcon icon={faArrowRight} />
										</a>
										<Link to="/contact" className="btn btn-secondary">
											Get in Touch
										</Link>
									</div>
									<p className="cta-subtext">Open to opportunities and collaborations</p>
								</div>

								<div className="homepage-socials">
									<a href={INFO.socials.github} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
									</a>
									<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon" />
									</a>
									<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faEnvelope} className="homepage-social-icon" />
									</a>
								</div>
							</div>

							<div className="hero-image-section">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="Sukumar Chennari"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* TECH STACK SECTION */}
					<section className="tech-stack-section fade-in-section">
						<h3 className="section-heading">Tech Stack</h3>
						<div className="skills-grid">
							{INFO.skills.map((skill, index) => (
								<div className="skill-card" key={index}>
									<img src={skill.icon} alt={skill.name} className="skill-icon" />
									<span className="skill-name">{skill.name}</span>
								</div>
							))}
						</div>
					</section>

					{/* PROJECTS & EXPERIENCE SECTION */}
					<div className="homepage-after-title">
						<section id="projects" className="homepage-projects fade-in-section">
							<h3 className="section-heading">Selected Projects</h3>
							<AllProjects />
						</section>

						<section className="homepage-works fade-in-section">
							<h3 className="section-heading">Experience</h3>
							<Works />
						</section>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
