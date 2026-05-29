const starButton = document.querySelectorAll("Stars");

starButton.addEventListener("click", SpawnDrawTheNightSky);

function SpawnDrawTheNightSky()
{
    var element = document.getElementById("Stars")
    element.style.display ="none";
}