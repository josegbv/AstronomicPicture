<template>
<v-container>
  <h1 class="mt-7 mb-7" style="text-align:center">Ramdon Astro</h1>
  <astro :astro="ramdon"/>
</v-container>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import {useStore} from "vuex";
import Astro from '../components/Astro.vue';
export default {
  
components: { Astro },

    data: () => ({
      show: false,
    }),


    setup(){
         const store = useStore();
         onMounted(()=>{
            store.dispatch("getRamdonAstro");
         })

         const ramdon = computed(()=>{
            return  store.state.RamdonAstro
        })    
      
        return {ramdon};
    }
}

</script>


<style>

</style>