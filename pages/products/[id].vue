<template>
    <div>
        <Head>
            <Title>Nuxt Simple Ecom | {{ products.title }}</Title>
            <Meta name="description" :content="products.description"/>
        </Head>
      <ProductDeatail :products="products"/>
    </div>
</template>

<script setup>

const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id 

//fetch the product 

const {data : products } = await useFetch(uri)

if(!products.value)
{
    throw createError({statusCode: 404, statusMessage : "Page Not Found"})
}
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