---
title: Hero-Basic Component
description: A guide in my new Starlight docs site.

---


## Slot-Slider Component

The Slot-Slider Component is a great starting point for a slider with advanced responsiveness, multi-device and browser compatibility, and pageload performance, all handled out of the box thanks to Velocity. 🚀

```bash title="Hero-Basic Component"
<style>
  #heroArea { height: calc(100vh - 75px); min-height: 820px; display: flex; justify-content: center; align-items: center; }
  #contain { max-width: 1920px; }
</style>


<section id="heroArea" class="">
  <div id="contain" class="mx-auto w-full px-4 sm:px-6 lg:px-8">
    <div class="">
      <div class="flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8 sm:gap-12">
        <div class="w-64 lg:w-1/2 items-start">
          
          <img />
          
        </div>
        <div class="w-full lg:w-1/2 gap-6">
          <h1 class="text-xs md:text-base uppercase font-thin tracking-widest pb-4">
            Gold Coast Web Design, Graphic Design, SEO & Digital Marketing
          </h1>
          <h2 class="font-medium tracking-tighter md:tracking-tight text-4xl lg:text-5xl xl:text-7xl max-w-6xl xl:max-w-4xl">
            Designed and Developed to improve ranks & sales.
          </h2>
          <p class="text-primary-950 dark:text-primary-200 text-lg xs:text-xl max-w-3xl my-4">
            Award-winning web design based on the Gold Coast. 
            Over 10 years experience. In-person design process. 
            Sleek, modern web design focused on conversion rate and SEO.
            Websites built with our in-house framework, Velocity. v10.1.12 available.
          </p>
          
          <a
            href="/web-design"
            class="mt-6 mr-2 bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Web Design
          </a>
          <a
          href="web-design/velocity"
          class="mt-6 mr-2 bg-primary-600 dark:bg-primary-400 hover:bg-primary-700 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Velocity9
        </a>

        </div>
      </div>
    </div>
  </div>
</section>



```
