<template>
    <figure>
        <figcaption>🔊 Listen</figcaption>
        <audio
            controls>
                <a href="">
                    Download audio
                </a>
        </audio>
    </figure>
</template>
<script>
export default {
  name: 'MyAudio',
  props: {
    source_src: String
  }
</script>
