<template>
    <div>
        <div class ="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :products="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout : 'products'
})


// fetching the products 

const {data : products} = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>
 h2{
    margin-bottom: 20 px;
    font-size: 40px;
 }

 p{
    margin: 20px 0;
 }

</style>