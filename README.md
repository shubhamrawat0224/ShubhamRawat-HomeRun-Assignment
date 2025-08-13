# 🏗️ HomeRun Product Listing + Cart Interaction

A React-based product listing page that mimics HomeRun’s live **Add to Cart** behavior.  
The focus is on **front-end interactions**, **real-time cart updates**, and **quantity control logic** — no backend required.

---

## 📌 Features

- **Product Grid** — Displays cement product cards with:
  - Product image
  - Name
  - Price
  - Strikethrough MRP
  - Discount
- **Dynamic Add to Cart**
  - Initial **Add** button (Green: `#328616`)
  - On click → Quantity Selector: `[<<] [-] Qty [+] [>>]`
  - Default quantity starts at `1`
- **Quantity Controls**
  - `+` Increase by `1`
  - `-` Decrease by `1`
  - `>>` Increase by `5`
  - `<<` Decrease by `5`
  - **Min:** 0 → returns to "Add" button
  - **Max:** 20 → Shows error and disables increment buttons
- **Cart Counter in Header**
  - Updates in **real-time** based on all product quantities
- **Error Handling**
  - Shows `"Maximum 20 allowed per order..."` message when limit reached
- **Responsive UI**
  - Works on desktop and mobile

---

## 📂 Folder Structure
