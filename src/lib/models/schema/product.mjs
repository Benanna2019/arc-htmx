//prettier-ignore
export const Product = {
    "$id": "Product",
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
      "photo": {
        "type": "object",
        "properties": {
          "image": {
            "type": "string"
          },
          "altText": {
            "type": "string"
          },
        }
      },
      "status": {
        "type": "string",
      },
      "price": {
        "type": "number"
      },
      "user_id": {
        "description": "id string reference to user who created the product",
        "type": "string"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
    }
}
