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
			<strong class="text-xl">ns</strong>
		   </a>
	   </svelte:fragment>
		
		<svelte:fragment slot="trail">
			<a href="/">
			<strong class="text-xl">about</strong>
		   </a>
		   <a href="/">
			<strong class="text-xl">résumé</strong>
		   </a>
		   <a href="/">
			<strong class="text-xl">passion</strong>
		   </a>
		   <a href="mailto:saveliinievierov@gmail.com.com">
			<strong class="text-xl">contact</strong>
		   </a>
		</svelte:fragment>
		</AppBar></svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>