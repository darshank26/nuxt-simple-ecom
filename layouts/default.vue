<template>
<div>

<header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            
        <ul class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white  flex items-center gap-8">
            <li ><NuxtLink to ="/" class="heading" >Nuxt Simple Ecom</NuxtLink></li>
            <li><NuxtLink to ="/" >Home</NuxtLink></li>
            <li><NuxtLink to ="/about" >About</NuxtLink></li>
            <li><NuxtLink to ="/products" class="btn">Product</NuxtLink></li>
        </ul>
    </div>

       
    </nav>
</header>



<div class="container mx-auto p-4">
    <slot/>

</div>

</div>
</template>

<style scoped>

.router-link-exact-active{
    color : rgb(255, 112, 112)
}
.heading{
    color : #ffffff
 
}
</style>
