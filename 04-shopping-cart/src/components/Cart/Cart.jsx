/* eslint-disable jsx-a11y/control-has-associated-label */
import CartLineItem from './CartLineItem';

const Cart = (props) => {
  const {
    totalAmount,
    lineItems,
    onUpdateQuantity,
    onRemoveItem,
    onRemoveCart,
  } = props;

  return (
    <section data-name="Cart">
      <h2>購物車</h2>
      <div className="flex">
        <div className="w-1/5">項目</div>
        <div className="w-1/5">數量</div>
        <div className="w-1/5">單價</div>
        <div className="w-1/5">小計</div>
      </div>
      {lineItems.map((data) => {
        return (
          <CartLineItem
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            quantity={data.quantity}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        );
      })}
      <div className="text-end">totalAmount:{totalAmount}</div>
      <button
        disabled={totalAmount === 0}
        className="btn btn-success"
        onClick={onRemoveCart}
      >
        清空購物車
      </button>
    </section>
  );
};

export default Cart;
