<template>
	<section class=" bg-gradient-to-t  from-gold parallax-container h-[75vh]"></section>
</template>

<script setup lang="ts"></script>

<style scoped>

.parallax-container {
  position: relative;
  overflow: hidden;
  background-image: url('https://s3-alpha-sig.figma.com/img/6393/662a/d662685c1fd4744541198822233aacaa?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDX8vdvm~wWNOevVeuHW8FAi02gd2Xz4bkHhXkPcp4dFfHkMi3DOpD3aZf9nyuPwdhyJAY~X0tCJw4YoMIOCrsXuu4Wo6~lyBZSBCxodqIjA2WYQ5HoA51GxS5o3yzojuJC9rSLwmsBSK5A-lsTvLenDoXKdx52NQ2dfs6~XEW-9lwAMPcIgE6pomi4tkmnz64IMV2YQvFdcB7Jzqx7klsK6zSsJKZeVKFHQOvt-4DwlMuB891thlLipkdUbWaJiLZ3SeIVk0bD0-V9SnFKAhcR5gSnDRFwi6LOl5M~TSo8Nszxbgc7oxxsyaxqsromkpTabZCDsJI6qA8cGv3tKOw__');
  /* Replace with your background image */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
		clip-path: polygon(0 20%, 100% 0%, 100% 80%, 0% 100%);
}
.parallax-container::after {
	content: "";
	position: absolute;
	inset: 0;
	opacity:.5;
	background-color: #1E2832;
}

</style>
