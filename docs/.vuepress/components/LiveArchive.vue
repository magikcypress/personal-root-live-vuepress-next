<template>
    <video id="video" autoplay="true" controls="controls" poster="/img/cat.jpg" :src="source"></video>
</template>
<script>
export default {
  name: 'LiveArchive',
  props: {
    source: {
      type: String,
      required: true
    }
  }
}
</script>