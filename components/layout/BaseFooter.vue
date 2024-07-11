<script setup lang="ts">
	const socials = ref([
		{
			icon: "ri:facebook-fill",
			url: "https://www.facebook.com/yourpage",
		},
		{
			icon: "tabler:brand-instagram",
			url: "https://www.facebook.com/yourpage",
		},
		{
			icon: "tabler:brand-whatsapp",
			url: "https://www.facebook.com/yourpage",
		},
		{
			icon: "tabler:phone-call",
			url: "https://www.facebook.com/yourpage",
		},
	]);
	const localeRoute = useLocaleRoute();

	const currentYear = ref(new Date().getFullYear());

const isModalVisible = ref(false);

function showModal() {
  isModalVisible.value = true;
}

function updateModalVisibility(value: boolean) {
  isModalVisible.value = value;
}

function disableScroll() {
  document.body.classList.add('no-scroll');
}

function enableScroll() {
  document.body.classList.remove('no-scroll');
}

onMounted(() => {
  window.addEventListener('beforeunload', enableScroll);
});

onUnmounted(() => {
  window.removeEventListener('beforeunload', enableScroll);
});
</script>

<template>
	<footer class="bg-gray-300/5">
		<div class="container">
			<div class="grid md:grid-cols-4 gap-8 py-8">
				<div class="md:col-span-2">
					<div class="w-64">
						<Logo />
					</div>
				</div>
				<div class="grid gap-6">
					<div class="flex gap-6">
						<nuxt-link
							:to="localeRoute('/terms')"
							class="hover:text-primary font-semibold transition-all">
							{{ $t("terms&Conditions") }}
						</nuxt-link>
					</div>
				</div>
				<div class="grid gap-6">
					<div class="flex gap-6">
						<nuxt-link
							:to="localeRoute('/terms')"
							class="hover:text-primary font-semibold transition-all">
							{{ $t("terms&Conditions") }}
						</nuxt-link>
					</div>
				</div>
			</div>
			<hr class="opacity-10" />
			<div
				class="text-center flex flex-wrap gap-8 gap-y-4 items-center justify-around md:justify-between py-4">
				<div class="">
					<p>
						{{ $t("nav.copyright") }} &nbsp;{{ currentYear }}&nbsp;{{
							$t("nav.rightsReserved")
						}}
					</p>
					<p class="font-serif pt-1">
						{{ $t("developed") }} &nbsp;
						<abbr :title="$t('nav.contact')">
							<button
								@click="showModal"
								class="text-gold underline"
								href="mailto:anwark.gmail.com">
								{{ $t("AnwarKamal") }}
							</button></abbr
						>
					</p>
				</div>
				<div class="flex gap-6">
					<nuxt-link
						:to="localeRoute('/terms')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("termsConditions") }}
					</nuxt-link>
					<nuxt-link
						:to="localeRoute('/privacy-policy')"
						class="hover:text-primary font-semibold transition-all">
						{{ $t("PrivacyPolicy") }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</footer>
	<Modal
		:isVisible="isModalVisible"
		@update:isVisible="updateModalVisibility">
		<p>This is the modal content.</p>
	</Modal>
</template>

<style scoped></style>
