<template>
  <q-page>
    <header >
      <q-input 
        rounded 
        outlined 
        class=" q-ma-lg q-ml-xl"
        style="max-width: 300px; width: auto;"
        color="positive"
        v-model="searchQuery" 
        placeholder="Shawn Mendes" 
        @keyup.enter="searchByArtist"
        >
        <template v-slot:append>
          <q-icon name="fa-solid fa-magnifying-glass" color="positive" />
        </template>
      </q-input>
      <Banner :current-song="currentPreview"/>
    </header>
    <footer>
      <FooterPage :current-preview="currentPreview"/>
    </footer>
    <router-view />
    <section v-show="isHomePage" class="row justify-evenly">
      <CardMusic 
      v-for="song in songs"
      :key="song.id"
      :songs="song"
      @play-song="playSongHandler"
    />
    </section>
  </q-page>
</template>

<script lang="ts">

import Vue from 'vue';
import Banner from 'src/components/Banner.vue';
import CardMusic from 'src/components/CardMusic.vue';
import FooterPage from 'src/components/FooterPage.vue';
import {searchMusic}  from '../services/searchMusic';
import {Track} from '../types/types'
import {Genre} from '../services/getGender'
import { Route } from 'vue-router';
export default Vue.extend({
  name: 'PageIndex',
  components: { Banner, CardMusic, FooterPage},
  computed: {
    isHomePage():boolean {
      // Verifica si la ruta actual es '/'
      return (this.$route as Route).path === '/';
    },
  },
  data(){
    return{
      searchQuery: '',
      songs: Array<Track>(),
      currentPreview: {} as Track,
      genders: Array<Genre>()
    }
  },
  async created(){
    await this.searchByArtistDefault();
  },
  methods:{
    async searchByArtistDefault() {
      // Realizar búsqueda inicial
      this.searchQuery = 'shawn mendes';
      await this.searchByArtist();
      this.searchQuery = '';
    },
    async searchByArtist() {
      try {
        const result = await searchMusic(this.searchQuery);
        console.log('Resultado de la búsqueda:', result.data);
        this.songs = result.data;
      } catch (error) {
        console.error('Error al realizar la búsqueda:', error);
      }
    },
    playSongHandler(previewUrl:Track) {
      this.currentPreview = previewUrl;
    },
  },
  watch: {
    genderData: {
      handler(newVal: Genre[]) {
        // Verifica si genderData no está vacío
        if (newVal && newVal.length > 0) {
          this.genders = newVal;
        }
      },
      immediate: true,
    },
  },
});

</script>
