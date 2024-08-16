/**
 * Youtube Streamer
 */
// var player;
// var createYT = function (VIDEO_ID) {
//     if (VIDEO_ID) {
//         player = new YT.Player('party-time-ytplayer', {
//             height: '200', // Set to 0 to hide
//             width: '200', // Set to 0  to hide
//             videoId: VIDEO_ID, //'M7lc1UVf-VE',
//             playerVars: {
//                 'enablejsapi': 1,
//                 'playsinline': 1
//             },
//             events: {
//             'onReady': onPlayerReady,
//             // 'onStateChange': onPlayerStateChange
//             }
//         });
//     }
// }
    // 2. This code loads the IFrame Player API code asynchronously.
    // var tag = document.createElement('script');

    // tag.src = "https://cdn.jsdelivr.net/npm/@thelevicole/youtube-to-html5-loader@5/dist/YouTubeToHtml5.js";
    // document.body.appendChild(tag);
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    // function onYouTubeIframeAPIReady() {
    //     createYT()
    // }

    // 4. The API will call this function when the video player is ready.
    // function onPlayerReady(event) {
    //     var ytVideo = event.target;
    //     var iframe = ytVideo.getIframe();
    //     console.log("video", ytVideo);
    //     // console.log("getVideoEmbedCode", ytVideo.getVideoEmbedCode());
    //     console.log("iframe", iframe.querySelectorAll("*"));
    //     // event.target.playVideo();
    // }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    // var done = false;
    // function onPlayerStateChange(event) {
    //     if (event.data == YT.PlayerState.PLAYING && !done) {
    //         setTimeout(stopVideo, 6000);
    //         done = true;
    //     }
    // }
    
    // function stopVideo() {
    //     player.stopVideo();
    // }

var partyTimeVidLink = "";
var initVidIframe = true;

var setupYTLink = function (event) {
    var YTLink = event.target.value;
    // var linkArr = YTLink.split("?v=");
    partyTimeVidLink = YTLink// ;linkArr[1];
}


// TEST: https://www.youtube.com/watch?v=Eq5a6L7c_UY
var getYTVid = function () {
    fetch("https://www.youtube.com/watch?v=Eq5a6L7c_UY")
        .then(response => console.log(response.json()))
        .then(data => console.log(data));
    // var vidYTEle = document.getElementById("party-time-yt-player");
    // if (vidYTEle) {
    //     // vidYTEle.setAttribute("src", partyTimeVidLink);
    //     vidYTEle.setAttribute("data-yt2html5", partyTimeVidLink);
    //     vidYTEle.setAttribute("controls", "");
    // } else {
    //     vidYTEle = document.createElement("video");
    //     vidYTEle.id = "party-time-yt-player";
    //     vidYTEle.setAttribute("src", partyTimeVidLink);
    //     vidYTEle.setAttribute("data-yt2html5", partyTimeVidLink);
    //     vidYTEle.setAttribute("controls", "");
    //     document.body.appendChild(vidYTEle)
    // }

    // new YouTubeToHtml5({
    //     autoload: true,
    // });

    // if (initVidIframe) {
    //     initVidIframe = false;
    //     createYT(partyTimeVidId);
    // } else {
    //     player.loadVideoById(partyTimeVidId);   
    // }

    // setTimeout(() => {
    //     const frame = document.getElementById('party-time-ytplayer');
    //     frame.contentWindow.postMessage("", document.URL);
    //     var ytIframeEle = document.getElementById("party-time-ytplayer");
    //     // var iframeWindow = ytIframeEle.contentWindow;
    //     // var ytVidEle = iframeWindow.document.querySelector("video.video-stream");
    //     // console.log("ele", ytVidEle)
    // }, 6000);
    
    // createAudioStream("https://www.youtube.com/embed/" + partyTimeVidId);
}