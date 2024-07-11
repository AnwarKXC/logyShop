<script setup lang="ts">
	import { useWindowScroll } from "@vueuse/core"

	const { y } = useWindowScroll()

	function scroll() {
		const start = window.scrollY
		const end = y.value > 700 ? 0 : document.body.scrollHeight
		const duration = 2000 // Duration in milliseconds

		let startTime: number | null = null

		function animateScroll(currentTime: number) {
			if (startTime === null) startTime = currentTime
			const timeElapsed: number = currentTime - startTime
			const progress = Math.min(timeElapsed / duration, 1)

			window.scrollTo(0, start + (end - start) * easeInOutQuad(progress))

			if (progress < 1) {
				requestAnimationFrame(animateScroll)
			}
		}

		function easeInOutQuad(t: number) {
			return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
		}

		requestAnimationFrame(animateScroll)
	}
</script>

<template>
	<div
		class="bg-white drop-shadow-lg text-primary w-14 h-14 rounded-full fixed cursor-pointer bottom-14 end-14 hover:bg-plazaGreen transition-all center z-30 grid place-items-center hover:bg-accent hover:!text-background"
		@click="scroll">
		<Icon
			name="solar:arrow-up-linear"
			class="text-3xl text-dark animate-bounce font-bold transition-all -mb-1"
			:class="{ 'rotate-180': y < 300 }" />
	</div>
</template>

<style></style>
