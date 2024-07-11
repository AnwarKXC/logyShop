<template>
	<Teleport to="body">
		<Transition name="modal-outer">
			<div
				v-if="isVisible"
				class="modal">
				<Transition name="modal-inner">
					<div class="modal-content">
						<span
							class="close"
							@click="hideModal"
							>&times;</span
						>
						<slot />
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
	import { defineProps, defineEmits } from "vue";

	const props = defineProps({
		isVisible: {
			type: Boolean,
			required: true,
		},
	});

	const emit = defineEmits(["update:isVisible"]);

	function hideModal() {
		emit("update:isVisible", false);
	}
	watch(
		() => props.isVisible,
		(newValue) => {
			if (newValue) {
				emit("show");
			} else {
				emit("hide");
			}
		},
	);
</script>

<style>
	.modal {
		display: block;
		position: fixed;
		z-index: 1;
		inset: 0;
		backdrop-filter: blur(1px);
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal-content {
		background-color: #fefefe;
		margin: 15% auto;
		padding: 20px;
		border: 1px solid #888;
		width: 80%;
	}

	.close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
</style>
