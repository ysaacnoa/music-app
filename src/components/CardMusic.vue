<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-cards q-pa-xs" 
      style="width: 210px; height: 270px;"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      >
      <q-card-section style="height: 100%; ">
        <section class="relative-position">
          <img :src="songs.album.cover_medium" style="width: 100%; height: 100%;" class="rounded-borders">
          <q-btn
            v-if="isHovered"
            @click="playSong"
            round
            icon="fa-solid fa-play"
            color="positive"
            class="absolute-bottom-right q-mr-sm q-mb-md"
          />
        </section>
      
        <section style="max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <p class="text-h6 q-mt-sm q-mb-xs"
            style="font-size: 1.20rem; line-height: 1.2; overflow: hidden; text-overflow: ellipsis;"  
          >
            {{ songs.title }} 
          </p>
          <p
          class="q-ma-none"
          style="font-size: 12px; overflow: hidden; text-overflow: ellipsis;"
          >{{songs.album.title}} 
          </p>
        </section>

      </q-card-section>
      
    </q-card>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {Track} from '../types/types'
export default Vue.extend({
  name: 'CardMusic',
  components: { },
  props:{
    songs: {
      type: Object as () => Track,
      required: true
    }
  },
  data(){
    return{
      isHovered: false,
    }
  },
  methods:{
    playSong() {
      this.$emit('play-song', this.songs);
      console.log('informacion desde cardMusic: ',this.songs);
      
    },
  }
})

</script>
