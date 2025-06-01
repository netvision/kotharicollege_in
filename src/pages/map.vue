<script setup>
import PDF from "pdf-vue3";
</script>

<template>
	<AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 class="text-2xl p-2 px-8">Building Map (Blue Print)</h2>
		<ul class="text-xl p-2 px-8">
			<PDF src="./map.pdf" />
		</ul>
    </div>
    <Footer />
</template>
