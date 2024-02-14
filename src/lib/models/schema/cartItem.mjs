//prettier-ignore

export const CartItem = {
    "$id": "CartItem",
    "type": "object",
    "properties": {
        "key": {
            "type": "string"
        },
        "quantity": {
            "type": "number"
        },
        "user_id": {
            "type": "string"
        },
        "product_id": {
            "type": "string",
        },
        "created": {
            "type": "string",
            "format": "date-time"
        },
    }
}
