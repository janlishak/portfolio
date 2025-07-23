const ExperienceSection = () => {
	const experiences = [
		{
			role: 'MSc Computer Science (Robotics)',
			company: 'IT University of Copenhagen',
			period: '2023 – 2025',
			highlights: 'Specialization in robotics, parallel computing, machine learning, and game development',
		},
		{
			role: 'DevOps / Full Stack Engineer',
			company: 'Bluefaces s.r.o.',
			period: '2023 – 2025',
			highlights: 'Linux virtualization, DevOps, Proxmox, Docker, AWS cloud infrastructure, and full stack development',
		},
		{
			role: 'Erasmus Exchange – Cloud & Rendering',
			company: 'Liverpool John Moores University',
			period: '2022',
			highlights: 'Studied cloud systems, games, and real-time rendering',
		},
		{
			role: 'Full Stack Intern',
			company: 'Anasoft s.r.o.',
			period: '2021',
			highlights: 'Worked with Vue.js frontend, Android app in Java, Java backend, and software research',
		},
		{
			role: 'Makerspace Coordinator (Student Job)',
			company: 'VIA University Makerspace',
			period: '2020',
			highlights: 'Operated and maintained 3D printers, laser cutters, and CNC machines',
		},
		{
			role: 'BSc Software Engineering',
			company: 'VIA University',
			period: '2019 – 2023',
			highlights: 'Focused on backend development, software engineering principles, and software architecture',
		},
	];


	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Experience</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="max-h-96 overflow-y-auto pr-2 pl-4 space-y-5 custom-scrollbar">
					{experiences.map((exp, index) => (
						<div
							key={exp.company}
							className="relative -ml-2 opacity-0 animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="relative pl-4 border-l-2 border-gray-200">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />
								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900">{exp.role}</h4>
										<span className="text-sm text-gray-500">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600">{exp.company}</p>
									<p className="text-sm text-gray-600 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
