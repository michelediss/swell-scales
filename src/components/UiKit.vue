<template>
  <div class="p-6 space-y-6">
    <section>
      <h1 class="font-heading text-5xl text-primary-700">Titolo Principale</h1>
      <p class="font-paragraph text-base text-secondary-500">Questo è un paragrafo di testo per dimostrare la tipografia secondaria.</p>
    </section>

    <section>
      <h2 class="font-primary text-4xl text-gray-600">Palette di Colori</h2>
      <div class="flex flex-wrap">
        <div v-for="color in colorList" :key="color.name" class="p-4">
          <div :style="{ backgroundColor: color.hex }" class="w-24 h-24"></div>
          <p class="text-center mt-2 font-secondary">{{ color.name }}</p>
        </div>
      </div>
    </section>

    <section>
      <h2 class="font-primary text-3xl text-primary-500">Responsive Typography</h2>
      <div class="space-y-4">
        <div v-for="(size, name) in fontSizeScale" :key="name" :class="`font-primary text-${name}`">
          {{ name }}: <span>{{ size }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StyleGuideComponent',
};
</script>

<style scoped>
/* Add additional styles if necessary */
</style>
