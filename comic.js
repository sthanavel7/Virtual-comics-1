AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "superman",
          title: "Superman Comic",
          url: "./assets/superman-poster.jpg",
        },
        {
          id: "captain-aero",
          title: "Captain Aero",
          url: "./assets/captain-aero-poster.jpg",
        },
  
        {
          id: "outer-space",
          title: "Outer Space",
          url: "./assets/outer-space-poster.jpg",
        },
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/spiderman-poster.jpg",
        },
      ];
      
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
       width:22,
       height:30
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#ffffff",
        opacity: 1,
      });
  
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
       width:20,
       height:28
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  });