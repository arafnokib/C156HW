AFRAME.registerComponent("target-coin", {
  schema: {

  },
  init: function() {
    for(var i = 1; i <= 20; i++){
      var id = `coin${i}`
    
      // 0.5*3000 = 1500
      var positionX = (Math.random()*3000 - 1000)
      var positionY = (Math.random()*2 - 1)
      var positionZ = (Math.random()*3000 - 1000)

      var position = {x: positionX, y: positionY, z: positionZ}
      this.createCoins(id, position)
    }
    
  },

  createCoins: function(id, position)  {
    var coinEl = document.createElement("a-entity");
    coinEl.setAttribute("material", "color", "yellow");
    coinEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
    coinEl.setAttribute("position", position)
    coinEl.setAttribute("id", id)

    var terrianEl = document.querySelector("#island");
    terrianEl.appendChild(coinEl);
  }
})