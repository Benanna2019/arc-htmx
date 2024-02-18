@app
htmx-arc-sick-fits

@http
get /
get /now
get /login
get /logout
get /products
get /single-product
get /products/:productId
get /sell
get /orders
get /orders/:orderId
get /edit/:productId
get /cart-count
get /images/*
post /cart/add
post /login
post /signup
post /signup/validate/email
post /signup/validate/password
post /search/products
post /show-cart
post /close-cart
post /create/product
post /create/product/image
post /checkout
delete /cart/:itemId

@aws
# profile default
region us-west-2
architecture arm64

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
