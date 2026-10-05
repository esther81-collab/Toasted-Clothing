# Toasted Clothing: Online Store

Online store for Toasted Clothing, a streetwear brand from Pretoria, South Africa.

Customers can browse jackets, vests and sets, pick their size, add items to a cart and place an order. They get a receipt, and you get the order by email.

## What the website does
- Shows all products, with filters by category
- Lets customers pick a size (and a colour, where there is one)
- Has a cart where customers can change quantities
- Has a checkout form for name, email, phone and delivery address
- Gives the customer a receipt with the order number, date, prices, delivery and total
- Works on phones, tablets and computers

## How orders work
When a customer places an order, you get an email at paxlight0@gmail.com with their name, phone, address, items, sizes and total price. The customer gets a copy of the receipt too.

The first time, the order service asks you to confirm your email by clicking one button. After that, orders arrive on their own.

## Files
- `index.html/toasted-store(3).html` is the whole website
- `images/` contains the image assets
- `scripts/build.mjs` packages the website for deployment
- `package.json` defines the build command
- `netlify.toml` defines the Netlify build and publish settings
- `README.md` is this file

## Deployment
The site is standalone HTML, CSS and JavaScript and does not need a framework or any npm dependencies. Use Node.js 22 or later.

Netlify runs `npm run build`, which copies the website to `dist/index.html` and the image assets to `dist/images/`. Netlify publishes only `dist/`, not the source files or project configuration. The generated `dist/` directory should not be committed.

## Changing products and prices
Open `index.html/toasted-store(3).html` in a text editor and find the list that starts with `const P=[`. Each product looks like this:

```js
{id:1, n:"Patchwork Cord Jacket", p:1299, c:"Jackets", sz:["S","M","L","XL"], d:"Description here"}
```

- `n` is the name
- `p` is the price in rand (numbers only)
- `c` is the category
- `sz` is the list of sizes
- `d` is the description

## Delivery fee
Delivery is free on orders of R1,500 or more, and R99 below that. To change this, find `const ship=` in `index.html/toasted-store(3).html` and edit the two numbers.

