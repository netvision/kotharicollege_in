<script setup>
import img1 from '@/assets/23.jpg';
import img2 from '@/assets/24.jpg';
import img3 from '@/assets/25.jpg';
import img4 from '@/assets/26.jpg';
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-4">
		<div class="grid grid-cols-4 gap-3 m-5">
  			<div><img :src="img1" class="p-2 m-2 border-2" /></div>
  			<div><img :src="img2" class="p-2 m-2 border-2" /></div>
			<div><img :src="img3" class="p-2 m-2 border-2" /></div>
			<div><img :src="img4" class="p-2 m-2 border-2" /></div>
		</div>
        <p class="text-base md:text-lg text-justify pb-1">The college boasts of a fine, compact, and aesthetically designed building and well laid lawns. Easy availability of fresh ground water helps in the maintenance of lush green lawns guarded by majestic Ashoka trees. Adjacent to the college campus we have the playground where students involve themselves in sports and games activities. There is a well furnished and well-equipped Computer Lab. We receive twenty four hour running drinking water. Three water coolers meet the need of the students' drinking water. To ensure clean drinking water, R.O. Plant (water purifier) has also been installed. There is Multipurpose Hall which is used by the students for their co-curricular and extra-curricular activities. Besides, the hall is also used for conducting talks, seminars and conferences.</p>
    </div>
    <Footer />
</template>
