<template>
  <div class="p-8 bg-white text-1a">
    <h1 class="font-heading heading-1 text-6xl mb-16">Swell Scales test page</h1>

    <div class="grid grid-cols-3 gap-12">
      <div class="col-span-2">

        <div class="p-6 pb-8 bg-1 rounded mb-8">
          <h2 class="font-heading heading-1 text-4xl mb-4">Aliquam malesuada et augue netus curabitur nibh est fusce.
          </h2>
          <p class="font-paragraph text-1a text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <button class="bg-button text-white py-2 px-4 rounded hover:bg-button-hover transition-colors">
            Button with Hover
          </button>
          <a href="" class="text-1b ms-5">Link test</a>
        </div>

        <div class="p-6 pb-8 bg-2 rounded mb-8">
          <h2 class="font-heading text-2 text-4xl mb-4">Aliquam malesuada et augue netus curabitur nibh est fusce.</h2>
          <p class="font-paragraph text-2 text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <button class="bg-button text-white py-2 px-4 rounded hover:bg-button-hover transition-colors">
            Button with Hover
          </button>
          <a href="" class="text-1b ms-5">Link test</a>
        </div>

        <div class="bg-white p-6 pb-8 rounded text-1a brd-1a border-2 border-solid">
          <h2 class="font-heading heading-1 text-4xl mb-4">Aliquam malesuada et augue netus curabitur nibh est fusce.
          </h2>
          <p class="font-paragraph text-1a text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
          <button class="bg-button text-white py-2 px-4 rounded hover:bg-button-hover transition-colors">
            Button with Hover
          </button>
          <a href="" class="text-1b ms-5">Link test</a>
        </div>

      </div>
      <div class="col-span-1">

        <div class="mb-8">
          <h2 class="text-2xl mb-2 font-heading text-heading-1">Font Families</h2>
          <p class="text-xl font-heading text-1b bg-1 rounded p-4 mb-3 mt-4">
            <strong>Heading Font:</strong> {{ headingFontFamily }}
          </p>
          <p class="text-lg font-paragraph text-2 bg-2 rounded p-4 mb-4 mt-0">
            <strong>Paragraph Font:</strong> {{ paragraphFontFamily }}
          </p>
        </div>


        <div id="color-palette">

          <!-- Sezione Text Colors -->
          <h3 class="text-2xl mb-2 font-heading text-heading-1">Text Colors</h3>
          <div v-if="textColors && Object.keys(textColors).length" class="grid grid-cols-2 gap-4 mb-4">
            <div
              v-for="(color, name) in textColors"
              :key="name"
              class="p-2 brd-1b border-2 border-solid bg-white rounded mb-2"
            >
              <div :style="{ backgroundColor: color }" class="w-full h-12 rounded mb-1"></div>
              <p class="font-paragraph text-base">{{ name }}: {{ color }}</p>
            </div>
          </div>

          <!-- Sezione Background Colors -->
          <h3 class="text-2xl mb-2 font-heading text-heading-1">Background Colors</h3>
          <div v-if="bgColors && Object.keys(bgColors).length" class="grid grid-cols-2 gap-4 mb-4">
            <div
              v-for="(color, name) in bgColors"
              :key="name"
              class="p-2 brd-1b border-2 border-solid bg-white rounded mb-2"
            >
              <div
                v-if="name !== 'gradient-opacity'"
                :style="{ backgroundColor: color }"
                class="w-full h-12 rounded mb-1"
              ></div>
              <div
                v-if="name === 'gradient-opacity'"
                :style="{ backgroundImage: color }"
                class="w-full h-12 rounded mb-1"
              ></div>
              <p class="font-paragraph text-base">{{ name }}: {{ color }}</p>
            </div>
          </div>

          <!-- Sezione Button Colors -->
          <h3 class="text-2xl mb-2 font-heading text-heading-1">Button Colors</h3>
          <div v-if="buttonColors && Object.keys(buttonColors).length" class="grid grid-cols-2 gap-4 mb-4">
            <div
              v-for="(color, name) in buttonColors"
              :key="name"
              class="p-2 brd-1b border-2 border-solid bg-white rounded mb-2"
            >
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
        <p class="text-base font-paragraph text-1a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra sed diam nec tempor. Duis a tempus felis, nec placerat ligula. </p>
        <p class="text-5xl font-heading">text-5xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra sed diam nec tempor. Duis a tempus felis, nec placerat ligula. </p>
        <p class="text-4xl font-heading">text-4xl</p>
        <p class="text-base font-paragraph text-1a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra sed diam nec tempor. Duis a tempus felis, nec placerat ligula. </p>
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

    <!-- Test della palette di colori -->
    <h1 class="text-3xl mt-16 mb-8 font-heading text-1a">Color Palette Test</h1>
    <div class="space-y-4">
      <div class="bg-white p-4 rounded brd-1a border-2 border-solid">
        <p class="text-base inline-block me-4"><span class="text-1a">This is .text-1a on .bg-white</span><span class="ms-3 text-1b">This is .text-1b on .bg-white</span></p>
        <button class="inline-block bg-button text-white py-2 px-4 rounded hover:bg-button-hover transition-colors">
        Button with Hover
      </button>
      </div>
      <div class="bg-1 p-4 rounded text-1a">
        <p class="text-base inline-block me-4"><span class="text-1a">This is .text-1a on .bg-1</span><span class="ms-3 text-1b">This is .text-1b on .bg-1</span></p>
        <button class="inline-block bg-button text-white py-2 px-4 rounded hover:bg-button-hover transition-colors">
        Button with Hover
      </button>
      </div>
      <div class="bg-2 p-4 rounded text-2">
        <p class="text-base inline-block me-4">This is .text-2 on .bg-2</p>
        <button class="inline-block bg-button text-white py-2 px-4 rounded hover:bg-button-hover transition-colors">
        Button with Hover
      </button>
      </div>
    </div>

  </div>
</template>

<script>
import { fontFamily } from '../swell-scales/font-pairing/font-pairing-plugin';
import { selectedPalette } from '../swell-scales/color-palette/color-palette-plugin';

export default {
  name: 'TypographyScaleTest',
  data() {
    return {
      paragraphFontFamily: fontFamily.paragraph.fontfamily,
      headingFontFamily: fontFamily.heading.fontfamily,
      textColors: {},
      bgColors: {},
      buttonColors: {},
    };
  },
  mounted() {
    // Verifica che selectedPalette e colors siano definiti prima di accedere alle proprietà
    if (selectedPalette && selectedPalette.colors) {
      this.textColors = selectedPalette.colors['text-color'] || {};
      this.bgColors = selectedPalette.colors['bg-color'] || {};
      this.buttonColors = selectedPalette.colors['button-color'] || {};
    }
  },
};
</script>

<style scoped>
/* Aggiungi stili specifici al componente se necessario */
</style>
