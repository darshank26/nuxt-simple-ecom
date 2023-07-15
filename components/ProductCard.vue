<template>
    <div class="card text-center">

        <img :src="products.image" alt="product thumb" class="thumb"/>

        <p class = "font-bold text-gray-500 m-4 truncate">{{ products.title }}</p>

         <NuxtLink :to="`/products/${products.id}`">
            <p class ="btn m-4 dark:text-white">View Details</p>
        </NuxtLink> 
        

    </div>
</template>

<script setup>

const {products} = defineProps(['products']);

</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>