//prettier-ignore
export const OrderItem = {
    "$id": "OrderItem",
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "name": {
        "type": "string",
      },
      "description": {
        "type": "string",
      },
      "photo": { // this should be a string like `/images/<filename>.jpeg`
        "type": "string",
      },
      "price": {
        "type": "number"
      },
      "quantity": {
        "type": "number"
      },
      "order_id": {
        "type": "string"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
    }
}
