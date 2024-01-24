
<template>
  <section class="q-mx-sm">
    <div class="q-my-md q-pb-sm">
      <span class="q-ml-xl text-h4 text-weight-bold "> Los <span class="text-positive">Generos</span> mas escuchados: </span>
    </div>
    
    <section class="q-ma-sm row justify-evenly q-gutter-lg">
      <q-card v-for="(gender, index) in genres"
        :key="gender.id"
        class="my-card text-white row items-center justify-center q-ma-sm"
        :style="{ background: `radial-gradient(circle, ${cardColors[index]} 0%, ${darkenColor(cardColors[index])} 100%)` }"
        style="width: 250px; height:150px;"
      >
        <q-card-section>
          <div class="text-h6">{{gender.name}} {{ emojis[index] }}</div>
        </q-card-section>

      </q-card>
    </section>
  </section>
  
</template>

<script lang="ts">
import Vue from 'vue'
import { Genre,getAllGendersByIds } from '../services/getGender'

export default Vue.extend({
  name: 'Generos',
  components: {},
  data(){
    //array manual para obtener todos los generos|| no hay un metodo por API, el call solo se puede individual
    return  {
      genres: [] as Genre[],
      genderIds :['0','132','116','122','152','113','165','85','106','466','144','129','98','464','173','169','498','153','71','197','75','2','16','81','95'],
      cardColors: ['#F5CB5C', '#F4743B', '#70AE6E', '#483C46', '#337aff', '#CFF27E', '#33ffbb', '#E2A0FF', '#264653', '#F37748', '#35a2ff', '#ff5733', '#419D78', '#ff33d4', '#547AA5', '#FFC1CF', '#33ffbb', '#B0DB43', '#E2A0FF', '#F72585', '#4D4730', '#ff5733', '#ECC30B', '#4361EE', '#337aff', '#F61067'],
      emojis: ['🎵', '🎤', '🎧🎤', '🎶💃', '🤘🎸', '💃🕺', '🎶❤️', '🔄🎸', '⚡🎹', '🌿🎻', '🇯🇲🎶', '🎷🎶', '🎻🎼', '🤘🔥', '🎮🎬', '🎷🕺', '🇨🇴', '🎸💙', '💃🇨🇴', '🌎🎶', '🇧🇷🎵', '🌍🎶', '🌏🎵', '🇮🇳🎶', '👶🎶'],
    }
  },
  async created(){
    try {
      // Llama a la función para obtener los géneros
      this.genres = (await getAllGendersByIds(this.genderIds))
      console.log(this.genres);
      
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    darkenColor(color: string): string {
      return `${color}99`; // Agregamos '99' para disminuir la opacidad al 60%
    }
  }
});

</script>