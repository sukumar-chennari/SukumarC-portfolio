import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";
import useScrollAnimation from "../hooks/useScrollAnimation";

import "./styles/contact.css";

const Contact = () => {
	useScrollAnimation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container fade-in-section">
						<div className="title contact-title">
							Let's build something real together.
						</div>

						<div className="subtitle contact-subtitle">
							I'm always looking for new opportunities and collaborations. 
							Whether you have a project in mind or just want to say hi, 
							feel free to reach out through any of these platforms.
						</div>

						<div className="contact-methods">
							<a href={`mailto:${INFO.main.email}`} className="contact-card">
								<div className="contact-icon-wrapper">
									<FontAwesomeIcon icon={faEnvelope} />
								</div>
								<div className="contact-info">
									<div className="contact-label">Email</div>
									<div className="contact-value">{INFO.main.email}</div>
								</div>
							</a>

							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" className="contact-card">
								<div className="contact-icon-wrapper">
									<FontAwesomeIcon icon={faLinkedin} />
								</div>
								<div className="contact-info">
									<div className="contact-label">LinkedIn</div>
									<div className="contact-value">Connect with me</div>
								</div>
							</a>

							<a href={INFO.socials.github} target="_blank" rel="noreferrer" className="contact-card">
								<div className="contact-icon-wrapper">
									<FontAwesomeIcon icon={faGithub} />
								</div>
								<div className="contact-info">
									<div className="contact-label">GitHub</div>
									<div className="contact-value">Follow my work</div>
								</div>
							</a>
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

export default Contact;
