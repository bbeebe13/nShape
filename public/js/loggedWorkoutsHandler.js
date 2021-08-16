$weightLossButton = document.querySelector("#weight-loss-button");

const loggedWeightLossHandler = async (e) => {
    e.preventDefault();
    alert("HELLO");
    console.log("Logged Workout Handler");
}



$weightLossButton.addEventListener("submit", loggedWeightLossHandler)

$(document).ready(function(){

    /*$("#weight-loss-button").click(function(){
        alert("posting!")

    */

 });