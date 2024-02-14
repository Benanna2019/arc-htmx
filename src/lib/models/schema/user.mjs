//prettier-ignore
export const User = {
    "$id": "User",
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "name": {
        "type": "string",
      },
      "email": {
        "type": "string",
      },
      "password": {
        "type": "string",
      },
      "role": {
        "type": "string",
        "description": "user role, either 'admin' or 'user', or blocked",
        "enum": ["ADMIN", "USER", "BLOCKED"]
      },
      "avatar": {
        "type": "string"
      },
      "created": {
        "type": "string",
        "format": "date-time"
      },
    }
  }
