<template>
    <div class="card">

        <div class="grid grid-cols-2 gap-10">
                <div class="p-7">
                <img :src="products.image" alt="product image" class="mx-auto my-7"/>
                </div>
                <div class="p-7">
                    <h2 class="text-4xl my-7">{{ products.title }}</h2>
                    <p class="text-xl my-7">Price - ${{ products.price }}</p>
                    <p class="font-bold border-b-2 mb-4 pb-2">Descripion</p>
                    <p class="mb-7">{{ products.description }}</p>
                    <button class="btn flex">
                        <i class = "material-icons mr-2 ">add_shopping_cart</i>
                        <span class ="font-bold text-white">Add to cart</span>
                    </button>

                    </div>
                </div>
            </div>


</template>

<script setup>

const {products} = defineProps(['products']);

</script>

<style scoped>

.img{
    max-width: 400px;
}
.material-icons { color: #ffffff; }

</style>