const starButton = document.getElementById("Stars");
starButton.addEventListener("click", SpawnDrawTheNightSky);
const lightSwinger = document.getElementById("light");
lightSwinger.addEventListener("click", SpawnLightSwinger);
function SpawnLightSwinger()
{
    lightSwinger.style.display ='none';
}
function SpawnDrawTheNightSky()
{
    var element = document.getElementById("Stars")
    element.style.display ='none';
}
