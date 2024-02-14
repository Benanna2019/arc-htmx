export type User = {
  key: string;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  cart: CartItem[];
  orders: Order[];
  created: string;
};

export type Product = {
  key: string;
  name: string;
  description: string;
  image: string;
  status: string;
  price: number;
  user_id: string;
  created: string;
};

export type CartItem = {
  key: string;
  user_id: string;
  quantity: number;
  product_id: string;
  created: string;
};

export type Order = {
  key: string;
  total: number;
  user_id: string;
  charge: string;
  created: string;
};

export type OrderItem = {
  key: string;
  name: string;
  description: string;
  photo: string;
  price: number;
  quantity: number;
  order_id: string;
  created: string;
};
