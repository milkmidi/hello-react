import React from 'react';
import ProductItem from './ProductItem';
import { PRODUCTS } from './config';
import Cart from './Cart/Cart';

const ShoppingCart = () => {
  // TODO 2
  const [totalAmount, setTotalAmount] = React.useState(0);

  const [lineItems, setLineItems] = React.useState([]);

  // TODO 6
  React.useEffect(() => {
    const calcTotalAmount = lineItems.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0);
    setTotalAmount(calcTotalAmount);
  }, [lineItems]);

  // TODO 5
  const atUpdateQuantity = (id) => {
    // 增加數量
    setLineItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });
  };

  // TODO 5
  const atAddToCart = (id) => {
    const foundItem = lineItems.find((data) => data.id === id);
    if (foundItem) {
      atUpdateQuantity(id);
    } else {
      // 新增
      const foundProduct = PRODUCTS.find((data) => data.id === id);

      const lineItem = {
        id,
        price: foundProduct.price,
        title: foundProduct.title,
        quantity: 1,
      };
      setLineItems(lineItems.concat(lineItem));
    }
  };

  // TODO
  const atRemoveItem = (id) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  // TODO
  const atRemoveCart = () => {
    setLineItems([]);
  };

  return (
    <div className="app">
      <div className="grid grid-cols-4 gap-4">
        {/* TODO 4 */}
        {PRODUCTS.map((product) => {
          return (
            <div key={product.id}>
              <ProductItem
                id={product.id}
                img={product.img}
                title={product.title}
                price={product.price}
                inventory={product.inventory}
                // TODO 5
                onAddToCart={atAddToCart}
              />
            </div>
          );
        })}
      </div>
      <Cart
        totalAmount={totalAmount}
        lineItems={lineItems}
        onRemoveCart={atRemoveCart}
        onUpdateQuantity={atUpdateQuantity}
        onRemoveItem={atRemoveItem}
      />
    </div>
  );
};

export default ShoppingCart;
