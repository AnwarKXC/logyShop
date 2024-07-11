<template>
	<NuxtLink
		:to="localeRoute('/')"
		class="mx-auto flex items-center gap-2 justify-center">
		<NuxtImg
			src="/svgs/logo-vector.svg"
			class="w-8 dark:invert"
			alt="logo" />
		<span class="sevillana-regular text-3xl whitespace-nowrap text-gold">Logy Shop </span>
		<NuxtImg
			src="/svgs/logo-vector.svg"
			class="w-8 dark:invert"
			alt="logo" />
	</NuxtLink>
</template>

<script setup lang="ts">
	import { useDark } from "@vueuse/core"
	const isDark = useDark()
	const localeRoute = useLocaleRoute()
</script>

<style scoped></style>
