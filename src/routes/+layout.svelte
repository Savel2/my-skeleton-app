<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';

	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
</script>



<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
		<svelte:fragment slot="lead">
			<a href="/">
			<strong class="p-16 text-4xl">NS</strong>
		   </a>
	   </svelte:fragment>
		
		<svelte:fragment slot="trail">
			<a href="/about">
			<strong class="p-2 text-sm">about</strong>
		   </a>
		   <a href="https://savel2.github.io/cv_pdf/Nievierov_Savelii_CV.pdf" target="_blank">
			<strong class="p-2 text-sm">résumé</strong>
		   </a>
		   <a href="/passion">
			<strong class="p-2 text-sm">passion</strong>
		   </a>
		   <a href="mailto:saveliinievierov@gmail.com">
			<strong class="p-2 text-sm">contact</strong>
		   </a>
		</svelte:fragment>
		</AppBar></svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">
		<div style="border-bottom: 1px solid #0bd08f; margin-bottom: 30px;"></div>	
		<div class="container mx-auto p-8 space-y-2 flex flex-row justify-between">
			<div>
				<p>SAY HELLO</p>
		
				<a href="mailto:saveliinievierov@gmail.com" class="no-underline hover:underline text-sm">saveliinievierov@gmail.com</a>
				<br>
				<a href="https://t.me/savnev" class="no-underline hover:underline text-sm">t.me/savnev</a>
			</div>
			<div>
				<br>
				<a href="https://www.linkedin.com/in/savnev/" class="no-underline hover:underline text-sm">LN</a>
				<br>
				<a href="https://github.com/Savel2" class="no-underline hover:underline text-sm">GH</a>
			</div>

	</svelte:fragment>
	<!-- (footer) -->
</AppShell>