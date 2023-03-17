<template>

    <h1><code>{{ currentStream }}</code></h1>
    
    <!--video-player :options="videoOptions" /-->
    <video ref="videoPlayer" class="video-js" controls preload="auto" data-setup='{}'>
        <source src="https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8" type="application/x-mpegURL">
        <source src="https://live.rouquin.me/archives/MixFour.mp4" type="video/mp4">
        <track kind="captions" src="./vtt/MixFour.vtt" srclang="en" label="English" ref="trackElement" default>
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
            metadataTrack: '',
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
                        mode: 'hidden'
                    }
                ],
                poster: '/img/cat.webp',
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
    // watch: {
    //     getLive() {

    //     }
    // },
    // computed: {
    //     OnLive() {
    //         // const response = fetch(this.videoOptions.sources[0].src);

    //         // return this.videoOptions.sources.length > 0 ? 'Yes' : 'No'
    //     }
    // },
    methods: {

    },
    async created() { 

        // Get all text tracks for the current player.
        // var tracks = this.player.textTracks();
        // var metadataTrack;

        // for (var i = 0; i < tracks.length; i++) {
        //     var track = tracks[i];
        //     console.log(track)
        //     // Find the metadata track that's labeled "ads".
        //     if (track.kind === 'metadata' && track.label === 'ads') {
        //         track.mode = 'hidden';

        //         // Store it for usage outside of the loop.
        //         console.log(this.metadataTrack)
        //         this.metadataTrack = track;
        //     }
        // }

        // // Add a listener for the "cuechange" event and start ad playback.
        // this.metadataTrack.addEventListener('cuechange', function() {
        //     this.player.ads.startLinearAdMode();
        // });
        
        // GET request using fetch with async/await
        const response = await fetch(this.videoOptions.sources[0].src);

        if(response.status == 404) {
            this.currentStream = 'Live Offline';

            // const track = this.$refs.trackElement;
            // console.log(track)
            // const element = document.querySelector('.vjs-text-track-cue')
            
            // element.classList.add('track-hidden');

            // if (track.track.kind === 'captions' && track.track.language === 'en') {
            //     //element.classList.add('track-hidden');
            //     element.style.display = 'none'
            // }
            //console.log(element)

            return this.videoOptions.sources[1].src;
        } else {
            this.currentStream = 'Live Online 🔥';

            return this.videoOptions.sources[0].src;
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