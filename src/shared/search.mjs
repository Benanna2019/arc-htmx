import { html } from "./html-helper.mjs";

export const searchResults = html`
  <div class="search__styles">
    <input
      hx-post="/search/products"
      hx-trigger="input changed delay:300mx,
    search"
      hx-target="#product-search-results"
      hx-swap="innerHTML"
      id="search-products"
      placeholder="Search for Products"
      name="search"
    />

    <div class="datalist__styles" id="product-search-results"></div>
  </div>
`;
