<script setup>
import staff1 from '@/assets/staff-1.jpg'
import staff2 from '@/assets/staff-2.jpg'
</script>
<template>
    <AppHeader />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
		<img :src="staff1" /><br />
		<img :src="staff2" />
    </div>
    <Footer />
</template>
