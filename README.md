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
- `index.html` is the whole website
- `README.md` is this file

## Changing products and prices
Open `index.html` in a text editor and find the list that starts with `const P=[`. Each product looks like this:

```js
{id:1, n:"Patchwork Cord Jacket", p:1299, c:"Jackets", sz:["S","M","L","XL"], d:"Description here"}
```

- `n` is the name
- `p` is the price in rand (numbers only)
- `c` is the category
- `sz` is the list of sizes
- `d` is the description

## Delivery fee
Delivery is free on orders of R1,500 or more, and R99 below that. To change this, find `const ship=` in `index.html` and edit the two numbers.


