type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

type DataItem = User | Product | Order;

function handleData(data: DataItem[]): string[] {
  return data.map((item) => {
    switch (item.type) {
      case 'user':
        return `Hello ${item.name}, you are ${item.age} years old.`;

      case 'product':
        return `Product #${item.id} costs $${item.price}.`;

      case 'order':
        return `Order ${item.orderId} has a total amount of $${item.amount}.`;

      default:
        return 'Unknown data type received.';
    }
  });
}
