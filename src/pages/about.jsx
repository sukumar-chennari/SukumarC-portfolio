import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import INFO from "../data/user";
import SEO from "../data/seo";
import useScrollAnimation from "../hooks/useScrollAnimation";

import "./styles/about.css";

const About = () => {
	useScrollAnimation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container fade-in-section">
						<div className="about-main">
							<div className="about-content">
								<h1 className="title about-title">{INFO.about.title}</h1>
								<div className="subtitle about-subtitle">
									{INFO.about.description.split('. ').map((para, i) => (
										<p key={i} className="about-para">{para}.</p>
									))}
								</div>
							</div>

							<div className="about-image-section">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpeg"
											alt="Sukumar Chennari"
											className="about-image"
										/>
									</div>
								</div>
							</div>
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

export default About;
