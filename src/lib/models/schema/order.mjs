//prettier-ignore

//  -> Order Item Schema should have a reference to an order Key
export const Order = {
    "$id": "Order",
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "total": {
        "type": "number",
      },
      "user_id": {
        "type": "string"
      },
      "charge": {
        "type": "string"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
    }
}
