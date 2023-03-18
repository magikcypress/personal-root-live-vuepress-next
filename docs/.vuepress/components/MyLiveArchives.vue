<template>

    <video ref="videoPlayer" class="video-js" controls preload="auto" data-setup='{}'>
        <source src="https://live.rouquin.me/archives/MixFour.mp4" type="video/mp4">
        <track kind="captions" src="./vtt/MixFour.vtt" srclang="en" label="English" ref="trackElement">
    </video>
    
</template>

<script>
  import videojs from 'video.js';
  import '@videojs/http-streaming';
  import 'video.js/dist/video-js.min.css';
  
  export default {
    name: 'LiveArchives',
    // data() {
    //     return {
    //         player: null,
    //         initialized: false,
    //         useNetworkInformationApi: false,
    //         currentStream: '',
    //         metadataTrack: '',
    //         videoElement: '',
    //         statusVideo: 1,
    //         offline: true,
    //         streams: {
    //             hls: ''
    //         },
    //         videoOptions: {
    //             overNative: false,
    //             autoplay: false,
    //             controls: true,
    //             sourceOrder: true,
    //             textTracks: true,
    //             textTrackDisplay: true,
    //             html5: { 
    //                 hls: { withCredentials: false }, 
    //                 nativeTextTracks: true, 
    //                 nativeControlsForTouch: true, 
    //                 nativeAudioTracks: true, 
    //                 nativeTextTracks: true, 
    //                 nativeVideoTracks: true,
    //                 preloadTextTracks: true
    //             },
    //             sources: [
    //                 {
    //                     type: 'video/mp4',
    //                     src: 'https://live.rouquin.me/archives/MixFive.mp4'
    //                 }
    //             ],
    //             tracks: [
    //                 {
    //                     kind: 'caption',
    //                     src: './archives/MixFour.vtt',
    //                     srclang: 'en',
    //                     label: 'English',
    //                     mode: 'showing'
    //                 },
    //                 {
    //                     kind: 'caption',
    //                     src: '',
    //                     srclang: 'en',
    //                     label: 'English',
    //                     mode: 'disable'
    //                 }
    //             ],
    //             poster: '/img/cat.webp',
    //         }
    //     };
    // }
 };
</script>