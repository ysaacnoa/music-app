<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-dark">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'fa-solid fa-angles-left':'fa-solid fa-arrow-right-to-bracket'"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          MUSIC APP
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @close-sidebar="handleCloseSidebar"
          @click="handleCloseSidebar"
        />
      </q-list>
    </q-drawer>
    <!-- <Banner/> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import Vue from 'vue';
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'fa fa-home',
    link: '/'
  },
  {
    title: 'Generos',
    icon: 'fa-solid fa-compact-disc',
    link: '/generos'
  },
  {
    title: 'Artistas',
    icon: 'fa fa-user',
    link: '/artistas'
  },
  {
    title: 'Canciones',
    icon: 'fa fa-music',
    link: '/canciones'
  },
  {
    title: 'Biblioteca',
    icon: 'fa-solid fa-book-open-reader',
    link: '/biblioteca'
  }
];

export default Vue.extend({
  name: 'MainLayout',
  components: { EssentialLink},
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      //boton darkmode
      isDarkMode: false,
    }
  },
  methods:{
    //cerrar sidebar
    handleCloseSidebar(){
    this.leftDrawerOpen = false;
    },
  },
});

</script>
