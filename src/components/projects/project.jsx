import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, tags } = props;

	return (
		<React.Fragment>
			<div className="project">
				<a href={link} target="_blank" rel="noreferrer">
					<div className="project-container">
						<div className="project-header">
							<div className="project-logo">
								<img src={logo} alt="logo" />
							</div>
							<div className="project-tags">
								{tags && tags.map((tag, index) => (
									<span key={index} className="project-tag">{tag}</span>
								))}
							</div>
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Project;
