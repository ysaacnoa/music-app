<template>
  <q-footer v-if="hasCurrentPreview" elevated class="bg-brand">
    <q-toolbar class="q-pa-none">
      <header class=" row" style="flex-wrap: nowrap;">
      <div v-if="currentPreview && currentPreview.album">
        <img :src="song.album.cover_medium" 
        alt="mountains"
        style="width: 120px; height: 100px;">
      </div>
      <section v-if="currentPreview && currentPreview.artist" class=" column q-pl-sm justify-center overflow-ellipsis-section" >
        <span class="text-weight-bold overflow-ellipsis ">{{song.title}}</span>
        <span class="text-weight-light overflow-ellipsis" style="font-size: 12px;">{{song.artist.name}}</span>
        <span class="text-weight-light overflow-ellipsis" style="font-size: 12px;">{{ song.album.title }}</span>
      </section>
      </header>
      
      
    </q-toolbar>
    <section class="row">
        <div  style="min-width: 400px; width: auto; margin-right: 4rem;">
        <q-media-player
          type="audio"
          background-color="grey-9"
          :source="song.preview"
          :autoplay="true"
          dense
        />
      </div>
      </section>
  </q-footer>
</template>

<script lang="ts">
import Vue from 'vue'
import {Track} from '../types/types'
export default Vue.extend({
  name: 'FooterPage',
  props: {
    currentPreview: {
      type: Object as () => Track,
      required: true
    }
  },
  data(){
    return{
      volume: 6,
      audio: new Audio(),
      isPlaying: false,
      song: {} as Track,
    }
  },
  computed: {
    hasCurrentPreview(): boolean {
      // Verifica si currentPreview no está vacío
      return Object.keys(this.currentPreview).length > 0;
    }
  },
  watch: {
    // Observa cambios en la prop 'currentPreview'
    currentPreview(newValue:Track) {
      console.log('currentPreview cambió. Nuevo valor:', newValue);
      this.song = newValue;
    }
  },
})

</script>

<style scoped>
.bg-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #292828;
}
.overflow-ellipsis-section {
  max-width: 200px;
  flex-shrink: 1;
}
.overflow-ellipsis {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media screen and (max-width: 1100px) {
  .overflow-ellipsis-section span {
    display: none;
  }
}
</style>