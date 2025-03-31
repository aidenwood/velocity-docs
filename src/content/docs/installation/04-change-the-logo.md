---
title: Change the Logo Image
description: A guide in my new Starlight docs site.

---

Think of the layout file as the head and footer of every page. You may also add body elements you want to load or appear on every page.
Making Velocity yours for each project was made to be lightning fast, the main point of the product from the start. Thinking about the structure of the filing can help you make better use of developing websites quickly with Velocity.

## Replace the header logo and menu items

describe

and the bg colour on menu open

```bash title="header.astro (logo src and bg colour)"
logo
```


describe 



```bash title="footer.astro (menu items)"
menu items
```


## Change the Layout to suit your project
- Layout.astro is a great place for making use of the performance under the hood of Velocity and Astro.JS
    - Load JS components here if possible for single load of heavy files.
    - Load CSS and components you want on every page.
   

```bash title="layout.astro (Flickity.JS)"
flickity
```


```bash title="layout.astro (Snipcart.JS)"
snipcart
```