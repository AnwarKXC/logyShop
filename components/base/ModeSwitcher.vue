<script setup lang="ts">
	import { useDark, useToggle } from "@vueuse/core"

	const isDark = useDark()
	const toggleDark = useToggle(isDark)

	const icon = computed(() => (isDark.value ? "" : "solar:moon-linear"))
</script>

<template>
	<div
		class="w-[60px] h-[28px] bg-dark dark:bg-yellow-50 rounded-full flex items-center px-2 cursor-pointer transition-all ease-in-out"
		@click="toggleDark(!isDark)">
		<TransitionGroup name="list">
			<span
				class="rounded-full size-8 flex items-center justify-start text-foreground transition-all  dark:translate-x-7 dark:rtl:-translate-x-7  duration-300"
				>
				<Icon
					name="solar:sun-2-linear"
					class="dark:text-yellow-600 dark:!block !hidden text-base" />
				<Icon
					name="solar:moon-linear"
					class="text-white dark:!hidden text-base" />
			</span>
		</TransitionGroup>
	</div>
</template>

<style scoped>
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
	}
</style>
