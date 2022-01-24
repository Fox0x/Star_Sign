import React, { useRef } from "react";
import css from "./StartPage.module.css";
import background from "../../../public/images/background.png";
import topLeftClouds from "../../../public/images/tlc.png";
import bottomLeftClouds from "../../../public/images/blc.png";
import goldTexture from "../../../public/images/gold.jpg";

export const StartPage = () => {
	const cloudTop = useRef(null);
	const cloudBottom = useRef(null);
	const title = useRef(null);

	//parallax effect
	const handleMouseMove = (e) => {
		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;

		cloudTop.current.style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
		cloudBottom.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
		title.current.style.transform = `translate(${-x * 5}px, ${y * 5}px)`;};

	return (
		<div
			className={css.startPage__wrapper}
			style={{ backgroundImage: `url(${background})` }}
			onMouseMove={(e) => handleMouseMove(e)}>
			<div
				className={css.startPage__topLeftClouds}
				style={{ backgroundImage: `url(${topLeftClouds})` }}
				ref={cloudTop}
			/>
			<div
				className={css.startPage__bottomLeftClouds}
				style={{ backgroundImage: `url(${bottomLeftClouds})` }}
				ref={cloudBottom}
			/>
			<div
				className={css.startPage__title}
				style={{ backgroundImage: `url(${goldTexture})` }}
				ref={title}>
				your 
        <br/>
        zodiac
        <br/>
         sign
			</div>

			<button className={css.startPage__button} style={{ backgroundImage: `url(${goldTexture})` }}>
      &#10148;
      </button>
		</div>
	);
};
