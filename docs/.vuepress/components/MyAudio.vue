<template>
    <figure>
        <figcaption>🔊 Listen</figcaption>
        <audio
            controls
            src="resolve_source_url(source_src)">
                <a href="resolve_source_url(source_src)">
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
  },
  methods: {
    resolve_source_url: function (path) {
      let audio = require.context('../archives/', false, /\.mp3$/)
      return audio("./"+path)
    }
  }
}
</script>