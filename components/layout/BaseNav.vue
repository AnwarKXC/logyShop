<script setup lang="ts">
	const { start } = useLoadingIndicator()
	start()
	const navItems = ref<
		{
			label: string
			url: string
		}[]
	>([
		{
			label: "nav.home",
			url: "/",
		},
		{
			label: "About us",
			url: "/About",
		},
		{
			label: "Services",
			url: "/About",
		},
		{
			label: "Blogs",
			url: "/About",
		},
		{
			label: "Jobs",
			url: "/About",
		},
		{
			label: "Contact Us",
			url: "/About",
		},
	])

	const localeRoute = useLocaleRoute()
</script>

<template>
	<header class="relative bg-gray-600/5 dark:bg-primary">
		<div class="py-3 grid grid-cols-3 gap-8 container items-center">
			<div class="gap-12 flex items-center">
				<BaseSearch />
				<BaseModeSwitcher />
				<BaseLangSwitcher />
			</div>
			<Logo />
			<div class="flex items-center gap-4 justify-end">
				<div class="flex items-center gap-4">
					<span></span>
					<span>Cart</span>
				</div>
				<div class="flex items-center gap-4">
					<span></span>
					<span>Account</span>
				</div>
			</div>
		</div>
		<div class="container h-[0px] border border-gray-400 dark:border-gold opacity-50"></div>
		<nav class="cent py-3">
			<ul class="cent gap-12">
				<NuxtLink
					v-for="item in navItems"
					:key="item.label"
					:to="localeRoute(item.url)">
					{{ $t(item.label) }}
				</NuxtLink>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
	.router-link-active {
		@apply text-gold;
	}
</style>
