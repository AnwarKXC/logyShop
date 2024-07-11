<script setup>
	const localeRoute = useLocaleRoute()
</script>

<template>
	<section class="bg-gray-600/5 dark:bg-dark relative">
		<NuxtImg
			class="absolute right-0 bottom-[10%] w-36 dark:invert"
			src="/svgs/hero-vector-right.svg"
			alt="hero" />

		<div class="grid lg:grid-cols-5 items-center container z-10">
			<div class="font-roboto col-span-3 grid gap-10">
				<div class="text-[74px] font-light capitalize leading-[55px]">Collections</div>
				<div class="text-2xl font-normal capitalize leading-[55px]">
					you can explore ans shop many differnt collection from various barands here.
				</div>
				<div
					class="w-fit h-[72px] px-[26px] py-[19px] bg-gray-800 justify-center items-center gap-2 inline-flex">
					<div class="w-[30px] h-[30px] justify-center items-center flex">
						<div
							class="w-6 text-center text-white text-2xl font-black font-['Font Awesome 6 Free']">
							
						</div>
					</div>
					<div class="text-white text-[29px] font-normal capitalize">shop now</div>
				</div>
			</div>
			<div class="col-span-2 mx-12 -mt-6 z-50">
				<div class="relative rtl:scale-x-[-1]">
					<div
						class="rounded-tl-[250px] rounded-br-[250px] drop-shadow-xl overflow-hidden aspect-[2/3]">
						<NuxtImg
							class="size-full drop-shadow-xl"
							src="https://s3-alpha-sig.figma.com/img/84e5/e4e1/aface229c12297e58b87543cabf3a82c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJmSenBDqI2S0oS5UYa2Fkh3t-Asq-lwVq22~KBpxuUroyeQdO1hSrXFDbG1H4kdeVI8ow~SbufL2tihQQVn0DVHgBn7OKcB0oN3ydXZPlBOBCJeqz-Ok~-rMYPAJ2t5IzMxr1F2R46CU32XuNlYAMrFiCe6ZHWoidVQBs1BF2P4ArV82XcSl9CVA3piXa6rHw5EyEHaBND4-SNG93~Zsht-UtbfWxBclPpT6aBMbO~dgvBNkh0fCTH9WOLH8eYaPTGRxuLh6sO52Pn2157AqKMc0p18L2ezqCZ6WaxXi-fgzT148pVOKgX3kQn4a4pmsqeJQ8L0GSYgR5Bebdpqwg__"
							alt="hero" />
					</div>
					<div
						class="absolute top-6 left-6 size-full border-2 rounded-tl-[250px] rounded-br-[260px] border-gray-400 dark:border-gold opacity-50 z-[-1]"></div>
				</div>
			</div>
		</div>
		<NuxtImg
			class="absolute left-0 top-[10%] w-32 dark:invert"
			src="/svgs/hero-vector-left.svg"
			alt="hero" />
	</section>
</template>

<style scoped>
	.contact__grid {
		grid-template-columns: repeat(auto-fill, minmax(270px, 350px));
	}
</style>
