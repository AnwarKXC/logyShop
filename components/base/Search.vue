<script setup lang="ts">
	import {
		Dialog,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
	} from "@/components/ui/dialog"

	const searchTerm = ref()
</script>

<template>
	<div>
		<Dialog>
			<DialogTrigger>
				<icon
					name="tabler:search"
					class="size-6 opacity-65 hover:opacity-100 hover:animate-bounce transition-all" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Search</DialogTitle>
				</DialogHeader>
				<div class="flex gap-5">
					<uiInput
						v-model="searchTerm"
						placeholder="Type what do you want to search for ..." />
					<uiButton>Search</uiButton>
				</div>
			</DialogContent>
		</Dialog>
	</div>
</template>

<style scoped></style>
