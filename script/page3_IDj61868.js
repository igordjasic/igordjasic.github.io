
function chooseInput(choice){

let target = document.getElementById("target");
var image = choice;

target.style="visibility:visible;"

if(image == undefined){
    let text = "You haven't chosen an image! Click on an image to select it."
    target.innerText = text;
    target.style="visibility:visible;"

}
else{
    let text = "You have selected " + image + ", If this is the image you wish to review, open the review tab at the top of your screen, it is now open."
    + " If you would like to select a different photo, click on the photo you have already selected to de-select it and choose another!";
    target.innerText = text;
    
    target.style="visibility:visible;"
    let link2 = document.getElementById('pg4');
    link2.className = 'active'
    
   
    
    //I learnt a bit how localstorage set/get item works from this youtube video https://www.youtube.com/watch?v=mq6vlYmh_AE By HowToCodeSchool
    localStorage.setItem("value", image);
    
    
}


}




function chooseImg(image){
    
 var change = document.getElementById(image)
    
 change.classList.toggle('toggled');
 var pic = change.id;
 if(change.classList == "toggled"){
    console.log(pic);
    }
    else{
    alert("Selection Removed.")
    }
    
    if(document.querySelectorAll(".toggled").length > 1){
        alert("You can only select one image at a time. Click an image again to deselect it.")

        change.classList.toggle('toggled');
        return false;
    }
 pic = chooseInput(pic)
}





