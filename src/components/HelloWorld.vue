<template>
<div class="container mx-auto border-rose-700 border-2 p-3 lg:p-6 dark:bg-black">
    <div>
      <h1 class=" text-gray-500 my-3 text-center dark:text-white">h1文字</h1>
      <h2 class="text-gray-500 my-3 text-center dark:text-white">h2文字</h2>
      <h3 class="text-gray-500 my-3 text-center dark:text-white">h3文字</h3>
      <h4 class="text-gray-500 my-3 text-center tablet:text-yellow">h4文字</h4>
      <h5 class="text-gray-500 my-3 text-center">h5文字</h5>
      <p class="text-gray-500 my-3 text-center">p文字</p>
    </div>
    <div class="flex flex-wrap justify-center md:justify-start">
      <card v-for="i in cards" :key="i.id" :cardTitle="i.title" :cardDescription="i.desc"></card>
    </div>
    
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  name: 'HelloWorld',
  data () {
    return {
      cards: [
        {
          id: '01',
          title: 'card1',
          desc: 'this is card1'
        },
        {
          id: '02',
          title: 'card2',
          desc: 'this is card2'
        },
        {
          id: '03',
          title: 'card3',
          desc: 'this is card3'
        }
      ]
    }
  },
  components: {
		card
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
