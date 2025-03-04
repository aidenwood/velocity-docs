---
title: Slot-Slider-w-Cards Component
description: A guide in my new Starlight docs site.

---


## Component Introduction and Usage

The Slot-Slider-w-Cards Component is a great starting point for a slider with a focus on SEO and providing information on each image, advanced responsiveness, multi-device and browser compatibility, and pageload performance, all handled out of the box thanks to Velocity. 🚀


## Code Breakdown

Code usage instructions below. This is one of the more complex components in Velocity.
Image variables need to be defined in the page file the component is used on, not in the component itself.

### Define Image Source

Images are defined as variables for usage in styling and then use Astro's slot feature to allow defining image source in the page file when this component is used.
Eg: Using this component on the home page, your index file will define the images as shown below


```bash title="index.html"
---
import Hero from '../components/home/Hero.astro';
import HeroSlider from '../components/home/Slot-Slider-w-Cards.astro';


// Define image variable below on this page and then call at Slot-Slider-w-Cards
let backgroundUrl = 'url(/lighting/zoomed-beachfestoon.webp)'
let backgroundUrl2 = 'url(/lighting/edit-lagoon-festoon.webp)' 
let backgroundUrl3 = 'url(/lighting/wedding-canopy.webp)' 

---

<Layout
  description="Home page SEO description."
  title="Home Page | Velocity"
>
  
  <Hero />
  <HeroSlider backgroundUrl={backgroundUrl} backgroundUrl2={backgroundUrl2} backgroundUrl3={backgroundUrl3} />
    
page continues ...

```

### Slider Images


```bash title="Slot-Slider-w-Cards Component"
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

<style define:vars={{ backgroundUrl,  backgroundUrl2, backgroundUrl3, backgroundUrl4, backgroundUrl5, backgroundUrl6, backgroundUrl7, backgroundUrl8, backgroundUrl9, backgroundUrl10, backgroundUrl11 }}>

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

.cell-6 {
  background-image: var(--backgroundUrl6);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-7 {
  background-image: var(--backgroundUrl7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-8 {
  background-image: var(--backgroundUrl8);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-9 {
  background-image: var(--backgroundUrl9);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-10 {
  background-image: var(--backgroundUrl10);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cell-11 {
  background-image: var(--backgroundUrl11);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

</style>


```




### Card Title and Text

```bash title="Slot-Slider-w-Cards Component"

<section class="">
  <div class="limit-container">
    <div class="fullscreen-carousel bg-secondary-900" data-flickity='{ "cellAlign": "left", "contain": true, "pageDots": false, "autoPlay": 5400, "groupCells": "85%", "lazyLoad": true, "imagesLoaded": true, "adaptiveHeight": true, "wrapAround": true }'>
      
      
      <!-- Set background image variable below -->
      <div class="carousel-cell cell-1 h-full">
        <div class="carousel-container h-full w-full py-8 md:py-24">
          <div class="container-offset h-full flex items-end px-4 sm:px-6 lg:px-8">
            
            
            <!-- Set Card styling below -->
            <div class="bg-secondary-950/90 border-secondary-300 text-white duration-200 border rounded-3xl px-6 py-8 lg:py-12 h-min max-w-3xl flex flex-col justify-center gap-4">
              <div class="w-full flex flex-row-reverse sm:flex-col md:flex-row-reverse items-center justify-center gap-6">
                
                
                <!-- Set Card content below -->
                <div class="w-full mx-auto md:ml-2 flex flex-col gap-2 md:gap-4">
                  <h4 class="text-lg md:text-xl lg:text-2xl xl:text-4xl tracking-tight font-medium">
                    Card Title Text
                  </h4>
                  <p class="text-sm sm:text-base md:text-lg pb-4 leading-6">
                    Card Paragraph Text
                  </p>
                  <div>
                    <a href="/products/festoon-light"
                      class="mr-2 bg-secondary-600 hover:bg-secondary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Button One Text
                    </a>
                    <a href="/contact"
                      class="mr-2 border bg-secondary-950  border-secondary-300 inline-flex items-center justify-center rounded-full px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Button Two Text
                    </a>
                  </div>
                </div>
                

              </div> 
            </div>


          </div>
        </div>
      </div>

      
    </div>
  </div>
</section>



```
