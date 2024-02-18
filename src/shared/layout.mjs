import { getCartCount } from "../lib/models/cart-model.mjs";
import { cartCount } from "./cart-count.mjs";
import { html } from "./html-helper.mjs";
import { searchResults } from "./search.mjs";
import arc from "@architect/functions";

export default function layout({
  contents,
  showNav = true,
  isLoggedIn = false,
  person,
}) {
  let nav = "";

  let navLinks;
  if (isLoggedIn) {
    // fetch cart count
    const count = getCartCount(person?.cart);

    navLinks = html`
      <a href="/">Products</a>
      <a href="/sell">Sell</a><a href="/orders">Orders</a
      ><a href="/logout">Sign Out</a
      ><a hx-post="/show-cart" hx-target="body" hx-swap="beforeend"
        >My Cart${cartCount({ count })}</a
      >
    `;
  } else {
    navLinks = html`
      <a href="/">Products</a>
      <a href="/login">Sign in</a>
    `;
  }

  if (showNav) {
    nav = html`
      <header hx-boost="true">
        <div class="bar">
          <h1>
            <a href="/">Throwback Games</a>
          </h1>
          <div>
            <ul class="nav__list">
              ${navLinks}
            </ul>
          </div>
        </div>
        <div class="sub-bar">${searchResults}</div>
      </header>
    `;
  }

  return html`<!DOCTYPE html>
	<html>
	<head>
		<title>Architect demo app</title>
		<link rel="stylesheet" href="${arc.static("/css/styles.css")}">
        <script src="https://unpkg.com/htmx.org@1.9.10" integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC" crossorigin="anonymous"></script>
		<script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
		<script src="https://js.stripe.com/v3/" defer></script>
	</head>
	<style>
	@font-face {
		font-family: "kongtext";
		src: url("${arc.static("/fonts/kongtext.ttf")}") format("woff");
		font-weight: normal;
		font-style: normal;
	  }
	  
	  :root {
		font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;
	  
		/* color: rgba(255, 255, 255, 0.87);
			background-color: #242424; */
	  
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		--red: #ff0000;
		--black: #393939;
		--grey: #3a3a3a;
		--gray: var(--grey);
		--lightGrey: #e1e1e1;
		--lightGray: var(--lightGrey);
		--offWhite: #ededed;
		--maxWidth: 1000px;
		--bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
	  }
	  
	  body {
		font-family: "kongtext", ---apple-system, BlinkMacSystemFont, "Segoe UI",
		  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
	  }
	  
	  html {
		box-sizing: border-box;
		font-size: 62.5%;
	  }
	  
	  *,
	  *:before,
	  *:after {
		box-sizing: inherit;
	  }
	  
	  a {
		text-decoration: none;
		color: var(--black);
	  }
	  
	  a:hover {
		text-decoration: underline;
	  }
	  
	  button {
		font-family: "kongtext", ---apple-system, BlinkMacSystemFont, "Segoe UI",
		  Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	  }
	</style>
    
	<body>	
		<body>
			${nav}
			<main class="outlet__div">
				${contents}

			</main>
		</body>
	</html>`;
}
