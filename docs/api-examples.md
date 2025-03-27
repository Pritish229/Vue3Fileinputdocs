

## Api Example



<ClientOnly>
  <Vue3Fileinput ref="previewUploader"  :maxSize="5 * 1024 * 1024" helperText="Max size Upload: 5MB" style="margin-top:20px;" />
</ClientOnly>

```javascript
 Api Example
{
   "type":"cors",
   "url":"https://fastly.picsum.photos/id/1/400/300.jpg?hmac=IEz4gAs8hxV4d9YLVH7Eha48-M-MmGD1Cc2l-V92rPc",
   "redirected":true,
   "status":200,
   "ok":true
}

```



```vue
<template>
  <Vue3Fileinput ref="previewUploader"
    v-model="form.image"
    :fileType="['image/png', 'image/jpeg']"
    :maxSize="5 * 1024 * 1024"
    placeholder="Drop your file here"
    helperText="Max size Upload: 5MB"
  />
</template>


<script setup>
import { ref , onMounted } from "vue";

const previewUploader = ref(null);

const getfile = async() =>{
    const response = await fetch('https://picsum.photos/id/1/400/300')
      previewUploader.value.preview = response.url;  
      
}

onMounted(() =>{
    getfile()
})

</script>
```





<script setup>
import { ref , onMounted } from "vue";

const previewUploader = ref(null);

const getfile = async() =>{
    const response = await fetch('https://picsum.photos/id/1/400/300')
      previewUploader.value.preview = response.url;      
      console.log(response);
}

onMounted(() =>{
    getfile()
})

</script>
