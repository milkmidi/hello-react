const BuildItem = (props) => {
  // prettier-ignore
  const {
    title,
    quantity,
    price,
    id,
    onRemoveItem,
    onUpdateQuantity,
  } = props;

  // 小計
  const lineItemPrice = price * quantity;
  return (
    <section className="flex" data-name="CartLineItem" data-gradient>
      <div className="w-1/5">{title}</div>
      <div className="w-1/5">
        {/* FIXME：這裡有 bug，怎麼修好他呢? */}
        <button onClick={() => onUpdateQuantity(id, quantity - 1)}>-</button>
        <span className="px-1">{quantity}</span>
        <button onClick={() => onUpdateQuantity(id, quantity + 1)}>+</button>
      </div>

      <div className="w-1/5">{price}</div>
      <div className="w-1/5">{lineItemPrice}</div>
      <div>
        <button className="button" onClick={() => onRemoveItem(id)}>
          Remove
        </button>
      </div>
    </section>
  );
};

export default BuildItem;
