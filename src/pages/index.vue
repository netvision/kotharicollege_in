<script setup>
	import slide from '@/assets/building.jpeg';
	import slide1 from '@/assets/building.jpg';
	useHead({
		title: 'Kothari Mahila Mahavidyalay, Mandrella',
	});
	onMounted(async () => {
		const { Carousel, initTWE } = await import("tw-elements");
		initTWE({ Carousel });
		});
</script>

<template>
	<AppHeader />
	<div
		id="carouselExampleCaptions"
		class="relative max-w-7xl mx-auto h-[700px]"
		data-twe-carousel-init
		data-twe-ride="carousel">
		<!--Carousel indicators-->


		<!--Carousel items-->
		<div
			class="relative w-full h-[700px] overflow-hidden after:clear-both after:block after:content-['']">
			<!--First item-->
			<div
			class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
			data-twe-carousel-active
			data-twe-carousel-item
			style="backface-visibility: hidden">
			<img
				:src="slide"
				class="block w-full object-cover"
				alt="..." />

			</div>
			<div
			class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
			data-twe-carousel-active
			data-twe-carousel-item
			style="backface-visibility: hidden">
			<img
				:src="slide1"
				class="block w-full object-cover"
				alt="..." />

			</div>

		</div>

		<!--Carousel controls - prev item-->
		<button
			class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
			type="button"
			data-twe-target="#carouselExampleCaptions"
			data-twe-slide="prev">
			<span class="inline-block h-8 w-8">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6">
				<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
			</span>
			<span
			class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>Previous</span
			>
		</button>
		<!--Carousel controls - next item-->
		<button
			class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
			type="button"
			data-twe-target="#carouselExampleCaptions"
			data-twe-slide="next">
			<span class="inline-block h-8 w-8">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6">
				<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
			</span>
			<span
			class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>Next</span
			>
		</button>
		</div>
	<Footer />
</template>

<route lang="yaml">
name: home
</route>
