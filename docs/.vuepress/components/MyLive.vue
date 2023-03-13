<template>
        <h1><code>{{ currentStream }}</code></h1>
        
        <!--video-player :options="videoOptions" /-->
        <video ref="videoPlayer" class="video-js" controls preload="auto" data-setup='{}'>
            <source src="https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8" type="application/x-mpegURL">
            <source src="https://live.rouquin.me/archives/MixFour.mp4" type="video/mp4">
            <track kind="captions" src="./vtt/MixFour.vtt" srclang="en" label="English" default>
        </video>
        
</template>
  
<script>
  //import VideoPlayer from './VideoPlayer.vue';
  import videojs from 'video.js';
  import '@videojs/http-streaming';
  import 'video.js/dist/video-js.min.css';
  
  export default {
    name: 'Live',
    // components: {
    //   VideoPlayer
    // },
    data() {
        return {
            player: null,
            initialized: false,
            useNetworkInformationApi: false,
            currentStream: '',
            archiveSteam: '',
            streams: {
                hls: ''
            },
            videoOptions: {
                overNative: false,
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
                    kind: 'caption',
                    src: './archives/MixFour.vtt',
                    srclang: 'en',
                    label: 'English',
                },
                ],
                poster: '/img/cat.jpg',
                // controlBar: {
                //     playToggle: true,
                //     VolumePanel: true,
                //     ChaptersButton : true,
                //     DescriptionButton: true,
                //     captionsButton: true,
                //     AudioTrackButton: true,
                //     LiveDisplay: true,
                //     SubsCapsButton: true,
                //     fullscreenToggle: true,
                // }
            }
        };
    },
    async created() {
        // GET request using fetch with async/await
        const response = await fetch(this.videoOptions.sources[0].src);
        if(response.status == 404) {
        this.currentStream = 'Live Offline';       
        return this.videoOptions.sources[1].src;
        } else {
        this.currentStream = 'Live Online 🔥';
        return this.videoOptions.sources[0].src;
        }
    },
    mounted() {
    //  this.player = videojs(this.$refs.videoPlayer, this.options, () => {
    //     this.player.log('onPlayerReady', this);
    //   });
      this.player = videojs(
            this.$refs.videoPlayer,
            this.options,
            function onPlayerReady() {
                console.log("onPlayerReady", this);
            },
        );
        var tracks = this.player.textTracks();
        console.log(tracks); // returns "[object Object]"

        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            if (track.kind === "captions") {
                console.log(track.src); // Never called
                track.mode = "showing";
            }
        }
    },
  };
  </script>