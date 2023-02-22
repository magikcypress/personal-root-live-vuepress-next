if (Hls.isSupported()) {
    console.log('Test HLS!');
    var video = document.getElementById('video');
    var hls = new Hls();
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log('video and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level'
      );
    });
    hls.loadSource('https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8');
    // bind them together
    hls.attachMedia(video);
}
