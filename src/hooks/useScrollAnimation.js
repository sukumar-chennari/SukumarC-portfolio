import { useEffect } from "react";

const useScrollAnimation = () => {
	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
				}
			});
		}, observerOptions);

		const animatedElements = document.querySelectorAll(".fade-in-section");
		animatedElements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);
};

export default useScrollAnimation;
