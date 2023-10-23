<script>
	import JobBlock from '/Users/savchik/my-skeleton-app/src/lib/components/JobBlock.svelte';
  
	let jobs = [
	  {
		date: '2021 - 2023',
		jobTitle: 'Project Manager – DRIM',
		description: 'Managed drim platform rebranding. Implemented new payment methods, took care of registration and onboarding.  ',
		skills: 'Stakeholder Management • REST API • SEO • UX • SQL',
	  },
	  {
		date: '2021 - 2021',
		jobTitle: 'Project Manager – Gridnine Systems',
		description: 'Managed Lunda website redesign. ',
		skills: 'Project Delivery • Atlassian • UX • Figma',
	  },
	  {
		date: '2018 - 2020',
		jobTitle: 'Co-founder – PSS',
		description: 'Established an portable battery sharing system. Built MVP',
		skills: ' Product Delivery • Customer Development • Scrum • Negotiation',
	  },
	];
		let otherExperience = [
		{
		date: '2022 - 2023',
		jobTitle: 'Volunteer - Yasnosvit',
		description: 'Coordinated the collection of essential supplies for over 100 Ukrainian children in London, Berlin. ',
		skills: 'Organisational skill • Wix • Notion',
		},
		{
		date: '2020 - 2021',
		jobTitle: 'Intern Product - HelpResource',
		description: 'Managed internal CRM automatisation and optimisation.',
		skills: 'Customer Development • Miro • Product Delivery',
		}, 
		{
		date: '2018 - 2023',
		jobTitle: 'Events',
		description: 'Succesfully organised few events for friends of friends.',
		skills: 'Event Planning & Execution',
		},
	];
  </script>

<div class="container mx-auto p-24 space-y-16 max-w-4xl">
	<h1 class="h1">About</h1>
	<p>Hi, I'm Sava. I enjoy driving complex projects to successful completion. 
		Experienced in managing diverse software products, including influencer 
		marketing platform, e-commerce platform, CRM, and customer-facing web 
		applications. My goal is simple: to consistently encourage high quality 
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
		Agile frameworks • Scrum • Project Delivery • Stakeholder Management 
		• REST API • Postman • Python • Svelte • HTML • Customer Development  
		• UX • Jira • Confluence • Excel • Miro • Figma • Slack • Notion 
	</p>
	</div>