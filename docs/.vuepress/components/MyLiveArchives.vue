<template>
    
    <span class="archive-steam">{{ datenamemix }}</span>
    <video ref="videoPlayer" class="video-js" controls preload="auto" data-setup='{}'>
        <source :src="url" type="video/mp4">
        <track kind="captions" :src="urltrack" srclang="en" label="English" ref="trackElement">
    </video>

    <div class="bot-telegram">
        <a href="https://t.me/liverouquin" title="Sign up on Telegram">Sign up on Telegram</a> to receive messages telling you when I'm go online.
    </div>
</template>

<script>
  import '@videojs/http-streaming';
  import 'video.js/dist/video-js.min.css';
  
  export default {
    name: 'LiveArchives',
    props: ["url", "urltrack", "datenamemix"],
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
                        type: 'video/mp4',
                        src: this.url
                    }
                ],
                tracks: [
                    {
                        kind: 'caption',
                        src: this.urltrack,
                        srclang: 'en',
                        label: 'English',
                        mode: 'showing'
                    }
                ],
                poster: '/img/cat.webp',
            }
        };
    },
    methods: {
        // Display track or not
        diplayTracks() {
            const video = document.getElementById("video");
            
            return video;
        }
    },
    async created() { 
        const status = this.statusVideo = 1; 
        this.diplayTracks();
    }
 };
</script>