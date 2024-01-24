<template>
  <q-item
    clickable
    tag="a"
    @click="navigateToLink"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    
    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods:{
    navigateToLink():void{
      const fullPath = this.link.startsWith('/') 
      ? this.link : `/${this.link}`;

      //verificar que la ruta actual sea diferente a la ruta a la que se quiere ir
      if(this.$route.path !== fullPath){
        this.$router.push(fullPath).catch(err => {
          console.error(err);
        })
      }else{
        this.$emit('close-sidebar')
      }
    }
  }
});

</script>
