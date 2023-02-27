<template>
    <figure>
        <figcaption>🔊 Listen</figcaption>
        <audio
            controls
            :src="source">
                <a :href="source">
                    Download audio
                </a>
        </audio>
    </figure>
</template>
<script>
export default {
  name: 'MyAudio',
  props: {
    source: {
      type: String,
      required: true
    }
  }
}
</script>