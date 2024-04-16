<template>
  <div id="app">
    <UiKit/>
  </div>
</template>

<script>
import UiKit from './components/UiKit.vue';

export default {
  name: 'App',
  components: {
    UiKit
  },
  data() {
    return {
      fontFamily: null
    };
  },
  async mounted() {
    try {
      const fontChoice = await import('./swell-scales/font-pairing/fontChoice.json');
      const fontFamily = await import(`./swell-scales/font-pairing/pairing-list/${fontChoice.chosenPair}`);
      this.fontFamily = fontFamily;
      // Se vuoi aggiungere il font al documento
      const link = document.createElement('link');
      link.href = fontFamily.fontUrl;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    } catch (error) {
      console.error('Failed to load font configuration:', error);
    }
  }
}
</script>
