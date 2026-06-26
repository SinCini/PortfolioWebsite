const starButton = document.getElementById("Stars");
starButton.addEventListener("click", SpawnDrawTheNightSky);
const lightSwinger = document.getElementById("light");
lightSwinger.addEventListener("click", SpawnLightSwinger);
function SpawnLightSwinger()
{
    lightSwinger.style.display ='none';
    
    const lightGameContainer = document.createElement("div");
    const lightswingerGame = document.createElement("iframe");
    lightswingerGame.className = "LightGameCanvas";
    lightswingerGame.src="./ProjectFiles/Lightswinger/index.html"; 
    lightswingerGame.width="100%";
    lightswingerGame.height="1000"; 
    lightswingerGame.title="Light"
    const game = document.getElementById("LightGame");
    game.appendChild(lightswingerGame);
}
function SpawnDrawTheNightSky()
{
    starButton.style.display ='none';

    const lightGameContainer = document.createElement("div");
    const NightSkyGame = document.createElement("iframe");
    NightSkyGame.className = "SkyGameCanvas";
    NightSkyGame.src="./ProjectFiles/DrawTheNightSky/index.html";
    NightSkyGame.width="100%";
    NightSkyGame.height="100%"; 
    NightSkyGame.title="Stars"
     const game = document.getElementById("StarGame");
}
