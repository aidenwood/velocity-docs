---
title: Slot-Slider Component
description: A guide in my new Starlight docs site.

---


## Slot-Slider Component

The Slot-Slider Component is a great starting point for a slider with advanced responsiveness, multi-device and browser compatibility, and pageload performance, all handled out of the box thanks to Velocity. 🚀

```bash title="Slot-Slider Component"
---
export interface Props {

backgroundUrl: string
backgroundUrl2: string
backgroundUrl3: string
backgroundUrl4: string
backgroundUrl5: string
backgroundUrl6: string
backgroundUrl7: string
backgroundUrl8: string
backgroundUrl9: string
backgroundUrl10: string
backgroundUrl11: string

}


const {backgroundUrl, backgroundUrl2, backgroundUrl3, backgroundUrl4, backgroundUrl5, backgroundUrl6, backgroundUrl7, backgroundUrl8, backgroundUrl9, backgroundUrl10, backgroundUrl11} = Astro.props
---    

<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
<!-- JavaScript -->
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

<style define:vars={{ backgroundUrl,  backgroundUrl2, backgroundUrl3, backgroundUrl4, backgroundUrl5 }}>

.fullscreen-carousel {
  border: 1px black;
  height: calc(100vh - 80px);
  max-width: 100vw;
  max-height: 1100px;
  
}

@media only screen and (max-width: 1680px) {
  .fullscreen-carousel {
    max-height: 950px;
    height: calc(85vh - 65px);
  }
}

@media only screen and (max-width: 1199px) {
  .fullscreen-carousel {
    max-height: 750px;
    height: calc(60vh - 65px);
  }
}

@media only screen and (max-width: 568px) {
  .fullscreen-carousel {
    max-height: 800px;
    height: calc(85vh - 65px);
  }
}

.container-offset {
  max-width: 1920px;
  margin: auto;
}

.carousel-container {
  background: linear-gradient(to bottom right,#002f4b10,#c4210030);
}

.carousel-cell {
  border: 1px black;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: left;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-1 {
  background-image: var(--backgroundUrl);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-2 {
  background-image: var(--backgroundUrl2);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-3 {
  background-image: var(--backgroundUrl3);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-4 {
  background-image: var(--backgroundUrl4);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-5 {
  background-image: var(--backgroundUrl5);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>
    
  

<section class="">
  <div class="limit-container">
    <div class="fullscreen-carousel bg-secondary-900" data-flickity='{ "cellAlign": "left", "contain": true, "pageDots": false, "autoPlay": 5400, "groupCells": "85%", "lazyLoad": true, "imagesLoaded": true, "adaptiveHeight": true, "wrapAround": true }'>
      
      
      
      <div class="carousel-cell cell-1 h-full">
        <div class="carousel-container h-full w-full">
          <div class="container-offset h-full flex items-center px-4 sm:px-6 lg:px-8">
            
          </div>
        </div>
      </div>

      <div class="carousel-cell cell-2 h-full">
        <div class="carousel-container h-full w-full">
          <div class="container-offset h-full flex items-center px-4 sm:px-6 lg:px-8">
            
          </div>
        </div>
      </div>

      <div class="carousel-cell cell-3 h-full">
        <div class="carousel-container h-full w-full">
          <div class="container-offset h-full flex items-center px-4 sm:px-6 lg:px-8">
            
          </div>
        </div>
      </div>

      <div class="carousel-cell cell-4 h-full">
        <div class="carousel-container h-full w-full">
          <div class="container-offset h-full flex items-center px-4 sm:px-6 lg:px-8">
            
          </div>
        </div>
      </div>

      <div class="carousel-cell cell-5 h-full">
        <div class="carousel-container h-full w-full">
          <div class="container-offset h-full flex items-center px-4 sm:px-6 lg:px-8">
            
          </div>
        </div>
      </div>


      
    </div>
  </div>
</section>

```
