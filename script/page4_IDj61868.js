window.addEventListener("DOMContentLoaded", loadImage);




function loadImage(){

    //I learnt a bit about how localstorage set/get item works from this youtube video https://www.youtube.com/watch?v=mq6vlYmh_AE By HowToCodeSchool
    let i = localStorage.getItem("value");

    
    let target = document.getElementById('imgTar')

    

    let text = "images" + "/" + i  + ".png";
    target.src = text;

}



function validateReview(){


    let review = document.getElementById('review').value;
    
    localStorage.setItem("review", review);

   
    
}