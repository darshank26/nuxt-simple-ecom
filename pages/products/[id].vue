<template>
    <div>
        <h2>  {{  products.title  }}</h2>
        <p>  {{ products.id  }}    </p>
        <p> $ {{ products.price  }}    </p>
        <p> {{ products.description  }}    </p>

      
    </div>
</template>

<script setup>

const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id 

//fetch the product 

const {data : products } = await useFetch(uri)

definePageMeta({
    layout : 'products'
})

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