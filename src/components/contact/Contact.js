import React from 'react';
import './contact.css';

const Contact = () => {
	return (
		<section className="contact section" id="contact">
			<h2 className="section__title">Contact</h2>
			<span className="section__subtitle">Get in touch</span>
			
			<div className="contact__container container grid">
				<div className="contact__content">
					<i className="bx bx-phone contact__icon" />
					<h3 className="contact__title">Phone</h3>
					<span className="contact__data">010.6716.9800</span>
				</div>

				<div className="contact__content">
					<i className="bx bx-chat contact_icon" />
					<h3 className="contact__title">KakaoTalk</h3>
					<span className="contact__data">OpenChat</span>

					<a href="https://open.kakao.com/o/sKUSxaZe" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon" /></a>
				</div>

				<div className="contact__content">
					<i className="bx bx-mail-send contact__icon" />
					<h3 className="contact__title">Email</h3>
					<span className="contact__data">auddlzz000@gmail.com</span>
				</div>
			</div>
		</section>
	);
}

export default Contact;