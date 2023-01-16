import React from 'react';
import './experience.css';

const Experience = () => {
	return (
		<section className="experience section" id="experience">
			<h2 className="section__title">Experience</h2>
			<span className="section__subtitle">My personel journey</span>
			
			<div className="experience__container container">
				<div className="experience__content">
					<div className="experience__data">
						<div>
							<h3 className="experience__title">OTI</h3>
							<span className="experience__subtitle">Frontend & Backend / 대리</span>
							<div className="experience__calender">
								<i className="uil uil-calendar-alt" /> 2020.01-2022.11
							</div>
						</div>

						<div>
							<span className="experience__rounder"></span>
							<span className="experience__line"></span>
						</div>
					</div>

					<div className="experience__data">
						<div></div>

						<div>
							<span className="experience__rounder"></span>
							<span className="experience__line"></span>
						</div>

						<div>
							<h3 className="experience__title">GKL</h3>
							<span className="experience__subtitle">Frontend & Backend / 프리랜서</span>
							<div className="experience__calender">
								<i className="uil uil-calendar-alt" /> 2018.07-2018.08
							</div>
						</div>
					</div>

					<div className="experience__data">
						<div>
							<h3 className="experience__title">생각더하기느낌</h3>
							<span className="experience__subtitle">Frontend & Backend / 대리</span>
							<div className="experience__calender">
								<i className="uil uil-calendar-alt" /> 2017.05-2017.10
							</div>
						</div>

						<div>
							<span className="experience__rounder"></span>
							<span className="experience__line"></span>
						</div>
					</div>

					<div className="experience__data">
						<div></div>

						<div>
							<span className="experience__rounder"></span>
							<span className="experience__line"></span>
						</div>

						<div>
							<h3 className="experience__title">더뷰컨설팅</h3>
							<span className="experience__subtitle">Frontend & Backend / 사원</span>
							<div className="experience__calender">
								<i className="uil uil-calendar-alt" /> 2016.05-2017.03
							</div>
						</div>
					</div>

					<div className="experience__data">
						<div>
							<h3 className="experience__title">지케이메디컬</h3>
							<span className="experience__subtitle">Frontend & Backend / 사원</span>
							<div className="experience__calender">
								<i className="uil uil-calendar-alt" /> 2015.09 - 2016.03
							</div>
						</div>

						<div>
							<span className="experience__rounder"></span>
							<span className="experience__line"></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;