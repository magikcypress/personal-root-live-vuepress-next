<template>
    <video id="video" autoplay="false" controls="controls" poster="/img/cat.jpg"></video>
</template>
  
<script>
  import Hls from 'hls.js';
  
  export default {
    data() {
      return {
        quality: "",
        active: false,
        config: {
          debug: true,
          enableWorker: true
        }
      };
    },
    mounted: function() {
      let hls = new Hls({
        pLoader: function (config) {
          let loader = new Hls.DefaultConfig.loader(config);

          Object.defineProperties(this, {
            stats: {
              get: () => loader.stats,
            },
            context: {
              get: () => loader.context,
            },
          });

          this.abort = () => loader.abort();
          this.destroy = () => loader.destroy();
          this.load = (context, config, callbacks) => {
            let { type, url } = context;

            if (type === 'manifest') {
              console.log(`Manifest ${url} will be loaded.`);
            }

            loader.load(context, config, callbacks);
          };
        }
      });
      let stream = "https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8";
      let video = document.getElementById('video');

      console.log(this.active)
      if(this.active === false) {
        document.getElementById('live-offline').innerHTML = "<code>Live Offline</code>";
        var interval = setInterval(() => {
          hls.loadSource(stream); 
          console.log(this.active)
        }, 500);
      }

      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
      });

      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        const quality = data.levels.length;
        console.log('manifest loaded, found ' + quality + ' quality level');
        if(quality) {
          this.active = true;
          document.getElementById('live-offline').innerHTML = "<code>Live Online</code> 🔥";
          hls.attachMedia(video);
          video.play();
          clearInterval(interval);
        } else {
          this.active = false;
          setInterval(interval, 500);
        }
      });

      // hls.on(Hls.Events.ERROR, function (event, data) {
      //     console.log(data.response.code)
      //     if(data.response.code==404) {
      //       console.log("Not Play");
      //       this.active = false;
      //       console.log(this.active);
      //     } else {
      //       console.log(data.response.code);
      //       console.log("Play");
      //       hls.loadSource(stream); 
      //       this.active = true;
      //       console.log(this.active);
      //     }
      // });  

      hls.on(Hls.Events.ERROR, function (event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log('fatal network error encountered, try to recover');
              hls.startLoad();
              this.active = false;
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log('fatal media error encountered, try to recover');
              hls.recoverMediaError();
              this.active = false;
              break;
            default:
              // cannot recover
              hls.destroy();
              this.active = false;
              break;
          }
        }
      });

    }
  };
</script>
