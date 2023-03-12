<template>
    <h1><code>{{ currentStream }}</code></h1>
    <video-player :options="playerOptions" />
</template>
  
<script>
import '@videojs/http-streaming';
import 'video.js/dist/video-js.css';
import { VideoPlayer } from '@videojs-player/vue';

export default {
  name: 'live',
  components: {
    VideoPlayer
  },
  data() {
    return {
      initialized: false,
      useNetworkInformationApi: true,
      currentStream: '',
      archiveSteam: '',
      srcLive: '',
      streams: {
        hls: ''
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,
        sourceOrder: true,
        textTrackSettings: false,
        nativeVideoTracks: true,
        textTrackDisplay: true,
        nativeControlsForTouch: true,
        nativeTextTracks: true,
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            type: 'application/x-mpegURL',
            src: 'https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8'
          },
          {
            type: 'video/mp4',
            src: 'https://live.rouquin.me/archives/MixFour.mp4'
          }
        ],
        tracks: [
          {
            kind: 'captions',
            src: 'https://live.rouquin.me/archives/MixFour.vtt',
            srclang: 'en',
            label: 'English',
          },
        ],
        //poster: '/img/cat.jpg',
        controlBar: {
          timeDivider: false, // 时间分割线
          durationDisplay: true, // 总时间
          progressControl: true, // 进度条
          customControlSpacer: true, // 未知
          fullscreenToggle: true // 全屏
        },
      }
    }
  },
  async mounted() {
    // GET request using fetch with async/await
    const response = await fetch(this.playerOptions.sources[0].src);
    if(response.status == 404) {
      this.currentStream = 'Live Offline';
      this.archiveSteam = 'Last archive'

      const tracks = this.playerOptions.tracks;
      //console.log(tracks); // returns "[object Object]"

      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        if (track.kind === "captions") {
          track.mode = "showing";
        }
      }
        
      return this.playerOptions.sources[1].src;
    } else {
      this.currentStream = 'Live Online 🔥';
      return this.playerOptions.sources[0].src;
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    OnReadyStarted() {
      console.log(this.$refs.videoPlayer.player)
    }
  }
}
</script>
  