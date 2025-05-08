import React from 'react';

import Project1 from '../../assets/projects/project1.jpg';
import Project2 from '../../assets/projects/project2.jpg';
import Project3 from '../../assets/projects/project3.jpg';
import Project5 from '../../assets/projects/project5.jpg';

import { ProjectSingle } from './ProjectSingle';
import { ProjectText } from './ProjectText';

const projects = [
	{
		name: 'projecto 1',
		year: 'May 2024',
		align: 'right',
		img: Project1,
		link: '#',
	},
	{
		name: 'projecto 2',
		year: 'Augost 2024',
		align: 'left',
		img: Project2,
		link: '#',
	},
	{
		name: 'projecto 3',
		year: 'Octover 2024',
		align: 'right',
		img: Project3,
		link: '#',
	},
	{
		name: 'projecto 4',
		year: 'Dicember 2024',
		align: 'left',
		img: Project5,
		link: '#',
	},
];

export const ProjectMain = () => {
	return (
		<div className=" px-4 max-w-[1200px]  mx-auto ">
			<ProjectText />

			<div className="flex flex-col gap-20 mt-12 max-w-[900px] mx-auto ">
				{projects.map((item, index) => {
					return (
						<ProjectSingle
							key={index}
							name={item.name}
							year={item.year}
							align={item.align}
							img={item.img}
							link={item.link}
						/>
					);
				})}
			</div>
		</div>
	);
};
