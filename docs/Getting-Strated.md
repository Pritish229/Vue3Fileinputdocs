# vue3-fileinput

A Vue 3 file input component with drag-and-drop support.

## Installation

```bash
npm install vue3-fileinput
```

## Usage

### Local Registration

```vue
<template>
  <Vue3Fileinput v-model="uploadedFile" />
</template>

<script setup>
import { ref } from "vue";
import Vue3Fileinput from "vue3-fileinput";
import "vue3-fileinput/dist/vue3-fileinput.css";

const uploadedFile = ref(null);
</script>
```

### Global Registration

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import Vue3Fileinput from "vue3-fileinput";
import "vue3-fileinput/dist/vue3-fileinput.css";

const app = createApp(App);
app.component("Vue3Fileinput", Vue3Fileinput);
app.mount("#app");
```



```vue
<template>
  <Vue3Fileinput
    v-model="uploadedFile"
    :fileType="['image/png', 'image/jpeg']"
    :maxSize="5 * 1024 * 1024"
    placeholder="Drop your file here"
    helperText="Max size: 5MB"
  />
</template>

<script setup>
import { ref } from "vue";

const uploadedFile = ref(null);
</script>
```



## Note

```vue
<Vue3Fileinput v-model="uploadedFile" />
```

::: tip Note
Ensure you import the CSS file:

```javascript
import Vue3Fileinput from "vue3-fileinput";
import "vue3-fileinput/dist/vue3-fileinput.css";
```

:::




