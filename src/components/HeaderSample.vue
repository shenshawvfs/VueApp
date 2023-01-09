<script setup>
    // Vue 3 demo using the composition API
    // Triggered by the keyword setup in the script tag
    import { useAppInfoStore } from '@/stores/appInfo'

    defineProps({
        msg: { type: String, required: true }
    })

    const info = useAppInfoStore();

</script>
<template>

    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h4>{{ info.name }} {{ info.version }}</h4>
        <h3>
            You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
        </h3>
        <button @click="info.increment()">Add Version</button>
    </div>

</template>
<style scoped>

  h1 {
      font-weight: 500;
      font-size: 2.6rem;
      top: -10px;
  }

  h3 {
      font-size: 1.2rem;
      color:aliceblue;
  }

  .green {
      color: aliceblue;
  }

  .greetings h1,
  .greetings h3 {
      text-align: center;
  }

  @media (min-width: 1024px) {
      .greetings h1,
      .greetings h3 {
          text-align: left;
      }
  }
</style>
