<script>
	import JobBlock from '../../lib/components/jobblock.svelte';
  
	let jobs = [
		{
  		date: '2025 - Now',
  		jobTitle: 'Delivery Manager – Standing on Giants – London',
  		description: 'Managing delivery of enterprise-scale community platform projects for clients such as Tesco Bank, AWS, Lenovo, E.ON, Lebara, Utilita. Responsible for tech roadmap planning, Incident Management, Security & Vulnerability processes, and acting as the main POC across Support Portals.',
  		skills: 'Delivery Management • Community Platforms • Agile • Stakeholder Management • Incident Management • Jira'
	},
	{
		date: '2023 - 2025',
		jobTitle: 'Project Manager – Xanda Digital Agency - London',
		description: 'Managed multiple client-facing website development projects, ensuring timely delivery within scope and budget, maintaining strong client relationships, and identifying upselling opportunities  ',
		skills: 'Client Interaction • Stakeholder Management • Sales • UX • Jira',
	  },
	  {
		date: '2021 - 2023',
		jobTitle: 'Scrum Master – DRIM - Remote',
		description: 'Managed drim platform rebranding. Implemented new payment methods, managed API integration projects, enforced Agile principles as a Scrum Master, and took care of registration and onboarding  ',
		skills: 'Stakeholder Management • REST API • SEO • UX • SQL',
	  },
	  {
		date: '2021 - 2021',
		jobTitle: 'Project Manager – Gridnine Systems',
		description: ' Managed a website redesign project for Lundagrossisten, developed and managed product backlog, and collaborated with stakeholders to define requirements ',
		skills: 'Project Delivery • Jira • Confluece • UX • Figma',
	  },
	  {
		date: '2018 - 2020',
		jobTitle: 'Co-founder – Zaryadka Startup',
		description: 'Founded and managed an IT startup focused on portable battery sharing. Led the full project management process, coordinated the development team',
		skills: ' Product Delivery • Stakeholder Management • Scrum • Negotiation',
	  },
	];
		let otherExperience = [
		{
		date: ' 2023   -   2023',
		jobTitle: 'Project Manager - Link Group - Warsaw',
		description: 'Optimised websites for performance, UX, and search visibility through HTML, SEO, and security reviews while ensuring accessibility compliance and cross-browser responsiveness ',
		skills: 'SEO • Scrum • Jira',
		},	
		{
		date: '2022 - 2023',
		jobTitle: 'Volunteer - Yasnosvit',
		description: 'Coordinated the collection of essential supplies for over 100 Ukrainian children in London, Berlin. Developed a charity website for the project ',
		skills: 'Organisational skill • Wix • Notion',
		},
		{
		date: '2020 - 2021',
		jobTitle: 'Intern Product Manager- HelpResource',
		description: 'Managed internal CRM automatisation and optimisation, conducted customer development interviews, and prepared detailed documentation for upcoming features',
		skills: 'Customer Development • Miro • Product Delivery',
		}, 

	];
  </script>

<div class="container mx-auto p-8 space-y-16 max-w-4xl md:p-24">
	<h1 class="h1">About</h1>
	<p>Hi, I'm Sava. I enjoy driving complex projects to successful completion. 
		Experienced in managing diverse software products, including community platforms, influencer 
		marketing platform, e-commerce platform, and customer-facing web 
		applications. PMP and PSM certified with expertise in project management best practices and methodologies. 
		My goal is simple: to consistently encourage high quality 
		development that continuously grows and improves based on user metrics. </p>
	<p>Work Experience</p>
	{#each jobs as { jobTitle, ...job} (jobTitle)}
		<JobBlock
		jobTitle={jobTitle}
		{...job}
	/>
	{/each}

	<p>Side Projects</p>
	{#each otherExperience  as { jobTitle, ...job} (jobTitle)}
		<JobBlock
		jobTitle={jobTitle}
		{...job}
	/>
	{/each}
	<p>Skills / Tools</p>
	<p>
		Agile frameworks • Scrum • Project Delivery • Stakeholder Management •
		Client Interaction • REST API • Postman • Python • Svelte • HTML • SEO
		UX • Jira • Confluence • Excel • Miro • Figma • Slack • Notion • Sales
	</p>
	</div>