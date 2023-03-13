<template>
    <h1><code>{{ currentStream }}</code></h1>
    <video-player :options="playerOptions" @play="player($event)" />
    <track id="track" class="track" src="https://live.rouquin.me/archives/MixFour.vtt" kind="caption" ref="caption" srclang="en" default />
</template>
  
<script>
import '@videojs/http-streaming';
import 'video.js/dist/video-js.css';
import { VideoPlayer } from '@videojs-player/vue';
import { onRenderTracked } from 'vue';

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
      tracks: [],
      streams: {
        hls: ''
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,
        sourceOrder: true,
        textTracks: true,
        //textTrackSettings: ['ok'],
        textTrackDisplay: true,
        html5: { 
          hls: { withCredentials: false }, 
          nativeTextTracks: true, 
          nativeControlsForTouch: true, 
          nativeAudioTracks: true, 
          nativeTextTracks: true, 
          nativeVideoTracks: true,
          preloadTextTracks: true
        },
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
            kind: 'chapters',
            src: 'https://live.rouquin.me/archives/MixFour.vtt',
            srclang: 'en',
            label: 'English',
          },
        ],
        //poster: '/img/cat.jpg',
        // controlBar: {
        //   children: {
        //     playToggle: true,
        //     VolumePanel: true,
        //     DurationDisplay: true,
        //     TimeDivider: true,
        //     ChaptersButton : true,
        //     DescriptionButton: true,
        //     captionsButton: true,
        //     AudioTrackButton: true,
        //     LiveDisplay: true,
        //     PlayProgressBar: true,
        //     CurrentTimeDisplay: true,
        //     ProgressControl: {
        //         LoadProgressBar: false
        //     },
        //     SubsCapsButton: true,
        //     fullscreenToggle: true,
        //   }
        // }
      }
    }
  },
  async mounted() {
    this.onRenderTracked()
  },
  async created() {
    // GET request using fetch with async/await
    const response = await fetch(this.playerOptions.sources[0].src);

    if(response.status == 404) {
      this.currentStream = 'Live Offline';
      this.archiveSteam = 'Last archive';        
      return this.playerOptions.sources[1].src;
    } else {
      this.currentStream = 'Live Online 🔥';
      return this.playerOptions.sources[0].src;
    }
  },
  methods: {
    player() {
      return this.player
    },
    OnReadyStarted() {
      console.log(this.player)
    },
    onRenderTracked() {
      const tracks = this.playerOptions.tracks;
      if(tracks) {
        for (var i = 0; i < tracks.length; i++) {
          var track = tracks[i];
          if (track.kind === "captions") {
            track.mode = "showing";
          }
        }
        return track;
      }
    },
    // getCaptionReady() {
    //   let tracks = this.$refs.tracks
    //   console.log(tracks)
    //   tracks = tracks.track.cues
    // },
  }
}
</script>
  