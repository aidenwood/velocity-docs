---
title: Add to Cart Functionality
description: A guide in my new Starlight docs site.

---

Velocity is built to easily use either SnipCart (Multi-Session Cart) or Stripe based on your e-commerce needs. 
Stripe doesn't require much more than linking to the right product from your purchase links (recommend using a tags).
While SnipCart comes pre-integrated in Velocity, it needs your API details and some basic setup. (recommend using button tags).

SnipCart comes pre-built into Velocity and is ready to use, but it does cost $20 / month, so we also offer the ability to use Stripe and easily remove the SnipCart integration by removing the code areas below from your non-payment project.

Further instructions from SnipCart setup found here: <a href="https://docs.snipcart.com/v3/setup/installation">Installation (Docs SnipCart)</a>


## E-Commerce SnipCart Integration Setup
In the body tag of the layout.astro file, you'll find the area to add your Public or Private API key details to Velocity. For fastest installation of Velocity we recommend using the PublicAPIKey setting with SnipCart.

```bash title="layout.astro (SnipCart API details and load instructions)"
<script>
  window.SnipcartSettings = {
    publicApiKey: "YOUR_API_KEY",
    loadStrategy: "on-user-interaction",
  };

  (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),h(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),f.forEach(function(v){return document.removeEventListener(v,o)})}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
</script>
```


## SnipCart Cart Buttons and Details
In the body tag of the layout.astro file, you'll find the area to add your Public or Private API key details to Velocity. For fastest installation of Velocity we recommend using the PublicAPIKey setting with SnipCart.

```bash title="header.astro (Usual spot for Cart info)"
<button class="snipcart-checkout">Click here to checkout</button>

<span class="snipcart-items-count"></span>
<span class="snipcart-total-price"></span>
```


## SnipCart Purchase Buttons
In the body tag of the layout.astro file, you'll find the area to add your Public or Private API key details to Velocity. For fastest installation of Velocity we recommend using the PublicAPIKey setting with SnipCart.

```bash title="product-page.astro (Example Component Name)"
show the button code
```

:::caution
If you are not sure you want an awesome docs site, think twice before using [Starlight](/).
:::

:::caution
SnipCart will add a $20/month fee to the cost of your project. You may remove SnipCart and use Stripe 

