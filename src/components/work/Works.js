import React from 'react';
import { projectsData } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
	return (
		<div className="work__container container grid">
			{ projectsData.map( (item, idx) => {
				return <WorkItems item={item} key={idx} />
			} ) }
		</div>
	);
}

export default Works;