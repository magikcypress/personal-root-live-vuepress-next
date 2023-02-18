if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var hls = new Hls();
    // bind them together
    hls.attachMedia(video);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            //console.log("video and hls.js are now bound together !");
            hls.loadSource("https://live.rouquin.me:8888/hls/live_883158378_G7hEwywoc201aCskN8ZKD2KDHHQ3Yd.m3u8");
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {});
    });
}