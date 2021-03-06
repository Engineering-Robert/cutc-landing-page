 // Load the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // This function creates an <iframe> (and YouTube player)
 // after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('youtube_embed', {
     height: 100000,
     videoId: 'gbrkMDkHRqc',
     events: {
       'onReady': onPlayerReady
     }
   });
 }

 // The API will call this function when the video player is ready.
 function onPlayerReady(event) {
   event.target.playVideo();
   event.target.mute()
 }
