---
title: Simple Payment Functionality
description: A guide in my new Starlight docs site.

---

Velocity is built to easily use either SnipCart (Multi-Session Cart) or Stripe based on your e-commerce needs. 
Stripe doesn't require much more than linking to the right product from your purchase links (recommend using a tags).
While SnipCart comes pre-integrated in Velocity, it needs your API details and some basic setup. (recommend using button tags).
Further instructions from SnipCart setup found here: <a href="https://docs.snipcart.com/v3/setup/installation">Docs.SnipCart</a>


## E-Commerce SnipCart Integration Setup
In the body tag of the layout.astro file, you'll find the area to add your Public or Private API key details to Velocity. For fastest installation of Velocity we recommend using the PublicAPIKey setting with SnipCart.

```bash title="Stripe-Product.astro"
Component with Stripe Purchase Link
```

It is not completely necessary, but for performance, if using Stripe it is best to remove the SnipCart integration from the non-payment project. See the SnipCart Payment page for more instructions on removing code.

