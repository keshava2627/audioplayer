window.onload = function () {
    var Playbtn = document.getElementById('playBtn');
    var Audioplayer = document.getElementById('audioPlayer');
    var pauseBtn=document.getElementById('pausebutton');
    var restart=document.getElementById('restartbtn');
    var forwardbtn=document.getElementById('forwrad');
    var backwardbtn=document.getElementById('backward');
    var halfspeedbtn=document.getElementById('halfspeed');
    var normalspeedbtn =document.getElementById('normal');
    var doublespeedbtn =document.getElementById('double');
    var highspeedbtn =document.getElementById('highspeed');
    var progressbarbtn=document.getElementById('progress-bar');




    Playbtn.addEventListener("click", function () {
        Audioplayer.play();
    });
    pauseBtn.addEventListener("click", function(){
        Audioplayer.pause();
    })
    restart.addEventListener("click", function(){
        Audioplayer.currentTime=0;
    })
    forwardbtn.addEventListener("click", function(){
        Audioplayer.currentTime+=10;
    })
    backwardbtn.addEventListener("click", function(){
        Audioplayer.currentTime-=10;
    })
    halfspeedbtn.addEventListener("click", function(){
        Audioplayer.playbackRate=0.5;
    })
    normalspeedbtn.addEventListener("click", function(){
        Audioplayer.playbackRate=1;
    })
    doublespeedbtn.addEventListener("click", function(){
        Audioplayer.playbackRate=2;
    })
    highspeedbtn.addEventListener("click", function(){
        Audioplayer.playbackRate=5;
    })
    Audioplayer.addEventListener("timeupdate",function(){
        var playper=(Audioplayer.currentTime/Audioplayer.duration)*100;
        if(playper<30){
            progressbarbtn.style.backgroundColor="red";

        }else if(playper>30 && playper<70){
            progressbarbtn.style.backgroundColor="yellow";

        }
        else{
            progressbarbtn.style.backgroundColor="green";


        }
        progressbarbtn.style.width=(Audioplayer.currentTime/Audioplayer.duration)*100+"%";
    })

}