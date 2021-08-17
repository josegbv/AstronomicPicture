<template>

 <p style="color:white; text-align:center">Astronomics Picture</p>


    <v-card style="margin-bottom:100px; border-radius: 50px; background:black"
    class="mx-auto rounded-20"
    max-width="700"   
  >
    <v-img v-if="astro.url" 
      :src= astro.url 
      height="auto">

    <v-card-title class="pt-16 brillant"  style="text-align:center; color:white; font-weight: bold;"  >
      {{astro.title}}
    </v-card-title>

    </v-img>

    <v-img v-else
      src="../assets/loading3.gif"
      height="auto">

    <v-card-title class="pt-16 brillant"  style="text-align:center; color:white; font-weight: bold;"  >
      {{astro.title}}
    </v-card-title>

    </v-img>

    <v-card-actions class="gradientPurple">

      <v-btn block class="rounded-r-xl gradientPurple" text   @click="show = !show">>
        <v-card-subtitle style="font-weight: bold; color:white">Explanation</v-card-subtitle>

         <v-icon style="color:white" >{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

   

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text style="font-weight: bold; color:white">
             <p style="color:white; text-align:center; font-size:0.7rem">Date: {{astro.date}}</p><br>
         {{astro.explanation}}
        </v-card-text>
      </div>
    </v-expand-transition>
     </v-card>

     
 
</template>

<script>
export default {
    data: () => ({
      show: false,
    }),
    props: ['astro'],

   
}
</script>

<style>

</style>