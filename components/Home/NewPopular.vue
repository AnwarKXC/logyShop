<template>
	<section class="container grid gap-16 relative">
		<div class="cent gap-6">
			<NuxtImg
				v-for="i in 5"
				:key="i"
				src="https://s3-alpha-sig.figma.com/img/8090/fbb9/6ae3d647538f9358b251aab3b02a22d8?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilEala5ThbpkbUx10kD~cJh7Oz74PKj0CRRkCM64E7kUWkf4E5HiIYy-VvSXUkF4ApD2XbdKMk~O7mQsW5XJ4KrP2KDOdsqaL7AvzaT-7xzPt8onTiHmKcyXKsm2vGNrAmbgrs3zyE~gi6TzaSwd4mUxhFUq-DnnXPd5BwjYLAiHIBh2vpp4g-2kq0l2Co32c3t9lipgYphmwJGzDdkQQMKUmNFoezZg3ZLVHDqPLZZvJt3gf99ltgdeKNOQ1xlFYZd2zm2Zz9WBF2SvoCtQO00YOkii9Vr0ywDVHwmiQm2Cnsqm5Kk~z6g8jKjHY2dVREmYd39FC5OtQlhirvuptQ__"
				class="w-[150px] dark:invert" />
		</div>
		<div class="flex relative">
			<div class="orinating text-[34px]">Explore new and popular styles</div>

			<div class="grid grid-cols-4 grid-rows-2 gap-4">
				<template
					v-for="(i, index) in imageArr"
					:key="i.src">
					<div
						class="row-span-full col-span-2 aspect-square overflow-hidden"
						v-if="index === 0">
						<NuxtImg
							:src="i.src"
							class="size-full hover:scale-105 transition-all duration-1000 origin-top" />
					</div>
					<div
						v-else
						class="overflow-hidden">
						<NuxtImg
							:src="i.src"
							class="size-full hover:scale-110 transition-all duration-1000 hover:origin-top-left origin-top" />
					</div>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	const imageArr = [
		{
			src: "https://s3-alpha-sig.figma.com/img/6341/a226/f9d9d005d25dd5c0ac5bce699116fc7a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTVqidxYfdoW59qrL6XPgCF0veBvEQISk5zEc5YOwgQErpSOCQlSjFeOK-5ofgIjNq0g25knVNlnbvQE8oCbeRUsvEQXGuxBCiXGOyY7q6LTCMcopxF-LBbeS2h9YenAkKMFUMh-wPFSP-uZM96lWbJ1SNDNeOr-i4dnOk0l3xjwDRcudgklpcpVdOtshxFTYLrT3mQPFIFtwpADCpfm0pDRI0OcmR24QaGmON8Rbquqp-CobvgZcl8~m8G9oPvyD37P2yLQketvXVv0waCC4xlqfeATHY9BHe6AnBwWhKoX-M9D8jTsm8TwJgomk3s9M6hFeqFom0N7OsN5fw7wGw__",
		},
		{
			src: "https://s3-alpha-sig.figma.com/img/6f41/b41b/8da33a22ac4df682e8611d37c589aa8d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0F3-WKJlWtnEIYlFubiuHGYfbHN~TSKOfQk8xSzcdZLfzNb9aPx5LBsPcLrwf8KB-KfaX2t3cmS-AH765mVyg32h4bwE7U3X~Uzb9PYJcDdBYd-o-tEMI7iy1MfoPmH6XdqmLHSedmLThaJ7jaG88NauG7T2j99tmWrhraq6-fX-4tslhAhZWYx0i7baFcyjkC-AvGDwtZNxu10t~KLA58XHv6H2Vr8eaQGn1q2b3UxFMAKGMx290Hp4zXZetDigxtcb1Ai2oUg8MvRQdN3QHCa-shqR67ZEfThuK81DKh0DRgyGsNQXribzKUFIEfhsM3YAzQabz4Fv8NeKt~Hhg__",
		},
		{
			src: "https://s3-alpha-sig.figma.com/img/00ad/aefd/de3bf7c31966e6491968c6624691f180?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTxhezBnk8Ym4I4nrPVju-oFCvNRkJsawdaFtcaJYUgYb2VqcfrsrnaMVE9VnvLkGc4tEQATkf9BzdwvoD5FeTjYcHx2GZaL1bXHChVepORbv312pWKl5COhVQzaKYynv0udpxPgywm0xJ-8Hxeg9Yo7zHlulZNNh6TimmqQirx6adrQ06vnD1xqKGTZRq6R9PVLLoK~VrgtoDPj7VDV~WH~iMrTnhEg-quZBjNOwR628~wq2NW2Wxgoo~a9UL~vp1FVdKsuMjLzjqLgWXFJzA~u8MWkZgaex0xNvKkh55ZAEUuFyetUU18MYgwIQhY5RvPBlaaLb-buLwTSZU2eTQ__",
		},
		{
			src: "https://s3-alpha-sig.figma.com/img/545f/95cd/165a3345c9f91c12ab6be7a972cffd73?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBd552hV87-B-7Zp~amPAF3JbvT-Je4KYwEpznjzB0Hy7LQ3N7AMdUi8pLslubAecmL-9le8XXfMUjU1hYU8J3MjUaiVmwvN9sHOnVIkd72V5LQ1E5fWOnQayWHidDSuJW6bNcqTJMoO9v5MHr2MZsD6EdYnTlvbI3xNYAZsmvjA4ZRnIIskoGDsH6Jte6Eu0QXcXfrXiIzmY-7-eI7wy5CBCp7wJ56WW7xCbhybrncOJdXVR4985NiQVXKdXDcVl3ObenRUxawHqIKhbnsVhhIEmgUrloMTcEWKHUCrDCBf9c5fGOkNqLqmYNX0mRKb42ptVWoWzDs4vUFdlvxSLg__",
		},
		{
			src: "https://s3-alpha-sig.figma.com/img/aeed/7dfe/519adf0ed7e906616bd8e64b644cd5d0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nZpjfACSOdy5v9xmCf-w-5xCyaHE3VBmn5TSKw8UOsNR-sif3swTBYylyUDYGVab0~VgJriJeuTJcNUJX96us6x1sJj6YqlyOHQsSwNf1uI-212-oBiFRSVgcYuwmWlvlp0tcb4r54QEllow5UT0AfK88W6VDKIQPWdzaBSYuWUjWDWe14DfH-sEolqGBrwFV3W7a2r~0qwNO9hAybT7wIsAKWMWnvjAEwdTfVrw7swypjWj0njyUGVMmF6N1MujJFYgdTbHxF7V5bdO1oLrv5Wh04kdn0DGo9msrn6Wd5M2HolEi6VAIJMN3O2bwF3CNkRZJ3Sl1JqilfsTMLtNrw__",
		},
	]
</script>

<style scoped>
	.orinating {
		writing-mode: vertical-rl;
	}
</style>
