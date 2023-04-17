

document.getElementById("turn_on").onclick=function(event){
    event.preventDefault();
    console.log("hi")
    document.getElementById('myimage').src="images/image1.jpg";
}
document.getElementById("turn_off").onclick=function(event){
    // event.preventDefault();
    document.getElementById('myimage').src="images/image2.jpg"
}