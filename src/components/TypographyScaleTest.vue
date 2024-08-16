<template>
  <div class="p-8 bg-1a text-1a">
    <h1 class="font-heading heading-1 text-6xl mb-16">Swell Scales test page</h1>

    <div class="grid grid-cols-3 gap-12">
      <div class="col-span-2">

        <div class="p-6 pb-8 bg-1b rounded mb-8">
          <h2 class="font-heading text-1a text-4xl mb-4">Aliquam malesuada et augue netus curabitur nibh est fusce.
          </h2>
          <p class="font-paragraph text-1b text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <button class="btn-bg text-white py-2 px-4 rounded transition-colors">
            Button with Hover
          </button>
          <p class="text-1c ms-5 inline">Link test</p>
        </div>

        <div class="p-6 pb-8 bg-2 rounded mb-8">
          <h2 class="font-heading text-2 text-4xl mb-4">Aliquam malesuada et augue netus curabitur nibh est fusce.</h2>
          <p class="font-paragraph text-2 text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <button class="btn-bg text-white py-2 px-4 rounded transition-colors">
            Button with Hover
          </button>
          <p class="text-2 ms-5 inline">Link test</p>
        </div>

        <div class="bg-1a p-6 pb-8 rounded border-2 border-1b border-solid">
          <h2 class="font-heading text-1a text-4xl mb-4">Aliquam malesuada et augue netus curabitur nibh est fusce.
          </h2>
          <p class="font-paragraph text-1b text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <button class="btn-bg text-white py-2 px-4 rounded transition-colors">
            Button with Hover
          </button>
          <p class="text-1c ms-5 inline">Link test</p>
        </div>

      </div>
      <div class="col-span-1">

        <div class="mb-8">
          <h2 class="text-2xl mb-2 font-heading text-heading-1">Font Families</h2>
          <p class="text-lg font-heading text-1b bg-1b rounded p-4 mb-3 mt-4">
            <strong>Heading Font:</strong> {{ headingFontFamily }}
          </p>
          <p class="text-base font-paragraph text-2 bg-2 rounded p-4 mb-4 mt-0">
            <strong>Paragraph Font:</strong> {{ paragraphFontFamily }}
          </p>
        </div>

        <div id="color-palette">

          <!-- Sezione Text Colors -->
          <h3 class="text-2xl mb-2 font-heading text-heading-1">Text Colors</h3>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div v-for="(color, name) in textColors" :key="name"
              class="p-2 brd-1b border-2 border-solid bg-1a rounded mb-2">
              <div :style="{ backgroundColor: color }" class="w-full h-12 rounded mb-1"></div>
              <p class="font-paragraph text-base">{{ name }}: {{ color }}</p>
            </div>
          </div>

          <!-- Sezione Background Colors -->
          <h3 class="text-2xl mb-2 font-heading text-heading-1">Background Colors</h3>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div v-for="(color, name) in bgColors" :key="name"
              class="p-2 brd-1b border-2 border-solid bg-1a rounded mb-2">
              <div v-if="name !== 'gradient-opacity'" :style="{ backgroundColor: color }"
                class="w-full h-12 rounded mb-1"></div>
              <div v-if="name === 'gradient-opacity'" :style="{ backgroundImage: color }"
                class="w-full h-12 rounded mb-1"></div>
              <p class="font-paragraph text-base">{{ name }}: {{ color }}</p>
            </div>
          </div>

          <!-- Sezione Button Colors -->
          <h3 class="text-2xl mb-2 font-heading text-heading-1">Button Colors</h3>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div v-for="(color, name) in buttonColors" :key="name"
              class="p-2 brd-1b border-2 border-solid bg-1a rounded mb-2">
              <div :style="{ backgroundColor: color }" class="w-full h-12 rounded mb-1"></div>
              <p class="font-paragraph text-base">{{ name }}: {{ color }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-4xl mt-16 mb-8 font-heading text-1a">Typographic Scale</h1>

    <!-- Visualizzazione della scala tipografica divisa in due colonne -->
    <div class="grid grid-cols-2 gap-4">
      <!-- Colonna per Heading -->
      <div class="space-y-4 bg-1 p-6 rounded">
        <p class="text-6xl font-heading">text-6xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer viverra sed diam nec tempor. Duis a tempus felis, nec
          placerat ligula. Sed nulla enim, pharetra sit amet consectetur non, imperdiet nec nulla. Proin lacinia sapien
          quis placerat facilisis.</p>
        <p class="text-5xl font-heading">text-5xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer viverra sed diam nec tempor. Duis a tempus felis, nec
          placerat ligula. Sed nulla enim, pharetra sit amet consectetur non, imperdiet nec nulla. Proin lacinia sapien
          quis placerat facilisis.</p>
        <p class="text-4xl font-heading">text-4xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer viverra sed diam nec tempor. Duis a tempus felis, nec
          placerat ligula. Sed nulla enim, pharetra sit amet consectetur non, imperdiet nec nulla. Proin lacinia sapien
          quis placerat facilisis.</p>
        <p class="text-3xl font-heading">text-3xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra sed diam nec tempor. Duis a tempus felis, nec placerat ligula. </p>
        <p class="text-2xl font-heading">text-2xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra sed diam nec tempor. Duis a tempus felis, nec placerat ligula. </p>
        <p class="text-xl font-heading">text-xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra sed diam nec tempor. Duis a tempus felis, nec placerat ligula. </p>
      </div>
      <!-- Colonna per Paragraph -->
      <div class="space-y-4 bg-1 p-6 pt-10 rounded">
        <p class="text-lg font-paragraph text-1a"><span
            class="text-sm rounded uppercase block text-2 bg-2 p-2 inline-block mb-2">text-lg</span><br> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer viverra sed diam nec tempor. Duis a tempus felis, nec
          placerat ligula. Sed nulla enim, pharetra sit amet consectetur non, imperdiet nec nulla. Proin lacinia sapien
          quis placerat facilisis.</p>
        <p class="text-base font-paragraph text-1a"><span
            class="text-sm rounded uppercase block text-2 bg-2 p-2 inline-block mb-2">text-base</span><br> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer viverra sed diam nec tempor. Duis a tempus felis, nec
          placerat ligula. Sed nulla enim, pharetra sit amet consectetur non, imperdiet nec nulla. Proin lacinia sapien
          quis placerat facilisis.</p>
        <p class="text-sm font-paragraph text-1a"><span
            class="text-sm rounded uppercase block text-2 bg-2 p-2 inline-block mb-2">text-sm</span><br> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer viverra sed diam nec tempor. Duis a tempus felis, nec
          placerat ligula. Sed nulla enim, pharetra sit amet consectetur non, imperdiet nec nulla. Proin lacinia sapien
          quis placerat facilisis.</p>
        <p class="text-xs font-paragraph text-1a"><span
            class="text-sm rounded uppercase block text-2 bg-2 p-2 inline-block mb-2">text-xs</span><br> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer viverra sed diam nec tempor. Duis a tempus felis, nec
          placerat ligula. Sed nulla enim, pharetra sit amet consectetur non, imperdiet nec nulla. Proin lacinia sapien
          quis placerat facilisis.</p>
      </div>
    </div>

      <!-- Sezione per visualizzare la palette completa -->
      <h1 class="text-4xl mt-16 mb-8 font-heading text-1a">Color Scheme</h1>
    <div v-for="(tones, colorName) in fullPalette" :key="colorName" class="mb-8">
      <h2 class="text-2xl mb-4 font-heading text-heading-1">{{ colorName }}</h2>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="(color, tone) in tones" :key="tone" class="p-2 border-2 border-solid rounded">
          <div :style="{ backgroundColor: color }" class="w-full h-16 rounded mb-2"></div>
          <p class="font-paragraph text-base">{{ tone }}: {{ color }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { fontFamily } from '../swell-scales/font-pairing/font-pairing-plugin';
import { getSelectedPalette } from '../swell-scales/color-generator/color-assignment';
import colorScheme from '../swell-scales/color-generator/color-scheme.json';



export default {
  name: 'TypographyScaleTest',
  data() {
    return {
      paragraphFontFamily: fontFamily.paragraph.fontfamily,
      headingFontFamily: fontFamily.heading.fontfamily,
      textColors: {},
      bgColors: {},
      buttonColors: {},
      fullPalette: {}
    };
  },
  mounted() {
    const selectedPalette = getSelectedPalette();
    console.log('Selected Palette:', selectedPalette);

    if (selectedPalette) {
      this.textColors = selectedPalette['text-color'] || {};
      this.bgColors = selectedPalette['bg-color'] || {};
      this.buttonColors = selectedPalette['button-color'] || {};

      console.log("Text Colors:", this.textColors);
      console.log("Background Colors:", this.bgColors);
      console.log("Button Colors:", this.buttonColors);
    } else {
      console.error("Palette not loaded correctly");
    }

    if (Object.keys(this.textColors).length === 0) {
      console.warn("No text colors found!");
    }
    if (Object.keys(this.bgColors).length === 0) {
      console.warn("No background colors found!");
    }
    if (Object.keys(this.buttonColors).length === 0) {
      console.warn("No button colors found!");
    }
    this.fullPalette = colorScheme;
  },
};
</script>

<style scoped>
/* Aggiungi stili specifici al componente se necessario */
</style>
