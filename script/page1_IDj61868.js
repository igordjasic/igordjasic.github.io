




window.addEventListener("DOMContentLoaded", loadImage);



function loadImage(){

    //I learnt a bit how localstorage set/get item works from this youtube video https://www.youtube.com/watch?v=mq6vlYmh_AE By HowToCodeSchool
    let r = localStorage.getItem("review");
    let i = localStorage.getItem("value");

    
    var text = "images" + "/" + i  + ".png";


    let reviewTarget = document.getElementById('reviewTarget')
    let target = document.getElementById('imgTarget')


    reviewTarget.append(r);
    target.src = text;
    
    return false;
}





