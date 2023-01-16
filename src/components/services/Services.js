import React, { useState } from 'react';
import './services.css';

const Services = () => {
	
	const [toggleState, setToggleState] = useState(0);
	
	const toggleTab = (index) => {
		setToggleState(index);
	}
	
	return (
		<section className="services section" id="services">
			<h2 className="section__title">Utilize</h2>
			<span className="section__subtitle">How i use skill</span>
			
			<div className="services__container container grid">
				<div className="services__content">
					<div>
						<i className="uil uil-web-grid services__icon" />
						<h3 className="services__title">
							Frontend<br /> Development
						</h3>
					</div>
					
					<span className="services__button" onClick={ () => toggleTab(1) } >View More <i className="uil uil-arrow-right services__button-icon" /></span>
					
					<div className={ toggleState === 1 ? "services__modal active-modal" : "services__modal" }>
						<div className="services__modal-content">
							<i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0) } />
							
							<h3 className="services__modal-title">Frontend Development</h3>
							
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										웹 표준/웹 접근성을 준수한 HTML/CSS 코딩
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										원하는 UI를 컴포넌트 단위로 실용적으로 제작
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										폭 넓은 오픈소스 사용 및 커스터마이징 가능
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										React를 이용한 SPA 페이지 구현
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										Rest API를 사용한 Backend와 데이터송수신
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="services__content">
					<div>
						<i className="uil uil-arrow services__icon" />
						<h3 className="services__title">
							Backend<br /> Development
						</h3>
					</div>
					
					<span className="services__button" onClick={ () => toggleTab(2) }>View More <i className="uil uil-arrow-right services__button-icon" /></span>
					
					<div className={ toggleState === 2 ? "services__modal active-modal" : "services__modal" }>
						<div className="services__modal-content">
							<i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0) } />
							
							<h3 className="services__modal-title">Backend Development</h3>
							
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										Tomcat / Apache 서버 환경 설정
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										전자정부프레임워크를 이용한 웹사이트 제작
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										그누보드 웹사이트 제작 및 PHP 커스터마이징
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										Database 조작 및 마이그레이션
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										Rest API를 사용한 Frontend와 데이터송수신
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="services__content">
					<div>
						<i className="uil uil-edit services__icon" />
						<h3 className="services__title">
							Planning and<br/> Management
						</h3>
					</div>
					
					<span className="services__button" onClick={ () => toggleTab(3) }>View More<i className="uil uil-arrow-right services__button-icon" /></span>
					
					<div className={ toggleState === 3 ? "services__modal active-modal" : "services__modal" }>
						<div className="services__modal-content">
							<i className="uil uil-times services__modal-close" onClick={ () => toggleTab(0) }/>
							
							<h3 className="services__modal-title">Planning and Management</h3>
							
							<ul className="services__modal-services grid">
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										홈페이지 및 최신 트랜드 분석
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										요구사항분석 및 프로젝트 기획/설계
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										프로젝트 테스트 및 운영 관리
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										Git을 사용하여 협업 및 버전 관리
									</p>
								</li>
								
								<li className="services__modal-service">
									<i className="uil uil-check-circle service__modal-icon" />
									<p className="services__modal-info">
										검색엔진 최적화 및 애널리틱스 활용
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services;