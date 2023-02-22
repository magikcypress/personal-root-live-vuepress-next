<template>
    <video id="video" autoplay="true" controls="controls" poster="/img/cat.jpg"></video>
</template>
  
<script>
  import Hls from 'hls.js';
  
  export default {
    mounted() {
      let hls = new Hls();
      let stream = "https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8";
      let video = document.getElementById('video');
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        console.log('manifest loaded, found ' + data.levels.length + ' quality level');
        video.play();
      });
      hls.loadSource(stream);
      hls.attachMedia(video);
    },
  };
</script>
