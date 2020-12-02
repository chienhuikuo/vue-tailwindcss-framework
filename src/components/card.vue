<template>
    <div class="p-3 md:w-1/2 lg:w-1/3">
        <div class="card p-4 rounded-xl overflow-hidden bg-red-100 cursor-pointer group">
            <img src="https://lorempixel.com/400/300/animals" class="transform group-hover:scale-110 group-hover:filter-blur">
            <div class=" w-full py-4 absolute top-1/3 left-0 opacity-0 flex flex-col  justify-center items-center group-hover:bg-gray-800 group-hover:opacity-80">
                <h4 class="text-center text-white">{{cardTitle}}</h4>
                <p class="text-center text-white">{{cardDescription}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        cardTitle: {
            type: String,
            required: true
        },
        cardDescription: {
            type: String,
            required: true
        }
    }
       
}
</script>