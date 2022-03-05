AFRAME.registerComponent("fishes", {
    schema: {
  
    },
    init: function() {
      for(var i = 1; i <= 20; i++){
        var id = `fish${i}`
      
        // 0.5*3000 = 1500
        var positionX = (Math.random()*3000 - 1000)
        var positionY = (Math.random()*2 - 1)
        var positionZ = (Math.random()*3000 - 1000)
  
        var position = {x: positionX, y: positionY, z: positionZ}
        this.createFish(id, position)
        console.log('he ')
      }
      
    },
  
    createFish: function(id, position)  {
      var fishEl = document.createElement("a-entity");
      fishEl.setAttribute("gltf-model", "./assets/fish/scene.gltf");
      fishEl.setAttribute("position", position)
      fishEl.setAttribute("id", id)
      fishEl.setAttribute("scale", {x:500, y:500, z:500})
      fishEl.setAttribute('animation-mixer', {})
  
      var terrianEl = document.querySelector("#island");
      terrianEl.appendChild(fishEl);

    }
  })