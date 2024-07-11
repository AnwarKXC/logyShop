<template>
	<section class="container">
		<div class="heading1 text-center">New & Popular</div>
		<div class="justify-between items-center flex mt-8">
			<div class="cent gap-8">
				<div
					class="justify-center items-center flex"
					v-for="item in ['all products', 't-shirt', 'hoodies', 'jacket']">
					<NuxtLink
						:to="localeRoute(`/`)"
						class="hover:text-gold text-base font-['Open Sans'] capitalize">
						{{ item }}
					</NuxtLink>
				</div>
			</div>
			<div class="px-[15px] py-[5px] bg-gray-800 justify-start items-center gap-1 inline-flex">
				<div class="w-5 h-5 justify-center items-center flex">
					<div
						class="w-4 text-center text-white text-sm font-black font-['Font Awesome 6 Free']">
						
					</div>
				</div>
				<div class="text-white text-base font-normal font-['Open Sans'] capitalize">filter</div>
			</div>
		</div>
		<div class="products_section grid gap-8 gap-y-24 my-8">
			<BaseProductCard v-for="item in 9" />
		</div>
	</section>
</template>

<script setup lang="ts">
	const localeRoute = useLocaleRoute()
</script>

<style scoped>
	.products_section {
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	}
</style>
