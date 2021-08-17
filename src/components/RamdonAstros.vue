<template>
  <v-container>
  <h1 class="mt-7 mb-7" style="text-align:center">Ramdon Astro</h1>
  <v-row> 

   <v-col cols="12">

    <v-card style="margin-bottom:100px; border-radius: 50px"
    class="mx-auto rounded-20"
    max-width="700"
    
  >
    <v-img 
      :src=Dayastro.url
      height="auto">

    <v-card-title class="pt-16 brillant"  style="text-align:center; color:white; font-weight: bold;"  >
      {{Dayastro.title}}
    </v-card-title>

    </v-img>

    <v-card-actions>

      <v-btn class="rounded-r-xl" text>
        <v-card-subtitle style="font-weight: bold;">Explanation</v-card-subtitle>
      </v-btn>

      <v-spacer></v-spacer>
    
      <v-btn class="rounded-l-xl"
        
        @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    
    </v-card-actions>

   

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text style="font-weight: bold;">
         {{Dayastro.explanation}}
        </v-card-text>
      </div>
    </v-expand-transition>
     </v-card>
    </v-col>
  </v-row>
 </v-container>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import {useStore} from "vuex"
export default {

    data: () => ({
      show: false,
    }),


    setup(){
         const store = useStore();
         onMounted(()=>{
            store.dispatch("getRamdonAstro");
         })

         const Dayastro = computed(()=>{
            return  store.state.astroRamdon
        })
       
        return {Dayastro};
    }
}
</script>

<style>

</style>