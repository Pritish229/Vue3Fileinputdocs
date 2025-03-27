

## Selected File Event

You Have to use `ref="your_component_variable"` for use any Predefined Methods.

Please check the `console.log()` after click Fatch File button.
<ClientOnly>
  <Vue3Fileinput ref="uploadedFile" v-model="form.image" :maxSize="5 * 1024 * 1024" helperText="Max size Upload: 5MB" style="margin-top:20px;" />

  <button style="border:1px solid #3451b2 ; padding:8px; border-radius:5px; color:#3451b2;" @click="getfile"> Fatch File </button>
</ClientOnly>


```vue
<template>
  <Vue3Fileinput ref="uploadedFile"
    v-model="form.image"
    :fileType="['image/png', 'image/jpeg']"
    :maxSize="5 * 1024 * 1024"
    placeholder="Drop your file here"
    helperText="Max size Upload: 5MB"
  />
</template>

<script setup>
import { ref } from "vue";

const form = ref({
    image : null,
    preview : null,
})

const uploadedFile = ref(null);
const file = ref(null);

const getfile = () =>{
    file.value = uploadedFile.value.selectedFile;
    console.log(file.value);
}


</script>
```



<ClientOnly>
  <Vue3Fileinput ref="previewUploader" v-model="form.preview" :maxSize="5 * 1024 * 1024" helperText="Max size Upload: 5MB" style="margin-top:20px;" />
  <button style="border:1px solid rgb(52, 178, 90) ; padding:8px; border-radius:5px; color:rgb(52, 178, 90) ;" @click="setPreview"> Set Preview </button>
</ClientOnly>




<script setup>
import { ref } from "vue";

const form = ref({
    image : null
})

const uploadedFile = ref(null);
const previewUploader = ref(null);
const file = ref(null);

const getfile = () =>{
    file.value = uploadedFile.value.selectedFile;
    console.log(file.value);
}

const setPreview = () =>{
    previewUploader.value.preview = '';
    previewUploader.value.preview = 'https://loremflickr.com/200/200?random=3';
}

</script>

