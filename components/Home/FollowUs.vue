<template>
	<section class="bg-gray-600/5 dark:bg-dark ">
		<div class="flex flex-col justify-center items-center gap-[10px] ">
			<h2 class="text-[32px] font-bold leading-[36px]">Follow Us</h2>
			<div class="grid grid-cols-2 gap-8  mt-8">
				<div
					class="fb-page"
					data-href="https://www.facebook.com/profile.php?id=100083273744429"
					data-tabs="timeline"
					data-width="500"
					data-height="356"
					data-small-header="true"
					data-adapt-container-width="true"
					data-hide-cover="false"
					data-show-facepile="true"></div>

				<div
					class="fb-group"
					data-href="https://www.facebook.com/groups/1906603669483476"
					data-tabs="timeline"
					data-width="500"
					data-height="300"
					data-small-header="true"
					data-adapt-container-width="true"
					data-hide-cover="false"
					data-show-facepile="true"></div>
				<div class="">
			
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	onMounted(() => {
		const script = document.createElement("script")
		script.src = "https://www.instagram.com/embed.js"
		script.async = true
		document.body.appendChild(script)
	})
</script>

<style scoped></style>
