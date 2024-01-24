<template >
  <div class="q-pa-md q-gutter-sm q-mx-md" v-if="hasSongInfo">
    <q-banner rounded class="bg-grey-10 q-pa-lg">
      <template v-slot:avatar>
        <img
          :src="song.artist.picture_big"
          class="q-ma-md"
          style="width: 280px; height: 250px;border-radius: 5px;"
        >
      </template>
      <div class=" q-gutter-md ">
        <div class="row justify-between">
          <q-parallax
            :src="song.album.cover_xl"
            style="width: 100%; height: 250px; border-radius: 5px; "
            >
            <template slot:content="scope">
              <section 
              class="column q-pa-lg q-ml-lg text-white" 
              style="width: 100%;"
              >
                <span class="text-h4 text-weight-bold overflow-ellipsis" >{{ song.artist.name }}</span>
                <span class="q-pb-md overflow-ellipsis">Lo mejor de {{ song.artist.name }}</span>
                <span class="text-h4 text-weight-bold overflow-ellipsis">{{ song.title }}</span>
                <span class="text-h5 text-weight-bold overflow-ellipsis">{{ song.album.title }}</span>
                <article class="q-mt-lg">
                  <!-- <q-chip :selected.sync="paused"
                  class="q-pa-md bg-positive" 
                  text-color="white" 
                  icon="fa-solid fa-circle-play">
                    {{paused ? 'Pausado' : 'Escuchando'}}
                  </q-chip> -->
                  <q-chip :selected.sync="follow" 
                  class="q-pa-md q-mb-xs bg-positive"
                  text-color="white" 
                  icon="fa-solid fa-user-plus">
                    {{follow ? 'Siguiendo' : 'Seguir'}}
                  </q-chip>
                </article>
              </section>
            </template>
              
          </q-parallax>

        </div>
      </div>
      

      
    </q-banner>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Track} from '../types/types'

export default Vue.extend({
  name:'Banner',
  props: {
    currentSong: {
      type: Object as () => Track,
      required: true,
    }
  },
  data() {
    return {
      follow: false,
      paused: false,
      song: {
        title:'There\s Nothing Holdin\' Me Back',
        artist:{
          name: 'Shawn Mendes',
          picture_big: 'https://e-cdns-images.dzcdn.net/images/artist/7432efa1fc1d9a1c5a7049512792b9fc/500x500-000000-80-0-0.jpg'
        },
        album:{
          title:'Illuminate (Deluxe)',
          cover_xl: 'https://e-cdns-images.dzcdn.net/images/cover/35d5f7dd0b398bb37287b3454f0b05b9/1000x1000-000000-80-0-0.jpg'
        }
      } as Track,
    };
  },
  computed: {
    hasSongInfo(): boolean {
      // Verifica si currentPreview no está vacío
      return Object.keys(this.song).length > 0;
    }
  },
  watch: {
    currentSong(newValue:Track) {
      this.song = newValue;
    }
  },
})

</script>

<style scoped>
.overflow-ellipsis {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>