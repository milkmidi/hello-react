const ProductItem = (props) => {
  // prettier-ignore
  const {
    id,
    img,
    title,
    price,
    onAddToCart,
  } = props;

  return (
    <section className="px-0" data-name="ProductItem">
      <img src={img} alt={title} />
      <div className="">
        <div className="flex">
          <div>{title}</div>
          <div>${price}</div>
        </div>
        <button
          className="my-btn"
          onClick={() => {
            onAddToCart(id);
          }}
        >
          Add
        </button>
      </div>
    </section>
  );
};
export default ProductItem;
