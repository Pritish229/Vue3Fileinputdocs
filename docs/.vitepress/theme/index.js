import DefaultTheme from "vitepress/theme";
import Vue3Fileinput from "./components/Vue3Fileinput.vue"; // ✅ Ensure this path is correct
import "vue3-fileinput/dist/vue3-fileinput.css"; // ✅ Import the required CSS

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Vue3Fileinput", Vue3Fileinput);
  },
};
