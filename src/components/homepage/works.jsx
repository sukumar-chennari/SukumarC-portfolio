import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./athena.png"
								alt="athena"
								className="work-image"
							/>
							<div className="work-content">
								<div className="work-title">Athena Global Technologies</div>
								<div className="work-subtitle">Mobile & Web Developer (Ionic + React)</div>
								<div className="work-duration">2024 — Present</div>
								<ul className="work-bullets">
									<li>Contributing to production-ready applications with a focus on performance and usability.</li>
									<li>Delivering critical features under real-world project timelines and deployment cycles.</li>
								</ul>
							</div>
						</div>

						<div className="work">
							{/* <img
								src="./ionic.png"
								alt="telemedicine"
								className="work-image"
							/>
							<div className="work-content">
								<div className="work-title">MedleyMed</div>
								<div className="work-subtitle">Mobile Developer (Ionic + React)</div>
								<div className="work-duration">2023 — 2024</div>
								<ul className="work-bullets">
									<li>Developed a production-ready telemedicine platform used for real-time patient consultations.</li>
									<li>Successfully handled deployments on the App Store and Google Play Store under strict timelines.</li>
								</ul>
							</div> */}
						</div>

						<div className="trust-signal">
							<span className="trust-badge">App Store & Play Store Deployment Experience</span>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
