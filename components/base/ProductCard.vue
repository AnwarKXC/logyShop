<template>
	<div class="w-full h-[478px] flex-col justify-start items-center gap-[18px] inline-flex">
		<div
			class="self-stretch group grow relative shrink basis-0 flex-col justify-center items-center flex">
			<NuxtImg
				class="min-w-[280px] w-full max-w-96 mx-auto h-[400px]"
				src="https://s3-alpha-sig.figma.com/img/3cac/8188/ed8947320d61598763ced4028331d3b9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8J2tEa8HQPcmLx6tR0j5C~JehQ5MkjHg~ftUKD4rXsSkCSQ1qpFRXJB2acmV2GGA8hRke4v-AVd8l-xTYH1AEdr5TxuUmwTD9JuFNuX8Ge5xXje2iUWQQhKPbPDS0kYhVriDdwmmhpT2u2CR0Wl6xzOFMJehjzsiAYOEUe1Lvv0nM47zFT0H32hgg3JfgZcJasSYl8Z1n99x4CeDgI4DS0UqMdzYFbciAJNJpZN53hG6V3OEL7vFU6B5AmC7IjKPsUN44xUuncHpPBlTyhKy9sWqJXkgLcClJGX0Ds-sn9HHOjoGdVgPZHxlxvhrIrhyTNuTdLBI8qvxgnIltQt3w__" />
			<NuxtLink
				to="/dewd"
				class="absolute inset-0 bg-black/20 items-center justify-center duration-500 opacity-0 group-hover:opacity-100 flex">
				<div
					class="bg-gold text-dark font-['Cairo'] font-semibold px-10 translate-y-40 py-3 capitalize group-hover:scale-100 scale-0 duration-1000 group-hover:translate-y-20">
					add
				</div>
			</NuxtLink>
		</div>
		<NuxtLink
			:to="localeRoute(`/`)"
			class="w-[292px] h-[60px] relative">
			<div
				class="left-0 top-[38px] absolute text-base font-normal font-['Open Sans'] capitalize">
				Dress
			</div>
			<div
				class="left-[241px] top-[38px] absolute text-right text-base font-semibold font-['Open Sans'] capitalize">
				$63.85
			</div>
			<div class="left-0 top-0 absolute text-base font-semibold font-['Open Sans'] capitalize">
				Adicolor Classics Joggers
			</div>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	const localeRoute = useLocaleRoute()
</script>

<style scoped></style>
