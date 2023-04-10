<template>

    <h1><code>{{ currentStream }}</code></h1>

    <!--video-player :options="videoOptions" /-->
    <video ref="videoPlayer" class="video-js" controls preload="auto" data-setup='{}'>
        <source src="https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8" type="application/x-mpegURL">
        <source src="https://live.rouquin.me/archives/MixSix.mp4" type="video/mp4">
        <track kind="captions" src="./vtt/MixSix.vtt" srclang="en" label="English" ref="trackElement">
    </video>
    <span class="archive-steam" v-if="offline">04/09/2023 :: Mix Six</span>

    <div class="bot-telegram">
        <a href="https://t.me/rouquin_live_bot" title="Sign up on Telegram">Sign up on Telegram</a> to receive messages telling you that I'm going to be online.
    </div>
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
            metadataTrack: '',
            videoElement: '',
            statusVideo: 1,
            offline: true,
            streams: {
                hls: ''
            },
            videoOptions: {
                overNative: false,
                autoplay: false,
                controls: true,
                sourceOrder: true,
                textTracks: true,
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
                        src: 'https://live.rouquin.me/archives/MixSix.mp4'
                    }
                ],
                tracks: [
                    {
                        kind: 'caption',
                        src: './vtt/MixSix.vtt',
                        srclang: 'en',
                        label: 'English',
                        mode: 'showing'
                    },
                    {
                        kind: 'caption',
                        src: '',
                        srclang: 'en',
                        label: 'English',
                        mode: 'disable'
                    }
                ],
                poster: '/img/cat.webp',
                // Send alert Online bot Telegram
                isLoading: null
            }
        };
    },
    methods: {
        // Display video if Offline or Online
        goLive (statusVideo) {
            return this.videoOptions.sources[statusVideo].src;
        },
        // Display track or not
        diplayTracks(statusVideo) {
            const tracks = this.videoOptions.tracks[statusVideo].src;
            const video = document.getElementById("video");
            
            const hideTracks = function() {
                // Oddly, there's no way to remove a track from a video, so hide them instead
                for (i = 0; i < video.textTracks.length; i++) {
                    if(statusVideo == 0) {
                        video.textTracks[0].mode = "showing";
                    } else {
                        video.textTracks[0].mode = "hidden";
                    }
                }
            }
            return video;
        }    
    },
    async created() { 

        // GET request using fetch with async/await
        const response = await fetch(this.videoOptions.sources[0].src);

        if(response.status == 404) {
            this.currentStream = 'Live Offline';
            const status = this.statusVideo = 0;
            this.offline = true;

            this.goLive(status);
            this.diplayTracks(status);
        } else {
            this.currentStream = 'Live Online 🔥';  
            const status = this.statusVideo = 1; 
            this.offline = false;

            this.goLive(status);
            this.diplayTracks(status);
        }
        
    },
    updated() {
        const element = this.$refs.trackElement
    },
    async mounted() {

        this.player = videojs(
            this.$refs.videoPlayer,
            this.options,
            function onPlayerReady() {
                console.log("onPlayerReady", this);
            },
        );
    },
 };
</script>