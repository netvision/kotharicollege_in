<script setup>
import st1 from '@/assets/st-1.jpeg'
import st2 from '@/assets/st-2.jpeg'
import st3 from '@/assets/st-3.jpeg'
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
		<img :src="st1" /><br />
		<img :src="st2" /><br />
    <img :src="st3" />
    </div>
    <Footer />
</template>
